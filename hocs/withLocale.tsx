import { NextPage, GetStaticPaths } from "next";
import { isLocale, Locale } from "../translations/types";
import { LocaleProvider } from "../context/LocaleContext";
import ErrorPageGlobal, { getServerSideProps } from "../pages/[lang]/404";
import { languagePaths } from "../translations/config";
import useTranslation from "../hooks/useTranslation";

interface LangProps {
    locale?: Locale;
}

export default function withLocale(WrappedPage: NextPage<any>) {
    const WithLocale: NextPage<any, LangProps> = ({ ...pageProps }) => {
        const { locale } = useTranslation();

        if (!locale) {
            return <ErrorPageGlobal />;
        }
        return (
            <LocaleProvider lang={locale}>
                <WrappedPage {...pageProps} />
            </LocaleProvider>
        );
    };

    return WithLocale;
}
