import React from "react";
import Layout from "../../components/Layout/Layout";
import Content from "../../components/Content/Content";
import PageProps from "../../types/page/PageProps";
import Fetch from "../../helpers/Fetch";
import HTMLHead from "../../components/Global/HTMLHead";
import withLocale from "../../hocs/withLocale";
import { languagePaths } from "../../translations/config";

const Home: React.FC<PageProps> = (props) => {
    return (
        <Layout>
            <HTMLHead> </HTMLHead>
            <Content {...props} data={props.page} />
        </Layout>
    );
};

export async function getServerSideProps({ params }) {
    const siteSettings = await Fetch.fetchSiteSettings();
    const page = await Fetch.fetchPage("/");
    const errorPage = await Fetch.fetchErrorPage();

    return {
        props: {
            siteSettings,
            page,
            errorPage,
        },
    };
}

export default withLocale(Home);
