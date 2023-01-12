import { NextPage } from "next";
import { Locale } from "../translations/types";
import { LocaleProvider } from "../context/LocaleContext";
import ErrorPage from "../pages/404";
import { useRouter } from "next/router";

interface LangProps {
    locale?: Locale;
}

export default function withLocale(WrappedPage: NextPage<any>) {
    const WithLocale: NextPage<any, LangProps> = ({ ...pageProps }) => {
        //const { locale } = useTranslation();
        const { locale } = useRouter();

        if (!locale) {
            return <ErrorPage />;
        }
        return (
            <LocaleProvider lang={locale as Locale}>
                <WrappedPage {...pageProps} />
            </LocaleProvider>
        );
    };

    return WithLocale;
}
