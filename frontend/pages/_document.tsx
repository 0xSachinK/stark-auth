import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        style={{
          // backgroundColor: "#f1faee",
          backgroundImage:
            "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
