import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { Locale, isLocale } from "../translations/types";

interface ContextProps {
    readonly locale: Locale;
    readonly setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<ContextProps>({
    locale: "en",
    setLocale: () => null,
});

export const LocaleProvider: React.FC<{
    lang: Locale;
    children?: React.ReactChild | React.ReactChild[];
}> = ({ lang, children }) => {
    const [locale, setLocale] = useState(lang);
    const { query, locale: routerLocale } = useRouter();

    useEffect(() => {
        if (locale !== localStorage.getItem("locale")) {
            localStorage.setItem("locale", locale);
        }
    }, [locale]);

    useEffect(() => {
        if (
            typeof query.lang === "string" &&
            isLocale(query.lang) &&
            locale !== query.lang
        ) {
            setLocale(query.lang);
        }
    }, [query.lang, locale]);

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};
