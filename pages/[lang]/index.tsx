import React from "react";
import Layout from "../../components/Layout/Layout";
import Content from "../../components/Content/Content";
import PageProps from "../../types/page/PageProps";
import Fetch from "../../helpers/Fetch";
import HTMLHead from "../../components/Global/HTMLHead";
import withLocale from "../../hocs/withLocale";

const Home: React.FC<PageProps> = (props) => {
    return (
        <Layout>
            <HTMLHead></HTMLHead>
            <Content {...props} data={props.page} />
        </Layout>
    );
};

export async function getServerSideProps({ params }) {
    const siteSettings = (await Fetch.fetchSiteSettings()) ?? null;
    const page = null; //await Fetch.fetchPage("/");
    const errorPage = null; //await Fetch.fetchErrorPage();

    return {
        props: {
            siteSettings,
            page,
            errorPage,
        },
    };
}

export default withLocale(Home);
