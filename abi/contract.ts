const abi = [
  {
    inputs: [
      { internalType: "address", name: "starknetCore_", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "executeSelector",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[2]", name: "a", type: "uint256[2]" },
      { internalType: "uint256[2][2]", name: "b", type: "uint256[2][2]" },
      { internalType: "uint256[2]", name: "c", type: "uint256[2]" },
      { internalType: "uint256[8]", name: "input", type: "uint256[8]" },
      { internalType: "uint256", name: "l2ContractAddress", type: "uint256" },
    ],
    name: "execute_on_l2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_executeSelector", type: "uint256" },
    ],
    name: "setExecuteSelector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[2]", name: "a", type: "uint256[2]" },
      { internalType: "uint256[2][2]", name: "b", type: "uint256[2][2]" },
      { internalType: "uint256[2]", name: "c", type: "uint256[2]" },
      { internalType: "uint256[8]", name: "input", type: "uint256[8]" },
    ],
    name: "verifyProof",
    outputs: [{ internalType: "bool", name: "r", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];

export default abi;
