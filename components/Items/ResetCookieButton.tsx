import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Props {}

const ResetCookieButton: FC<Props> = ({}) => {
    const router = useRouter();

    const resetCookies = () => {
        localStorage.removeItem("danielwahlCookieBanner");
        // @ts-ignore
        window?._paq?.push(["disableCookies"]);
        router.reload();
    };

    return (
        <div className="component-button">
            <button
                className="button white secondary--hover"
                onClick={resetCookies}
            >
                Change cookie consent
            </button>
        </div>
    );
};

export default ResetCookieButton;
