import Head from "next/head";

import { ethers, BigNumber } from "ethers";
import { Account, ec, SequencerProvider } from "starknet";
import { useState } from "react";
import { useProvider } from "wagmi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import { calculateProofAndGenerateCalldata, verifyProof } from "../utils/prove";

import AuthVerifierABI from "../abi/contract";
import StarknetHackAccountABI from "../abi/StarknetHackAccount";

export default function Home() {
  const provider = useProvider();

  const [proof, setProof] = useState(2);
  const [publicSignals, setPublicSignals] = useState(2);

  const [loading, setLoading] = useState(false);

  // const BLOCK_EXPLORER_BASE = "https://goerli.voyager.online/"
  // const L1_VERIFIER_CONTRACT = "0x719E5B865dE407bf38647C1625D193E0CE42111D";  // gorerli
  // const NETWORK_BASE_URL = "https://alpha4.starknet.io"

  const BLOCK_EXPLORER_BASE = "  https://testnet-2.starkscan.co/";
  const L1_VERIFIER_CONTRACT = "0xE6db874521e1cd7C06447af614A886A61661594E"; // goerli 2
  const NETWORK_BASE_URL = "https://alpha4-2.starknet.io";

  const L1_PRIVATE_KEY = process.env.L1_RELAYER_PRIVATE_KEY; // TODO: set your private key
  const TRANSFER_SELECTOR =
    "232670485425082704932579856502088130646006032362877466777181098476241604910"; // selector for transfer"

  const onFormSignupSubmit = async (data) => {
    setLoading(true);

    const { password } = data;

    const asciiPassword = password
      .split("")
      .map((c) => c.charCodeAt(0))
      .map((c) => c.toString());

    // dummy calldata and array
    const calldata = ["0", "0", "0"];
    const call_array = [["0", "0", "0", "0"]];

    try {
      const inputs = {
        password: asciiPassword,
        calldata,
        call_array,
      };

      // generate proof data
      let { proof, publicSignals, data } =
        await calculateProofAndGenerateCalldata(
          inputs,
          "/circuit/circuit.wasm",
          "/circuit/circuit_final.zkey"
        );

      let credentialHash = publicSignals[0];
      console.log("Credential Hash:", credentialHash);

      const provider = new SequencerProvider({
        baseUrl: NETWORK_BASE_URL,
      });
      const accountContractClassHash = '0x06324283e4063dfa4b0e17abd414b3e32da93aaf8c41894c25d55902d47ab0d5'
      const accountAddress = process.env.STARKNET_DEPLOYER_ACCOUNT_CONTRACT_ADDRESS
      const privateKey = process.env.STARKNET_DEPLOYER_ACCOUNT_PRIVATE_KEY 
      const keyPair = ec.getKeyPair(privateKey as string)
      const account = new Account(
        provider, 
        accountAddress as string,
        keyPair
      )
      const deployment = await account.deployContract({
        classHash: accountContractClassHash,
        // contract: StarknetHackAccountABI as any,
        constructorCalldata: [
          credentialHash,
          BigNumber.from(L1_VERIFIER_CONTRACT).toString(),
        ],
      });

      console.log(
        "Account contract deployment transaction Hash: ",
        BLOCK_EXPLORER_BASE + "tx/" + deployment.transaction_hash
      );
      await provider.waitForTransaction(deployment.transaction_hash);
      console.log(
        "Deployed Account contract address:",
        BLOCK_EXPLORER_BASE + "contract/" + deployment.contract_address
      );
    } catch (error) {
      console.log("Unable to generate Proof in signup: ", error);
    }
    setLoading(false);
  };

  const onFormLoginSubmit = async (data) => {
    setLoading(true);

    console.log("data: ", data);

    const { password, recipient, amount, accountContractAddress, token } = data;
    const [tokenAddress, tokenDecimals] = token.split("-");

    const asciiPassword = password
      .split("")
      .map((c) => c.charCodeAt(0))
      .map((c) => c.toString());

    const amountWithDecimals = amount * Math.pow(10, tokenDecimals); // hardcoded for USDC
    const recipientNum = BigNumber.from(recipient).toString();

    const calldata = [recipientNum, amountWithDecimals, 0].map((c) =>
      c.toString()
    );
    const call_array = [[tokenAddress, TRANSFER_SELECTOR, "0", "3"]];

    try {
      const inputs = {
        password: asciiPassword,
        calldata,
        call_array,
      };

      // generate proof data
      let { proof, publicSignals, data } =
        await calculateProofAndGenerateCalldata(
          inputs,
          "/circuit/circuit.wasm",
          "/circuit/circuit_final.zkey"
        );

      console.log("Proof generated successfully");
      console.log(proof);

      setProof(proof);
      setPublicSignals(publicSignals);

      let dataResult = await verifyProof(
        "/circuit/verification_key.json",
        publicSignals,
        proof
      );
      console.log("Verifying proof locally");
      console.log("Proof valid:", dataResult);

      const customSigner = new ethers.Wallet(L1_PRIVATE_KEY, provider);
      console.log("Created wallet");

      const contract = new ethers.Contract(
        L1_VERIFIER_CONTRACT,
        AuthVerifierABI,
        customSigner
      );

      console.log("Created contract");

      console.log("Generated calladata:");
      const l2AccountContractAddressNum = BigNumber.from(
        accountContractAddress
      ).toString();
      console.log({ ...data, l2AccountContractAddressNum });
      console.log("Sending transaction");

      const tx = await contract.execute_on_l2(
        data[0],
        data[1],
        data[2],
        data[3],
        l2AccountContractAddressNum
      );
      await tx.wait();

      console.log(
        "L1 relayer transaction hash: ",
        "https://goerli.etherscan.io/tx/" + tx.hash
      );
      console.log("Find messages at " + BLOCK_EXPLORER_BASE + "message-logs");
    } catch (error) {
      console.log("Unable to generate Proof: ", error);
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Stark Auth</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Center
        width={450}
        height="100vh"
        display="flex"
        flexDirection="column"
        mx="auto"
      >
        <HStack mt={20} mb={10} spacing={10}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </HStack>

        <VStack mb="30" alignItems="center">
          <Heading>Stark Wallet</Heading>
          <Text>Brings Web2 Auth to the Web3 world</Text>

          {/* <Text> */}
          {/* Text is the used to render text and paragraphs within an interface.{" "} */}
          {/* <br /> */}
          {/* To increase the font size of the text, you can pass the fontSize prop. */}
          {/* </Text> */}
        </VStack>

        <Tabs>
          <TabList>
            <Tab>Signup</Tab>
            <Tab>Login</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Formik
                initialValues={{
                  accountContractAddress: "",
                  password: "",

                  // accountContractAddress: "0x01cc11213625db265853a3f32ac161be43f3525efcccd815bfe72b419b200a0f",
                  // password: "sachinkr12345678",
                }}
                onSubmit={onFormSignupSubmit}
              >
                <Form
                  style={{
                    width: "100%",
                  }}
                >
                  <VStack spacing={18} alignItems="stretch">
                    <Field name="password">
                      {({ field, form }) => (
                        <CustomFormControl isRequired>
                          <CustomFormLabel>Password</CustomFormLabel>
                          <CustomInput
                            {...field}
                            type="text"
                            placeholder="********"
                          />
                          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </CustomFormControl>
                      )}
                    </Field>
                  </VStack>

                  <Button
                    colorScheme="blue"
                    type="submit"
                    mt={50}
                    width="100%"
                    bg="#457B9D"
                    isLoading={loading}
                  >
                    Sign Up
                  </Button>
                </Form>
              </Formik>
            </TabPanel>

            <TabPanel>
              <Formik
                initialValues={{
                  password: "",
                  recipient: "",
                  amount: "0",
                  accountContractAddress: "",

                  // password: "sachinkr12345678",
                  // recipient:
                  //   "0x063490D66dc30e27218666d77C17F144B85470062Efde55c1B842352Ae6D27E7",
                  // amount: "0.0001",
                  // accountContractAddress:
                  //   "0x01cc11213625db265853a3f32ac161be43f3525efcccd815bfe72b419b200a0f",
                }}
                onSubmit={onFormLoginSubmit}
              >
                <Form
                  style={{
                    width: "100%",
                  }}
                >
                  <VStack spacing={18} alignItems="stretch">
                    <Field name="accountContractAddress">
                      {({ field, form }) => (
                        <CustomFormControl isRequired>
                          <CustomFormLabel>
                            Account Contract Address (username)
                          </CustomFormLabel>
                          <CustomInput
                            {...field}
                            type="text"
                            placeholder="Starknet Address"
                          />
                          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </CustomFormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <CustomFormControl isRequired>
                          <CustomFormLabel>Password</CustomFormLabel>
                          <CustomInput
                            {...field}
                            type="text"
                            placeholder="********"
                          />
                          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </CustomFormControl>
                      )}
                    </Field>
                    <Field name="recipient">
                      {({ field, form }) => (
                        <CustomFormControl isRequired>
                          <CustomFormLabel>Recipient</CustomFormLabel>
                          <CustomInput
                            {...field}
                            type="text"
                            placeholder="Recepient Address"
                          />
                          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </CustomFormControl>
                      )}
                    </Field>
                    <Field name="amount">
                      {({ field, form }) => (
                        <CustomFormControl isRequired>
                          <CustomFormLabel>Amount</CustomFormLabel>
                          <CustomInput {...field} type="number" />
                          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </CustomFormControl>
                      )}
                    </Field>
                    <Field component="select" name="token">
                      {({ field, form }) => (
                        <>
                          <Select
                            placeholder="Select Token"
                            size="lg"
                            bg="#FFF"
                            defaultValue="159707947995249021625440365289670166666892266109381225273086299925265990694-6" // USDC
                            {...field}
                          >
                            <option value="159707947995249021625440365289670166666892266109381225273086299925265990694-6">
                              USDC
                            </option>
                            <option value="1595302875476423028936062669336484284696677837389126531399172702718813461866-18">
                              USDT
                            </option>
                            <option value="1767481910113252210994791615708990276342505294349567333924577048691453030089-18">
                              DAI
                            </option>
                            <option value="2087021424722619777119509474943472645767659996348769578120564519014510906823-18">
                              ETH
                            </option>
                            <option value="532397201989021057129723162801779565748209832652056542886951046986376101206-8">
                              WBTC
                            </option>
                          </Select>
                          {form.errors.name}
                        </>
                      )}
                    </Field>
                  </VStack>

                  {/* <Button colorScheme="blue">Generate Proof</Button> */}
                  <Button
                    colorScheme="blue"
                    type="submit"
                    mt={50}
                    width="100%"
                    bg="#457B9D"
                    isLoading={loading}
                  >
                    Send Transaction
                  </Button>
                </Form>
              </Formik>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </>
  );
}

const CustomInput = (props) => (
  <Input
    size="lg"
    placeholder="user@gmail.com"
    bg="#FFF"
    borderRadius="0"
    borderWidth={2}
    textColor="#1D3557"
    // borderColor="#1D3557"
    focusBorderColor="#1D3557"
    // focusBorderColor="transparent"
    errorBorderColor="#E63946"
    {...props}
  />
);

const CustomFormLabel = (props) => (
  <FormLabel
    fontSize="sm"
    // textTransform="uppercase"
    {...props}
  />
);

const CustomFormControl = (props) => (
  <FormControl
    // borderColor="#1D3557"
    // padding={3}
    // bg="#FFF"
    // _focusWithin={{
    // outline: "2px solid #1D3557",
    // }}
    {...props}
  />
);
