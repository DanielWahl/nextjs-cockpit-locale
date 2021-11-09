import React from "react";
import ContentColumn from "./ContentColumn";
import { randomNumber } from "../../helpers/randomNumber";
import useTranslation from "../../hooks/useTranslation";

const grid = {
    0: "",
    1: "",
    2: "half-half",
    3: "three-thirds",
    4: "four-fourths",
};

interface Props {
    data?: any;
    allPages?: any;
    siteSettings?: any;
    slides?: any;
}

const Content = ({ data, allPages, siteSettings, slides }: Props) => {
    let content;
    const { locale } = useTranslation();

    if (locale === "en" && data?.content_en) content = data?.content_en;
    else content = data?.content;

    // @ts-ignore
    let gridColumns = grid[content?.length];

    return (
        <div className={`page-components content grid ${gridColumns}`}>
            {content &&
                content.map((column: any, i: number) => {
                    const col_settings = column.settings;
                    const col_children = column.children || [];
                    // @ts-ignore
                    return (
                        <ContentColumn
                            settings={col_settings}
                            childrenData={col_children}
                            key={`contentcolumn__${i}__${randomNumber}`}
                        />
                    );
                })}
        </div>
    );
};
export default Content;
