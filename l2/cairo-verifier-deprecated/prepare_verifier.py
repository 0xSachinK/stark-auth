import json

with open("verification_key.json", "r") as f:
    data = json.loads(f.read())

def split_to_array(_in, n, k):
    _in = int(_in)
    _in_copy = _in
    words = [0 for _ in range(k)]
    for i in range(k):
        words[i] = _in % 2 ** n
        _in = _in // 2 ** n     # // is used to get an integer back from division of two ints
    if _in != 0:
        raise Exception(f'Number {_in_copy} does not fit in {k * n} bits')
    return words        # 0th term is lowest significant bit

def split_to_uint256(num):
    words = split_to_array(num, n=128, k=2)
    low = words[0]
    high = words[1]
    return low, high

def split_to_bigint3(num):
    words = split_to_array(num, n=86, k=3)
    return words[0], words[1], words[2]

def split_nums_to_bigint3(nums):
    out = []
    for num in nums:    
        out.extend(split_to_bigint3(num))
    return tuple(out)

alpha1 = data['vk_alpha_1']
beta2 = data['vk_beta_2']
gamma2 = data['vk_gamma_2']
delta2 = data['vk_delta_2']
IC = data['IC']

out_string = f"""
let alfa1 = G1Point(Uint256{split_to_uint256(alpha1[0])}, Uint256{split_to_uint256(alpha1[1])});
let beta2 = G2Point(Uint256{split_to_uint256(beta2[0][0])}, Uint256{split_to_uint256(beta2[0][1])}, Uint256{split_to_uint256(beta2[1][1])}, Uint256{split_to_uint256(beta2[1][0])});
let gamma2 = G2Point(Uint256{split_to_uint256(gamma2[0][0])}, Uint256{split_to_uint256(gamma2[0][1])}, Uint256{split_to_uint256(gamma2[1][1])}, Uint256{split_to_uint256(gamma2[1][0])});
let delta2 = G2Point(Uint256{split_to_uint256(delta2[0][0])}, Uint256{split_to_uint256(delta2[0][1])}, Uint256{split_to_uint256(delta2[1][1])}, Uint256{split_to_uint256(delta2[1][0])});

let IC_len = {len(IC)};
let IC: G1Point* = alloc();
"""

for i, ic in enumerate(IC):
    out_string += f"\nassert IC[{i}] = G1Point(Uint256{split_to_uint256(ic[0])}, Uint256{split_to_uint256(ic[1])});"

print(out_string)

out_string = f"""
let (alfa1) = BuildG1Point{split_nums_to_bigint3(alpha1[:-1])};
let (beta2) = BuildG2Point{split_nums_to_bigint3([*beta2[0], *beta2[1]])};
let (gamma2) = BuildG2Point{split_nums_to_bigint3([*gamma2[0], *gamma2[1]])};
let (delta2) = BuildG2Point{split_nums_to_bigint3([*delta2[0], *delta2[1]])};

let IC_length = {len(IC)};
let IC: G1Point* = alloc();
"""

for i, ic in enumerate(IC):
    out_string += f"""
    \nlet (ic{i}) = BuildG1Point{split_nums_to_bigint3(ic[:-1])};
    \nassert IC[{i}] = ic;
    """

print('\n'*3)
print(out_string)