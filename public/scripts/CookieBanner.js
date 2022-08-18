let $ = function (selector) {
    let list = document.querySelectorAll(selector);
    if (list.length === 0) return document.createElement("div");
    return list.length < 2 ? list[0] : list;
};

class CookieBanner {
    constructor(options = {}, lang = null) {
        const languages = options.hasOwnProperty("languages")
            ? { ...CookieBanner.DefaultOptions.languages, ...options.languages }
            : CookieBanner.DefaultOptions.languages;
        this.lang = lang;
        this.options = { ...CookieBanner.DefaultOptions, ...options };
        this.stylesheet = null;
        this.status = localStorage.getItem(CookieBanner.StorageString);
        this.initialized = null;

        this.options.languages = languages;
        this.options.onLoad(this.status === "true");

        if (this.status === null) this.initVisuals();
        const button = $(`#${this.options.revokeButtonID}`);
        if (typeof button === "undefined") return;
        button.addEventListener("click", (event) => {
            event.preventDefault();
            this.revoke();
        });
    }

    revoke() {
        if (this.status === null) return;
        if (localStorage.getItem(CookieBanner.StorageString) !== null)
            localStorage.removeItem(CookieBanner.StorageString);
        if (this.initialized === null) this.initVisuals();
        else $(".danielwahl_cookiebanner").classList.remove("hidden");
        this.options.onRevoke();
    }

    initVisuals() {
        this.initialized = true;
        this.stylesheet = document.createElement("style");
        this.createStylesheet();
        $("body").appendChild(this.createDOMElement());
        this.attachEventhandlers();
    }

    save() {
        localStorage.setItem(CookieBanner.StorageString, this.status);
    }

    createStylesheet() {
        // language=CSS
        this.stylesheet.appendChild(
            document.createTextNode(`
                .danielwahl_cookiebanner {
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                    width: 500px;
                    background: ${this.options.popupBackground};
                    color: ${this.options.popupColor};
                    position: fixed;
                    bottom: 25px;
                    left: 25px;
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                    align-itemsQu: center;
                    font-family: sans-serif;
                    transition: all 0.3s ease-in-out;
                    z-index: 100000;
                    border-radius: 10px;
                }
                @media screen and (max-width: 720px) {
                    .danielwahl_cookiebanner {
                        width: calc(100% - 50px);
                    }
                }


                .danielwahl_cookiebanner p {
                    font-size: 1rem !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 !important;
                    margin: 1rem 0 !important;
                    color: ${this.options.popupColor} !important;
                }

                .danielwahl_cookiebanner.hidden {
                    transform: translateY(200%);
                    opacity: 0;
                    visibility: hidden;
                }
                .danielwahl_cookiebanner.left.hidden, .danielwahl_cookiebanner.right.hidden {
                    transform: translateY(200%);
                    opacity: 0;
                    visibility: hidden;
                }

                .danielwahl_cookiebanner a {
                    color: ${this.options.linkColor};
                    font-size: 1rem;
                }

                .danielwahl_cookiebanner p:last-child {
                    text-align: right;
                }


                .danielwahl_cookiebanner button {
                    color: ${this.options.buttonColor};
                    background: ${this.options.buttonBackground};
                    border: none;
                    display: inline-block;
                    font-size: 1rem;
                    padding: 0.5rem 1rem;
                    outline: none !important;
                    margin-left: 1rem;
                    cursor: pointer;
                }

                .danielwahl_cookiebanner button:hover {
                    background: ${this.options.buttonHover};
                    cursor: pointer;
                }

                .danielwahl_cookiebanner button#danielwahl_cookiebanner-decline {
                    background: transparent;
                    color: ${this.options.buttonBackground}
                }


                @media (max-width: 960px) {

                    .danielwahl_cookiebanner button {
                        font-size: 0.8rem;
                    }

                    .danielwahl_cookiebanner p:last-child {
                        text-align: center;
                    }

                }

            `),
        );

        document.body.appendChild(this.stylesheet);
    }

    createDOMElement() {
        let position;

        let lang = {
            message: this.options.message,
            confirmText: this.options.confirmText,
            declineText: this.options.declineText,
            linkText: this.options.linkText,
            link: this.options.link,
        };
        if (
            this.lang !== null &&
            CookieBanner.DefaultOptions.languages.hasOwnProperty(this.lang)
        )
            lang = {
                ...lang,
                ...CookieBanner.DefaultOptions.languages[this.lang],
            };
        if (
            this.lang !== null ||
            this.options.languages.hasOwnProperty(this.lang)
        )
            lang = { ...lang, ...this.options.languages[this.lang] };
        switch (this.options.position) {
            case CookieBanner.Position.TOP:
                position = "top";
                break;
            case CookieBanner.Position.RIGHT:
                position = "right";
                break;
            case CookieBanner.Position.BOTTOM:
            default:
                position = "bottom";
                break;
            case CookieBanner.Position.LEFT:
                position = "left";
                break;
        }
        let buttons = `<button id="danielwahl_cookiebanner-confirm">${lang.confirmText}</button>`;
        if (this.options.type === CookieBanner.Type.DECLINEABLE)
            buttons = `<button id="danielwahl_cookiebanner-decline">${lang.declineText}</button>${buttons}`;

        let template = document.createElement("div");
        template.classList.add("danielwahl_cookiebanner");
        template.classList.add(position);
        template.innerHTML = `
                <p>
                    ${lang.message} <a href="${lang.link}">${lang.linkText}</a>
                </p>
                <p>
                    ${buttons}
                </p>
        `;

        return template;
    }

    attachEventhandlers() {
        $("#danielwahl_cookiebanner-confirm").addEventListener(
            "click",
            (event) => {
                this.status = true;
                this.save();
                this.options.onAccept();
                $(".danielwahl_cookiebanner").classList.add("hidden");
            },
        );
        $("#danielwahl_cookiebanner-decline").addEventListener(
            "click",
            (event) => {
                this.status = false;
                this.save();
                this.options.onDecline();
                $(".danielwahl_cookiebanner").classList.add("hidden");
            },
        );
    }
}

CookieBanner.Position = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3,
};
CookieBanner.Type = {
    NOTICE: 0,
    DECLINEABLE: 1,
};
CookieBanner.DefaultOptions = {
    popupColor: "#FFFFFF",
    popupBackground: "rgb(20,20,20)",
    buttonColor: "#FFFFFF",
    buttonBackground: "#2274A5",
    buttonHover: "#298fcb",
    linkColor: "#FF1053",
    type: CookieBanner.Type.DECLINEABLE,
    link: "/legalnotice",
    message:
        "This website contains cookies and tracking technology – you can find further information on this topic in our",
    linkText: "privacy policy",
    confirmText: "Accept cookies",
    declineText: "Decline",
    revokeButtonID: "revokeConsent",
    position: CookieBanner.Position.BOTTOM,
    languages: {
        de: {
            message:
                "Diese Website verwendet Cookies und Tracking – nähere Informationen dazu und zu Ihren Rechten als Benutzer finden Sie in unserer",
            linkText: "Datenschutzerklärung",
            confirmText: "Cookies zulassen",
            declineText: "Ablehnen",
        },
        en: {
            message:
                "This website contains cookies and tracking technology – you can find further information on this topic in our",
            linkText: "privacy policy",
            confirmText: "Accept cookies",
            declineText: "Decline",
        },
        fr: {
            message:
                "Ce site Web utilise également des cookies. Pour plus d’informations, vous pouvez consulter notre",
            linkText: "déclaration de confidentialité",
            confirmText: "D’accord",
            declineText: "Refuser",
        },
    },
    onAccept: () => {},
    onDecline: () => {},
    onLoad: () => {},
    onRevoke: () => {},
};
CookieBanner.StorageString = "danielwahlCookieBanner";

export default CookieBanner;
