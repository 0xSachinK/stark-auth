pragma solidity ^0.8.0;


import "../circuit/verifier.sol";
import "./interfaces/IStarknetCore.sol";


contract AuthVerifier is Verifier {

    uint256 private EXECUTE_SELECTOR;
    // The StarkNet core contract.
    IStarknetCore public starknetCore;

    constructor(
        address starknetCore_
    ) public Verifier() {
        starknetCore = IStarknetCore(starknetCore_);
    }

    function setStarknetCore(address starknetCore_) external {
        starknetCore = IStarknetCore(starknetCore_);
    }

    function executeSelector() public view virtual returns (uint256) {
        return EXECUTE_SELECTOR;
    }

    function setExecuteSelector(uint256 _executeSelector) external { // onlyOwner {
        EXECUTE_SELECTOR = _executeSelector;
    }


    function execute_on_l2(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[8] memory input,
        uint256 l2ContractAddress
    ) external payable {
        
        require(
            verifyProof(a, b, c, input),
            "Invalid proof"
        );

        uint256 credentialHash = input[0];
        uint256 transfer_calldata_recipient = input[1];
        uint256 transfer_calldata_amount_low = input[2];
        uint256 transfer_calldata_amount_high = input[3];
        uint256 call_array_to = input[4];
        uint256 call_array_selector = input[5];
        uint256 call_array_data_offset = input[6];
        uint256 call_array_data_len = input[7];

        uint256[] memory payload = new uint256[](8);
        payload[0] = credentialHash;
        payload[1] = transfer_calldata_recipient;
        payload[2] = transfer_calldata_amount_low;
        payload[3] = transfer_calldata_amount_high;
        payload[4] = call_array_to;
        payload[5] = call_array_selector;
        payload[6] = call_array_data_offset;
        payload[7] = call_array_data_len;

        starknetCore.sendMessageToL2{value: msg.value}(
            l2ContractAddress,
            EXECUTE_SELECTOR,
            payload
        );
    }
}