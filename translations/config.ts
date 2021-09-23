export const defaultLocale = "lu" as const;

export const locales = ["en", "lu"] as const;

export const languageNames = {
    en: "English",
    lu: "Lëtzebuergesch",
};

export const languagePaths = [
    {
        params: { lang: "en" },
    },
    {
        params: { lang: "lu" },
    },
];
