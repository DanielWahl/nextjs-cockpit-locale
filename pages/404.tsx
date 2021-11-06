import React, { useEffect } from "react";
import Head from "next/head";
import { getInitialLocale } from "../translations/getInitialLocale";
import useTranslation from "../hooks/useTranslation";

const ErrorPageGlobal = () => {
    const { locale } = useTranslation();

    useEffect(() => {
        window.location.replace(`/${locale}/404`);
    }, []);

    return (
        <Head>
            <meta name="robots" content="noindex, nofollow" />
        </Head>
    );
};
export default ErrorPageGlobal;
