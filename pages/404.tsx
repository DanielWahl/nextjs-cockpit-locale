import React from "react";
import Layout from "../components/Layout/Layout";
import { PageProps } from "../types/types";
import HTMLHead from "../components/Global/HTMLHead";
import Fetch from "../helpers/Fetch";
import Link from "next/link";
import { GetServerSideProps } from "next";

const ErrorPage404: React.FC<PageProps> = (props) => {
    const headerBackgroundColor = "secondary";

    return (
        <Layout page="block">
            <HTMLHead
                title={props.page?.seo?.title}
                description={props.page?.seo?.description}
            ></HTMLHead>

            <div className="flex flex-column-center paddingBottom--veryBig flex--gap--big paddingTop--veryBig h-min--content">
                <h1>404 Page not found</h1>
                <Link href="/">
                    <button className="button primary">Go back to Home</button>
                </Link>
            </div>
        </Layout>
    );
};

export default ErrorPage404;
