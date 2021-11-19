import React from "react";
import ContentComponentData from "../../types/component/ContentComponentData";

const Heading: React.FC<ContentComponentData> = ({ settings }) => {
    const { text, tag } = settings;

    return (
        <div className="component-heading">
            {tag && tag === "h1" && (
                <h1
                    className={settings?.class ?? ""}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
            {tag && tag === "h2" && (
                <h2
                    className={settings?.class ?? ""}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
            {tag && tag === "h3" && (
                <h3
                    className={settings?.class ?? ""}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
            {tag && tag === "h4" && (
                <h4
                    className={settings?.class ?? ""}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
            {!tag && (
                <h2
                    className={settings?.class ?? ""}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
        </div>
    );
};
export default Heading;
