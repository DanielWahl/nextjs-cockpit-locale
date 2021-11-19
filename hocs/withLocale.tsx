import { NextPage } from "next";
import { Locale } from "../translations/types";
import { LocaleProvider } from "../context/LocaleContext";
import ErrorPage from "../pages/[lang]/404";
import useTranslation from "../hooks/useTranslation";

interface LangProps {
    locale?: Locale;
}

export default function withLocale(WrappedPage: NextPage<any>) {
    const WithLocale: NextPage<any, LangProps> = ({ ...pageProps }) => {
        const { locale } = useTranslation();

        if (!locale) {
            return <ErrorPage />;
        }
        return (
            <LocaleProvider lang={locale}>
                <WrappedPage {...pageProps} />
            </LocaleProvider>
        );
    };

    return WithLocale;
}
