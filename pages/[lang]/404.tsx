import React from "react";
import Layout from "../../components/Layout/Layout";
import PageProps from "../../types/page/PageProps";
import HTMLHead from "../../components/Global/HTMLHead";
import Fetch from "../../helpers/Fetch";
import withLocale from "../../hocs/withLocale";
import Link from "next/link";
import useTranslation from "../../hooks/useTranslation";

const ErrorPage: React.FC<PageProps> = (props) => {
    const headerBackgroundColor = "secondary";
    const { locale } = useTranslation();

    return (
        <Layout siteSettings={props.siteSettings ?? null}>
            <HTMLHead
                title={props.siteSettings?.name}
                description={props.siteSettings?.description}
            ></HTMLHead>

            <div className="flex flex-column-center paddingBottom--veryBig flex--gap--big paddingTop--veryBig h-min--content">
                <h1>404 Page not found</h1>
                <Link href="/[lang]" as={`/${locale}`}>
                    <a>
                        <button className="button primary">
                            Go back to Home
                        </button>
                    </a>
                </Link>
            </div>
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
