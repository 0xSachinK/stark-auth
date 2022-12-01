// import snarkjs from '../node_modules/snarkjs/build/snarkjs.js'

declare var snarkjs: any;

export const calculateProofAndGenerateCalldata = async (
  inputs: Record<string, any>,
  circuitWasmURL: string,
  circuitZKeyUrl: string
) => {
  console.log("Starting to generate proof: V2");
  try {
    console.log("inputs:", inputs);

    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      {
        password: inputs.password,
        calldata: inputs.calldata,
        call_array: inputs.call_array,
      },
      circuitWasmURL,
      circuitZKeyUrl
    );

    const editedPublicSignals = unstringifyBigInts(publicSignals);
    const editedProof = unstringifyBigInts(proof);
    const calldata = await snarkjs.groth16.exportSolidityCallData(
      editedProof,
      editedPublicSignals
    );

    const argv = calldata
      .replace(/["[\]\s]/g, "")
      .split(",")
      .map((x) => BigInt(x).toString());

    const a = [argv[0], argv[1]];
    const b = [
      [argv[2], argv[3]],
      [argv[4], argv[5]],
    ];
    const c = [argv[6], argv[7]];
    const Input = [];

    for (let i = 8; i < argv.length; i++) {
      Input.push(argv[i]);
    }

    return { proof, publicSignals, data: [a, b, c, Input] };
  } catch (err) {
    console.log("Error generating proof, err:", err);
  }
};

export const verifyProof = async (
  vKeyLocation: string,
  publicSignals: number,
  proof: number
) => {
  const vkey = await fetch(vKeyLocation).then(function (res) {
    return res.json();
  });

  const res = await snarkjs.groth16.verify(vkey, publicSignals, proof);

  return res;
};

function unstringifyBigInts(o) {
  if (typeof o == "string" && /^[0-9]+$/.test(o)) {
    return BigInt(o);
  } else if (typeof o == "string" && /^0x[0-9a-fA-F]+$/.test(o)) {
    return BigInt(o);
  } else if (Array.isArray(o)) {
    return o.map(unstringifyBigInts);
  } else if (typeof o == "object") {
    if (o === null) return null;
    const res = {};
    const keys = Object.keys(o);
    keys.forEach((k) => {
      res[k] = unstringifyBigInts(o[k]);
    });
    return res;
  } else {
    return o;
  }
}
