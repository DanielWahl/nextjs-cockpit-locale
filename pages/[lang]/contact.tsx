import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import PageProps from "../../types/page/PageProps";
import withLocale from "../../hocs/withLocale";
import { languagePaths } from "../../translations/config";

const Contact = (props: PageProps) => {
    return (
        <Layout>
            <Head>
                <title>Default Template - Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="grid half-half">
                <div className="frame">
                    <h1>Contact</h1>
                </div>
                <div className="frame">
                    <h1>Contact</h1>
                </div>
            </section>
        </Layout>
    );
};
export default withLocale(Contact);
