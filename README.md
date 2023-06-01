# Stark-zk-wallet

> This project won 2nd prize at the StarknetCC India hackathon. 🏆

Issues with current Web3 wallet:
- Require users to understand the concept of public and private key.
- Users have to remember long and weird private keys or seed phrases.
- Current account recovery methods are very difficult and hacky. If users lose their private key they also lose all their assets.

Stark Wallet As a Solution

- Provides web2 auth flow to users to control their account contracts.
- Users have to only remember their password to control their accounts.
- Provides easy, secure and fast way to recover accounts. (Could not be built due to time constraints in the starkknet hackathon)

# Flow


<p align="center">
<img align="center" width="700" alt="stark_wallet_diagram" src="https://github.com/0xSachinK/stark-zk-wallet/assets/73331595/8bdf95ab-78b5-4267-82b9-e9d2c59d1e5b">
</p>


# UI

<p align="center">
  <img width="45%" alt="Login Page" src="https://github.com/0xSachinK/stark-zk-wallet/assets/73331595/2489b9ca-4edf-411d-a111-d3e362aa1f45">
  &nbsp; &nbsp; &nbsp; &nbsp;
  <img width="45%" alt="Signup Page" src="https://github.com/0xSachinK/stark-zk-wallet/assets/73331595/f7e5c1bc-a70e-40af-8047-388903ab6bc0">
</p>

# Challenges we ran into
Circom, the language we are using to generate ZK-SNARK proofs doesn't export verifier contracts in circom. So we had to bypass that hurdle by deploying solidity verifer on L1 Ethereum and then sending a message to the account contract on L2. Sending messages from L1 to L2 was also a bit tricky. We first started with trying to figure out how to send generic calldata from L1 to L2 but that was too difficutl. So we settled for a specific ERC20 transfer example.


# Local
To run this project
1. Clone the repo.
2. Run these commands.
```
cd frontend
yarn build
yarn start
```
3. Go to http://localhost:3000

### Note
1. Please keep your console open. 
2. Important transactions and addresses are logged there. 
3. Also the attached video on devfolio should be helpful to understand how to use the UI.
