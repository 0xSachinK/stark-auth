import json

password = "sachinkr12345678"
calldata = [        
    "2806752771329879808604343318731674196484924909091370981982786762941452330983", # transfer calldata recipient
    "10000", # transfer calldata amount low
    "0", # transfer calldata amount high    
]
call_array = [
    [
        "159707947995249021625440365289670166666892266109381225273086299925265990694",  # to
        "232670485425082704932579856502088130646006032362877466777181098476241604910", # from starkware.starknet.compiler.compile.get_selector_from_name('transfer')
        "0",
        "3"   # len(calldata)
    ]
]

assert len(password) == 16
assert len(calldata) == 3
assert len(call_array) == 1
assert len(call_array[0]) == 4


password_ascii_encoded = [
    str(ord(c)) for c in password
]

input_dict = {
    "password": password_ascii_encoded,
    "calldata": calldata,
    "call_array": call_array 
}

with open("input.json", "w") as f:
    f.write(json.dumps(input_dict))