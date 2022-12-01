%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin, SignatureBuiltin, BitwiseBuiltin
from starkware.cairo.common.alloc import alloc
from starkware.cairo.common.uint256 import Uint256, uint256_sub, uint256_unsigned_div_rem, assert_uint256_lt
from starkware.cairo.common.bool import TRUE, FALSE

struct G1Point {
    X: Uint256,
    Y: Uint256,
}

struct G2Point {
    X0: Uint256,
    X1: Uint256,
    Y0: Uint256,
    Y1: Uint256,
}

func P1{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (g1_point: G1Point){
    return (g1_point=G1Point(X=Uint256(1, 0), Y=Uint256(2, 0)));
}

func P2{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (g2_point: G2Point){
    return (g2_point=G2Point(X0=Uint256(321228122123261106059779968529748660930, 33970999254487337296367544696982691109),X1=Uint256(137259073930222615551684094724674877165, 31905993534909183259390360115767690361),Y0=Uint256(250285283385540557223862098795094513499, 11997000940139619428152682118654997397),Y1=Uint256(302824638645981006498739523792345398698, 24966482982931995192542807552294600847)));
}


func negate{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(p: G1Point) -> (r: G1Point){
    alloc_locals;
    let q: Uint256 = Uint256(201385395114098847380338600778089168199, 64323764613183177041862057485226039389);  // Note this is bigger and would need to be broken
    if (p.X.low == 0) { 
        if (p.Y.low == 0) {
            return (r=G1Point(X=Uint256(0, 0), Y=Uint256(0, 0)));
        }
    }
    let (_, r) = uint256_unsigned_div_rem(p.Y, q);
    let (y, ) = uint256_sub(q, r);
    return (r=G1Point(X=p.X, Y=y));
}

func addition{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(p1: G1Point, p2: G1Point) -> (r: G1Point){
    alloc_locals;
    let input: Uint256* = alloc();
    assert input[0] = p1.X;
    assert input[1] = p1.Y;
    assert input[2] = p2.X;
    assert input[3] = p2.Y;
    
    // assembly magic

    return (r=G1Point(X=Uint256(0, 0), Y=Uint256(0, 0)));
}

func scalar_mul{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(p: G1Point, s: Uint256) -> (r: G1Point) {
    alloc_locals;
    let input: Uint256* = alloc();
    assert input[0] = p.X;
    assert input[1] = p.Y;
    assert input[2] = s;
    
    // assembly magic
    return (r=G1Point(X=Uint256(0, 0), Y=Uint256(0, 0)));
}

func pairing{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(p1_len: felt, p1: G1Point*, p2_len: felt, p2: G2Point*) -> felt {
    alloc_locals;
    with_attr error_message("pairing-lengths-failed"){
        assert p1_len = p2_len;
    }

    let elements = p1_len;
    let input_len = elements * 6;
    let input: Uint256* = alloc();
    pairing_for_loop(input_len, input, p1_len, p1, p2_len, p2);

    // assembly magic
    return FALSE;
}

func pairing_for_loop{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(input_len: felt, input: Uint256*, p1_len: felt, p1: G1Point*, p2_len: felt, p2: G2Point*){
    alloc_locals;
    if (input_len == 0){
        return ();
    }
    let i = 0;
    assert input[i * 6 + 0] = p1[i].X;
    assert input[i * 6 + 1] = p1[i].Y;
    assert input[i * 6 + 2] = p2[i].X0;
    assert input[i * 6 + 3] = p2[i].X1;
    assert input[i * 6 + 4] = p2[i].Y0;
    assert input[i * 6 + 5] = p2[i].Y1;
    pairing_for_loop(input_len - 1, &input[1], p1_len - 1, &p1[1], p2_len - 1, &p2[1]);
    return ();
}

func pairingProd2{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(a1: G1Point, a2: G2Point, b1: G1Point, b2: G2Point) -> felt {
    alloc_locals;
    let p1_len = 2;
    let p1: G1Point* = alloc();
    assert p1[0] = a1;
    assert p1[1] = b1;

    let p2_len = 2;
    let p2: G2Point* = alloc();
    assert p2[0] = a2;
    assert p2[1] = b2;

    let res = pairing(p1_len, p1, p2_len, p2);
    return res;
}


func pairingProd3{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(a1: G1Point, a2: G2Point, b1: G1Point, b2: G2Point, c1: G1Point, c2: G2Point) -> felt {
    alloc_locals;
    let p1_len = 3;
    let p1: G1Point* = alloc();
    assert p1[0] = a1;
    assert p1[1] = b1;
    assert p1[2] = c1;

    let p2_len = 3;
    let p2: G2Point* = alloc();
    assert p2[0] = a2;
    assert p2[1] = b2;
    assert p2[2] = c2;

    let res = pairing(p1_len, p1, p2_len, p2);
    return res;
}

func pairingProd4{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(a1: G1Point, a2: G2Point, b1: G1Point, b2: G2Point, c1: G1Point, c2: G2Point, d1: G1Point, d2: G2Point) -> felt {
    alloc_locals;
    let p1_len = 4;
    let p1: G1Point* = alloc();
    assert p1[0] = a1;
    assert p1[1] = b1;
    assert p1[2] = c1;
    assert p1[3] = d1;

    let p2_len = 4;
    let p2: G2Point* = alloc();
    assert p2[0] = a2;
    assert p2[1] = b2;
    assert p2[2] = c2;
    assert p2[3] = d2;

    let res = pairing(p1_len, p1, p2_len, p2);
    return res;
}


struct VerifiyingKey {
    alfa1: G1Point,
    beta2: G2Point,
    gamma2: G2Point,
    delta2: G2Point,
    IC_len: felt,
    IC: G1Point*,
}

struct Proof {
    A: G1Point,
    B: G2Point,
    C: G1Point,
}

func verifiyingKey{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (vk: VerifiyingKey) {
    // might have to modify the logic, to break it down, such that we are able to assign the Uint256 properly
    // javascript stuff
    alloc_locals;

    let alfa1 = G1Point(Uint256(292316982885862187200971972551161803490, 60218203460867042200409670635908013317), Uint256(274534969597031096566855436675016628518, 27575585088231910438340217296356631365));
    let beta2 = G2Point(Uint256(167267485537044468922766279856992663467, 18736246633578993689625646650990330244), Uint256(281155099622228959178695378162007868940, 12497923172570402005767198512910954882), Uint256(227286928645559320667881745681509205671, 64202665871913095093961310152849067068), Uint256(330431114871043992699879553372582366920, 30872133403289335237816287099513442706));
    let gamma2 = G2Point(Uint256(137259073930222615551684094724674877165, 31905993534909183259390360115767690361), Uint256(321228122123261106059779968529748660930, 33970999254487337296367544696982691109), Uint256(250285283385540557223862098795094513499, 11997000940139619428152682118654997397), Uint256(302824638645981006498739523792345398698, 24966482982931995192542807552294600847));
    let delta2 = G2Point(Uint256(129941081305269202895825298138783733163, 819017764861569194999527641703415212), Uint256(159882052243702885745950614249887489217, 59130279354544377060133089139938300325), Uint256(100448529841285138788877427002178417054, 60781510054848043980204370134659238727), Uint256(14321663001538680588825441222365753433, 513338242781549830188166334886951920));

    let IC_len = 9;
    let IC: G1Point* = alloc();

    assert IC[0] = G1Point(Uint256(280991737969285133448145616402756407448, 44712558161400132967684041379082889994), Uint256(182928998954705746518909880324672875512, 58642634782402065868533224244556735955));
    assert IC[1] = G1Point(Uint256(339909114217777502778024107718697771090, 24824072557050166215484875106414484006), Uint256(114104454263718270534834038126786955738, 29448213515386873070368741611370272046));
    assert IC[2] = G1Point(Uint256(213255096257225927841135459275723493991, 28488181588372930891139957112370824911), Uint256(234715155217948275545058482398146422182, 43294688798459318470967111705373592569));
    assert IC[3] = G1Point(Uint256(48788770843129064428834241261834549029, 14776399601219693371548877676226553465), Uint256(87893558720196366850227829412213411940, 5484551892490049724996908223247663606));
    assert IC[4] = G1Point(Uint256(216056631921287124565819132501236925100, 62689527423918715175030273750938505648), Uint256(205158766428237819562773075060968996363, 54171254009490648669724067987872984237));
    assert IC[5] = G1Point(Uint256(250597937483973335272824757336342136589, 14776492703246158012895048686352382554), Uint256(78247715257761229325856463969923563149, 16005632594974019837079473327888981638));
    assert IC[6] = G1Point(Uint256(195001697709429883258737851039731607506, 42804444957027881985743805265493566157), Uint256(193959839033207114609862735748104539309, 39303050219478271385113678944561029062));
    assert IC[7] = G1Point(Uint256(159428133575979996447349665712830821565, 1312822501843371037224837788675596303), Uint256(127648515670495663587039030597439566798, 34726557251436343683357563220134737985));
    assert IC[8] = G1Point(Uint256(217667797913503318451703760964287386239, 49592727682426044315074363650266067992), Uint256(145665323807948463319988616336663580178, 35143777337813667904284686429207321380));
    return (vk=VerifiyingKey(alfa1, beta2, gamma2, delta2, IC_len, IC));
} 

func verify{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(input_len: felt, input: Uint256*, proof: Proof) -> felt {
    alloc_locals;
    let vk: VerifiyingKey = verifiyingKey();
    with_attr error_message("verifier-bad-input"){
        assert input_len = vk.IC_len;
    }
    let vk_x: G1Point = G1Point(Uint256(0, 0), Uint256(0, 0));

    veriy_for_loop(input_len, input, vk_x, vk);

    let (vk_x, ) = addition(vk_x, vk.IC[0]);
    let (a_neg) = negate(proof.A);
    let res = pairingProd4(a_neg, proof.B, vk.alfa1, vk.beta2, vk_x, vk.gamma2, proof.C, vk.delta2);
    if (res == FALSE) {
        return TRUE;
    }
    return FALSE;
}

func veriy_for_loop{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(input_len: felt, input: Uint256*, vk_x: G1Point, vk: VerifiyingKey){
    alloc_locals;
    if (input_len == 0){
        return ();
    }
    let snark_scalar_field: Uint256 = Uint256(53438638232309528389504892708671455233, 64323764613183177041862057485226039389);   // would need to break this
    let i = 0;
    with_attr error_message("verifier-gte-snark-scalar-field"){
        assert_uint256_lt(input[i], snark_scalar_field);
    }
    let (res, ) = scalar_mul(vk.IC[i + 1], input[i]);
    let (vk_x, ) = addition(vk_x, res);
    veriy_for_loop(input_len - 1, &input[1], vk_x, vk);
    return ();
}


func verifyProof{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(a_len: felt, a: Uint256*, b_len: felt, b: Uint256*, c_len: felt, c: Uint256*, input_len: felt, input: Uint256*) -> felt {
    alloc_locals;
    with_attr error_message("invalid input lengths"){
        assert a_len = 2;
        assert b_len = 4;
        assert c_len = 2;
    }
    let A = G1Point(a[0], a[1]);
    let B = G2Point(b[0], b[1], b[2], b[3]);
    let C = G1Point(c[0], c[1]);
    let proof = Proof(A, B, C);
    let is_valid = verify(input_len, input, proof);
    return is_valid;
}