// import '../styles/globals.css'
import type { AppProps } from "next/app";

import "@rainbow-me/rainbowkit/styles.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { Global } from "@emotion/react";
import Script from "next/script";

const { chains, provider } = configureChains(
  [
    chain.goerli,
    // chain.mainnet,
    // chain.polygon,
    // chain.optimism,
    // chain.arbitrum,
    // chain.localhost,
    // chain.hardhat,
    // chain.polygonMumbai,
  ],
  [
    // alchemyProvider({ apiKey: `${process.env.ALCHEMY_ID}` }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Starknet Wallet",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  fonts: {
    heading: "'Recoleta', serif",
    body: "'Recoleta', serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/snarkjs@0.5.0/build/snarkjs.min.js" />

      <ChakraProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <ChakraProvider theme={theme}>
              <Global
                styles={`
                /* latin */
                @font-face {
                  font-family: 'Recoleta';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('./Recoleta-RegularDEMO.otf') format('opentype');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
              `}
              />

              <Component {...pageProps} />
            </ChakraProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </>
  );
}
