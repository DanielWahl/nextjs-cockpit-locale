import { AppProps } from "next/app";
import React from "react";
import "../styles/main.sass";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
