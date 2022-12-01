pragma circom 2.1.0;

include "../node_modules/circomlib/circuits/poseidon.circom";
include "../node_modules/circomlib/circuits/bitify.circom";

template Auth () {
    signal input password[16];
    signal output hash;
    
    // These signals don't take part in computation
    signal input calldata[3];      // Fixed calldata array of len 2
    signal input call_array[1][4];     // Fixed calldata array of len 1

    component poseidon = Poseidon(16);

    for (var i = 0; i < 16; i++) {
        poseidon.inputs[i] <== password[i];
    }

    // 2 ** 254    = 28948022309329048855892746252171976963317496166410141009864396001978282409984
    // prime field = 21888242871839275222246405745257275088548364400416034343698204186575808495617

    component num2Bits = Num2Bits(254);
    component bits2Num = Bits2Num(251);     // cairo's prime field max
    
    num2Bits.in <== poseidon.out;
    for(var i = 0; i < 251; i++) {
        bits2Num.in[i] <== num2Bits.out[i];
    }

    hash <== bits2Num.out;      // truncated hash

    // Add constraints to tie the proof to a specific calldata and nonce to prevent
    // pairing with malicious calldata attacks and to prevent replay attacks.
    // Squares are used to prevent optimizer from removing those constraints.
    signal calldata_squared[3];
    signal call_array_squared[1][4];

    for (var i = 0; i < 3; i++) {
        calldata_squared[i] <== calldata[i] * calldata[i];
    }
    
    for (var i = 0; i < 1; i++) {
        for (var j = 0; j < 4; j++) {
            call_array_squared[i][j] <== call_array[i][j] * call_array[i][j];
        }
    }
}

component main { public [calldata, call_array] }= Auth();