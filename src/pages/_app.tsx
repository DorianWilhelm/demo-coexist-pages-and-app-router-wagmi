import { Providers } from "@/Providers";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
