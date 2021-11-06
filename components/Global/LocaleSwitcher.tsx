import React, { useState, useCallback } from "react";
import useTranslation from "../../hooks/useTranslation";
import { locales } from "../../translations/config";
import { useRouter } from "next/router";

const LocalSwitcher: React.FC = () => {
    const router = useRouter();
    const { t, locale } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const handleLocaleChange = useCallback(
        (locale) => {
            const regex = new RegExp(`^/(${locales.join("|")})`);
            router.push(
                router.pathname,
                router.asPath.replace(regex, `/${locale}`),
            );
            setIsOpen(false);
        },
        [router],
    );

    return (
        <nav className="languageSwitcher">
            <ul className={"languageSwitcher__list"}>
                <li className={"languageSwitcher__list__item"}>
                    <button
                        className={
                            "localeSwitcher__button" +
                            (locale === "en"
                                ? " localeSwitcher__button--active"
                                : "")
                        }
                        onClick={() => handleLocaleChange("en")}
                    >
                        EN
                    </button>
                </li>
                <li className={"languageSwitcher__list__item"}>
                    <button
                        className={
                            "localeSwitcher__button" +
                            (locale === "lu"
                                ? " localeSwitcher__button--active"
                                : "")
                        }
                        onClick={() => handleLocaleChange("de")}
                    >
                        DE
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default LocalSwitcher;
