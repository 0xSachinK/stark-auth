%lang starknet

from starkware.cairo.common.bool import TRUE, FALSE
from starkware.cairo.common.cairo_builtins import BitwiseBuiltin, HashBuiltin, SignatureBuiltin
from starkware.cairo.common.math import assert_not_equal, assert_not_zero
from starkware.cairo.common.signature import verify_ecdsa_signature
from starkware.starknet.common.syscalls import get_tx_info
from starkware.cairo.common.alloc import alloc
from starkware.starknet.common.messages import send_message_to_l1

from openzeppelin.account.library import Account, Call, AccountCallArray, Account_public_key

// https://medium.com/starkware/starknet-alpha-0-10-0-923007290470

//
// STORAGE VARIABLES
//

@storage_var
func _credential_hash() -> (_credential_hash: felt){
}

@storage_var
func _l1_verifier_address() -> (_l1_verifier_address: felt){
}


//
// CONSTRUCTOR
//

@constructor
func constructor{
        syscall_ptr : felt*,
        pedersen_ptr : HashBuiltin*,
        range_check_ptr
    }(
        credential_hash: felt,
        l1_verifier_address: felt
    ){
    with_attr error_message("Credential hash is zero"){
        assert_not_zero(credential_hash);
    }
    // Todo: Initialize account here?
    _credential_hash.write(credential_hash);
    _l1_verifier_address.write(l1_verifier_address);
    return ();
}


//
// GETTERS
//

@view
func get_credential_hash{
        syscall_ptr : felt*,
        pedersen_ptr : HashBuiltin*,
        range_check_ptr
    }() -> (credential_hash: felt){
    let (credential_hash) = _credential_hash.read();
    return (credential_hash=credential_hash);
}

@view
func get_l1_verifier_address{
        syscall_ptr : felt*,
        pedersen_ptr : HashBuiltin*,
        range_check_ptr
    }() -> (l1_verifier_address: felt){
    let (l1_verifier_address) = _l1_verifier_address.read();
    return (l1_verifier_address=l1_verifier_address);
}

//
// GUARD FUNCTIONS
//

@view
func is_valid_l1_caller{
        syscall_ptr: felt*,
        pedersen_ptr: HashBuiltin*,
        range_check_ptr,
        ecdsa_ptr: SignatureBuiltin*
    }(
        l1_caller
    ) -> (is_valid: felt){
    let (l1_verifier_address) = get_l1_verifier_address();
    if (l1_caller == l1_verifier_address){
        return (is_valid=TRUE);
    } else {
        return (is_valid=FALSE);
    }
}



@view
func is_valid_credential_hash{
        syscall_ptr: felt*,
        pedersen_ptr: HashBuiltin*,
        range_check_ptr,
        ecdsa_ptr: SignatureBuiltin*
    }(
        credential_hash
    ) -> (is_valid: felt){
    let (_credential_hash) = get_credential_hash();
    if (_credential_hash == credential_hash){
        return (is_valid=TRUE);
    } else {
        return (is_valid=FALSE);
    }
}

//
// ENTRY POINT
//

@l1_handler
func execute_from_l1{
        syscall_ptr : felt*,
        pedersen_ptr : HashBuiltin*,
        range_check_ptr,
        ecdsa_ptr : SignatureBuiltin*,
        bitwise_ptr : BitwiseBuiltin*
    }(
        from_address: felt,
        credential_hash: felt,
        transfer_calldata_recipient: felt,
        transfer_calldata_amount_low: felt,
        transfer_calldata_amount_high: felt,
        call_array_to: felt,
        call_array_selector: felt,
        call_array_data_offset: felt,
        call_array_data_len: felt
    ){
    alloc_locals;

    with_attr error_message("Account: Invalid L1 caller"){
        let (is_valid) = is_valid_l1_caller(from_address);
        assert is_valid = TRUE;
    }

    with_attr error_message("Account: Invalid credential hash"){
        let (is_valid) = is_valid_credential_hash(credential_hash);
        assert is_valid = TRUE;
    }

    let call_array_len = 1;
    let (call_array: AccountCallArray*) = alloc();
    assert call_array[0] = AccountCallArray(to=call_array_to, selector=call_array_selector, data_offset=call_array_data_offset, data_len=call_array_data_len);

    let calldata_len = 2;
    let (calldata_array: felt*) = alloc();
    assert calldata_array[0] = transfer_calldata_recipient;
    assert calldata_array[1] = transfer_calldata_amount_low;
    assert calldata_array[2] = transfer_calldata_amount_high;

    let (calls: Call*) = alloc();
    Account._from_call_array_to_call(call_array_len, call_array, calldata_array, calls);
    let calls_len = call_array_len;

    // execute call
    let (response: felt*) = alloc();
    let (response_len) = Account._execute_list(calls_len, calls, response);

    return ();
    // L1 handlers can't have return statements.;
    // return (response_len=response_len, response=response);
}


@external
func __execute__{
        syscall_ptr : felt*,
        pedersen_ptr : HashBuiltin*,
        range_check_ptr,
        ecdsa_ptr : SignatureBuiltin*
    }(
        call_array_len: felt,
        call_array: AccountCallArray*,
        calldata_len: felt,
        calldata: felt*
    ) -> (response_len: felt, response: felt*){
    alloc_locals;

    with_attr error_message("Account: Direct execution not allowed"){
    }
    
    let response_len = 0;
    let (response: felt*) = alloc();
    return (response_len=response_len, response=response);
}

@external
func __validate__{
        syscall_ptr : felt*,
        pedersen_ptr : HashBuiltin*,
        range_check_ptr,
        ecdsa_ptr : SignatureBuiltin*
    }(
        call_array_len: felt,
        call_array: AccountCallArray*,
        calldata_len: felt,
        calldata: felt*
    ) -> (){

    with_attr error_message("Account: Direct execution not allowed"){
    }
    return ();
}

@external
func __validate_declare__{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    ecdsa_ptr: SignatureBuiltin*,
    range_check_ptr
} (
    class_hash: felt
) {
    return ();
}
