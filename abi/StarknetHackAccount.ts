const contract = {
    "abi": [
        {
            "members": [
                {
                    "name": "to",
                    "offset": 0,
                    "type": "felt"
                },
                {
                    "name": "selector",
                    "offset": 1,
                    "type": "felt"
                },
                {
                    "name": "data_offset",
                    "offset": 2,
                    "type": "felt"
                },
                {
                    "name": "data_len",
                    "offset": 3,
                    "type": "felt"
                }
            ],
            "name": "AccountCallArray",
            "size": 4,
            "type": "struct"
        },
        {
            "inputs": [
                {
                    "name": "credential_hash",
                    "type": "felt"
                },
                {
                    "name": "l1_verifier_address",
                    "type": "felt"
                }
            ],
            "name": "constructor",
            "outputs": [],
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "get_credential_hash",
            "outputs": [
                {
                    "name": "credential_hash",
                    "type": "felt"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "get_l1_verifier_address",
            "outputs": [
                {
                    "name": "l1_verifier_address",
                    "type": "felt"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "l1_caller",
                    "type": "felt"
                }
            ],
            "name": "is_valid_l1_caller",
            "outputs": [
                {
                    "name": "is_valid",
                    "type": "felt"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "credential_hash",
                    "type": "felt"
                }
            ],
            "name": "is_valid_credential_hash",
            "outputs": [
                {
                    "name": "is_valid",
                    "type": "felt"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "from_address",
                    "type": "felt"
                },
                {
                    "name": "credential_hash",
                    "type": "felt"
                },
                {
                    "name": "transfer_calldata_recipient",
                    "type": "felt"
                },
                {
                    "name": "transfer_calldata_amount_low",
                    "type": "felt"
                },
                {
                    "name": "transfer_calldata_amount_high",
                    "type": "felt"
                },
                {
                    "name": "call_array_to",
                    "type": "felt"
                },
                {
                    "name": "call_array_selector",
                    "type": "felt"
                },
                {
                    "name": "call_array_data_offset",
                    "type": "felt"
                },
                {
                    "name": "call_array_data_len",
                    "type": "felt"
                }
            ],
            "name": "execute_from_l1",
            "outputs": [],
            "type": "l1_handler"
        },
        {
            "inputs": [
                {
                    "name": "call_array_len",
                    "type": "felt"
                },
                {
                    "name": "call_array",
                    "type": "AccountCallArray*"
                },
                {
                    "name": "calldata_len",
                    "type": "felt"
                },
                {
                    "name": "calldata",
                    "type": "felt*"
                }
            ],
            "name": "__execute__",
            "outputs": [
                {
                    "name": "response_len",
                    "type": "felt"
                },
                {
                    "name": "response",
                    "type": "felt*"
                }
            ],
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "call_array_len",
                    "type": "felt"
                },
                {
                    "name": "call_array",
                    "type": "AccountCallArray*"
                },
                {
                    "name": "calldata_len",
                    "type": "felt"
                },
                {
                    "name": "calldata",
                    "type": "felt*"
                }
            ],
            "name": "__validate__",
            "outputs": [],
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "class_hash",
                    "type": "felt"
                }
            ],
            "name": "__validate_declare__",
            "outputs": [],
            "type": "function"
        }
    ],
    "entry_points_by_type": {
        "CONSTRUCTOR": [
            {
                "offset": "0xd1",
                "selector": "0x28ffe4ff0f226a9107253e17a904099aa4f63a02a5621de0576e5aa71bc5194"
            }
        ],
        "EXTERNAL": [
            {
                "offset": "0x207",
                "selector": "0x15d40a3d6ca2ac30f4031e42be28da9b056fef9bb7357ac5e85627ee876e5ad"
            },
            {
                "offset": "0x23b",
                "selector": "0x162da33a4585851fe8d3af3c2a9c60b557814e221e0d4f30ff0b2189d9c7775"
            },
            {
                "offset": "0x179",
                "selector": "0x1ad090894c3ebab24ff9f7637ea47d3f808f96c30e17d1fcc49185a2101e8d7"
            },
            {
                "offset": "0x26a",
                "selector": "0x289da278a8dc833409cabfdad1581e8e7d40e42dcaed693fa4008dcdb4963b3"
            },
            {
                "offset": "0x115",
                "selector": "0x39623a2d7cb156f508b9a849db2c12a0d872ec8f3244d2be8cf8e500fafe13f"
            },
            {
                "offset": "0x145",
                "selector": "0x3b2be6af087327f759763fb25f0e1e635cb340fa82c19b44ce7a4cda08bc2a5"
            },
            {
                "offset": "0xf5",
                "selector": "0x3c34ca0da9ff1b7c4230c261fb60a1024ffb08812e9c4f0fa883257ac7fa586"
            }
        ],
        "L1_HANDLER": [
            {
                "offset": "0x1ca",
                "selector": "0x2fbed51e345c1fafbf28c451a21204ee1c1b4065ee5c22128ffde8830860b69"
            }
        ]
    },
    "program": {
        "attributes": [
            {
                "accessible_scopes": [
                    "__main__",
                    "__main__",
                    "__main__.constructor"
                ],
                "end_pc": 199,
                "flow_tracking_data": {
                    "ap_tracking": {
                        "group": 21,
                        "offset": 0
                    },
                    "reference_ids": {
                        "__main__.constructor.credential_hash": 117,
                        "__main__.constructor.l1_verifier_address": 118,
                        "__main__.constructor.pedersen_ptr": 120,
                        "__main__.constructor.range_check_ptr": 121,
                        "__main__.constructor.syscall_ptr": 119
                    }
                },
                "name": "error_message",
                "start_pc": 196,
                "value": "Credential hash is zero"
            },
            {
                "accessible_scopes": [
                    "__main__",
                    "__main__",
                    "__main__.execute_from_l1"
                ],
                "end_pc": 409,
                "flow_tracking_data": {
                    "ap_tracking": {
                        "group": 35,
                        "offset": 4
                    },
                    "reference_ids": {
                        "__main__.execute_from_l1.bitwise_ptr": 281,
                        "__main__.execute_from_l1.call_array_data_len": 276,
                        "__main__.execute_from_l1.call_array_data_offset": 275,
                        "__main__.execute_from_l1.call_array_selector": 274,
                        "__main__.execute_from_l1.call_array_to": 273,
                        "__main__.execute_from_l1.credential_hash": 269,
                        "__main__.execute_from_l1.ecdsa_ptr": 280,
                        "__main__.execute_from_l1.from_address": 268,
                        "__main__.execute_from_l1.pedersen_ptr": 278,
                        "__main__.execute_from_l1.range_check_ptr": 279,
                        "__main__.execute_from_l1.syscall_ptr": 277,
                        "__main__.execute_from_l1.transfer_calldata_amount_high": 272,
                        "__main__.execute_from_l1.transfer_calldata_amount_low": 271,
                        "__main__.execute_from_l1.transfer_calldata_recipient": 270
                    }
                },
                "name": "error_message",
                "start_pc": 400,
                "value": "Account: Invalid L1 caller"
            },
            {
                "accessible_scopes": [
                    "__main__",
                    "__main__",
                    "__main__.execute_from_l1"
                ],
                "end_pc": 421,
                "flow_tracking_data": {
                    "ap_tracking": {
                        "group": 35,
                        "offset": 45
                    },
                    "reference_ids": {
                        "__main__.execute_from_l1.bitwise_ptr": 281,
                        "__main__.execute_from_l1.call_array_data_len": 276,
                        "__main__.execute_from_l1.call_array_data_offset": 275,
                        "__main__.execute_from_l1.call_array_selector": 274,
                        "__main__.execute_from_l1.call_array_to": 273,
                        "__main__.execute_from_l1.credential_hash": 269,
                        "__main__.execute_from_l1.ecdsa_ptr": 285,
                        "__main__.execute_from_l1.from_address": 268,
                        "__main__.execute_from_l1.is_valid": 286,
                        "__main__.execute_from_l1.pedersen_ptr": 283,
                        "__main__.execute_from_l1.range_check_ptr": 284,
                        "__main__.execute_from_l1.syscall_ptr": 282,
                        "__main__.execute_from_l1.transfer_calldata_amount_high": 272,
                        "__main__.execute_from_l1.transfer_calldata_amount_low": 271,
                        "__main__.execute_from_l1.transfer_calldata_recipient": 270
                    }
                },
                "name": "error_message",
                "start_pc": 409,
                "value": "Account: Invalid credential hash"
            },
            {
                "accessible_scopes": [
                    "__main__",
                    "__main__",
                    "__main__.__execute__"
                ],
                "end_pc": 490,
                "flow_tracking_data": {
                    "ap_tracking": {
                        "group": 40,
                        "offset": 0
                    },
                    "reference_ids": {
                        "__main__.__execute__.call_array": 341,
                        "__main__.__execute__.call_array_len": 340,
                        "__main__.__execute__.calldata": 343,
                        "__main__.__execute__.calldata_len": 342,
                        "__main__.__execute__.ecdsa_ptr": 347,
                        "__main__.__execute__.pedersen_ptr": 345,
                        "__main__.__execute__.range_check_ptr": 346,
                        "__main__.__execute__.syscall_ptr": 344
                    }
                },
                "name": "error_message",
                "start_pc": 490,
                "value": "Account: Direct execution not allowed"
            },
            {
                "accessible_scopes": [
                    "__main__",
                    "__main__",
                    "__main__.__validate__"
                ],
                "end_pc": 566,
                "flow_tracking_data": {
                    "ap_tracking": {
                        "group": 45,
                        "offset": 0
                    },
                    "reference_ids": {
                        "__main__.__validate__.call_array": 398,
                        "__main__.__validate__.call_array_len": 397,
                        "__main__.__validate__.calldata": 400,
                        "__main__.__validate__.calldata_len": 399,
                        "__main__.__validate__.ecdsa_ptr": 404,
                        "__main__.__validate__.pedersen_ptr": 402,
                        "__main__.__validate__.range_check_ptr": 403,
                        "__main__.__validate__.syscall_ptr": 401
                    }
                },
                "name": "error_message",
                "start_pc": 566,
                "value": "Account: Direct execution not allowed"
            }
        ],
        "builtins": [
            "pedersen",
            "range_check",
            "ecdsa",
            "bitwise"
        ],
        "compiler_version": "0.10.1",
        "data": [
            "0x40780017fff7fff",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x20780017fff7ffd",
            "0x3",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480080007fff8000",
            "0x400080007ffd7fff",
            "0x482480017ffd8001",
            "0x1",
            "0x482480017ffd8001",
            "0x1",
            "0xa0680017fff7ffe",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffb",
            "0x402a7ffc7ffd7fff",
            "0x208b7fff7fff7ffe",
            "0x20780017fff7ffd",
            "0x4",
            "0x400780017fff7ffd",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x48297ffd80007ffc",
            "0x20680017fff7fff",
            "0x4",
            "0x402780017ffc7ffc",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x43616c6c436f6e7472616374",
            "0x400280007ff97fff",
            "0x400380017ff97ffa",
            "0x400380027ff97ffb",
            "0x400380037ff97ffc",
            "0x400380047ff97ffd",
            "0x482680017ff98000",
            "0x7",
            "0x480280057ff98000",
            "0x480280067ff98000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x53746f7261676552656164",
            "0x400280007ffc7fff",
            "0x400380017ffc7ffd",
            "0x482680017ffc8000",
            "0x3",
            "0x480280027ffc8000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x53746f726167655772697465",
            "0x400280007ffb7fff",
            "0x400380017ffb7ffc",
            "0x400380027ffb7ffd",
            "0x482680017ffb8000",
            "0x3",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x4765745478496e666f",
            "0x400280007ffd7fff",
            "0x482680017ffd8000",
            "0x2",
            "0x480280017ffd8000",
            "0x208b7fff7fff7ffe",
            "0x400380017ff97ffa",
            "0x400380007ff97ffb",
            "0x482680017ff98000",
            "0x2",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x53656e644d657373616765546f4c31",
            "0x400280007ffa7fff",
            "0x400380017ffa7ffb",
            "0x400380027ffa7ffc",
            "0x400380037ffa7ffd",
            "0x482680017ffa8000",
            "0x4",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x3",
            "0x20780017fff7ffb",
            "0x6",
            "0x480a7ffa7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x208b7fff7fff7ffe",
            "0x480a7ffa7fff8000",
            "0x480280007ffc8000",
            "0x480280017ffc8000",
            "0x480280027ffc8000",
            "0x480280037ffc8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffc3",
            "0x40137ffe7fff8000",
            "0x40137fff7fff8001",
            "0x40137ffd7fff8002",
            "0x480a7ffd7fff8000",
            "0x480a80017fff8000",
            "0x480a80007fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa1",
            "0x480a80027fff8000",
            "0x482680017ffb8000",
            "0x800000000000011000000000000000000000000000000000000000000000000",
            "0x482680017ffc8000",
            "0x4",
            "0x482a80007ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe4",
            "0x48127ffe7fff8000",
            "0x482880007ffe8000",
            "0x208b7fff7fff7ffe",
            "0x20780017fff7ffa",
            "0x4",
            "0x480a7ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x480280007ffb8000",
            "0x400280007ffd7fff",
            "0x480280017ffb8000",
            "0x400280017ffd7fff",
            "0x480280037ffb8000",
            "0x400280027ffd7fff",
            "0x480280027ffb8000",
            "0x48327fff7ffc8000",
            "0x400280037ffd7fff",
            "0x480a7ff97fff8000",
            "0x482680017ffa8000",
            "0x800000000000011000000000000000000000000000000000000000000000000",
            "0x482680017ffb8000",
            "0x4",
            "0x480a7ffc7fff8000",
            "0x482680017ffd8000",
            "0x4",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x12f54003c07a437ad07c5ec9ab727c116388147463229f9e11af77871d1363c",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff97",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff91",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x128542adec26d0ca851847e1a827c8cf3ba28a6f2af4577c0470ef550ac9acd",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff79",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff73",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff4e",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffd0",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffeb",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x2",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480280037ffb8000",
            "0x480280047ffb8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa5",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x402b7ffd7ffc7ffd",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffee",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff1",
            "0x48127ff47fff8000",
            "0x48127ff47fff8000",
            "0x48127ffb7fff8000",
            "0x480280037ffb8000",
            "0x480280047ffb8000",
            "0x48127ff97fff8000",
            "0x48127ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa3",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x402b7ffd7ffc7ffd",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffee",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff1",
            "0x48127ff47fff8000",
            "0x48127ff47fff8000",
            "0x48127ffb7fff8000",
            "0x480280037ffb8000",
            "0x480280047ffb8000",
            "0x48127ff97fff8000",
            "0x48127ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffde",
            "0x48317fff80007ffd",
            "0x20680017fff7fff",
            "0x9",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480680017fff8000",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x1",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280037ffb8000",
            "0x480280007ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffda",
            "0x48127ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x48127ff37fff8000",
            "0x48127ff37fff8000",
            "0x48127ffb7fff8000",
            "0x48127ff37fff8000",
            "0x480280047ffb8000",
            "0x48127ff97fff8000",
            "0x48127ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff8a",
            "0x48287ffd80007fff",
            "0x20680017fff7fff",
            "0x9",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480680017fff8000",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x1",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280037ffb8000",
            "0x480280007ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffda",
            "0x48127ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x48127ff37fff8000",
            "0x48127ff37fff8000",
            "0x48127ffb7fff8000",
            "0x48127ff37fff8000",
            "0x480280047ffb8000",
            "0x48127ff97fff8000",
            "0x48127ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x4",
            "0x480a7ff07fff8000",
            "0x480a7ff17fff8000",
            "0x480a7ff27fff8000",
            "0x480a7ff37fff8000",
            "0x480a7ff57fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff92",
            "0x400680017fff7fff",
            "0x1",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x480a7ff67fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffbd",
            "0x40137ffc7fff8000",
            "0x40137ffd7fff8001",
            "0x40137ffe7fff8002",
            "0x400680017fff7fff",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe5c",
            "0x400180007fff7ffa",
            "0x400180017fff7ffb",
            "0x400180027fff7ffc",
            "0x400180037fff7ffd",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe56",
            "0x400180007fff7ff7",
            "0x400180017fff7ff8",
            "0x400180027fff7ff9",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe51",
            "0x40137fff7fff8003",
            "0x48127ff27fff8000",
            "0x480680017fff8000",
            "0x1",
            "0x48127ff77fff8000",
            "0x48127ff97fff8000",
            "0x480a80037fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffeb8",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe46",
            "0x48127ffc7fff8000",
            "0x480680017fff8000",
            "0x1",
            "0x480a80037fff8000",
            "0x48127ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe8d",
            "0x48127ffe7fff8000",
            "0x480a80007fff8000",
            "0x480a80017fff8000",
            "0x480a80027fff8000",
            "0x480a7ff47fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x9",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280037ffb8000",
            "0x480280047ffb8000",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x480280027ffd8000",
            "0x480280037ffd8000",
            "0x480280047ffd8000",
            "0x480280057ffd8000",
            "0x480280067ffd8000",
            "0x480280077ffd8000",
            "0x480280087ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffb4",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffa7fff8000",
            "0x48127ffa7fff8000",
            "0x48127ffa7fff8000",
            "0x48127ffa7fff8000",
            "0x48127ffa7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x0",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe17",
            "0x480a7ff67fff8000",
            "0x480a7ff77fff8000",
            "0x480a7ff87fff8000",
            "0x480a7ff97fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ffa7fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x3",
            "0x4003800080007ffb",
            "0x400380007ffd7ffb",
            "0x402780017ffd8001",
            "0x1",
            "0x4826800180008000",
            "0x1",
            "0x40297ffb7fff8002",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffc7fff8000",
            "0x480a7ffb7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffe03",
            "0x480a80017fff8000",
            "0x4829800080008002",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x3",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x400080007ffe7fff",
            "0x482680017ffd8000",
            "0x1",
            "0x480280007ffd8000",
            "0x484480017fff8000",
            "0x4",
            "0x48307fff7ffd8000",
            "0x480280027ffb8000",
            "0x480080007ffe8000",
            "0x400080017ffe7fff",
            "0x482480017ffd8000",
            "0x1",
            "0x480080007ffc8000",
            "0x48307fff7ffe8000",
            "0x402a7ffd7ffc7fff",
            "0x480280027ffb8000",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x482480017ffd8000",
            "0x2",
            "0x480280037ffb8000",
            "0x480280007ffd8000",
            "0x482680017ffd8000",
            "0x1",
            "0x480080007ff38000",
            "0x482480017ff28000",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffc3",
            "0x40137ffa7fff8000",
            "0x40137ffb7fff8001",
            "0x40137ffd7fff8002",
            "0x48127ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffc9",
            "0x480a80007fff8000",
            "0x480a80017fff8000",
            "0x48127ffb7fff8000",
            "0x480a80027fff8000",
            "0x480280047ffb8000",
            "0x48127ff97fff8000",
            "0x48127ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff67fff8000",
            "0x480a7ff77fff8000",
            "0x480a7ff87fff8000",
            "0x480a7ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x400080007ffe7fff",
            "0x482680017ffd8000",
            "0x1",
            "0x480280007ffd8000",
            "0x484480017fff8000",
            "0x4",
            "0x48307fff7ffd8000",
            "0x480280027ffb8000",
            "0x480080007ffe8000",
            "0x400080017ffe7fff",
            "0x482480017ffd8000",
            "0x1",
            "0x480080007ffc8000",
            "0x48307fff7ffe8000",
            "0x402a7ffd7ffc7fff",
            "0x480280027ffb8000",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x482480017ffd8000",
            "0x2",
            "0x480280037ffb8000",
            "0x480280007ffd8000",
            "0x482680017ffd8000",
            "0x1",
            "0x480080007ff38000",
            "0x482480017ff28000",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffdf",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x480280047ffb8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ff97fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x1",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280037ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff4",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffa7fff8000",
            "0x480280047ffb8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ff97fff8000",
            "0x208b7fff7fff7ffe"
        ],
        "debug_info": null,
        "hints": {
            "0": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.alloc",
                        "starkware.cairo.common.alloc.alloc"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 0,
                            "offset": 0
                        },
                        "reference_ids": {}
                    }
                }
            ],
            "6": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.memcpy",
                        "starkware.cairo.common.memcpy.memcpy"
                    ],
                    "code": "vm_enter_scope({'n': ids.len})",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 1,
                            "offset": 0
                        },
                        "reference_ids": {
                            "starkware.cairo.common.memcpy.memcpy.dst": 0,
                            "starkware.cairo.common.memcpy.memcpy.len": 2,
                            "starkware.cairo.common.memcpy.memcpy.src": 1
                        }
                    }
                }
            ],
            "14": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.memcpy",
                        "starkware.cairo.common.memcpy.memcpy"
                    ],
                    "code": "n -= 1\nids.continue_copying = 1 if n > 0 else 0",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 1,
                            "offset": 5
                        },
                        "reference_ids": {
                            "starkware.cairo.common.memcpy.memcpy.__temp0": 5,
                            "starkware.cairo.common.memcpy.memcpy.continue_copying": 6,
                            "starkware.cairo.common.memcpy.memcpy.dst": 0,
                            "starkware.cairo.common.memcpy.memcpy.frame": 4,
                            "starkware.cairo.common.memcpy.memcpy.len": 2,
                            "starkware.cairo.common.memcpy.memcpy.next_frame": 7,
                            "starkware.cairo.common.memcpy.memcpy.src": 1
                        }
                    }
                }
            ],
            "17": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.memcpy",
                        "starkware.cairo.common.memcpy.memcpy"
                    ],
                    "code": "vm_exit_scope()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 1,
                            "offset": 6
                        },
                        "reference_ids": {
                            "starkware.cairo.common.memcpy.memcpy.__temp0": 5,
                            "starkware.cairo.common.memcpy.memcpy.continue_copying": 6,
                            "starkware.cairo.common.memcpy.memcpy.dst": 0,
                            "starkware.cairo.common.memcpy.memcpy.frame": 4,
                            "starkware.cairo.common.memcpy.memcpy.len": 2,
                            "starkware.cairo.common.memcpy.memcpy.next_frame": 7,
                            "starkware.cairo.common.memcpy.memcpy.src": 1
                        }
                    }
                }
            ],
            "18": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.math",
                        "starkware.cairo.common.math.assert_not_zero"
                    ],
                    "code": "from starkware.cairo.common.math_utils import assert_integer\nassert_integer(ids.value)\nassert ids.value % PRIME != 0, f'assert_not_zero failed: {ids.value} = 0.'",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 2,
                            "offset": 0
                        },
                        "reference_ids": {
                            "starkware.cairo.common.math.assert_not_zero.value": 8
                        }
                    }
                }
            ],
            "23": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.math",
                        "starkware.cairo.common.math.assert_not_equal"
                    ],
                    "code": "from starkware.cairo.lang.vm.relocatable import RelocatableValue\nboth_ints = isinstance(ids.a, int) and isinstance(ids.b, int)\nboth_relocatable = (\n    isinstance(ids.a, RelocatableValue) and isinstance(ids.b, RelocatableValue) and\n    ids.a.segment_index == ids.b.segment_index)\nassert both_ints or both_relocatable, \\\n    f'assert_not_equal failed: non-comparable values: {ids.a}, {ids.b}.'\nassert (ids.a - ids.b) % PRIME != 0, f'assert_not_equal failed: {ids.a} = {ids.b}.'",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 3,
                            "offset": 0
                        },
                        "reference_ids": {
                            "starkware.cairo.common.math.assert_not_equal.a": 9,
                            "starkware.cairo.common.math.assert_not_equal.b": 10
                        }
                    }
                }
            ],
            "36": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "code": "syscall_handler.call_contract(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 4,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.call_contract.__temp2": 18,
                            "starkware.starknet.common.syscalls.call_contract.calldata": 15,
                            "starkware.starknet.common.syscalls.call_contract.calldata_size": 14,
                            "starkware.starknet.common.syscalls.call_contract.contract_address": 12,
                            "starkware.starknet.common.syscalls.call_contract.function_selector": 13,
                            "starkware.starknet.common.syscalls.call_contract.syscall": 17,
                            "starkware.starknet.common.syscalls.call_contract.syscall_ptr": 16
                        }
                    }
                }
            ],
            "45": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_read"
                    ],
                    "code": "syscall_handler.storage_read(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 5,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.storage_read.__temp3": 24,
                            "starkware.starknet.common.syscalls.storage_read.address": 21,
                            "starkware.starknet.common.syscalls.storage_read.syscall": 23,
                            "starkware.starknet.common.syscalls.storage_read.syscall_ptr": 22
                        }
                    }
                }
            ],
            "54": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_write"
                    ],
                    "code": "syscall_handler.storage_write(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 6,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.storage_write.__temp4": 30,
                            "starkware.starknet.common.syscalls.storage_write.address": 27,
                            "starkware.starknet.common.syscalls.storage_write.syscall_ptr": 29,
                            "starkware.starknet.common.syscalls.storage_write.value": 28
                        }
                    }
                }
            ],
            "60": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_tx_info"
                    ],
                    "code": "syscall_handler.get_tx_info(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 7,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.get_tx_info.__temp5": 34,
                            "starkware.starknet.common.syscalls.get_tx_info.syscall": 33,
                            "starkware.starknet.common.syscalls.get_tx_info.syscall_ptr": 32
                        }
                    }
                }
            ],
            "64": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.signature",
                        "starkware.cairo.common.signature.verify_ecdsa_signature"
                    ],
                    "code": "ecdsa_builtin.add_signature(ids.ecdsa_ptr.address_, (ids.signature_r, ids.signature_s))",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 8,
                            "offset": 0
                        },
                        "reference_ids": {
                            "starkware.cairo.common.signature.verify_ecdsa_signature.ecdsa_ptr": 41,
                            "starkware.cairo.common.signature.verify_ecdsa_signature.message": 37,
                            "starkware.cairo.common.signature.verify_ecdsa_signature.public_key": 38,
                            "starkware.cairo.common.signature.verify_ecdsa_signature.signature_r": 39,
                            "starkware.cairo.common.signature.verify_ecdsa_signature.signature_s": 40
                        }
                    }
                }
            ],
            "75": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.messages",
                        "starkware.starknet.common.messages.send_message_to_l1"
                    ],
                    "code": "syscall_handler.send_message_to_l1(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 9,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.messages.send_message_to_l1.__temp6": 47,
                            "starkware.starknet.common.messages.send_message_to_l1.payload": 45,
                            "starkware.starknet.common.messages.send_message_to_l1.payload_size": 44,
                            "starkware.starknet.common.messages.send_message_to_l1.syscall_ptr": 46,
                            "starkware.starknet.common.messages.send_message_to_l1.to_address": 43
                        }
                    }
                }
            ],
            "219": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.constructor"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 22,
                            "offset": 52
                        },
                        "reference_ids": {
                            "__wrappers__.constructor.__calldata_actual_size": 138,
                            "__wrappers__.constructor.__calldata_arg_credential_hash": 134,
                            "__wrappers__.constructor.__calldata_arg_l1_verifier_address": 136,
                            "__wrappers__.constructor.__calldata_ptr": 137,
                            "__wrappers__.constructor.__temp12": 139,
                            "__wrappers__.constructor.bitwise_ptr": 132,
                            "__wrappers__.constructor.ecdsa_ptr": 131,
                            "__wrappers__.constructor.pedersen_ptr": 141,
                            "__wrappers__.constructor.range_check_ptr": 142,
                            "__wrappers__.constructor.ret_value": 143,
                            "__wrappers__.constructor.syscall_ptr": 140
                        }
                    }
                }
            ],
            "236": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.get_credential_hash_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 24,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.get_credential_hash_encode_return.range_check_ptr": 154,
                            "__wrappers__.get_credential_hash_encode_return.ret_value": 153
                        }
                    }
                }
            ],
            "268": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.get_l1_verifier_address_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 27,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.get_l1_verifier_address_encode_return.range_check_ptr": 181,
                            "__wrappers__.get_l1_verifier_address_encode_return.ret_value": 180
                        }
                    }
                }
            ],
            "316": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.is_valid_l1_caller_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 30,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.is_valid_l1_caller_encode_return.range_check_ptr": 211,
                            "__wrappers__.is_valid_l1_caller_encode_return.ret_value": 210
                        }
                    }
                }
            ],
            "368": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.is_valid_credential_hash_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 33,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.is_valid_credential_hash_encode_return.range_check_ptr": 245,
                            "__wrappers__.is_valid_credential_hash_encode_return.ret_value": 244
                        }
                    }
                }
            ],
            "477": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.execute_from_l1"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 39,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.execute_from_l1.__calldata_actual_size": 330,
                            "__wrappers__.execute_from_l1.__calldata_arg_call_array_data_len": 328,
                            "__wrappers__.execute_from_l1.__calldata_arg_call_array_data_offset": 326,
                            "__wrappers__.execute_from_l1.__calldata_arg_call_array_selector": 324,
                            "__wrappers__.execute_from_l1.__calldata_arg_call_array_to": 322,
                            "__wrappers__.execute_from_l1.__calldata_arg_credential_hash": 314,
                            "__wrappers__.execute_from_l1.__calldata_arg_from_address": 312,
                            "__wrappers__.execute_from_l1.__calldata_arg_transfer_calldata_amount_high": 320,
                            "__wrappers__.execute_from_l1.__calldata_arg_transfer_calldata_amount_low": 318,
                            "__wrappers__.execute_from_l1.__calldata_arg_transfer_calldata_recipient": 316,
                            "__wrappers__.execute_from_l1.__calldata_ptr": 329,
                            "__wrappers__.execute_from_l1.__temp21": 331,
                            "__wrappers__.execute_from_l1.bitwise_ptr": 336,
                            "__wrappers__.execute_from_l1.ecdsa_ptr": 335,
                            "__wrappers__.execute_from_l1.pedersen_ptr": 333,
                            "__wrappers__.execute_from_l1.range_check_ptr": 334,
                            "__wrappers__.execute_from_l1.ret_value": 337,
                            "__wrappers__.execute_from_l1.syscall_ptr": 332
                        }
                    }
                }
            ],
            "500": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.__execute___encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 41,
                            "offset": 0
                        },
                        "reference_ids": {
                            "__wrappers__.__execute___encode_return.range_check_ptr": 351,
                            "__wrappers__.__execute___encode_return.ret_value": 350
                        }
                    }
                }
            ],
            "602": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.__validate__"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 46,
                            "offset": 26
                        },
                        "reference_ids": {
                            "__wrappers__.__validate__.__calldata_actual_size": 430,
                            "__wrappers__.__validate__.__calldata_arg_call_array": 416,
                            "__wrappers__.__validate__.__calldata_arg_call_array_len": 411,
                            "__wrappers__.__validate__.__calldata_arg_calldata": 426,
                            "__wrappers__.__validate__.__calldata_arg_calldata_len": 421,
                            "__wrappers__.__validate__.__calldata_ptr": 429,
                            "__wrappers__.__validate__.__temp33": 413,
                            "__wrappers__.__validate__.__temp34": 414,
                            "__wrappers__.__validate__.__temp35": 417,
                            "__wrappers__.__validate__.__temp36": 418,
                            "__wrappers__.__validate__.__temp37": 419,
                            "__wrappers__.__validate__.__temp38": 423,
                            "__wrappers__.__validate__.__temp39": 424,
                            "__wrappers__.__validate__.__temp40": 427,
                            "__wrappers__.__validate__.__temp41": 428,
                            "__wrappers__.__validate__.__temp42": 431,
                            "__wrappers__.__validate__.bitwise_ptr": 409,
                            "__wrappers__.__validate__.ecdsa_ptr": 435,
                            "__wrappers__.__validate__.pedersen_ptr": 433,
                            "__wrappers__.__validate__.range_check_ptr": 434,
                            "__wrappers__.__validate__.ret_value": 436,
                            "__wrappers__.__validate__.syscall_ptr": 432
                        }
                    }
                }
            ],
            "628": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.__validate_declare__"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 48,
                            "offset": 12
                        },
                        "reference_ids": {
                            "__wrappers__.__validate_declare__.__calldata_actual_size": 452,
                            "__wrappers__.__validate_declare__.__calldata_arg_class_hash": 450,
                            "__wrappers__.__validate_declare__.__calldata_ptr": 451,
                            "__wrappers__.__validate_declare__.__temp43": 453,
                            "__wrappers__.__validate_declare__.bitwise_ptr": 448,
                            "__wrappers__.__validate_declare__.ecdsa_ptr": 456,
                            "__wrappers__.__validate_declare__.pedersen_ptr": 455,
                            "__wrappers__.__validate_declare__.range_check_ptr": 457,
                            "__wrappers__.__validate_declare__.ret_value": 458,
                            "__wrappers__.__validate_declare__.syscall_ptr": 454
                        }
                    }
                }
            ]
        },
        "identifiers": {
            "__main__.Account": {
                "destination": "openzeppelin.account.library.Account",
                "type": "alias"
            },
            "__main__.AccountCallArray": {
                "destination": "openzeppelin.account.library.AccountCallArray",
                "type": "alias"
            },
            "__main__.Account_public_key": {
                "destination": "openzeppelin.account.library.Account_public_key",
                "type": "alias"
            },
            "__main__.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "__main__.Call": {
                "destination": "openzeppelin.account.library.Call",
                "type": "alias"
            },
            "__main__.FALSE": {
                "destination": "starkware.cairo.common.bool.FALSE",
                "type": "alias"
            },
            "__main__.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.SignatureBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.SignatureBuiltin",
                "type": "alias"
            },
            "__main__.TRUE": {
                "destination": "starkware.cairo.common.bool.TRUE",
                "type": "alias"
            },
            "__main__.__execute__": {
                "decorators": [
                    "external"
                ],
                "pc": 488,
                "type": "function"
            },
            "__main__.__execute__.Args": {
                "full_name": "__main__.__execute__.Args",
                "members": {
                    "call_array": {
                        "cairo_type": "openzeppelin.account.library.AccountCallArray*",
                        "offset": 1
                    },
                    "call_array_len": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "calldata_len": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.__execute__.ImplicitArgs": {
                "full_name": "__main__.__execute__.ImplicitArgs",
                "members": {
                    "ecdsa_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                        "offset": 3
                    },
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.__execute__.Return": {
                "cairo_type": "(response_len: felt, response: felt*)",
                "type": "type_definition"
            },
            "__main__.__execute__.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.__execute__.call_array": {
                "cairo_type": "openzeppelin.account.library.AccountCallArray*",
                "full_name": "__main__.__execute__.call_array",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 488,
                        "value": "[cast(fp + (-5), openzeppelin.account.library.AccountCallArray**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__execute__.call_array_len": {
                "cairo_type": "felt",
                "full_name": "__main__.__execute__.call_array_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 488,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__execute__.calldata": {
                "cairo_type": "felt*",
                "full_name": "__main__.__execute__.calldata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 488,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__execute__.calldata_len": {
                "cairo_type": "felt",
                "full_name": "__main__.__execute__.calldata_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 488,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__execute__.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__main__.__execute__.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 488,
                        "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__execute__.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.__execute__.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 488,
                        "value": "[cast(fp + (-9), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__execute__.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.__execute__.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 488,
                        "value": "[cast(fp + (-8), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__execute__.response": {
                "cairo_type": "felt*",
                "full_name": "__main__.__execute__.response",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 3
                        },
                        "pc": 492,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__execute__.response_len": {
                "cairo_type": "felt",
                "full_name": "__main__.__execute__.response_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 490,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.__execute__.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.__execute__.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 40,
                            "offset": 0
                        },
                        "pc": 488,
                        "value": "[cast(fp + (-10), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate__": {
                "decorators": [
                    "external"
                ],
                "pc": 566,
                "type": "function"
            },
            "__main__.__validate__.Args": {
                "full_name": "__main__.__validate__.Args",
                "members": {
                    "call_array": {
                        "cairo_type": "openzeppelin.account.library.AccountCallArray*",
                        "offset": 1
                    },
                    "call_array_len": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "calldata_len": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.__validate__.ImplicitArgs": {
                "full_name": "__main__.__validate__.ImplicitArgs",
                "members": {
                    "ecdsa_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                        "offset": 3
                    },
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.__validate__.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.__validate__.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.__validate__.call_array": {
                "cairo_type": "openzeppelin.account.library.AccountCallArray*",
                "full_name": "__main__.__validate__.call_array",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-5), openzeppelin.account.library.AccountCallArray**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate__.call_array_len": {
                "cairo_type": "felt",
                "full_name": "__main__.__validate__.call_array_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate__.calldata": {
                "cairo_type": "felt*",
                "full_name": "__main__.__validate__.calldata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate__.calldata_len": {
                "cairo_type": "felt",
                "full_name": "__main__.__validate__.calldata_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate__.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__main__.__validate__.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate__.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.__validate__.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-9), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate__.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.__validate__.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-8), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate__.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.__validate__.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 45,
                            "offset": 0
                        },
                        "pc": 566,
                        "value": "[cast(fp + (-10), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate_declare__": {
                "decorators": [
                    "external"
                ],
                "pc": 613,
                "type": "function"
            },
            "__main__.__validate_declare__.Args": {
                "full_name": "__main__.__validate_declare__.Args",
                "members": {
                    "class_hash": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.__validate_declare__.ImplicitArgs": {
                "full_name": "__main__.__validate_declare__.ImplicitArgs",
                "members": {
                    "ecdsa_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                        "offset": 2
                    },
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.__validate_declare__.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.__validate_declare__.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.__validate_declare__.class_hash": {
                "cairo_type": "felt",
                "full_name": "__main__.__validate_declare__.class_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 613,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate_declare__.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__main__.__validate_declare__.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 613,
                        "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate_declare__.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.__validate_declare__.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 613,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate_declare__.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.__validate_declare__.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 613,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.__validate_declare__.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.__validate_declare__.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 47,
                            "offset": 0
                        },
                        "pc": 613,
                        "value": "[cast(fp + (-7), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash": {
                "type": "namespace"
            },
            "__main__._credential_hash.Args": {
                "full_name": "__main__._credential_hash.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._credential_hash.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__._credential_hash.ImplicitArgs": {
                "full_name": "__main__._credential_hash.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._credential_hash.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__._credential_hash.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._credential_hash.addr": {
                "decorators": [],
                "pc": 136,
                "type": "function"
            },
            "__main__._credential_hash.addr.Args": {
                "full_name": "__main__._credential_hash.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._credential_hash.addr.ImplicitArgs": {
                "full_name": "__main__._credential_hash.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__._credential_hash.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__._credential_hash.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._credential_hash.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__._credential_hash.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 0
                        },
                        "pc": 136,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__._credential_hash.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 0
                        },
                        "pc": 136,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__._credential_hash.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 15,
                            "offset": 0
                        },
                        "pc": 136,
                        "value": "cast(535934413642861879633173071503157876936879887559062009374816726066425574972, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__._credential_hash.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__._credential_hash.read": {
                "decorators": [],
                "pc": 141,
                "type": "function"
            },
            "__main__._credential_hash.read.Args": {
                "full_name": "__main__._credential_hash.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._credential_hash.read.ImplicitArgs": {
                "full_name": "__main__._credential_hash.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__._credential_hash.read.Return": {
                "cairo_type": "(_credential_hash: felt)",
                "type": "type_definition"
            },
            "__main__._credential_hash.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._credential_hash.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__._credential_hash.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 14
                        },
                        "pc": 149,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 18
                        },
                        "pc": 153,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__._credential_hash.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 0
                        },
                        "pc": 141,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 7
                        },
                        "pc": 145,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 16
                        },
                        "pc": 151,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__._credential_hash.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 0
                        },
                        "pc": 141,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 7
                        },
                        "pc": 145,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 17
                        },
                        "pc": 152,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__._credential_hash.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 7
                        },
                        "pc": 145,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__._credential_hash.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 0
                        },
                        "pc": 141,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 14
                        },
                        "pc": 149,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 16,
                            "offset": 15
                        },
                        "pc": 150,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__._credential_hash.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__._credential_hash.write": {
                "decorators": [],
                "pc": 154,
                "type": "function"
            },
            "__main__._credential_hash.write.Args": {
                "full_name": "__main__._credential_hash.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__._credential_hash.write.ImplicitArgs": {
                "full_name": "__main__._credential_hash.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__._credential_hash.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__._credential_hash.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._credential_hash.write.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__._credential_hash.write.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 0
                        },
                        "pc": 154,
                        "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 7
                        },
                        "pc": 158,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.write.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__._credential_hash.write.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 0
                        },
                        "pc": 154,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 7
                        },
                        "pc": 158,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.write.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__._credential_hash.write.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 7
                        },
                        "pc": 158,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__._credential_hash.write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 0
                        },
                        "pc": 154,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 14
                        },
                        "pc": 163,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._credential_hash.write.value": {
                "cairo_type": "felt",
                "full_name": "__main__._credential_hash.write.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 17,
                            "offset": 0
                        },
                        "pc": 154,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address": {
                "type": "namespace"
            },
            "__main__._l1_verifier_address.Args": {
                "full_name": "__main__._l1_verifier_address.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._l1_verifier_address.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__._l1_verifier_address.ImplicitArgs": {
                "full_name": "__main__._l1_verifier_address.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._l1_verifier_address.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__._l1_verifier_address.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._l1_verifier_address.addr": {
                "decorators": [],
                "pc": 166,
                "type": "function"
            },
            "__main__._l1_verifier_address.addr.Args": {
                "full_name": "__main__._l1_verifier_address.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._l1_verifier_address.addr.ImplicitArgs": {
                "full_name": "__main__._l1_verifier_address.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__._l1_verifier_address.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__._l1_verifier_address.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._l1_verifier_address.addr.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__._l1_verifier_address.addr.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 166,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.addr.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__._l1_verifier_address.addr.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 166,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.addr.res": {
                "cairo_type": "felt",
                "full_name": "__main__._l1_verifier_address.addr.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 18,
                            "offset": 0
                        },
                        "pc": 166,
                        "value": "cast(523567633644603146390646794176511706655875442833311520606000501741803313869, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__._l1_verifier_address.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__._l1_verifier_address.read": {
                "decorators": [],
                "pc": 171,
                "type": "function"
            },
            "__main__._l1_verifier_address.read.Args": {
                "full_name": "__main__._l1_verifier_address.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._l1_verifier_address.read.ImplicitArgs": {
                "full_name": "__main__._l1_verifier_address.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__._l1_verifier_address.read.Return": {
                "cairo_type": "(_l1_verifier_address: felt)",
                "type": "type_definition"
            },
            "__main__._l1_verifier_address.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._l1_verifier_address.read.__storage_var_temp0": {
                "cairo_type": "felt",
                "full_name": "__main__._l1_verifier_address.read.__storage_var_temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 14
                        },
                        "pc": 179,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 18
                        },
                        "pc": 183,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.read.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__._l1_verifier_address.read.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 0
                        },
                        "pc": 171,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 7
                        },
                        "pc": 175,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 16
                        },
                        "pc": 181,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.read.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__._l1_verifier_address.read.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 0
                        },
                        "pc": 171,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 7
                        },
                        "pc": 175,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 17
                        },
                        "pc": 182,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.read.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__._l1_verifier_address.read.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 7
                        },
                        "pc": 175,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__._l1_verifier_address.read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 0
                        },
                        "pc": 171,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 14
                        },
                        "pc": 179,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 19,
                            "offset": 15
                        },
                        "pc": 180,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__._l1_verifier_address.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__._l1_verifier_address.write": {
                "decorators": [],
                "pc": 184,
                "type": "function"
            },
            "__main__._l1_verifier_address.write.Args": {
                "full_name": "__main__._l1_verifier_address.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__._l1_verifier_address.write.ImplicitArgs": {
                "full_name": "__main__._l1_verifier_address.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__._l1_verifier_address.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__._l1_verifier_address.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._l1_verifier_address.write.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__._l1_verifier_address.write.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 0
                        },
                        "pc": 184,
                        "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 7
                        },
                        "pc": 188,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.write.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__._l1_verifier_address.write.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 0
                        },
                        "pc": 184,
                        "value": "[cast(fp + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 7
                        },
                        "pc": 188,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.write.storage_addr": {
                "cairo_type": "felt",
                "full_name": "__main__._l1_verifier_address.write.storage_addr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 7
                        },
                        "pc": 188,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__._l1_verifier_address.write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 0
                        },
                        "pc": 184,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 14
                        },
                        "pc": 193,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__._l1_verifier_address.write.value": {
                "cairo_type": "felt",
                "full_name": "__main__._l1_verifier_address.write.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 20,
                            "offset": 0
                        },
                        "pc": 184,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.alloc": {
                "destination": "starkware.cairo.common.alloc.alloc",
                "type": "alias"
            },
            "__main__.assert_not_equal": {
                "destination": "starkware.cairo.common.math.assert_not_equal",
                "type": "alias"
            },
            "__main__.assert_not_zero": {
                "destination": "starkware.cairo.common.math.assert_not_zero",
                "type": "alias"
            },
            "__main__.constructor": {
                "decorators": [
                    "constructor"
                ],
                "pc": 196,
                "type": "function"
            },
            "__main__.constructor.Args": {
                "full_name": "__main__.constructor.Args",
                "members": {
                    "credential_hash": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "l1_verifier_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.constructor.ImplicitArgs": {
                "full_name": "__main__.constructor.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.constructor.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.constructor.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.constructor.credential_hash": {
                "cairo_type": "felt",
                "full_name": "__main__.constructor.credential_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 0
                        },
                        "pc": 196,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.constructor.l1_verifier_address": {
                "cairo_type": "felt",
                "full_name": "__main__.constructor.l1_verifier_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 0
                        },
                        "pc": 196,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.constructor.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.constructor.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 0
                        },
                        "pc": 196,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 25
                        },
                        "pc": 205,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 44
                        },
                        "pc": 208,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.constructor.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.constructor.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 0
                        },
                        "pc": 196,
                        "value": "[cast(fp + (-5), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 25
                        },
                        "pc": 205,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 44
                        },
                        "pc": 208,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.constructor.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.constructor.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 0
                        },
                        "pc": 196,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 25
                        },
                        "pc": 205,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 21,
                            "offset": 44
                        },
                        "pc": 208,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1": {
                "decorators": [
                    "l1_handler"
                ],
                "pc": 398,
                "type": "function"
            },
            "__main__.execute_from_l1.Args": {
                "full_name": "__main__.execute_from_l1.Args",
                "members": {
                    "call_array_data_len": {
                        "cairo_type": "felt",
                        "offset": 8
                    },
                    "call_array_data_offset": {
                        "cairo_type": "felt",
                        "offset": 7
                    },
                    "call_array_selector": {
                        "cairo_type": "felt",
                        "offset": 6
                    },
                    "call_array_to": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "credential_hash": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "from_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "transfer_calldata_amount_high": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "transfer_calldata_amount_low": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "transfer_calldata_recipient": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 9,
                "type": "struct"
            },
            "__main__.execute_from_l1.ImplicitArgs": {
                "full_name": "__main__.execute_from_l1.ImplicitArgs",
                "members": {
                    "bitwise_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin*",
                        "offset": 4
                    },
                    "ecdsa_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                        "offset": 3
                    },
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "__main__.execute_from_l1.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.execute_from_l1.SIZEOF_LOCALS": {
                "type": "const",
                "value": 4
            },
            "__main__.execute_from_l1.bitwise_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin*",
                "full_name": "__main__.execute_from_l1.bitwise_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-12), starkware.cairo.common.cairo_builtins.BitwiseBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.call_array": {
                "cairo_type": "openzeppelin.account.library.AccountCallArray*",
                "full_name": "__main__.execute_from_l1.call_array",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 89
                        },
                        "pc": 423,
                        "value": "[cast(ap + (-1), openzeppelin.account.library.AccountCallArray**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.call_array_data_len": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.call_array_data_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.call_array_data_offset": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.call_array_data_offset",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.call_array_len": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.call_array_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 86
                        },
                        "pc": 421,
                        "value": "cast(1, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.call_array_selector": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.call_array_selector",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.call_array_to": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.call_array_to",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.calldata_array": {
                "cairo_type": "felt*",
                "full_name": "__main__.execute_from_l1.calldata_array",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 92
                        },
                        "pc": 429,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.calldata_len": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.calldata_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 89
                        },
                        "pc": 427,
                        "value": "cast(2, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.calls": {
                "cairo_type": "openzeppelin.account.library.Call*",
                "full_name": "__main__.execute_from_l1.calls",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 95
                        },
                        "pc": 434,
                        "value": "[cast(ap + (-1), openzeppelin.account.library.Call**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 95
                        },
                        "pc": 435,
                        "value": "[cast(fp + 3, openzeppelin.account.library.Call**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.calls_len": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.calls_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 36,
                            "offset": 0
                        },
                        "pc": 443,
                        "value": "cast(1, felt)"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.credential_hash": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.credential_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-10), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__main__.execute_from_l1.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-13), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 41
                        },
                        "pc": 407,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 82
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 45
                        },
                        "pc": 407,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 86
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 86
                        },
                        "pc": 419,
                        "value": "[cast(fp + 2, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.from_address": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.from_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-11), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.is_valid": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.is_valid",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 45
                        },
                        "pc": 407,
                        "value": "[cast(ap + (-1), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 86
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.execute_from_l1.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-15), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 41
                        },
                        "pc": 407,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 82
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 45
                        },
                        "pc": 407,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 86
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 86
                        },
                        "pc": 417,
                        "value": "[cast(fp, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-14), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 41
                        },
                        "pc": 407,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 82
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 45
                        },
                        "pc": 407,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 86
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 86
                        },
                        "pc": 418,
                        "value": "[cast(fp + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.response": {
                "cairo_type": "felt*",
                "full_name": "__main__.execute_from_l1.response",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 36,
                            "offset": 3
                        },
                        "pc": 445,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.response_len": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.response_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 0
                        },
                        "pc": 452,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.execute_from_l1.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-16), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 41
                        },
                        "pc": 407,
                        "value": "[cast(ap + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 82
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 36,
                            "offset": 0
                        },
                        "pc": 439,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 0
                        },
                        "pc": 448,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 45
                        },
                        "pc": 407,
                        "value": "[cast(ap + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 86
                        },
                        "pc": 416,
                        "value": "[cast(ap + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 36,
                            "offset": 0
                        },
                        "pc": 443,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 37,
                            "offset": 0
                        },
                        "pc": 452,
                        "value": "[cast(ap + (-2), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.transfer_calldata_amount_high": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.transfer_calldata_amount_high",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-7), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.transfer_calldata_amount_low": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.transfer_calldata_amount_low",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-8), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.execute_from_l1.transfer_calldata_recipient": {
                "cairo_type": "felt",
                "full_name": "__main__.execute_from_l1.transfer_calldata_recipient",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 35,
                            "offset": 0
                        },
                        "pc": 398,
                        "value": "[cast(fp + (-9), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_credential_hash": {
                "decorators": [
                    "view"
                ],
                "pc": 230,
                "type": "function"
            },
            "__main__.get_credential_hash.Args": {
                "full_name": "__main__.get_credential_hash.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.get_credential_hash.ImplicitArgs": {
                "full_name": "__main__.get_credential_hash.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.get_credential_hash.Return": {
                "cairo_type": "(credential_hash: felt)",
                "type": "type_definition"
            },
            "__main__.get_credential_hash.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.get_credential_hash.credential_hash": {
                "cairo_type": "felt",
                "full_name": "__main__.get_credential_hash.credential_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 23,
                            "offset": 23
                        },
                        "pc": 235,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_credential_hash.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.get_credential_hash.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 23,
                            "offset": 0
                        },
                        "pc": 230,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 23,
                            "offset": 23
                        },
                        "pc": 235,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_credential_hash.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.get_credential_hash.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 23,
                            "offset": 0
                        },
                        "pc": 230,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 23,
                            "offset": 23
                        },
                        "pc": 235,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_credential_hash.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.get_credential_hash.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 23,
                            "offset": 0
                        },
                        "pc": 230,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 23,
                            "offset": 23
                        },
                        "pc": 235,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_l1_verifier_address": {
                "decorators": [
                    "view"
                ],
                "pc": 262,
                "type": "function"
            },
            "__main__.get_l1_verifier_address.Args": {
                "full_name": "__main__.get_l1_verifier_address.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.get_l1_verifier_address.ImplicitArgs": {
                "full_name": "__main__.get_l1_verifier_address.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.get_l1_verifier_address.Return": {
                "cairo_type": "(l1_verifier_address: felt)",
                "type": "type_definition"
            },
            "__main__.get_l1_verifier_address.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.get_l1_verifier_address.l1_verifier_address": {
                "cairo_type": "felt",
                "full_name": "__main__.get_l1_verifier_address.l1_verifier_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 26,
                            "offset": 23
                        },
                        "pc": 267,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_l1_verifier_address.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.get_l1_verifier_address.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 26,
                            "offset": 0
                        },
                        "pc": 262,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 26,
                            "offset": 23
                        },
                        "pc": 267,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_l1_verifier_address.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.get_l1_verifier_address.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 26,
                            "offset": 0
                        },
                        "pc": 262,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 26,
                            "offset": 23
                        },
                        "pc": 267,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_l1_verifier_address.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.get_l1_verifier_address.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 26,
                            "offset": 0
                        },
                        "pc": 262,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 26,
                            "offset": 23
                        },
                        "pc": 267,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.get_tx_info": {
                "destination": "starkware.starknet.common.syscalls.get_tx_info",
                "type": "alias"
            },
            "__main__.is_valid_credential_hash": {
                "decorators": [
                    "view"
                ],
                "pc": 346,
                "type": "function"
            },
            "__main__.is_valid_credential_hash.Args": {
                "full_name": "__main__.is_valid_credential_hash.Args",
                "members": {
                    "credential_hash": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.is_valid_credential_hash.ImplicitArgs": {
                "full_name": "__main__.is_valid_credential_hash.ImplicitArgs",
                "members": {
                    "ecdsa_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                        "offset": 3
                    },
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.is_valid_credential_hash.Return": {
                "cairo_type": "(is_valid: felt)",
                "type": "type_definition"
            },
            "__main__.is_valid_credential_hash.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.is_valid_credential_hash.__temp18": {
                "cairo_type": "felt",
                "full_name": "__main__.is_valid_credential_hash.__temp18",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 29
                        },
                        "pc": 352,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_credential_hash._credential_hash": {
                "cairo_type": "felt",
                "full_name": "__main__.is_valid_credential_hash._credential_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 28
                        },
                        "pc": 351,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_credential_hash.credential_hash": {
                "cairo_type": "felt",
                "full_name": "__main__.is_valid_credential_hash.credential_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 0
                        },
                        "pc": 346,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_credential_hash.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__main__.is_valid_credential_hash.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 0
                        },
                        "pc": 346,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_credential_hash.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.is_valid_credential_hash.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 0
                        },
                        "pc": 346,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 28
                        },
                        "pc": 351,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_credential_hash.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.is_valid_credential_hash.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 0
                        },
                        "pc": 346,
                        "value": "[cast(fp + (-5), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 28
                        },
                        "pc": 351,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_credential_hash.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.is_valid_credential_hash.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 0
                        },
                        "pc": 346,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 32,
                            "offset": 28
                        },
                        "pc": 351,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_l1_caller": {
                "decorators": [
                    "view"
                ],
                "pc": 294,
                "type": "function"
            },
            "__main__.is_valid_l1_caller.Args": {
                "full_name": "__main__.is_valid_l1_caller.Args",
                "members": {
                    "l1_caller": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.is_valid_l1_caller.ImplicitArgs": {
                "full_name": "__main__.is_valid_l1_caller.ImplicitArgs",
                "members": {
                    "ecdsa_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                        "offset": 3
                    },
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "__main__.is_valid_l1_caller.Return": {
                "cairo_type": "(is_valid: felt)",
                "type": "type_definition"
            },
            "__main__.is_valid_l1_caller.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.is_valid_l1_caller.__temp15": {
                "cairo_type": "felt",
                "full_name": "__main__.is_valid_l1_caller.__temp15",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 29
                        },
                        "pc": 300,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_l1_caller.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__main__.is_valid_l1_caller.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 0
                        },
                        "pc": 294,
                        "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_l1_caller.l1_caller": {
                "cairo_type": "felt",
                "full_name": "__main__.is_valid_l1_caller.l1_caller",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 0
                        },
                        "pc": 294,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_l1_caller.l1_verifier_address": {
                "cairo_type": "felt",
                "full_name": "__main__.is_valid_l1_caller.l1_verifier_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 28
                        },
                        "pc": 299,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_l1_caller.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__main__.is_valid_l1_caller.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 0
                        },
                        "pc": 294,
                        "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 28
                        },
                        "pc": 299,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_l1_caller.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__main__.is_valid_l1_caller.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 0
                        },
                        "pc": 294,
                        "value": "[cast(fp + (-5), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 28
                        },
                        "pc": 299,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.is_valid_l1_caller.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__main__.is_valid_l1_caller.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 0
                        },
                        "pc": 294,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 29,
                            "offset": 28
                        },
                        "pc": 299,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__main__.send_message_to_l1": {
                "destination": "starkware.starknet.common.messages.send_message_to_l1",
                "type": "alias"
            },
            "__main__.verify_ecdsa_signature": {
                "destination": "starkware.cairo.common.signature.verify_ecdsa_signature",
                "type": "alias"
            },
            "__wrappers__.__execute__": {
                "decorators": [
                    "external"
                ],
                "pc": 519,
                "type": "function"
            },
            "__wrappers__.__execute__.Args": {
                "full_name": "__wrappers__.__execute__.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.__execute__.ImplicitArgs": {
                "full_name": "__wrappers__.__execute__.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.__execute__.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, ecdsa_ptr: starkware.cairo.common.cairo_builtins.SignatureBuiltin*, bitwise_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.__execute__.SIZEOF_LOCALS": {
                "type": "const",
                "value": 3
            },
            "__wrappers__.__execute__.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 14
                        },
                        "pc": 537,
                        "value": "cast([ap + (-1)] - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__calldata_arg_call_array": {
                "cairo_type": "openzeppelin.account.library.AccountCallArray*",
                "full_name": "__wrappers__.__execute__.__calldata_arg_call_array",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 5
                        },
                        "pc": 524,
                        "value": "cast([fp + (-3)] + 1, openzeppelin.account.library.AccountCallArray*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__calldata_arg_call_array_len": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__calldata_arg_call_array_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 3
                        },
                        "pc": 521,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__calldata_arg_calldata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__execute__.__calldata_arg_calldata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 11
                        },
                        "pc": 533,
                        "value": "cast([ap + (-3)] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__calldata_arg_calldata_len": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__calldata_arg_calldata_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 9
                        },
                        "pc": 530,
                        "value": "[cast([ap + (-1)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__execute__.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 3
                        },
                        "pc": 521,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 3
                        },
                        "pc": 521,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 9
                        },
                        "pc": 530,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 9
                        },
                        "pc": 530,
                        "value": "cast([ap + (-1)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 14
                        },
                        "pc": 537,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__temp23": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__temp23",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 4
                        },
                        "pc": 522,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__temp24": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__temp24",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 5
                        },
                        "pc": 523,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__temp25": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__temp25",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 6
                        },
                        "pc": 526,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__temp26": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__temp26",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 7
                        },
                        "pc": 527,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__temp27": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__temp27",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 8
                        },
                        "pc": 529,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__temp28": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__temp28",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 10
                        },
                        "pc": 531,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__temp29": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__temp29",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 11
                        },
                        "pc": 532,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__temp30": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__temp30",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 12
                        },
                        "pc": 535,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__temp31": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__temp31",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 13
                        },
                        "pc": 536,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__temp32": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.__temp32",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 15
                        },
                        "pc": 539,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.__wrapped_func": {
                "destination": "__main__.__execute__",
                "type": "alias"
            },
            "__wrappers__.__execute__.bitwise_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.bitwise_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 3
                        },
                        "pc": 521,
                        "value": "[cast([fp + (-5)] + 4, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__wrappers__.__execute__.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 3
                        },
                        "pc": 521,
                        "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 34
                        },
                        "pc": 552,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 34
                        },
                        "pc": 555,
                        "value": "[cast(fp + 2, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.__execute__.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 3
                        },
                        "pc": 521,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 34
                        },
                        "pc": 552,
                        "value": "[cast(ap + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 34
                        },
                        "pc": 554,
                        "value": "[cast(fp + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 3
                        },
                        "pc": 521,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 5
                        },
                        "pc": 524,
                        "value": "cast([[fp + (-5)] + 2] + 1, felt)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 11
                        },
                        "pc": 533,
                        "value": "cast([[fp + (-5)] + 2] + 2, felt)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 34
                        },
                        "pc": 552,
                        "value": "[cast(ap + (-4), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 558,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.ret_value": {
                "cairo_type": "(response_len: felt, response: felt*)",
                "full_name": "__wrappers__.__execute__.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 34
                        },
                        "pc": 552,
                        "value": "[cast(ap + (-2), (response_len: felt, response: felt*)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__execute__.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 558,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute__.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 44,
                            "offset": 0
                        },
                        "pc": 558,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute__.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__execute__.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 3
                        },
                        "pc": 521,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 34
                        },
                        "pc": 552,
                        "value": "[cast(ap + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 43,
                            "offset": 34
                        },
                        "pc": 553,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute___encode_return": {
                "decorators": [],
                "pc": 500,
                "type": "function"
            },
            "__wrappers__.__execute___encode_return.Args": {
                "full_name": "__wrappers__.__execute___encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "ret_value": {
                        "cairo_type": "(response_len: felt, response: felt*)",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__wrappers__.__execute___encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.__execute___encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.__execute___encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.__execute___encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 3
            },
            "__wrappers__.__execute___encode_return.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__execute___encode_return.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 3
                        },
                        "pc": 502,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 3
                        },
                        "pc": 503,
                        "value": "cast([fp] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 4
                        },
                        "pc": 509,
                        "value": "[cast(fp + 2, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute___encode_return.__return_value_ptr_copy": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__execute___encode_return.__return_value_ptr_copy",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 3
                        },
                        "pc": 506,
                        "value": "cast([fp] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute___encode_return.__return_value_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__execute___encode_return.__return_value_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 3
                        },
                        "pc": 502,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute___encode_return.__temp22": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute___encode_return.__temp22",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 4
                        },
                        "pc": 508,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute___encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.__execute___encode_return.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__execute___encode_return.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 0
                        },
                        "pc": 500,
                        "value": "[cast(fp + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 3
                        },
                        "pc": 506,
                        "value": "[cast(fp + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__execute___encode_return.ret_value": {
                "cairo_type": "(response_len: felt, response: felt*)",
                "full_name": "__wrappers__.__execute___encode_return.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 41,
                            "offset": 0
                        },
                        "pc": 500,
                        "value": "[cast(fp + (-5), (response_len: felt, response: felt*)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__": {
                "decorators": [
                    "external"
                ],
                "pc": 571,
                "type": "function"
            },
            "__wrappers__.__validate__.Args": {
                "full_name": "__wrappers__.__validate__.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.__validate__.ImplicitArgs": {
                "full_name": "__wrappers__.__validate__.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.__validate__.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, ecdsa_ptr: starkware.cairo.common.cairo_builtins.SignatureBuiltin*, bitwise_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.__validate__.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.__validate__.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 11
                        },
                        "pc": 587,
                        "value": "cast([ap + (-1)] - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__calldata_arg_call_array": {
                "cairo_type": "openzeppelin.account.library.AccountCallArray*",
                "full_name": "__wrappers__.__validate__.__calldata_arg_call_array",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 2
                        },
                        "pc": 574,
                        "value": "cast([fp + (-3)] + 1, openzeppelin.account.library.AccountCallArray*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__calldata_arg_call_array_len": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__calldata_arg_call_array_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 571,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__calldata_arg_calldata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__validate__.__calldata_arg_calldata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 8
                        },
                        "pc": 583,
                        "value": "cast([ap + (-3)] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__calldata_arg_calldata_len": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__calldata_arg_calldata_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 6
                        },
                        "pc": 580,
                        "value": "[cast([ap + (-1)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__validate__.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 571,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 571,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 6
                        },
                        "pc": 580,
                        "value": "[cast(ap + (-1), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 6
                        },
                        "pc": 580,
                        "value": "cast([ap + (-1)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 11
                        },
                        "pc": 587,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__temp33": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__temp33",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 1
                        },
                        "pc": 572,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__temp34": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__temp34",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 2
                        },
                        "pc": 573,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__temp35": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__temp35",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 3
                        },
                        "pc": 576,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__temp36": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__temp36",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 4
                        },
                        "pc": 577,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__temp37": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__temp37",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 5
                        },
                        "pc": 579,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__temp38": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__temp38",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 7
                        },
                        "pc": 581,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__temp39": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__temp39",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 8
                        },
                        "pc": 582,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__temp40": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__temp40",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 9
                        },
                        "pc": 585,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__temp41": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__temp41",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 10
                        },
                        "pc": 586,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__temp42": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.__temp42",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 12
                        },
                        "pc": 589,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.__wrapped_func": {
                "destination": "__main__.__validate__",
                "type": "alias"
            },
            "__wrappers__.__validate__.bitwise_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.bitwise_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 571,
                        "value": "[cast([fp + (-5)] + 4, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__wrappers__.__validate__.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 571,
                        "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 26
                        },
                        "pc": 602,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.__validate__.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 571,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 26
                        },
                        "pc": 602,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 571,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 2
                        },
                        "pc": 574,
                        "value": "cast([[fp + (-5)] + 2] + 1, felt)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 8
                        },
                        "pc": 583,
                        "value": "cast([[fp + (-5)] + 2] + 2, felt)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 26
                        },
                        "pc": 602,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.ret_value": {
                "cairo_type": "()",
                "full_name": "__wrappers__.__validate__.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 26
                        },
                        "pc": 602,
                        "value": "[cast(ap + 0, ()*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__validate__.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 27
                        },
                        "pc": 604,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate__.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 27
                        },
                        "pc": 604,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate__.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__validate__.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 0
                        },
                        "pc": 571,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 46,
                            "offset": 26
                        },
                        "pc": 602,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate___encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.__validate_declare__": {
                "decorators": [
                    "external"
                ],
                "pc": 618,
                "type": "function"
            },
            "__wrappers__.__validate_declare__.Args": {
                "full_name": "__wrappers__.__validate_declare__.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.__validate_declare__.ImplicitArgs": {
                "full_name": "__wrappers__.__validate_declare__.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.__validate_declare__.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, ecdsa_ptr: starkware.cairo.common.cairo_builtins.SignatureBuiltin*, bitwise_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.__validate_declare__.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.__validate_declare__.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate_declare__.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "cast([fp + (-3)] + 1 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.__calldata_arg_class_hash": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate_declare__.__calldata_arg_class_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__validate_declare__.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.__temp43": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate_declare__.__temp43",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 1
                        },
                        "pc": 620,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.__wrapped_func": {
                "destination": "__main__.__validate_declare__",
                "type": "alias"
            },
            "__wrappers__.__validate_declare__.bitwise_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate_declare__.bitwise_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-5)] + 4, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__wrappers__.__validate_declare__.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 12
                        },
                        "pc": 628,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.__validate_declare__.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 12
                        },
                        "pc": 628,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate_declare__.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 12
                        },
                        "pc": 628,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.ret_value": {
                "cairo_type": "()",
                "full_name": "__wrappers__.__validate_declare__.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 12
                        },
                        "pc": 628,
                        "value": "[cast(ap + 0, ()*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__validate_declare__.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 13
                        },
                        "pc": 630,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.__validate_declare__.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 13
                        },
                        "pc": 630,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare__.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.__validate_declare__.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 0
                        },
                        "pc": 618,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 48,
                            "offset": 12
                        },
                        "pc": 628,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.__validate_declare___encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.constructor": {
                "decorators": [
                    "constructor"
                ],
                "pc": 209,
                "type": "function"
            },
            "__wrappers__.constructor.Args": {
                "full_name": "__wrappers__.constructor.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.constructor.ImplicitArgs": {
                "full_name": "__wrappers__.constructor.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.constructor.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, ecdsa_ptr: felt, bitwise_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.constructor.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.constructor.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "cast([fp + (-3)] + 2 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.__calldata_arg_credential_hash": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.__calldata_arg_credential_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.__calldata_arg_l1_verifier_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.__calldata_arg_l1_verifier_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "[cast([fp + (-3)] + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.constructor.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.__temp12": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.__temp12",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 1
                        },
                        "pc": 211,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.__wrapped_func": {
                "destination": "__main__.constructor",
                "type": "alias"
            },
            "__wrappers__.constructor.bitwise_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.bitwise_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "[cast([fp + (-5)] + 4, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.ecdsa_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "[cast([fp + (-5)] + 3, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.constructor.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 52
                        },
                        "pc": 219,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 52
                        },
                        "pc": 219,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.ret_value": {
                "cairo_type": "()",
                "full_name": "__wrappers__.constructor.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 52
                        },
                        "pc": 219,
                        "value": "[cast(ap + 0, ()*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.constructor.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 53
                        },
                        "pc": 221,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.constructor.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 53
                        },
                        "pc": 221,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.constructor.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 0
                        },
                        "pc": 209,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 22,
                            "offset": 52
                        },
                        "pc": 219,
                        "value": "[cast(ap + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.constructor_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.execute_from_l1": {
                "decorators": [
                    "l1_handler"
                ],
                "pc": 458,
                "type": "function"
            },
            "__wrappers__.execute_from_l1.Args": {
                "full_name": "__wrappers__.execute_from_l1.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.execute_from_l1.ImplicitArgs": {
                "full_name": "__wrappers__.execute_from_l1.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.execute_from_l1.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, ecdsa_ptr: starkware.cairo.common.cairo_builtins.SignatureBuiltin*, bitwise_ptr: starkware.cairo.common.cairo_builtins.BitwiseBuiltin*, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.execute_from_l1.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.execute_from_l1.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "cast([fp + (-3)] + 9 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__calldata_arg_call_array_data_len": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__calldata_arg_call_array_data_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-3)] + 8, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__calldata_arg_call_array_data_offset": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__calldata_arg_call_array_data_offset",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-3)] + 7, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__calldata_arg_call_array_selector": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__calldata_arg_call_array_selector",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-3)] + 6, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__calldata_arg_call_array_to": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__calldata_arg_call_array_to",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-3)] + 5, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__calldata_arg_credential_hash": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__calldata_arg_credential_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-3)] + 1, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__calldata_arg_from_address": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__calldata_arg_from_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__calldata_arg_transfer_calldata_amount_high": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__calldata_arg_transfer_calldata_amount_high",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-3)] + 4, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__calldata_arg_transfer_calldata_amount_low": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__calldata_arg_transfer_calldata_amount_low",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-3)] + 3, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__calldata_arg_transfer_calldata_recipient": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__calldata_arg_transfer_calldata_recipient",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-3)] + 2, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.execute_from_l1.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "cast([fp + (-3)] + 3, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "cast([fp + (-3)] + 4, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "cast([fp + (-3)] + 5, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "cast([fp + (-3)] + 6, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "cast([fp + (-3)] + 7, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "cast([fp + (-3)] + 8, felt*)"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "cast([fp + (-3)] + 9, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__temp21": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.__temp21",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 1
                        },
                        "pc": 460,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.__wrapped_func": {
                "destination": "__main__.execute_from_l1",
                "type": "alias"
            },
            "__wrappers__.execute_from_l1.bitwise_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin*",
                "full_name": "__wrappers__.execute_from_l1.bitwise_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-5)] + 4, starkware.cairo.common.cairo_builtins.BitwiseBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 477,
                        "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.BitwiseBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__wrappers__.execute_from_l1.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 477,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.execute_from_l1.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 477,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 477,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.ret_value": {
                "cairo_type": "()",
                "full_name": "__wrappers__.execute_from_l1.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 477,
                        "value": "[cast(ap + 0, ()*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.execute_from_l1.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 1
                        },
                        "pc": 479,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.execute_from_l1.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 1
                        },
                        "pc": 479,
                        "value": "cast(0, felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.execute_from_l1.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 38,
                            "offset": 0
                        },
                        "pc": 458,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 39,
                            "offset": 0
                        },
                        "pc": 477,
                        "value": "[cast(ap + (-5), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.execute_from_l1_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.get_credential_hash": {
                "decorators": [
                    "view"
                ],
                "pc": 245,
                "type": "function"
            },
            "__wrappers__.get_credential_hash.Args": {
                "full_name": "__wrappers__.get_credential_hash.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_credential_hash.ImplicitArgs": {
                "full_name": "__wrappers__.get_credential_hash.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_credential_hash.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, ecdsa_ptr: felt, bitwise_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_credential_hash.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.get_credential_hash.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_credential_hash.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 245,
                        "value": "cast([fp + (-3)] - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_credential_hash.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 245,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash.__wrapped_func": {
                "destination": "__main__.get_credential_hash",
                "type": "alias"
            },
            "__wrappers__.get_credential_hash.bitwise_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_credential_hash.bitwise_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 245,
                        "value": "[cast([fp + (-5)] + 4, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash.ecdsa_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_credential_hash.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 245,
                        "value": "[cast([fp + (-5)] + 3, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.get_credential_hash.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 245,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 28
                        },
                        "pc": 251,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_credential_hash.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 245,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 28
                        },
                        "pc": 251,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 36
                        },
                        "pc": 254,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash.ret_value": {
                "cairo_type": "(credential_hash: felt)",
                "full_name": "__wrappers__.get_credential_hash.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 28
                        },
                        "pc": 251,
                        "value": "[cast(ap + (-1), (credential_hash: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_credential_hash.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 36
                        },
                        "pc": 254,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_credential_hash.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 36
                        },
                        "pc": 254,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_credential_hash.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 0
                        },
                        "pc": 245,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 25,
                            "offset": 28
                        },
                        "pc": 251,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash_encode_return": {
                "decorators": [],
                "pc": 236,
                "type": "function"
            },
            "__wrappers__.get_credential_hash_encode_return.Args": {
                "full_name": "__wrappers__.get_credential_hash_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(credential_hash: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.get_credential_hash_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.get_credential_hash_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_credential_hash_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_credential_hash_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.get_credential_hash_encode_return.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_credential_hash_encode_return.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 1
                        },
                        "pc": 238,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 1
                        },
                        "pc": 239,
                        "value": "cast([fp] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash_encode_return.__return_value_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_credential_hash_encode_return.__return_value_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 1
                        },
                        "pc": 238,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash_encode_return.__temp13": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_credential_hash_encode_return.__temp13",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 2
                        },
                        "pc": 241,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.get_credential_hash_encode_return.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_credential_hash_encode_return.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 0
                        },
                        "pc": 236,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_credential_hash_encode_return.ret_value": {
                "cairo_type": "(credential_hash: felt)",
                "full_name": "__wrappers__.get_credential_hash_encode_return.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 24,
                            "offset": 0
                        },
                        "pc": 236,
                        "value": "[cast(fp + (-4), (credential_hash: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address": {
                "decorators": [
                    "view"
                ],
                "pc": 277,
                "type": "function"
            },
            "__wrappers__.get_l1_verifier_address.Args": {
                "full_name": "__wrappers__.get_l1_verifier_address.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_l1_verifier_address.ImplicitArgs": {
                "full_name": "__wrappers__.get_l1_verifier_address.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_l1_verifier_address.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, ecdsa_ptr: felt, bitwise_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_l1_verifier_address.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.get_l1_verifier_address.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_verifier_address.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 277,
                        "value": "cast([fp + (-3)] - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_l1_verifier_address.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 277,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address.__wrapped_func": {
                "destination": "__main__.get_l1_verifier_address",
                "type": "alias"
            },
            "__wrappers__.get_l1_verifier_address.bitwise_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_verifier_address.bitwise_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 277,
                        "value": "[cast([fp + (-5)] + 4, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address.ecdsa_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_verifier_address.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 277,
                        "value": "[cast([fp + (-5)] + 3, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.get_l1_verifier_address.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 277,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 28
                        },
                        "pc": 283,
                        "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_verifier_address.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 277,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 28
                        },
                        "pc": 283,
                        "value": "[cast(ap + (-2), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 36
                        },
                        "pc": 286,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address.ret_value": {
                "cairo_type": "(l1_verifier_address: felt)",
                "full_name": "__wrappers__.get_l1_verifier_address.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 28
                        },
                        "pc": 283,
                        "value": "[cast(ap + (-1), (l1_verifier_address: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_l1_verifier_address.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 36
                        },
                        "pc": 286,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_verifier_address.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 36
                        },
                        "pc": 286,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_l1_verifier_address.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 0
                        },
                        "pc": 277,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 28,
                            "offset": 28
                        },
                        "pc": 283,
                        "value": "[cast(ap + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address_encode_return": {
                "decorators": [],
                "pc": 268,
                "type": "function"
            },
            "__wrappers__.get_l1_verifier_address_encode_return.Args": {
                "full_name": "__wrappers__.get_l1_verifier_address_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(l1_verifier_address: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.get_l1_verifier_address_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.get_l1_verifier_address_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.get_l1_verifier_address_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.get_l1_verifier_address_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.get_l1_verifier_address_encode_return.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_l1_verifier_address_encode_return.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 1
                        },
                        "pc": 270,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 1
                        },
                        "pc": 271,
                        "value": "cast([fp] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address_encode_return.__return_value_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.get_l1_verifier_address_encode_return.__return_value_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 1
                        },
                        "pc": 270,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address_encode_return.__temp14": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_verifier_address_encode_return.__temp14",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 2
                        },
                        "pc": 273,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.get_l1_verifier_address_encode_return.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.get_l1_verifier_address_encode_return.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 0
                        },
                        "pc": 268,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.get_l1_verifier_address_encode_return.ret_value": {
                "cairo_type": "(l1_verifier_address: felt)",
                "full_name": "__wrappers__.get_l1_verifier_address_encode_return.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 27,
                            "offset": 0
                        },
                        "pc": 268,
                        "value": "[cast(fp + (-4), (l1_verifier_address: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash": {
                "decorators": [
                    "view"
                ],
                "pc": 377,
                "type": "function"
            },
            "__wrappers__.is_valid_credential_hash.Args": {
                "full_name": "__wrappers__.is_valid_credential_hash.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.is_valid_credential_hash.ImplicitArgs": {
                "full_name": "__wrappers__.is_valid_credential_hash.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.is_valid_credential_hash.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, ecdsa_ptr: starkware.cairo.common.cairo_builtins.SignatureBuiltin*, bitwise_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.is_valid_credential_hash.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.is_valid_credential_hash.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_credential_hash.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 377,
                        "value": "cast([fp + (-3)] + 1 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.__calldata_arg_credential_hash": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_credential_hash.__calldata_arg_credential_hash",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 377,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.is_valid_credential_hash.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 377,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 377,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.__temp20": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_credential_hash.__temp20",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 1
                        },
                        "pc": 379,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.__wrapped_func": {
                "destination": "__main__.is_valid_credential_hash",
                "type": "alias"
            },
            "__wrappers__.is_valid_credential_hash.bitwise_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_credential_hash.bitwise_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 377,
                        "value": "[cast([fp + (-5)] + 4, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__wrappers__.is_valid_credential_hash.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 377,
                        "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 42
                        },
                        "pc": 387,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.is_valid_credential_hash.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 377,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 42
                        },
                        "pc": 387,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_credential_hash.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 377,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 42
                        },
                        "pc": 387,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 50
                        },
                        "pc": 390,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.ret_value": {
                "cairo_type": "(is_valid: felt)",
                "full_name": "__wrappers__.is_valid_credential_hash.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 42
                        },
                        "pc": 387,
                        "value": "[cast(ap + (-1), (is_valid: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.is_valid_credential_hash.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 50
                        },
                        "pc": 390,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_credential_hash.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 50
                        },
                        "pc": 390,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.is_valid_credential_hash.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 0
                        },
                        "pc": 377,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 34,
                            "offset": 42
                        },
                        "pc": 387,
                        "value": "[cast(ap + (-5), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash_encode_return": {
                "decorators": [],
                "pc": 368,
                "type": "function"
            },
            "__wrappers__.is_valid_credential_hash_encode_return.Args": {
                "full_name": "__wrappers__.is_valid_credential_hash_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(is_valid: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.is_valid_credential_hash_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.is_valid_credential_hash_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.is_valid_credential_hash_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.is_valid_credential_hash_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.is_valid_credential_hash_encode_return.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.is_valid_credential_hash_encode_return.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 1
                        },
                        "pc": 370,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 1
                        },
                        "pc": 371,
                        "value": "cast([fp] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash_encode_return.__return_value_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.is_valid_credential_hash_encode_return.__return_value_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 1
                        },
                        "pc": 370,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash_encode_return.__temp19": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_credential_hash_encode_return.__temp19",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 2
                        },
                        "pc": 373,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.is_valid_credential_hash_encode_return.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_credential_hash_encode_return.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 0
                        },
                        "pc": 368,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_credential_hash_encode_return.ret_value": {
                "cairo_type": "(is_valid: felt)",
                "full_name": "__wrappers__.is_valid_credential_hash_encode_return.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 33,
                            "offset": 0
                        },
                        "pc": 368,
                        "value": "[cast(fp + (-4), (is_valid: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller": {
                "decorators": [
                    "view"
                ],
                "pc": 325,
                "type": "function"
            },
            "__wrappers__.is_valid_l1_caller.Args": {
                "full_name": "__wrappers__.is_valid_l1_caller.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.is_valid_l1_caller.ImplicitArgs": {
                "full_name": "__wrappers__.is_valid_l1_caller.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.is_valid_l1_caller.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, ecdsa_ptr: starkware.cairo.common.cairo_builtins.SignatureBuiltin*, bitwise_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.is_valid_l1_caller.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.is_valid_l1_caller.__calldata_actual_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_l1_caller.__calldata_actual_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 325,
                        "value": "cast([fp + (-3)] + 1 - [fp + (-3)], felt)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.__calldata_arg_l1_caller": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_l1_caller.__calldata_arg_l1_caller",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 325,
                        "value": "[cast([fp + (-3)], felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.__calldata_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.is_valid_l1_caller.__calldata_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 325,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 325,
                        "value": "cast([fp + (-3)] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.__temp17": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_l1_caller.__temp17",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 1
                        },
                        "pc": 327,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.__wrapped_func": {
                "destination": "__main__.is_valid_l1_caller",
                "type": "alias"
            },
            "__wrappers__.is_valid_l1_caller.bitwise_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_l1_caller.bitwise_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 325,
                        "value": "[cast([fp + (-5)] + 4, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "__wrappers__.is_valid_l1_caller.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 325,
                        "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 42
                        },
                        "pc": 335,
                        "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.pedersen_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                "full_name": "__wrappers__.is_valid_l1_caller.pedersen_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 325,
                        "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 42
                        },
                        "pc": 335,
                        "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_l1_caller.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 325,
                        "value": "[cast([fp + (-5)] + 2, felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 42
                        },
                        "pc": 335,
                        "value": "[cast(ap + (-3), felt*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 50
                        },
                        "pc": 338,
                        "value": "[cast(ap + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.ret_value": {
                "cairo_type": "(is_valid: felt)",
                "full_name": "__wrappers__.is_valid_l1_caller.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 42
                        },
                        "pc": 335,
                        "value": "[cast(ap + (-1), (is_valid: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.retdata": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.is_valid_l1_caller.retdata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 50
                        },
                        "pc": 338,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.retdata_size": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_l1_caller.retdata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 50
                        },
                        "pc": 338,
                        "value": "[cast(ap + (-2), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.is_valid_l1_caller.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 0
                        },
                        "pc": 325,
                        "value": "[cast([fp + (-5)], felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 31,
                            "offset": 42
                        },
                        "pc": 335,
                        "value": "[cast(ap + (-5), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller_encode_return": {
                "decorators": [],
                "pc": 316,
                "type": "function"
            },
            "__wrappers__.is_valid_l1_caller_encode_return.Args": {
                "full_name": "__wrappers__.is_valid_l1_caller_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(is_valid: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.is_valid_l1_caller_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.is_valid_l1_caller_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.is_valid_l1_caller_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.is_valid_l1_caller_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.is_valid_l1_caller_encode_return.__return_value_ptr": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.is_valid_l1_caller_encode_return.__return_value_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 1
                        },
                        "pc": 318,
                        "value": "[cast(fp, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 1
                        },
                        "pc": 319,
                        "value": "cast([fp] + 1, felt*)"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller_encode_return.__return_value_ptr_start": {
                "cairo_type": "felt*",
                "full_name": "__wrappers__.is_valid_l1_caller_encode_return.__return_value_ptr_start",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 1
                        },
                        "pc": 318,
                        "value": "[cast(fp, felt**)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller_encode_return.__temp16": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_l1_caller_encode_return.__temp16",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 2
                        },
                        "pc": 321,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.is_valid_l1_caller_encode_return.range_check_ptr": {
                "cairo_type": "felt",
                "full_name": "__wrappers__.is_valid_l1_caller_encode_return.range_check_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 0
                        },
                        "pc": 316,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "__wrappers__.is_valid_l1_caller_encode_return.ret_value": {
                "cairo_type": "(is_valid: felt)",
                "full_name": "__wrappers__.is_valid_l1_caller_encode_return.ret_value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 30,
                            "offset": 0
                        },
                        "pc": 316,
                        "value": "[cast(fp + (-4), (is_valid: felt)*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account": {
                "type": "namespace"
            },
            "openzeppelin.account.library.Account.Args": {
                "full_name": "openzeppelin.account.library.Account.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "openzeppelin.account.library.Account.ImplicitArgs": {
                "full_name": "openzeppelin.account.library.Account.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "openzeppelin.account.library.Account.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "openzeppelin.account.library.Account.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "openzeppelin.account.library.Account._execute_list": {
                "decorators": [],
                "pc": 78,
                "type": "function"
            },
            "openzeppelin.account.library.Account._execute_list.Args": {
                "full_name": "openzeppelin.account.library.Account._execute_list.Args",
                "members": {
                    "calls": {
                        "cairo_type": "openzeppelin.account.library.Call*",
                        "offset": 1
                    },
                    "calls_len": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "felt*",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "openzeppelin.account.library.Account._execute_list.ImplicitArgs": {
                "full_name": "openzeppelin.account.library.Account._execute_list.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "openzeppelin.account.library.Account._execute_list.Return": {
                "cairo_type": "(response_len: felt)",
                "type": "type_definition"
            },
            "openzeppelin.account.library.Account._execute_list.SIZEOF_LOCALS": {
                "type": "const",
                "value": 3
            },
            "openzeppelin.account.library.Account._execute_list.calls": {
                "cairo_type": "openzeppelin.account.library.Call*",
                "full_name": "openzeppelin.account.library.Account._execute_list.calls",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 0
                        },
                        "pc": 78,
                        "value": "[cast(fp + (-4), openzeppelin.account.library.Call**)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._execute_list.calls_len": {
                "cairo_type": "felt",
                "full_name": "openzeppelin.account.library.Account._execute_list.calls_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 0
                        },
                        "pc": 78,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._execute_list.res": {
                "cairo_type": "(retdata_size: felt, retdata: felt*)",
                "full_name": "openzeppelin.account.library.Account._execute_list.res",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 14
                        },
                        "pc": 93,
                        "value": "[cast(ap + (-2), (retdata_size: felt, retdata: felt*)*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 14
                        },
                        "pc": 95,
                        "value": "[cast(fp, (retdata_size: felt, retdata: felt*)*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._execute_list.response": {
                "cairo_type": "felt*",
                "full_name": "openzeppelin.account.library.Account._execute_list.response",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 0
                        },
                        "pc": 78,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._execute_list.response_len": {
                "cairo_type": "felt",
                "full_name": "openzeppelin.account.library.Account._execute_list.response_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 12,
                            "offset": 0
                        },
                        "pc": 109,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._execute_list.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "openzeppelin.account.library.Account._execute_list.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 0
                        },
                        "pc": 78,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 11
                        },
                        "pc": 93,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 12,
                            "offset": 0
                        },
                        "pc": 106,
                        "value": "[cast(ap + (-2), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 14
                        },
                        "pc": 93,
                        "value": "[cast(ap + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 14
                        },
                        "pc": 96,
                        "value": "[cast(fp + 2, felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 12,
                            "offset": 0
                        },
                        "pc": 109,
                        "value": "[cast(ap + (-2), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._execute_list.this_call": {
                "cairo_type": "openzeppelin.account.library.Call",
                "full_name": "openzeppelin.account.library.Account._execute_list.this_call",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 10,
                            "offset": 3
                        },
                        "pc": 86,
                        "value": "[cast([fp + (-4)], openzeppelin.account.library.Call*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call": {
                "decorators": [],
                "pc": 112,
                "type": "function"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.Args": {
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.Args",
                "members": {
                    "call_array": {
                        "cairo_type": "openzeppelin.account.library.AccountCallArray*",
                        "offset": 1
                    },
                    "call_array_len": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 2
                    },
                    "calls": {
                        "cairo_type": "openzeppelin.account.library.Call*",
                        "offset": 3
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.ImplicitArgs": {
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.__temp10": {
                "cairo_type": "felt",
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.__temp10",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 4
                        },
                        "pc": 123,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.__temp11": {
                "cairo_type": "felt",
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.__temp11",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 5
                        },
                        "pc": 124,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.__temp7": {
                "cairo_type": "felt",
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.__temp7",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 1
                        },
                        "pc": 117,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.__temp8": {
                "cairo_type": "felt",
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.__temp8",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 2
                        },
                        "pc": 119,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.__temp9": {
                "cairo_type": "felt",
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.__temp9",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 3
                        },
                        "pc": 121,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.call_array": {
                "cairo_type": "openzeppelin.account.library.AccountCallArray*",
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.call_array",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 0
                        },
                        "pc": 112,
                        "value": "[cast(fp + (-5), openzeppelin.account.library.AccountCallArray**)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.call_array_len": {
                "cairo_type": "felt",
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.call_array_len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 0
                        },
                        "pc": 112,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.calldata": {
                "cairo_type": "felt*",
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.calldata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 0
                        },
                        "pc": 112,
                        "value": "[cast(fp + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.calls": {
                "cairo_type": "openzeppelin.account.library.Call*",
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.calls",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 0
                        },
                        "pc": 112,
                        "value": "[cast(fp + (-3), openzeppelin.account.library.Call**)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.Account._from_call_array_to_call.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "openzeppelin.account.library.Account._from_call_array_to_call.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 13,
                            "offset": 0
                        },
                        "pc": 112,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 14,
                            "offset": 0
                        },
                        "pc": 135,
                        "value": "[cast(ap + (-1), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "openzeppelin.account.library.AccountCallArray": {
                "full_name": "openzeppelin.account.library.AccountCallArray",
                "members": {
                    "data_len": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "data_offset": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "to": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "openzeppelin.account.library.Account_public_key": {
                "type": "namespace"
            },
            "openzeppelin.account.library.Account_public_key.Args": {
                "full_name": "openzeppelin.account.library.Account_public_key.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "openzeppelin.account.library.Account_public_key.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "openzeppelin.account.library.Account_public_key.ImplicitArgs": {
                "full_name": "openzeppelin.account.library.Account_public_key.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "openzeppelin.account.library.Account_public_key.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "openzeppelin.account.library.Account_public_key.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "openzeppelin.account.library.Account_public_key.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "openzeppelin.account.library.Account_public_key.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "openzeppelin.account.library.Account_public_key.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "openzeppelin.account.library.Account_public_key.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "openzeppelin.account.library.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "openzeppelin.account.library.Call": {
                "full_name": "openzeppelin.account.library.Call",
                "members": {
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "calldata_len": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "to": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "openzeppelin.account.library.FALSE": {
                "destination": "starkware.cairo.common.bool.FALSE",
                "type": "alias"
            },
            "openzeppelin.account.library.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "openzeppelin.account.library.IACCOUNT_ID": {
                "destination": "openzeppelin.utils.constants.library.IACCOUNT_ID",
                "type": "alias"
            },
            "openzeppelin.account.library.IERC165_ID": {
                "destination": "openzeppelin.utils.constants.library.IERC165_ID",
                "type": "alias"
            },
            "openzeppelin.account.library.SignatureBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.SignatureBuiltin",
                "type": "alias"
            },
            "openzeppelin.account.library.TRUE": {
                "destination": "starkware.cairo.common.bool.TRUE",
                "type": "alias"
            },
            "openzeppelin.account.library.Uint256": {
                "destination": "starkware.cairo.common.uint256.Uint256",
                "type": "alias"
            },
            "openzeppelin.account.library.alloc": {
                "destination": "starkware.cairo.common.alloc.alloc",
                "type": "alias"
            },
            "openzeppelin.account.library.call_contract": {
                "destination": "starkware.starknet.common.syscalls.call_contract",
                "type": "alias"
            },
            "openzeppelin.account.library.get_caller_address": {
                "destination": "starkware.starknet.common.syscalls.get_caller_address",
                "type": "alias"
            },
            "openzeppelin.account.library.get_contract_address": {
                "destination": "starkware.starknet.common.syscalls.get_contract_address",
                "type": "alias"
            },
            "openzeppelin.account.library.get_fp_and_pc": {
                "destination": "starkware.cairo.common.registers.get_fp_and_pc",
                "type": "alias"
            },
            "openzeppelin.account.library.get_tx_info": {
                "destination": "starkware.starknet.common.syscalls.get_tx_info",
                "type": "alias"
            },
            "openzeppelin.account.library.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "openzeppelin.account.library.split_felt": {
                "destination": "starkware.cairo.common.math.split_felt",
                "type": "alias"
            },
            "openzeppelin.account.library.verify_ecdsa_signature": {
                "destination": "starkware.cairo.common.signature.verify_ecdsa_signature",
                "type": "alias"
            },
            "openzeppelin.account.library.verify_eth_signature_uint256": {
                "destination": "starkware.cairo.common.cairo_secp.signature.verify_eth_signature_uint256",
                "type": "alias"
            },
            "openzeppelin.utils.constants.library.DEFAULT_ADMIN_ROLE": {
                "type": "const",
                "value": 0
            },
            "openzeppelin.utils.constants.library.IACCESSCONTROL_ID": {
                "type": "const",
                "value": 2036718347
            },
            "openzeppelin.utils.constants.library.IACCOUNT_ID": {
                "type": "const",
                "value": 2792084853
            },
            "openzeppelin.utils.constants.library.IERC165_ID": {
                "type": "const",
                "value": 33540519
            },
            "openzeppelin.utils.constants.library.IERC721_ENUMERABLE_ID": {
                "type": "const",
                "value": 2014223715
            },
            "openzeppelin.utils.constants.library.IERC721_ID": {
                "type": "const",
                "value": 2158778573
            },
            "openzeppelin.utils.constants.library.IERC721_METADATA_ID": {
                "type": "const",
                "value": 1532892063
            },
            "openzeppelin.utils.constants.library.IERC721_RECEIVER_ID": {
                "type": "const",
                "value": 353073666
            },
            "openzeppelin.utils.constants.library.INVALID_ID": {
                "type": "const",
                "value": 4294967295
            },
            "openzeppelin.utils.constants.library.UINT8_MAX": {
                "type": "const",
                "value": 255
            },
            "starkware.cairo.common.alloc.alloc": {
                "decorators": [],
                "pc": 0,
                "type": "function"
            },
            "starkware.cairo.common.alloc.alloc.Args": {
                "full_name": "starkware.cairo.common.alloc.alloc.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.alloc.alloc.ImplicitArgs": {
                "full_name": "starkware.cairo.common.alloc.alloc.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.alloc.alloc.Return": {
                "cairo_type": "(ptr: felt*)",
                "type": "type_definition"
            },
            "starkware.cairo.common.alloc.alloc.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.bitwise.ALL_ONES": {
                "type": "const",
                "value": -106710729501573572985208420194530329073740042555888586719234
            },
            "starkware.cairo.common.bitwise.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.bool.FALSE": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.bool.TRUE": {
                "type": "const",
                "value": 1
            },
            "starkware.cairo.common.cairo_builtins.BitwiseBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "members": {
                    "x": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "x_and_y": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "x_or_y": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "x_xor_y": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "y": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.EcOpBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.EcOpBuiltin",
                "members": {
                    "m": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "p": {
                        "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
                        "offset": 0
                    },
                    "q": {
                        "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
                        "offset": 2
                    },
                    "r": {
                        "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
                        "offset": 5
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.EcPoint": {
                "destination": "starkware.cairo.common.ec_point.EcPoint",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_builtins.HashBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "members": {
                    "result": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "x": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "y": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.KeccakBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.KeccakBuiltin",
                "members": {
                    "input": {
                        "cairo_type": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                        "offset": 0
                    },
                    "output": {
                        "cairo_type": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                        "offset": 8
                    }
                },
                "size": 16,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.KeccakBuiltinState": {
                "destination": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_builtins.SignatureBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.SignatureBuiltin",
                "members": {
                    "message": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "pub_key": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_keccak.keccak.BLOCK_SIZE": {
                "destination": "starkware.cairo.common.cairo_keccak.packed_keccak.BLOCK_SIZE",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.BYTES_IN_WORD": {
                "type": "const",
                "value": 8
            },
            "starkware.cairo.common.cairo_keccak.keccak.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.KECCAK_CAPACITY_IN_WORDS": {
                "type": "const",
                "value": 8
            },
            "starkware.cairo.common.cairo_keccak.keccak.KECCAK_FULL_RATE_IN_BYTES": {
                "type": "const",
                "value": 136
            },
            "starkware.cairo.common.cairo_keccak.keccak.KECCAK_FULL_RATE_IN_WORDS": {
                "type": "const",
                "value": 17
            },
            "starkware.cairo.common.cairo_keccak.keccak.KECCAK_STATE_SIZE_FELTS": {
                "type": "const",
                "value": 25
            },
            "starkware.cairo.common.cairo_keccak.keccak.Uint256": {
                "destination": "starkware.cairo.common.uint256.Uint256",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.alloc": {
                "destination": "starkware.cairo.common.alloc.alloc",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.assert_lt": {
                "destination": "starkware.cairo.common.math.assert_lt",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.assert_nn": {
                "destination": "starkware.cairo.common.math.assert_nn",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.assert_nn_le": {
                "destination": "starkware.cairo.common.math.assert_nn_le",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.assert_not_zero": {
                "destination": "starkware.cairo.common.math.assert_not_zero",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.bitwise_and": {
                "destination": "starkware.cairo.common.bitwise.bitwise_and",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.bitwise_or": {
                "destination": "starkware.cairo.common.bitwise.bitwise_or",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.bitwise_xor": {
                "destination": "starkware.cairo.common.bitwise.bitwise_xor",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.memset": {
                "destination": "starkware.cairo.common.memset.memset",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.packed_keccak_func": {
                "destination": "starkware.cairo.common.cairo_keccak.packed_keccak.packed_keccak_func",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.pow": {
                "destination": "starkware.cairo.common.pow.pow",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.split_felt": {
                "destination": "starkware.cairo.common.math.split_felt",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.uint256_reverse_endian": {
                "destination": "starkware.cairo.common.uint256.uint256_reverse_endian",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.keccak.unsigned_div_rem": {
                "destination": "starkware.cairo.common.math.unsigned_div_rem",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.packed_keccak.ALL_ONES": {
                "type": "const",
                "value": -106710729501573572985208420194530329073740042555888586719234
            },
            "starkware.cairo.common.cairo_keccak.packed_keccak.BLOCK_SIZE": {
                "type": "const",
                "value": 3
            },
            "starkware.cairo.common.cairo_keccak.packed_keccak.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.packed_keccak.SHIFTS": {
                "type": "const",
                "value": 340282366920938463481821351505477763073
            },
            "starkware.cairo.common.cairo_keccak.packed_keccak.alloc": {
                "destination": "starkware.cairo.common.alloc.alloc",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_keccak.packed_keccak.get_fp_and_pc": {
                "destination": "starkware.cairo.common.registers.get_fp_and_pc",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.bigint.BASE": {
                "destination": "starkware.cairo.common.cairo_secp.constants.BASE",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.bigint.BigInt3": {
                "full_name": "starkware.cairo.common.cairo_secp.bigint.BigInt3",
                "members": {
                    "d0": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "d1": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "d2": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_secp.bigint.RC_BOUND": {
                "destination": "starkware.cairo.common.math_cmp.RC_BOUND",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.bigint.Uint256": {
                "destination": "starkware.cairo.common.uint256.Uint256",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.bigint.UnreducedBigInt3": {
                "full_name": "starkware.cairo.common.cairo_secp.bigint.UnreducedBigInt3",
                "members": {
                    "d0": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "d1": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "d2": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_secp.bigint.UnreducedBigInt5": {
                "full_name": "starkware.cairo.common.cairo_secp.bigint.UnreducedBigInt5",
                "members": {
                    "d0": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "d1": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "d2": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "d3": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "d4": {
                        "cairo_type": "felt",
                        "offset": 4
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_secp.bigint.assert_nn": {
                "destination": "starkware.cairo.common.math.assert_nn",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.bigint.assert_nn_le": {
                "destination": "starkware.cairo.common.math.assert_nn_le",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.bigint.unsigned_div_rem": {
                "destination": "starkware.cairo.common.math.unsigned_div_rem",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.constants.BASE": {
                "type": "const",
                "value": 77371252455336267181195264
            },
            "starkware.cairo.common.cairo_secp.constants.BETA": {
                "type": "const",
                "value": 7
            },
            "starkware.cairo.common.cairo_secp.constants.N0": {
                "type": "const",
                "value": 10428087374290690730508609
            },
            "starkware.cairo.common.cairo_secp.constants.N1": {
                "type": "const",
                "value": 77371252455330678278691517
            },
            "starkware.cairo.common.cairo_secp.constants.N2": {
                "type": "const",
                "value": 19342813113834066795298815
            },
            "starkware.cairo.common.cairo_secp.constants.P0": {
                "type": "const",
                "value": 77371252455336262886226991
            },
            "starkware.cairo.common.cairo_secp.constants.P1": {
                "type": "const",
                "value": 77371252455336267181195263
            },
            "starkware.cairo.common.cairo_secp.constants.P2": {
                "type": "const",
                "value": 19342813113834066795298815
            },
            "starkware.cairo.common.cairo_secp.constants.SECP_REM": {
                "type": "const",
                "value": 4294968273
            },
            "starkware.cairo.common.cairo_secp.ec.BigInt3": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.BigInt3",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.ec.EcPoint": {
                "full_name": "starkware.cairo.common.cairo_secp.ec.EcPoint",
                "members": {
                    "x": {
                        "cairo_type": "starkware.cairo.common.cairo_secp.bigint.BigInt3",
                        "offset": 0
                    },
                    "y": {
                        "cairo_type": "starkware.cairo.common.cairo_secp.bigint.BigInt3",
                        "offset": 3
                    }
                },
                "size": 6,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_secp.ec.UnreducedBigInt3": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.UnreducedBigInt3",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.ec.is_zero": {
                "destination": "starkware.cairo.common.cairo_secp.field.is_zero",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.ec.nondet_bigint3": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.nondet_bigint3",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.ec.unreduced_mul": {
                "destination": "starkware.cairo.common.cairo_secp.field.unreduced_mul",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.ec.unreduced_sqr": {
                "destination": "starkware.cairo.common.cairo_secp.field.unreduced_sqr",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.ec.verify_zero": {
                "destination": "starkware.cairo.common.cairo_secp.field.verify_zero",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.field.BASE": {
                "destination": "starkware.cairo.common.cairo_secp.constants.BASE",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.field.BigInt3": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.BigInt3",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.field.P0": {
                "destination": "starkware.cairo.common.cairo_secp.constants.P0",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.field.P1": {
                "destination": "starkware.cairo.common.cairo_secp.constants.P1",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.field.P2": {
                "destination": "starkware.cairo.common.cairo_secp.constants.P2",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.field.SECP_REM": {
                "destination": "starkware.cairo.common.cairo_secp.constants.SECP_REM",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.field.UnreducedBigInt3": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.UnreducedBigInt3",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.field.assert_nn_le": {
                "destination": "starkware.cairo.common.math.assert_nn_le",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.field.nondet_bigint3": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.nondet_bigint3",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.BASE": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.BASE",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.BETA": {
                "destination": "starkware.cairo.common.cairo_secp.constants.BETA",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.BigInt3": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.BigInt3",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.EcPoint": {
                "destination": "starkware.cairo.common.cairo_secp.ec.EcPoint",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.N0": {
                "destination": "starkware.cairo.common.cairo_secp.constants.N0",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.N1": {
                "destination": "starkware.cairo.common.cairo_secp.constants.N1",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.N2": {
                "destination": "starkware.cairo.common.cairo_secp.constants.N2",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.RC_BOUND": {
                "destination": "starkware.cairo.common.math_cmp.RC_BOUND",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.Uint256": {
                "destination": "starkware.cairo.common.uint256.Uint256",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.UnreducedBigInt3": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.UnreducedBigInt3",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.alloc": {
                "destination": "starkware.cairo.common.alloc.alloc",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.assert_nn": {
                "destination": "starkware.cairo.common.math.assert_nn",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.assert_nn_le": {
                "destination": "starkware.cairo.common.math.assert_nn_le",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.assert_not_zero": {
                "destination": "starkware.cairo.common.math.assert_not_zero",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.bigint_mul": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.bigint_mul",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.bigint_to_uint256": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.bigint_to_uint256",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.ec_add": {
                "destination": "starkware.cairo.common.cairo_secp.ec.ec_add",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.ec_mul": {
                "destination": "starkware.cairo.common.cairo_secp.ec.ec_mul",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.ec_negate": {
                "destination": "starkware.cairo.common.cairo_secp.ec.ec_negate",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.finalize_keccak": {
                "destination": "starkware.cairo.common.cairo_keccak.keccak.finalize_keccak",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.keccak_uint256s_bigend": {
                "destination": "starkware.cairo.common.cairo_keccak.keccak.keccak_uint256s_bigend",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.nondet_bigint3": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.nondet_bigint3",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.reduce": {
                "destination": "starkware.cairo.common.cairo_secp.field.reduce",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.uint256_to_bigint": {
                "destination": "starkware.cairo.common.cairo_secp.bigint.uint256_to_bigint",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.unreduced_mul": {
                "destination": "starkware.cairo.common.cairo_secp.field.unreduced_mul",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.unreduced_sqr": {
                "destination": "starkware.cairo.common.cairo_secp.field.unreduced_sqr",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.unsigned_div_rem": {
                "destination": "starkware.cairo.common.math.unsigned_div_rem",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.validate_reduced_field_element": {
                "destination": "starkware.cairo.common.cairo_secp.field.validate_reduced_field_element",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_secp.signature.verify_zero": {
                "destination": "starkware.cairo.common.cairo_secp.field.verify_zero",
                "type": "alias"
            },
            "starkware.cairo.common.dict_access.DictAccess": {
                "full_name": "starkware.cairo.common.dict_access.DictAccess",
                "members": {
                    "key": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "new_value": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "prev_value": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.cairo.common.ec.EcOpBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.EcOpBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.ec.EcPoint": {
                "destination": "starkware.cairo.common.ec_point.EcPoint",
                "type": "alias"
            },
            "starkware.cairo.common.ec.StarkCurve": {
                "type": "namespace"
            },
            "starkware.cairo.common.ec.StarkCurve.ALPHA": {
                "type": "const",
                "value": 1
            },
            "starkware.cairo.common.ec.StarkCurve.Args": {
                "full_name": "starkware.cairo.common.ec.StarkCurve.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.ec.StarkCurve.BETA": {
                "type": "const",
                "value": -476910135076337975234679399815567221425937815956490878998147463828055613816
            },
            "starkware.cairo.common.ec.StarkCurve.GEN_X": {
                "type": "const",
                "value": 874739451078007766457464989774322083649278607533249481151382481072868806602
            },
            "starkware.cairo.common.ec.StarkCurve.GEN_Y": {
                "type": "const",
                "value": 152666792071518830868575557812948353041420400780739481342941381225525861407
            },
            "starkware.cairo.common.ec.StarkCurve.ImplicitArgs": {
                "full_name": "starkware.cairo.common.ec.StarkCurve.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.ec.StarkCurve.ORDER": {
                "type": "const",
                "value": -96363463615509210819012598251359154898
            },
            "starkware.cairo.common.ec.StarkCurve.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.ec.StarkCurve.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.ec.is_quad_residue": {
                "destination": "starkware.cairo.common.math.is_quad_residue",
                "type": "alias"
            },
            "starkware.cairo.common.ec_point.EcPoint": {
                "full_name": "starkware.cairo.common.ec_point.EcPoint",
                "members": {
                    "x": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "y": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.hash.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.keccak_state.KeccakBuiltinState": {
                "full_name": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                "members": {
                    "s0": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "s1": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "s2": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "s3": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "s4": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "s5": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "s6": {
                        "cairo_type": "felt",
                        "offset": 6
                    },
                    "s7": {
                        "cairo_type": "felt",
                        "offset": 7
                    }
                },
                "size": 8,
                "type": "struct"
            },
            "starkware.cairo.common.math.FALSE": {
                "destination": "starkware.cairo.common.bool.FALSE",
                "type": "alias"
            },
            "starkware.cairo.common.math.TRUE": {
                "destination": "starkware.cairo.common.bool.TRUE",
                "type": "alias"
            },
            "starkware.cairo.common.math.assert_not_equal": {
                "decorators": [],
                "pc": 23,
                "type": "function"
            },
            "starkware.cairo.common.math.assert_not_equal.Args": {
                "full_name": "starkware.cairo.common.math.assert_not_equal.Args",
                "members": {
                    "a": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "b": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_not_equal.ImplicitArgs": {
                "full_name": "starkware.cairo.common.math.assert_not_equal.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_not_equal.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.math.assert_not_equal.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.math.assert_not_equal.__temp1": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_not_equal.__temp1",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 3,
                            "offset": 1
                        },
                        "pc": 24,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_not_equal.a": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_not_equal.a",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 3,
                            "offset": 0
                        },
                        "pc": 23,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_not_equal.b": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_not_equal.b",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 3,
                            "offset": 0
                        },
                        "pc": 23,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math.assert_not_zero": {
                "decorators": [],
                "pc": 18,
                "type": "function"
            },
            "starkware.cairo.common.math.assert_not_zero.Args": {
                "full_name": "starkware.cairo.common.math.assert_not_zero.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_not_zero.ImplicitArgs": {
                "full_name": "starkware.cairo.common.math.assert_not_zero.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_not_zero.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.math.assert_not_zero.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.math.assert_not_zero.value": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_not_zero.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 0
                        },
                        "pc": 18,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math_cmp.RC_BOUND": {
                "type": "const",
                "value": 340282366920938463463374607431768211456
            },
            "starkware.cairo.common.math_cmp.assert_le_felt": {
                "destination": "starkware.cairo.common.math.assert_le_felt",
                "type": "alias"
            },
            "starkware.cairo.common.math_cmp.assert_lt_felt": {
                "destination": "starkware.cairo.common.math.assert_lt_felt",
                "type": "alias"
            },
            "starkware.cairo.common.memcpy.memcpy": {
                "decorators": [],
                "pc": 3,
                "type": "function"
            },
            "starkware.cairo.common.memcpy.memcpy.Args": {
                "full_name": "starkware.cairo.common.memcpy.memcpy.Args",
                "members": {
                    "dst": {
                        "cairo_type": "felt*",
                        "offset": 0
                    },
                    "len": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "src": {
                        "cairo_type": "felt*",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.cairo.common.memcpy.memcpy.ImplicitArgs": {
                "full_name": "starkware.cairo.common.memcpy.memcpy.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.memcpy.memcpy.LoopFrame": {
                "full_name": "starkware.cairo.common.memcpy.memcpy.LoopFrame",
                "members": {
                    "dst": {
                        "cairo_type": "felt*",
                        "offset": 0
                    },
                    "src": {
                        "cairo_type": "felt*",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.memcpy.memcpy.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.memcpy.memcpy.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.memcpy.memcpy.__temp0": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.memcpy.memcpy.__temp0",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 3
                        },
                        "pc": 9,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.continue_copying": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.memcpy.memcpy.continue_copying",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 3
                        },
                        "pc": 10,
                        "value": "[cast(ap, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.dst": {
                "cairo_type": "felt*",
                "full_name": "starkware.cairo.common.memcpy.memcpy.dst",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 0
                        },
                        "pc": 3,
                        "value": "[cast(fp + (-5), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.frame": {
                "cairo_type": "starkware.cairo.common.memcpy.memcpy.LoopFrame",
                "full_name": "starkware.cairo.common.memcpy.memcpy.frame",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 2
                        },
                        "pc": 8,
                        "value": "[cast(ap + (-2), starkware.cairo.common.memcpy.memcpy.LoopFrame*)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 2
                        },
                        "pc": 8,
                        "value": "[cast(ap + (-2), starkware.cairo.common.memcpy.memcpy.LoopFrame*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.len": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.memcpy.memcpy.len",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 0
                        },
                        "pc": 3,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.loop": {
                "pc": 8,
                "type": "label"
            },
            "starkware.cairo.common.memcpy.memcpy.next_frame": {
                "cairo_type": "starkware.cairo.common.memcpy.memcpy.LoopFrame*",
                "full_name": "starkware.cairo.common.memcpy.memcpy.next_frame",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 3
                        },
                        "pc": 10,
                        "value": "cast(ap + 1, starkware.cairo.common.memcpy.memcpy.LoopFrame*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.memcpy.memcpy.src": {
                "cairo_type": "felt*",
                "full_name": "starkware.cairo.common.memcpy.memcpy.src",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 0
                        },
                        "pc": 3,
                        "value": "[cast(fp + (-4), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.pow.assert_le": {
                "destination": "starkware.cairo.common.math.assert_le",
                "type": "alias"
            },
            "starkware.cairo.common.pow.get_ap": {
                "destination": "starkware.cairo.common.registers.get_ap",
                "type": "alias"
            },
            "starkware.cairo.common.pow.get_fp_and_pc": {
                "destination": "starkware.cairo.common.registers.get_fp_and_pc",
                "type": "alias"
            },
            "starkware.cairo.common.registers.get_ap": {
                "destination": "starkware.cairo.lang.compiler.lib.registers.get_ap",
                "type": "alias"
            },
            "starkware.cairo.common.registers.get_fp_and_pc": {
                "destination": "starkware.cairo.lang.compiler.lib.registers.get_fp_and_pc",
                "type": "alias"
            },
            "starkware.cairo.common.signature.EcOpBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.EcOpBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.signature.EcPoint": {
                "destination": "starkware.cairo.common.ec_point.EcPoint",
                "type": "alias"
            },
            "starkware.cairo.common.signature.FALSE": {
                "destination": "starkware.cairo.common.bool.FALSE",
                "type": "alias"
            },
            "starkware.cairo.common.signature.SignatureBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.SignatureBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.signature.StarkCurve": {
                "destination": "starkware.cairo.common.ec.StarkCurve",
                "type": "alias"
            },
            "starkware.cairo.common.signature.TRUE": {
                "destination": "starkware.cairo.common.bool.TRUE",
                "type": "alias"
            },
            "starkware.cairo.common.signature.ec_add": {
                "destination": "starkware.cairo.common.ec.ec_add",
                "type": "alias"
            },
            "starkware.cairo.common.signature.ec_mul": {
                "destination": "starkware.cairo.common.ec.ec_mul",
                "type": "alias"
            },
            "starkware.cairo.common.signature.ec_sub": {
                "destination": "starkware.cairo.common.ec.ec_sub",
                "type": "alias"
            },
            "starkware.cairo.common.signature.is_x_on_curve": {
                "destination": "starkware.cairo.common.ec.is_x_on_curve",
                "type": "alias"
            },
            "starkware.cairo.common.signature.recover_y": {
                "destination": "starkware.cairo.common.ec.recover_y",
                "type": "alias"
            },
            "starkware.cairo.common.signature.verify_ecdsa_signature": {
                "decorators": [],
                "pc": 64,
                "type": "function"
            },
            "starkware.cairo.common.signature.verify_ecdsa_signature.Args": {
                "full_name": "starkware.cairo.common.signature.verify_ecdsa_signature.Args",
                "members": {
                    "message": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "public_key": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "signature_r": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "signature_s": {
                        "cairo_type": "felt",
                        "offset": 3
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "starkware.cairo.common.signature.verify_ecdsa_signature.ImplicitArgs": {
                "full_name": "starkware.cairo.common.signature.verify_ecdsa_signature.ImplicitArgs",
                "members": {
                    "ecdsa_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.signature.verify_ecdsa_signature.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.signature.verify_ecdsa_signature.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.signature.verify_ecdsa_signature.ecdsa_ptr": {
                "cairo_type": "starkware.cairo.common.cairo_builtins.SignatureBuiltin*",
                "full_name": "starkware.cairo.common.signature.verify_ecdsa_signature.ecdsa_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 64,
                        "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 66,
                        "value": "cast([fp + (-7)] + 2, starkware.cairo.common.cairo_builtins.SignatureBuiltin*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.signature.verify_ecdsa_signature.message": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.signature.verify_ecdsa_signature.message",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 64,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.signature.verify_ecdsa_signature.public_key": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.signature.verify_ecdsa_signature.public_key",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 64,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.signature.verify_ecdsa_signature.signature_r": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.signature.verify_ecdsa_signature.signature_r",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 64,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.signature.verify_ecdsa_signature.signature_s": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.signature.verify_ecdsa_signature.signature_s",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 8,
                            "offset": 0
                        },
                        "pc": 64,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.uint256.ALL_ONES": {
                "type": "const",
                "value": 340282366920938463463374607431768211455
            },
            "starkware.cairo.common.uint256.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.HALF_SHIFT": {
                "type": "const",
                "value": 18446744073709551616
            },
            "starkware.cairo.common.uint256.SHIFT": {
                "type": "const",
                "value": 340282366920938463463374607431768211456
            },
            "starkware.cairo.common.uint256.Uint256": {
                "full_name": "starkware.cairo.common.uint256.Uint256",
                "members": {
                    "high": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "low": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.uint256.assert_in_range": {
                "destination": "starkware.cairo.common.math.assert_in_range",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.assert_le": {
                "destination": "starkware.cairo.common.math.assert_le",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.assert_nn_le": {
                "destination": "starkware.cairo.common.math.assert_nn_le",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.assert_not_zero": {
                "destination": "starkware.cairo.common.math.assert_not_zero",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.bitwise_and": {
                "destination": "starkware.cairo.common.bitwise.bitwise_and",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.bitwise_or": {
                "destination": "starkware.cairo.common.bitwise.bitwise_or",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.bitwise_xor": {
                "destination": "starkware.cairo.common.bitwise.bitwise_xor",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.get_ap": {
                "destination": "starkware.cairo.common.registers.get_ap",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.get_fp_and_pc": {
                "destination": "starkware.cairo.common.registers.get_fp_and_pc",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.is_le": {
                "destination": "starkware.cairo.common.math_cmp.is_le",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.pow": {
                "destination": "starkware.cairo.common.pow.pow",
                "type": "alias"
            },
            "starkware.starknet.common.messages.SEND_MESSAGE_TO_L1_SELECTOR": {
                "destination": "starkware.starknet.common.syscalls.SEND_MESSAGE_TO_L1_SELECTOR",
                "type": "alias"
            },
            "starkware.starknet.common.messages.SendMessageToL1SysCall": {
                "destination": "starkware.starknet.common.syscalls.SendMessageToL1SysCall",
                "type": "alias"
            },
            "starkware.starknet.common.messages.send_message_to_l1": {
                "decorators": [],
                "pc": 69,
                "type": "function"
            },
            "starkware.starknet.common.messages.send_message_to_l1.Args": {
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.Args",
                "members": {
                    "payload": {
                        "cairo_type": "felt*",
                        "offset": 2
                    },
                    "payload_size": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "to_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.messages.send_message_to_l1.ImplicitArgs": {
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.messages.send_message_to_l1.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.starknet.common.messages.send_message_to_l1.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.messages.send_message_to_l1.__temp6": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.__temp6",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 1
                        },
                        "pc": 71,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.messages.send_message_to_l1.payload": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.payload",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 0
                        },
                        "pc": 69,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.messages.send_message_to_l1.payload_size": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.payload_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 0
                        },
                        "pc": 69,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.messages.send_message_to_l1.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 0
                        },
                        "pc": 69,
                        "value": "[cast(fp + (-6), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 1
                        },
                        "pc": 75,
                        "value": "cast([fp + (-6)] + 4, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.messages.send_message_to_l1.to_address": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.messages.send_message_to_l1.to_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 0
                        },
                        "pc": 69,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.storage.ADDR_BOUND": {
                "type": "const",
                "value": -106710729501573572985208420194530329073740042555888586719489
            },
            "starkware.starknet.common.storage.MAX_STORAGE_ITEM_SIZE": {
                "type": "const",
                "value": 256
            },
            "starkware.starknet.common.storage.assert_250_bit": {
                "destination": "starkware.cairo.common.math.assert_250_bit",
                "type": "alias"
            },
            "starkware.starknet.common.syscalls.CALL_CONTRACT_SELECTOR": {
                "type": "const",
                "value": 20853273475220472486191784820
            },
            "starkware.starknet.common.syscalls.CallContract": {
                "full_name": "starkware.starknet.common.syscalls.CallContract",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.CallContractRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
                        "offset": 5
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.CallContractRequest": {
                "full_name": "starkware.starknet.common.syscalls.CallContractRequest",
                "members": {
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "calldata_size": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "function_selector": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.CallContractResponse": {
                "full_name": "starkware.starknet.common.syscalls.CallContractResponse",
                "members": {
                    "retdata": {
                        "cairo_type": "felt*",
                        "offset": 1
                    },
                    "retdata_size": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DELEGATE_CALL_SELECTOR": {
                "type": "const",
                "value": 21167594061783206823196716140
            },
            "starkware.starknet.common.syscalls.DELEGATE_L1_HANDLER_SELECTOR": {
                "type": "const",
                "value": 23274015802972845247556842986379118667122
            },
            "starkware.starknet.common.syscalls.DEPLOY_SELECTOR": {
                "type": "const",
                "value": 75202468540281
            },
            "starkware.starknet.common.syscalls.Deploy": {
                "full_name": "starkware.starknet.common.syscalls.Deploy",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.DeployRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.DeployResponse",
                        "offset": 6
                    }
                },
                "size": 9,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DeployRequest": {
                "full_name": "starkware.starknet.common.syscalls.DeployRequest",
                "members": {
                    "class_hash": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "constructor_calldata": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "constructor_calldata_size": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "contract_address_salt": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "deploy_from_zero": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 6,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DeployResponse": {
                "full_name": "starkware.starknet.common.syscalls.DeployResponse",
                "members": {
                    "constructor_retdata": {
                        "cairo_type": "felt*",
                        "offset": 2
                    },
                    "constructor_retdata_size": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DictAccess": {
                "destination": "starkware.cairo.common.dict_access.DictAccess",
                "type": "alias"
            },
            "starkware.starknet.common.syscalls.EMIT_EVENT_SELECTOR": {
                "type": "const",
                "value": 1280709301550335749748
            },
            "starkware.starknet.common.syscalls.EmitEvent": {
                "full_name": "starkware.starknet.common.syscalls.EmitEvent",
                "members": {
                    "data": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "data_len": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "keys": {
                        "cairo_type": "felt*",
                        "offset": 2
                    },
                    "keys_len": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GET_BLOCK_NUMBER_SELECTOR": {
                "type": "const",
                "value": 1448089106835523001438702345020786
            },
            "starkware.starknet.common.syscalls.GET_BLOCK_TIMESTAMP_SELECTOR": {
                "type": "const",
                "value": 24294903732626645868215235778792757751152
            },
            "starkware.starknet.common.syscalls.GET_CALLER_ADDRESS_SELECTOR": {
                "type": "const",
                "value": 94901967781393078444254803017658102643
            },
            "starkware.starknet.common.syscalls.GET_CONTRACT_ADDRESS_SELECTOR": {
                "type": "const",
                "value": 6219495360805491471215297013070624192820083
            },
            "starkware.starknet.common.syscalls.GET_SEQUENCER_ADDRESS_SELECTOR": {
                "type": "const",
                "value": 1592190833581991703053805829594610833820054387
            },
            "starkware.starknet.common.syscalls.GET_TX_INFO_SELECTOR": {
                "type": "const",
                "value": 1317029390204112103023
            },
            "starkware.starknet.common.syscalls.GET_TX_SIGNATURE_SELECTOR": {
                "type": "const",
                "value": 1448089128652340074717162277007973
            },
            "starkware.starknet.common.syscalls.GetBlockNumber": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockNumber",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockNumberRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockNumberResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockNumberRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockNumberRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockNumberResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockNumberResponse",
                "members": {
                    "block_number": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockTimestamp": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockTimestamp",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestampRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestampResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockTimestampRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockTimestampRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockTimestampResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockTimestampResponse",
                "members": {
                    "block_timestamp": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetCallerAddress": {
                "full_name": "starkware.starknet.common.syscalls.GetCallerAddress",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddressRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddressResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetCallerAddressRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetCallerAddressRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetCallerAddressResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetCallerAddressResponse",
                "members": {
                    "caller_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetContractAddress": {
                "full_name": "starkware.starknet.common.syscalls.GetContractAddress",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetContractAddressRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetContractAddressResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetContractAddressRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetContractAddressRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetContractAddressResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetContractAddressResponse",
                "members": {
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetSequencerAddress": {
                "full_name": "starkware.starknet.common.syscalls.GetSequencerAddress",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetSequencerAddressRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetSequencerAddressResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetSequencerAddressRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetSequencerAddressRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetSequencerAddressResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetSequencerAddressResponse",
                "members": {
                    "sequencer_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxInfo": {
                "full_name": "starkware.starknet.common.syscalls.GetTxInfo",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxInfoRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetTxInfoRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxInfoResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetTxInfoResponse",
                "members": {
                    "tx_info": {
                        "cairo_type": "starkware.starknet.common.syscalls.TxInfo*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxSignature": {
                "full_name": "starkware.starknet.common.syscalls.GetTxSignature",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxSignatureRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxSignatureResponse",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxSignatureRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetTxSignatureRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxSignatureResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetTxSignatureResponse",
                "members": {
                    "signature": {
                        "cairo_type": "felt*",
                        "offset": 1
                    },
                    "signature_len": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.LIBRARY_CALL_L1_HANDLER_SELECTOR": {
                "type": "const",
                "value": 436233452754198157705746250789557519228244616562
            },
            "starkware.starknet.common.syscalls.LIBRARY_CALL_SELECTOR": {
                "type": "const",
                "value": 92376026794327011772951660
            },
            "starkware.starknet.common.syscalls.LibraryCall": {
                "full_name": "starkware.starknet.common.syscalls.LibraryCall",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.LibraryCallRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
                        "offset": 5
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.LibraryCallRequest": {
                "full_name": "starkware.starknet.common.syscalls.LibraryCallRequest",
                "members": {
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "calldata_size": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "class_hash": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "function_selector": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.SEND_MESSAGE_TO_L1_SELECTOR": {
                "type": "const",
                "value": 433017908768303439907196859243777073
            },
            "starkware.starknet.common.syscalls.STORAGE_READ_SELECTOR": {
                "type": "const",
                "value": 100890693370601760042082660
            },
            "starkware.starknet.common.syscalls.STORAGE_WRITE_SELECTOR": {
                "type": "const",
                "value": 25828017502874050592466629733
            },
            "starkware.starknet.common.syscalls.SendMessageToL1SysCall": {
                "full_name": "starkware.starknet.common.syscalls.SendMessageToL1SysCall",
                "members": {
                    "payload_ptr": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "payload_size": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "to_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageRead": {
                "full_name": "starkware.starknet.common.syscalls.StorageRead",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.StorageReadRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.StorageReadResponse",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageReadRequest": {
                "full_name": "starkware.starknet.common.syscalls.StorageReadRequest",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageReadResponse": {
                "full_name": "starkware.starknet.common.syscalls.StorageReadResponse",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageWrite": {
                "full_name": "starkware.starknet.common.syscalls.StorageWrite",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "value": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.TxInfo": {
                "full_name": "starkware.starknet.common.syscalls.TxInfo",
                "members": {
                    "account_contract_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "chain_id": {
                        "cairo_type": "felt",
                        "offset": 6
                    },
                    "max_fee": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "nonce": {
                        "cairo_type": "felt",
                        "offset": 7
                    },
                    "signature": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "signature_len": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "transaction_hash": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "version": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 8,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.call_contract": {
                "decorators": [],
                "pc": 29,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.call_contract.Args": {
                "full_name": "starkware.starknet.common.syscalls.call_contract.Args",
                "members": {
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "calldata_size": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "function_selector": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.call_contract.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.call_contract.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.call_contract.Return": {
                "cairo_type": "(retdata_size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.call_contract.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.call_contract.__temp2": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.call_contract.__temp2",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 1
                        },
                        "pc": 31,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.calldata": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.call_contract.calldata",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 0
                        },
                        "pc": 29,
                        "value": "[cast(fp + (-3), felt**)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.calldata_size": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.call_contract.calldata_size",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 0
                        },
                        "pc": 29,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.contract_address": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.call_contract.contract_address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 0
                        },
                        "pc": 29,
                        "value": "[cast(fp + (-6), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.function_selector": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.call_contract.function_selector",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 0
                        },
                        "pc": 29,
                        "value": "[cast(fp + (-5), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.response": {
                "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
                "full_name": "starkware.starknet.common.syscalls.call_contract.response",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 1
                        },
                        "pc": 36,
                        "value": "[cast([fp + (-7)] + 5, starkware.starknet.common.syscalls.CallContractResponse*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.syscall": {
                "cairo_type": "starkware.starknet.common.syscalls.CallContract",
                "full_name": "starkware.starknet.common.syscalls.call_contract.syscall",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 0
                        },
                        "pc": 29,
                        "value": "[cast([fp + (-7)], starkware.starknet.common.syscalls.CallContract*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.call_contract.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.call_contract.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 0
                        },
                        "pc": 29,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 1
                        },
                        "pc": 36,
                        "value": "cast([fp + (-7)] + 7, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_tx_info": {
                "decorators": [],
                "pc": 57,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.get_tx_info.Args": {
                "full_name": "starkware.starknet.common.syscalls.get_tx_info.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_tx_info.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.get_tx_info.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_tx_info.Return": {
                "cairo_type": "(tx_info: starkware.starknet.common.syscalls.TxInfo*)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.get_tx_info.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.get_tx_info.__temp5": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.get_tx_info.__temp5",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 1
                        },
                        "pc": 59,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_tx_info.response": {
                "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoResponse",
                "full_name": "starkware.starknet.common.syscalls.get_tx_info.response",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 1
                        },
                        "pc": 60,
                        "value": "[cast([fp + (-3)] + 1, starkware.starknet.common.syscalls.GetTxInfoResponse*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_tx_info.syscall": {
                "cairo_type": "starkware.starknet.common.syscalls.GetTxInfo",
                "full_name": "starkware.starknet.common.syscalls.get_tx_info.syscall",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 0
                        },
                        "pc": 57,
                        "value": "[cast([fp + (-3)], starkware.starknet.common.syscalls.GetTxInfo*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_tx_info.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.get_tx_info.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 0
                        },
                        "pc": 57,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 1
                        },
                        "pc": 60,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read": {
                "decorators": [],
                "pc": 41,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.storage_read.Args": {
                "full_name": "starkware.starknet.common.syscalls.storage_read.Args",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_read.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.storage_read.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_read.Return": {
                "cairo_type": "(value: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.storage_read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.storage_read.__temp3": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.storage_read.__temp3",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 1
                        },
                        "pc": 43,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read.address": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.storage_read.address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 0
                        },
                        "pc": 41,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read.response": {
                "cairo_type": "starkware.starknet.common.syscalls.StorageReadResponse",
                "full_name": "starkware.starknet.common.syscalls.storage_read.response",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 1
                        },
                        "pc": 45,
                        "value": "[cast([fp + (-4)] + 2, starkware.starknet.common.syscalls.StorageReadResponse*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read.syscall": {
                "cairo_type": "starkware.starknet.common.syscalls.StorageRead",
                "full_name": "starkware.starknet.common.syscalls.storage_read.syscall",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 0
                        },
                        "pc": 41,
                        "value": "[cast([fp + (-4)], starkware.starknet.common.syscalls.StorageRead*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.storage_read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 0
                        },
                        "pc": 41,
                        "value": "[cast(fp + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 1
                        },
                        "pc": 45,
                        "value": "cast([fp + (-4)] + 3, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_write": {
                "decorators": [],
                "pc": 49,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.storage_write.Args": {
                "full_name": "starkware.starknet.common.syscalls.storage_write.Args",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "value": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_write.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.storage_write.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.storage_write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.storage_write.__temp4": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.storage_write.__temp4",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 1
                        },
                        "pc": 51,
                        "value": "[cast(ap + (-1), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_write.address": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.storage_write.address",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 0
                        },
                        "pc": 49,
                        "value": "[cast(fp + (-4), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.storage_write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 0
                        },
                        "pc": 49,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 1
                        },
                        "pc": 54,
                        "value": "cast([fp + (-5)] + 3, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_write.value": {
                "cairo_type": "felt",
                "full_name": "starkware.starknet.common.syscalls.storage_write.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 0
                        },
                        "pc": 49,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            }
        },
        "main_scope": "__main__",
        "prime": "0x800000000000011000000000000000000000000000000000000000000000001",
        "reference_manager": {
            "references": [
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 0
                    },
                    "pc": 3,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 0
                    },
                    "pc": 3,
                    "value": "[cast(fp + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 0
                    },
                    "pc": 3,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 2
                    },
                    "pc": 8,
                    "value": "[cast(ap + (-2), starkware.cairo.common.memcpy.memcpy.LoopFrame*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 2
                    },
                    "pc": 8,
                    "value": "[cast(ap + (-2), starkware.cairo.common.memcpy.memcpy.LoopFrame*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 3
                    },
                    "pc": 9,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 3
                    },
                    "pc": 10,
                    "value": "[cast(ap, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 3
                    },
                    "pc": 10,
                    "value": "cast(ap + 1, starkware.cairo.common.memcpy.memcpy.LoopFrame*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 2,
                        "offset": 0
                    },
                    "pc": 18,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 3,
                        "offset": 0
                    },
                    "pc": 23,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 3,
                        "offset": 0
                    },
                    "pc": 23,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 3,
                        "offset": 1
                    },
                    "pc": 24,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 0
                    },
                    "pc": 29,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 0
                    },
                    "pc": 29,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 0
                    },
                    "pc": 29,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 0
                    },
                    "pc": 29,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 0
                    },
                    "pc": 29,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 0
                    },
                    "pc": 29,
                    "value": "[cast([fp + (-7)], starkware.starknet.common.syscalls.CallContract*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 1
                    },
                    "pc": 31,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 1
                    },
                    "pc": 36,
                    "value": "[cast([fp + (-7)] + 5, starkware.starknet.common.syscalls.CallContractResponse*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 1
                    },
                    "pc": 36,
                    "value": "cast([fp + (-7)] + 7, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 0
                    },
                    "pc": 41,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 0
                    },
                    "pc": 41,
                    "value": "[cast(fp + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 0
                    },
                    "pc": 41,
                    "value": "[cast([fp + (-4)], starkware.starknet.common.syscalls.StorageRead*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 1
                    },
                    "pc": 43,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 1
                    },
                    "pc": 45,
                    "value": "[cast([fp + (-4)] + 2, starkware.starknet.common.syscalls.StorageReadResponse*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 1
                    },
                    "pc": 45,
                    "value": "cast([fp + (-4)] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 0
                    },
                    "pc": 49,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 0
                    },
                    "pc": 49,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 0
                    },
                    "pc": 49,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 1
                    },
                    "pc": 51,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 1
                    },
                    "pc": 54,
                    "value": "cast([fp + (-5)] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 0
                    },
                    "pc": 57,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 0
                    },
                    "pc": 57,
                    "value": "[cast([fp + (-3)], starkware.starknet.common.syscalls.GetTxInfo*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 1
                    },
                    "pc": 59,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 1
                    },
                    "pc": 60,
                    "value": "[cast([fp + (-3)] + 1, starkware.starknet.common.syscalls.GetTxInfoResponse*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 1
                    },
                    "pc": 60,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 64,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 64,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 64,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 64,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 64,
                    "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 8,
                        "offset": 0
                    },
                    "pc": 66,
                    "value": "cast([fp + (-7)] + 2, starkware.cairo.common.cairo_builtins.SignatureBuiltin*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 0
                    },
                    "pc": 69,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 0
                    },
                    "pc": 69,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 0
                    },
                    "pc": 69,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 0
                    },
                    "pc": 69,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 1
                    },
                    "pc": 71,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 1
                    },
                    "pc": 75,
                    "value": "cast([fp + (-6)] + 4, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 0
                    },
                    "pc": 78,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 0
                    },
                    "pc": 78,
                    "value": "[cast(fp + (-4), openzeppelin.account.library.Call**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 0
                    },
                    "pc": 78,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 0
                    },
                    "pc": 78,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 3
                    },
                    "pc": 86,
                    "value": "[cast([fp + (-4)], openzeppelin.account.library.Call*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 14
                    },
                    "pc": 93,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 14
                    },
                    "pc": 93,
                    "value": "[cast(ap + (-2), (retdata_size: felt, retdata: felt*)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 14
                    },
                    "pc": 95,
                    "value": "[cast(fp, (retdata_size: felt, retdata: felt*)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 10,
                        "offset": 14
                    },
                    "pc": 96,
                    "value": "[cast(fp + 2, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 12,
                        "offset": 0
                    },
                    "pc": 109,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 12,
                        "offset": 0
                    },
                    "pc": 109,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 0
                    },
                    "pc": 112,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 0
                    },
                    "pc": 112,
                    "value": "[cast(fp + (-5), openzeppelin.account.library.AccountCallArray**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 0
                    },
                    "pc": 112,
                    "value": "[cast(fp + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 0
                    },
                    "pc": 112,
                    "value": "[cast(fp + (-3), openzeppelin.account.library.Call**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 0
                    },
                    "pc": 112,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 1
                    },
                    "pc": 117,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 2
                    },
                    "pc": 119,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 3
                    },
                    "pc": 121,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 4
                    },
                    "pc": 123,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 13,
                        "offset": 5
                    },
                    "pc": 124,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 14,
                        "offset": 0
                    },
                    "pc": 135,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 0
                    },
                    "pc": 136,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 0
                    },
                    "pc": 136,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 15,
                        "offset": 0
                    },
                    "pc": 136,
                    "value": "cast(535934413642861879633173071503157876936879887559062009374816726066425574972, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 0
                    },
                    "pc": 141,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 0
                    },
                    "pc": 141,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 0
                    },
                    "pc": 141,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 7
                    },
                    "pc": 145,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 7
                    },
                    "pc": 145,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 7
                    },
                    "pc": 145,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 14
                    },
                    "pc": 149,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 14
                    },
                    "pc": 149,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 15
                    },
                    "pc": 150,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 16
                    },
                    "pc": 151,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 17
                    },
                    "pc": 152,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 16,
                        "offset": 18
                    },
                    "pc": 153,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 0
                    },
                    "pc": 154,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 0
                    },
                    "pc": 154,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 0
                    },
                    "pc": 154,
                    "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 0
                    },
                    "pc": 154,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 7
                    },
                    "pc": 158,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 7
                    },
                    "pc": 158,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 7
                    },
                    "pc": 158,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 17,
                        "offset": 14
                    },
                    "pc": 163,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 166,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 166,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 18,
                        "offset": 0
                    },
                    "pc": 166,
                    "value": "cast(523567633644603146390646794176511706655875442833311520606000501741803313869, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 0
                    },
                    "pc": 171,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 0
                    },
                    "pc": 171,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 0
                    },
                    "pc": 171,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 7
                    },
                    "pc": 175,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 7
                    },
                    "pc": 175,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 7
                    },
                    "pc": 175,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 14
                    },
                    "pc": 179,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 14
                    },
                    "pc": 179,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 15
                    },
                    "pc": 180,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 16
                    },
                    "pc": 181,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 17
                    },
                    "pc": 182,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 19,
                        "offset": 18
                    },
                    "pc": 183,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 0
                    },
                    "pc": 184,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 0
                    },
                    "pc": 184,
                    "value": "[cast(fp + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 0
                    },
                    "pc": 184,
                    "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 0
                    },
                    "pc": 184,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 7
                    },
                    "pc": 188,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 7
                    },
                    "pc": 188,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 7
                    },
                    "pc": 188,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 20,
                        "offset": 14
                    },
                    "pc": 193,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 0
                    },
                    "pc": 196,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 0
                    },
                    "pc": 196,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 0
                    },
                    "pc": 196,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 0
                    },
                    "pc": 196,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 0
                    },
                    "pc": 196,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 25
                    },
                    "pc": 205,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 25
                    },
                    "pc": 205,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 25
                    },
                    "pc": 205,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 44
                    },
                    "pc": 208,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 44
                    },
                    "pc": 208,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 21,
                        "offset": 44
                    },
                    "pc": 208,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "[cast([fp + (-5)] + 3, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "[cast([fp + (-5)] + 4, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "[cast([fp + (-3)] + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 0
                    },
                    "pc": 209,
                    "value": "cast([fp + (-3)] + 2 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 1
                    },
                    "pc": 211,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 52
                    },
                    "pc": 219,
                    "value": "[cast(ap + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 52
                    },
                    "pc": 219,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 52
                    },
                    "pc": 219,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 52
                    },
                    "pc": 219,
                    "value": "[cast(ap + 0, ()*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 53
                    },
                    "pc": 221,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 22,
                        "offset": 53
                    },
                    "pc": 221,
                    "value": "cast(0, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 23,
                        "offset": 0
                    },
                    "pc": 230,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 23,
                        "offset": 0
                    },
                    "pc": 230,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 23,
                        "offset": 0
                    },
                    "pc": 230,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 23,
                        "offset": 23
                    },
                    "pc": 235,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 23,
                        "offset": 23
                    },
                    "pc": 235,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 23,
                        "offset": 23
                    },
                    "pc": 235,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 23,
                        "offset": 23
                    },
                    "pc": 235,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 0
                    },
                    "pc": 236,
                    "value": "[cast(fp + (-4), (credential_hash: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 0
                    },
                    "pc": 236,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 1
                    },
                    "pc": 238,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 1
                    },
                    "pc": 238,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 1
                    },
                    "pc": 239,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 24,
                        "offset": 2
                    },
                    "pc": 241,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 245,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 245,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 245,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 245,
                    "value": "[cast([fp + (-5)] + 3, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 245,
                    "value": "[cast([fp + (-5)] + 4, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 245,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 0
                    },
                    "pc": 245,
                    "value": "cast([fp + (-3)] - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 28
                    },
                    "pc": 251,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 28
                    },
                    "pc": 251,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 28
                    },
                    "pc": 251,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 28
                    },
                    "pc": 251,
                    "value": "[cast(ap + (-1), (credential_hash: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 36
                    },
                    "pc": 254,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 36
                    },
                    "pc": 254,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 25,
                        "offset": 36
                    },
                    "pc": 254,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 26,
                        "offset": 0
                    },
                    "pc": 262,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 26,
                        "offset": 0
                    },
                    "pc": 262,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 26,
                        "offset": 0
                    },
                    "pc": 262,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 26,
                        "offset": 23
                    },
                    "pc": 267,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 26,
                        "offset": 23
                    },
                    "pc": 267,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 26,
                        "offset": 23
                    },
                    "pc": 267,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 26,
                        "offset": 23
                    },
                    "pc": 267,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 0
                    },
                    "pc": 268,
                    "value": "[cast(fp + (-4), (l1_verifier_address: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 0
                    },
                    "pc": 268,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 1
                    },
                    "pc": 270,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 1
                    },
                    "pc": 270,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 1
                    },
                    "pc": 271,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 27,
                        "offset": 2
                    },
                    "pc": 273,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 277,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 277,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 277,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 277,
                    "value": "[cast([fp + (-5)] + 3, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 277,
                    "value": "[cast([fp + (-5)] + 4, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 277,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 0
                    },
                    "pc": 277,
                    "value": "cast([fp + (-3)] - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 28
                    },
                    "pc": 283,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 28
                    },
                    "pc": 283,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 28
                    },
                    "pc": 283,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 28
                    },
                    "pc": 283,
                    "value": "[cast(ap + (-1), (l1_verifier_address: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 36
                    },
                    "pc": 286,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 36
                    },
                    "pc": 286,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 28,
                        "offset": 36
                    },
                    "pc": 286,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 0
                    },
                    "pc": 294,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 0
                    },
                    "pc": 294,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 0
                    },
                    "pc": 294,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 0
                    },
                    "pc": 294,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 0
                    },
                    "pc": 294,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 28
                    },
                    "pc": 299,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 28
                    },
                    "pc": 299,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 28
                    },
                    "pc": 299,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 28
                    },
                    "pc": 299,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 29,
                        "offset": 29
                    },
                    "pc": 300,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 0
                    },
                    "pc": 316,
                    "value": "[cast(fp + (-4), (is_valid: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 0
                    },
                    "pc": 316,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 1
                    },
                    "pc": 318,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 1
                    },
                    "pc": 318,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 1
                    },
                    "pc": 319,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 30,
                        "offset": 2
                    },
                    "pc": 321,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 325,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 325,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 325,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 325,
                    "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 325,
                    "value": "[cast([fp + (-5)] + 4, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 325,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 325,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 325,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 0
                    },
                    "pc": 325,
                    "value": "cast([fp + (-3)] + 1 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 1
                    },
                    "pc": 327,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 42
                    },
                    "pc": 335,
                    "value": "[cast(ap + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 42
                    },
                    "pc": 335,
                    "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 42
                    },
                    "pc": 335,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 42
                    },
                    "pc": 335,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 42
                    },
                    "pc": 335,
                    "value": "[cast(ap + (-1), (is_valid: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 50
                    },
                    "pc": 338,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 50
                    },
                    "pc": 338,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 31,
                        "offset": 50
                    },
                    "pc": 338,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 0
                    },
                    "pc": 346,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 0
                    },
                    "pc": 346,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 0
                    },
                    "pc": 346,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 0
                    },
                    "pc": 346,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 0
                    },
                    "pc": 346,
                    "value": "[cast(fp + (-4), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 28
                    },
                    "pc": 351,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 28
                    },
                    "pc": 351,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 28
                    },
                    "pc": 351,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 28
                    },
                    "pc": 351,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 32,
                        "offset": 29
                    },
                    "pc": 352,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 0
                    },
                    "pc": 368,
                    "value": "[cast(fp + (-4), (is_valid: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 0
                    },
                    "pc": 368,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 1
                    },
                    "pc": 370,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 1
                    },
                    "pc": 370,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 1
                    },
                    "pc": 371,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 33,
                        "offset": 2
                    },
                    "pc": 373,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 377,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 377,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 377,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 377,
                    "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 377,
                    "value": "[cast([fp + (-5)] + 4, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 377,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 377,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 377,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 0
                    },
                    "pc": 377,
                    "value": "cast([fp + (-3)] + 1 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 1
                    },
                    "pc": 379,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 42
                    },
                    "pc": 387,
                    "value": "[cast(ap + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 42
                    },
                    "pc": 387,
                    "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 42
                    },
                    "pc": 387,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 42
                    },
                    "pc": 387,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 42
                    },
                    "pc": 387,
                    "value": "[cast(ap + (-1), (is_valid: felt)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 50
                    },
                    "pc": 390,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 50
                    },
                    "pc": 390,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 34,
                        "offset": 50
                    },
                    "pc": 390,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-11), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-10), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-9), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-8), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-7), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-5), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-16), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-15), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-14), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-13), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 0
                    },
                    "pc": 398,
                    "value": "[cast(fp + (-12), starkware.cairo.common.cairo_builtins.BitwiseBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 45
                    },
                    "pc": 407,
                    "value": "[cast(ap + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 45
                    },
                    "pc": 407,
                    "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 45
                    },
                    "pc": 407,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 45
                    },
                    "pc": 407,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 45
                    },
                    "pc": 407,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 86
                    },
                    "pc": 416,
                    "value": "[cast(ap + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 86
                    },
                    "pc": 416,
                    "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 86
                    },
                    "pc": 416,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 86
                    },
                    "pc": 416,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 86
                    },
                    "pc": 416,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 86
                    },
                    "pc": 417,
                    "value": "[cast(fp, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 86
                    },
                    "pc": 418,
                    "value": "[cast(fp + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 86
                    },
                    "pc": 419,
                    "value": "[cast(fp + 2, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 86
                    },
                    "pc": 421,
                    "value": "cast(1, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 89
                    },
                    "pc": 423,
                    "value": "[cast(ap + (-1), openzeppelin.account.library.AccountCallArray**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 89
                    },
                    "pc": 427,
                    "value": "cast(2, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 92
                    },
                    "pc": 429,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 95
                    },
                    "pc": 434,
                    "value": "[cast(ap + (-1), openzeppelin.account.library.Call**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 35,
                        "offset": 95
                    },
                    "pc": 435,
                    "value": "[cast(fp + 3, openzeppelin.account.library.Call**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 36,
                        "offset": 0
                    },
                    "pc": 443,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 36,
                        "offset": 0
                    },
                    "pc": 443,
                    "value": "cast(1, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 36,
                        "offset": 3
                    },
                    "pc": 445,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 0
                    },
                    "pc": 452,
                    "value": "[cast(ap + (-2), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 37,
                        "offset": 0
                    },
                    "pc": 452,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-5)] + 4, starkware.cairo.common.cairo_builtins.BitwiseBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-3)] + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "cast([fp + (-3)] + 2, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-3)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "cast([fp + (-3)] + 3, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-3)] + 3, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "cast([fp + (-3)] + 4, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-3)] + 4, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "cast([fp + (-3)] + 5, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-3)] + 5, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "cast([fp + (-3)] + 6, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-3)] + 6, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "cast([fp + (-3)] + 7, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-3)] + 7, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "cast([fp + (-3)] + 8, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "[cast([fp + (-3)] + 8, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "cast([fp + (-3)] + 9, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 0
                    },
                    "pc": 458,
                    "value": "cast([fp + (-3)] + 9 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 38,
                        "offset": 1
                    },
                    "pc": 460,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 477,
                    "value": "[cast(ap + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 477,
                    "value": "[cast(ap + (-4), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 477,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 477,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 477,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.BitwiseBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 0
                    },
                    "pc": 477,
                    "value": "[cast(ap + 0, ()*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 1
                    },
                    "pc": 479,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 39,
                        "offset": 1
                    },
                    "pc": 479,
                    "value": "cast(0, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 488,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 488,
                    "value": "[cast(fp + (-5), openzeppelin.account.library.AccountCallArray**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 488,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 488,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 488,
                    "value": "[cast(fp + (-10), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 488,
                    "value": "[cast(fp + (-9), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 488,
                    "value": "[cast(fp + (-8), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 488,
                    "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 0
                    },
                    "pc": 490,
                    "value": "cast(0, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 40,
                        "offset": 3
                    },
                    "pc": 492,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 0
                    },
                    "pc": 500,
                    "value": "[cast(fp + (-5), (response_len: felt, response: felt*)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 0
                    },
                    "pc": 500,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 3
                    },
                    "pc": 502,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 3
                    },
                    "pc": 502,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 3
                    },
                    "pc": 503,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 3
                    },
                    "pc": 506,
                    "value": "[cast(fp + 1, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 3
                    },
                    "pc": 506,
                    "value": "cast([fp] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 4
                    },
                    "pc": 508,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 41,
                        "offset": 4
                    },
                    "pc": 509,
                    "value": "[cast(fp + 2, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 3
                    },
                    "pc": 521,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 3
                    },
                    "pc": 521,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 3
                    },
                    "pc": 521,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 3
                    },
                    "pc": 521,
                    "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 3
                    },
                    "pc": 521,
                    "value": "[cast([fp + (-5)] + 4, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 3
                    },
                    "pc": 521,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 3
                    },
                    "pc": 521,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 3
                    },
                    "pc": 521,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 4
                    },
                    "pc": 522,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 5
                    },
                    "pc": 523,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 5
                    },
                    "pc": 524,
                    "value": "cast([[fp + (-5)] + 2] + 1, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 5
                    },
                    "pc": 524,
                    "value": "cast([fp + (-3)] + 1, openzeppelin.account.library.AccountCallArray*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 6
                    },
                    "pc": 526,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 7
                    },
                    "pc": 527,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 8
                    },
                    "pc": 529,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 9
                    },
                    "pc": 530,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 9
                    },
                    "pc": 530,
                    "value": "[cast([ap + (-1)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 9
                    },
                    "pc": 530,
                    "value": "cast([ap + (-1)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 10
                    },
                    "pc": 531,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 11
                    },
                    "pc": 532,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 11
                    },
                    "pc": 533,
                    "value": "cast([[fp + (-5)] + 2] + 2, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 11
                    },
                    "pc": 533,
                    "value": "cast([ap + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 12
                    },
                    "pc": 535,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 13
                    },
                    "pc": 536,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 14
                    },
                    "pc": 537,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 14
                    },
                    "pc": 537,
                    "value": "cast([ap + (-1)] - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 15
                    },
                    "pc": 539,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 34
                    },
                    "pc": 552,
                    "value": "[cast(ap + (-6), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 34
                    },
                    "pc": 552,
                    "value": "[cast(ap + (-5), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 34
                    },
                    "pc": 552,
                    "value": "[cast(ap + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 34
                    },
                    "pc": 552,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 34
                    },
                    "pc": 552,
                    "value": "[cast(ap + (-2), (response_len: felt, response: felt*)*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 34
                    },
                    "pc": 553,
                    "value": "[cast(fp, felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 34
                    },
                    "pc": 554,
                    "value": "[cast(fp + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 43,
                        "offset": 34
                    },
                    "pc": 555,
                    "value": "[cast(fp + 2, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 558,
                    "value": "[cast(ap + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 558,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 44,
                        "offset": 0
                    },
                    "pc": 558,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-6), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-5), openzeppelin.account.library.AccountCallArray**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-10), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-9), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-8), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 45,
                        "offset": 0
                    },
                    "pc": 566,
                    "value": "[cast(fp + (-7), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 571,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 571,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 571,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 571,
                    "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 571,
                    "value": "[cast([fp + (-5)] + 4, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 571,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 571,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 0
                    },
                    "pc": 571,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 1
                    },
                    "pc": 572,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 2
                    },
                    "pc": 573,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 2
                    },
                    "pc": 574,
                    "value": "cast([[fp + (-5)] + 2] + 1, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 2
                    },
                    "pc": 574,
                    "value": "cast([fp + (-3)] + 1, openzeppelin.account.library.AccountCallArray*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 3
                    },
                    "pc": 576,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 4
                    },
                    "pc": 577,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 5
                    },
                    "pc": 579,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 6
                    },
                    "pc": 580,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 6
                    },
                    "pc": 580,
                    "value": "[cast([ap + (-1)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 6
                    },
                    "pc": 580,
                    "value": "cast([ap + (-1)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 7
                    },
                    "pc": 581,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 8
                    },
                    "pc": 582,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 8
                    },
                    "pc": 583,
                    "value": "cast([[fp + (-5)] + 2] + 2, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 8
                    },
                    "pc": 583,
                    "value": "cast([ap + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 9
                    },
                    "pc": 585,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 10
                    },
                    "pc": 586,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 11
                    },
                    "pc": 587,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 11
                    },
                    "pc": 587,
                    "value": "cast([ap + (-1)] - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 12
                    },
                    "pc": 589,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 26
                    },
                    "pc": 602,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 26
                    },
                    "pc": 602,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 26
                    },
                    "pc": 602,
                    "value": "[cast(ap + (-2), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 26
                    },
                    "pc": 602,
                    "value": "[cast(ap + (-1), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 26
                    },
                    "pc": 602,
                    "value": "[cast(ap + 0, ()*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 27
                    },
                    "pc": 604,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 46,
                        "offset": 27
                    },
                    "pc": 604,
                    "value": "cast(0, felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 613,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 613,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 613,
                    "value": "[cast(fp + (-6), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 613,
                    "value": "[cast(fp + (-5), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 47,
                        "offset": 0
                    },
                    "pc": 613,
                    "value": "[cast(fp + (-4), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-5)], felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-5)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-5)] + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-5)] + 3, starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-5)] + 4, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "[cast([fp + (-3)], felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "cast([fp + (-3)] + 1, felt*)"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 0
                    },
                    "pc": 618,
                    "value": "cast([fp + (-3)] + 1 - [fp + (-3)], felt)"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 1
                    },
                    "pc": 620,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 12
                    },
                    "pc": 628,
                    "value": "[cast(ap + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 12
                    },
                    "pc": 628,
                    "value": "[cast(ap + (-3), starkware.cairo.common.cairo_builtins.HashBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 12
                    },
                    "pc": 628,
                    "value": "[cast(ap + (-2), starkware.cairo.common.cairo_builtins.SignatureBuiltin**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 12
                    },
                    "pc": 628,
                    "value": "[cast(ap + (-1), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 12
                    },
                    "pc": 628,
                    "value": "[cast(ap + 0, ()*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 13
                    },
                    "pc": 630,
                    "value": "[cast(ap + (-1), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 48,
                        "offset": 13
                    },
                    "pc": 630,
                    "value": "cast(0, felt)"
                }
            ]
        }
    }
}

export default contract;