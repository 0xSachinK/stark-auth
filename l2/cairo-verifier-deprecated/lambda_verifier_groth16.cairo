// This is a template for cairo based on verifier_groth16.sol.ejs on snarkjs/templates
%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.bool import FALSE, TRUE
from starkware.cairo.common.math import assert_nn, unsigned_div_rem
from starkware.cairo.common.alloc import alloc
from alt_bn128_g1 import G1Point, ec_add, ec_mul
from alt_bn128_g2 import G2Point
from alt_bn128_pair import pairing
from alt_bn128_field import FQ12, is_zero, FQ2, fq12_diff, fq12_eq_zero, fq12_mul, fq12_one
from bigint import BigInt3

struct VerifyingKey {
    alfa1: G1Point,
    beta2: G2Point,
    gamma2: G2Point,
    delta2: G2Point,
    IC: G1Point*,
    IC_length: felt,
}

struct Proof {
    A: G1Point,
    B: G2Point,
    C: G1Point,
}

// Auxiliary functions (Builders)
// Creates a G1Point from the received felts: G1Point(x,y)
func BuildG1Point{range_check_ptr: felt}(
    x1: felt, x2: felt, x3: felt, y1: felt, y2: felt, y3: felt
) -> (r: G1Point) {
    alloc_locals;
    let X: BigInt3 = BigInt3(x1, x2, x3);
    let Y: BigInt3 = BigInt3(y1, y2, y3);

    return (G1Point(X, Y),);
}

// Creates a G2Point from the received felts: G2Point([a,b],[c,d])
func BuildG2Point{range_check_ptr: felt}(
    a1: felt,
    a2: felt,
    a3: felt,
    b1: felt,
    b2: felt,
    b3: felt,
    c1: felt,
    c2: felt,
    c3: felt,
    d1: felt,
    d2: felt,
    d3: felt,
) -> (r: G2Point) {
    alloc_locals;
    let A: BigInt3 = BigInt3(a1, a2, a3);
    let B: BigInt3 = BigInt3(b1, b2, b3);
    let C: BigInt3 = BigInt3(c1, c2, c3);
    let D: BigInt3 = BigInt3(d1, d2, d3);

    let x: FQ2 = FQ2(B, A);
    let y: FQ2 = FQ2(D, C);

    return (G2Point(x, y),);
}

// Returns negated BigInt3
func negateBigInt3{range_check_ptr: felt}(n: BigInt3) -> (r: BigInt3) {
    let (_, nd0) = unsigned_div_rem(n.d0, 60193888514187762220203335);
    let d0 = 60193888514187762220203335 - nd0;
    let (_, nd1) = unsigned_div_rem(n.d1, 104997207448309323063248289);
    let d1 = 104997207448309323063248289 - nd1;
    let (_, nd2) = unsigned_div_rem(n.d2, 3656382694611191768777987);
    let d2 = 3656382694611191768777987 - nd2;

    return (BigInt3(d0, d1, d2),);
}

// Returns negated G1Point(addition of a G1Point and a negated G1Point should be zero)
func negate{range_check_ptr: felt}(p: G1Point) -> (r: G1Point) {
    alloc_locals;
    let x_is_zero: felt = is_zero(p.x);
    if (x_is_zero == TRUE) {
        let y_is_zero: felt = is_zero(p.y);
        if (y_is_zero == TRUE) {
            return (G1Point(BigInt3(0, 0, 0), BigInt3(0, 0, 0)),);
        }
    }

    let neg_y: BigInt3 = negateBigInt3(p.y);
    return (G1Point(p.x, neg_y),);
}

// Computes the pairing for each pair of points in p1 and p2, multiplies each new result and returns the final result
// pairing_result should iniially be an fq12_one
func compute_pairings{range_check_ptr: felt}(
    p1: G1Point*, p2: G2Point*, pairing_result: FQ12, position: felt, length: felt
) -> (result: FQ12) {
    if (position != length) {
        let current_pairing_result: FQ12 = pairing(p2[position], p1[position]);
        let mul_result: FQ12 = fq12_mul(pairing_result, current_pairing_result);

        return compute_pairings(p1, p2, mul_result, position + 1, length);
    }
    return (pairing_result,);
}

// Returns the result of computing the pairing check
func pairings{range_check_ptr: felt}(p1: G1Point*, p2: G2Point*, length: felt) -> (r: felt) {
    alloc_locals;
    assert_nn(length);
    let initial_result: FQ12 = fq12_one();
    let pairing_result: FQ12 = compute_pairings(p1, p2, initial_result, 0, length);

    let one: FQ12 = fq12_one();
    let diff: FQ12 = fq12_diff(pairing_result, one);
    let result: felt = fq12_eq_zero(diff);
    return (result,);
}

// Pairing check for four pairs
func pairingProd4{range_check_ptr: felt}(
    a1: G1Point,
    a2: G2Point,
    b1: G1Point,
    b2: G2Point,
    c1: G1Point,
    c2: G2Point,
    d1: G1Point,
    d2: G2Point,
) -> (r: felt) {
    let (p1: G1Point*) = alloc();
    let (p2: G2Point*) = alloc();

    assert p1[0] = a1;
    assert p1[1] = b1;
    assert p1[2] = c1;
    assert p1[3] = d1;

    assert p2[0] = a2;
    assert p2[1] = b2;
    assert p2[2] = c2;
    assert p2[3] = d2;

    return pairings(p1, p2, 4);
}

func verifyingKey{range_check_ptr: felt}() -> (vk: VerifyingKey) {
    alloc_locals;
    
    let (alfa1) = BuildG1Point(53666063588319487914275554, 64470306567858184493461189, 3423008562371424102389577, 42326606559964516684994854, 59844235338681679436589156, 1567490533502218024656270);
    let (beta2) = BuildG2Point(59407923906492817597118379, 31189751711002576131392385, 1065032315271934845078797, 61498394794107645237331468, 28873173543407389035895119, 710424681788617931816088, 50801629139999042506378952, 18479592988890305753192699, 1754877610169918127543058, 70180114232786617425413799, 40042808399065597643264429, 3649499028137659882643294);
    let (gamma2) = BuildG2Point(37301332318871981678327533, 1933688095072267321168861, 1813645754675075253282464, 50657168248156029357068994, 75996009454876762764004566, 1931027739743020521039371, 4625471277591146859756970, 7264017464802134638568497, 1419180249680038923119287, 62330281573273320105875291, 46796958261627355650117058, 681950549513863929186793);
    let (delta2) = BuildG2Point(31178712339293260380181244, 63439659189862274396157787, 3540716000943430803803625, 74954422439556263430246624, 47375761638778508861846459, 1675478964853989269716793, 57879802127754562852850479, 56534611676593882707141012, 1735338842905097164331441, 19301214777183083579723761, 62998910618769555915112609, 1807485628763342115208426);

    let IC_length = 9;
    let IC: G1Point* = alloc();

    let (ic0) = BuildG1Point(35205606764360703108452504, 35807427851917447211331978, 2541614671906707654198046, 50362210225694647157943288, 14718001703126130910817592, 3333447852037469707996321);
    assert IC[0] = ic0;
    let (ic1) = BuildG1Point(51068812027496554965983314, 24316129060469779278914104, 1411085154191492063971786, 33135992435921418551347674, 40978822072111943569622306, 1673937135557643675290861);
    assert IC[1] = ic1;
    let (ic2) = BuildG1Point(52010952454008382547546727, 14450216337325891193409969, 1619365638610641490864734, 64586253786755043764299174, 73660672100166909684249629, 2461018129819155914843071);
    assert IC[2] = ic2;
    let (ic3) = BuildG1Point(58990754497469997166573349, 38175955414365080022711204, 839941071786807547797984, 6694918217075457450692708, 10475815961733656336929507, 311760680488649184382945);
    assert IC[3] = ic3;
    let (ic4) = BuildG1Point(51157289483725867573592748, 58246770772877725469871905, 3563487065543922379619645, 74094150473161865943662091, 23185766431513797282794677, 3079279281876702536335646);
    assert IC[4] = ic4;
    let (ic5) = BuildG1Point(7735138966843698944542477, 26932552658091864238388185, 839946364024294667438826, 36054346755047676250357389, 36584451247413880600190807, 909814877728309729552590);
    assert IC[5] = ic5;
    let (ic6) = BuildG1Point(46597423452268805027456978, 63830988109285882546614676, 2433150993796737224428386, 37365702530469516725537965, 13880493646691026175888527, 2234119746133175760014278);
    assert IC[6] = ic6;
    let (ic7) = BuildG1Point(73807317002596571775644861, 7793411529180669990629710, 74625319362176642086117, 74173850768196862640763854, 62231127672429731556812749, 1973976239437225995252308);
    assert IC[7] = ic7;
    let (ic8) = BuildG1Point(29394058596912797857010303, 7357731594404924582790750, 2819020192102132359370578, 31354323342126842570542610, 49993795915615890656971955, 1997692455564314735982218);
    assert IC[8] = ic8;
    
    return (vk=VerifyingKey(alfa1, beta2, gamma2, delta2, IC, IC_length));
}

// Computes the linear combination for vk_x
func vk_x_linear_combination{range_check_ptr: felt}(
    vk_x: G1Point, input: BigInt3*, position: felt, length: felt, IC: G1Point*
) -> (result_vk_x: G1Point) {
    if (position != length) {
        let mul_result: G1Point = ec_mul(IC[position + 1], input[position]);
        let add_result: G1Point = ec_add(vk_x, mul_result);

        return vk_x_linear_combination(add_result, input, position + 1, length, IC);
    }
    return (vk_x,);
}

func verify{range_check_ptr: felt}(input: BigInt3*, proof: Proof, input_len: felt) -> (r: felt) {
    alloc_locals;
    let vk: VerifyingKey = verifyingKey();
    assert input_len = vk.IC_length + 1;
    let initial_vk_x: G1Point = BuildG1Point(0, 0, 0, 0, 0, 0);
    let computed_vk_x: G1Point = vk_x_linear_combination(
        initial_vk_x, input, 0, vk.IC_length - 1, vk.IC
    );
    let vk_x: G1Point = ec_add(computed_vk_x, vk.IC[0]);

    let neg_proof_A: G1Point = negate(proof.A);
    return pairingProd4(
        neg_proof_A, proof.B, vk.alfa1, vk.beta2, vk_x, vk.gamma2, proof.C, vk.delta2
    );
}

// Fills the empty array output with the BigInt3 version of each number in input
func getBigInt3array{range_check_ptr: felt}(
    input: felt*, output: BigInt3*, input_position, output_position, length
) {
    if (output_position != length) {
        let big_int: BigInt3 = BigInt3(
            input[input_position], input[input_position + 1], input[input_position + 2]
        );
        assert output[output_position] = big_int;

        getBigInt3array(input, output, input_position + 3, output_position + 1, length);
        return ();
    }
    return ();
}

// a_len, b1_len, b2_len and c_len are all 6, input_len would be 3 * amount of inputs
@external
func verifyProof{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr: felt}(
    a_len: felt,
    a: felt*,
    b1_len: felt,
    b1: felt*,
    b2_len: felt,
    b2: felt*,
    c_len: felt,
    c: felt*,
    input_len: felt,
    input: felt*,
) -> (r: felt) {
    alloc_locals;
    let A: G1Point = BuildG1Point(a[0], a[1], a[2], a[3], a[4], a[5]);
    let B: G2Point = BuildG2Point(
        b1[0], b1[1], b1[2], b1[3], b1[4], b1[5], b2[0], b2[1], b2[2], b2[3], b2[4], b2[5]
    );
    let C: G1Point = BuildG1Point(c[0], c[1], c[2], c[3], c[4], c[5]);

    let (big_input: BigInt3*) = alloc();
    getBigInt3array(input, big_input, 0, 0, input_len / 3);

    let proof: Proof = Proof(A, B, C);
    let result: felt = verify(big_input, proof, input_len);
    return (result,);
}
