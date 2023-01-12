module.exports = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    i18n: {
        locales: ["en", "lu"],
        defaultLocale: "en",
        localeDetection: false,
    },
    env: {
        TOKEN: "insert",
        API: "insert",
        STORAGE: "insert",
    },
    images: {
        domains: ["cockpit.whale.lu", "whale.lu"],
    },
};
