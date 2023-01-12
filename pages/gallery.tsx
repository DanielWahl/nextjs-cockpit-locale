import Layout from "../components/Layout/Layout";
import { PageProps } from "../types/types";
import withLocale from "../hocs/withLocale";
import HTMLHead from "../components/Global/HTMLHead";
import React from "react";
import { GetServerSideProps } from "next";
import Fetch from "../helpers/Fetch";
import Content from "../components/Content/Content";

const GalleryPage = (props: PageProps) => {
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
            <section className="grid half-half">
                <div className="frame">
                    <h1>Gallery</h1>
                </div>
                <div className="frame">
                    <h1>Gallery</h1>
                </div>
            </section>
            <Content {...props} data={props.page} />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({
    params,
    locale,
}) => {
    const page = await Fetch.fetchPage("/gallery", locale);

    return {
        props: {
            page,
        },
    };
};

export default withLocale(GalleryPage);
