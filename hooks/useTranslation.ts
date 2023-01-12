import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";
import strings from "../translations/strings/strings";
import { defaultLocale } from "../translations/config";
import { translationString } from "../translations/translationStringType";

export default function useTranslation() {
    const { locale, setLocale } = useContext(LocaleContext);

    function t(key: translationString) {
        if (!strings[locale][key]) {
            console.warn(
                `Translation '${key}' for locale '${locale}' not found.`,
            );
        }
        return strings[locale][key] || strings[defaultLocale][key] || "";
    }

    return {
        t,
        locale,
        setLocale,
    };
}
