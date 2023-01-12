import CookieBanner from "./CookieBanner.js";
//var _paq = window._paq || [];

new CookieBanner(
    {
        buttonColor: "#000000",
        buttonBackground: "#FFDC00",
        linkColor: "#FFDC00",
        buttonHover: "#bfa500",
        revokeButtonID: "revokeConsent",
        position: CookieBanner.Position.LEFT,
        languages: {
            en: {
                link: "/legalnotice",
            },
            lu: {
                link: "/lu/impressum",
            },
        },
        onAccept: () => {
            //_paq.push(['setConsentGiven']);
        },
        onDecline: () => {
            //_paq.push(['disableCookies']);
        },
        onLoad: (hasConfirmed) => {
            if (hasConfirmed === null) {
                //_paq.push(['disableCookies']);
                return;
            }
            if (hasConfirmed) {
                //_paq.push(['setConsentGiven']);
            } else {
                //_paq.push(['disableCookies']);
            }
        },
    },
    localStorage.getItem("locale") ?? "en",
);
/*
_paq.push(['requireConsent']);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="//matomo.danielwahl.lu/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
*/
