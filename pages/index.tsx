import React from "react";
import Layout from "../components/Layout/Layout";
import Content from "../components/Content/Content";
import { PageProps } from "../types/types";
import Fetch from "../helpers/Fetch";
import HTMLHead from "../components/Global/HTMLHead";
import { GetServerSideProps } from "next";

const HomePage: React.FC<PageProps> = (props) => {
    return (
        <Layout>
            <HTMLHead
                title={
                    props.page?.seo?.title ?? "Next.js Cockpit Locale template"
                }
                description={
                    props.page?.seo?.description ??
                    "Next.js Cockpit Locale template"
                }
            ></HTMLHead>
            <Content {...props} data={props?.page} />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({
    params,
    locale,
}) => {
    const page = await Fetch.fetchPage("/", locale);

    return {
        props: {
            page,
        },
    };
};

export default HomePage;
