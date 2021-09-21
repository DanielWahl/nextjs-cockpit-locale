import React from "react";
import Layout from "../../components/Layout/Layout";
import Content from "../../components/Content/Content";
import PageProps from "../../types/page/PageProps";
import HTMLHead from "../../components/Page/HTMLHead";
import Fetch from "../../helpers/Fetch";
import withLocale from "../../hocs/withLocale";
import { languagePaths } from "../../translations/config";

const ErrorPage: React.FC<PageProps> = (props) => {
    return (
        <Layout>
            <HTMLHead> </HTMLHead>
            <Content {...props} data={props.page} />
        </Layout>
    );
};

export async function getServerSideProps({ params }) {
    const siteSettings = await Fetch.fetchSiteSettings();
    const page = await Fetch.fetchPage("404");
    const errorPage = await Fetch.fetchErrorPage();

    return {
        props: {
            siteSettings,
            page,
            errorPage,
        },
    };
}

export default withLocale(ErrorPage);
