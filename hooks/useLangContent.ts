import { useContext } from "react";
import { LocaleContext } from "../context/LocaleContext";

interface Props {
    data: any;
}

export default function useLangContent<Props>(data: any) {
    const { locale } = useContext(LocaleContext);

    if (locale === "en" && data?.content_en) return data?.content_en;
    else if (locale === "lu" && data?.content_lu) return data?.content_lu;
    else return data?.content;
}
