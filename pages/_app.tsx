import { AppProps } from "next/app";
import React, { useEffect } from "react";
import "../styles/main.sass";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const cookie = document.createElement("script");
        cookie.src = "/scripts/CookieBanner.js";
        cookie.async = true;
        cookie.type = "module";
        document.body.appendChild(cookie);
        const script = document.createElement("script");
        script.src = "/scripts/scripts.js";
        script.async = true;
        script.type = "module";
        document.body.appendChild(script);
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
