import React from "react";
import Head from "next/head";

interface Props {
    title?: string;
    description?: string;
}

const HTMLHead: React.FC<Props> = ({ children, title, description }) => {
    return (
        <Head>
            <title>{title || "Default Template - Home"}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content={description || "This is the home-page"}
            />
            {children}
        </Head>
    );
};

export default HTMLHead;
