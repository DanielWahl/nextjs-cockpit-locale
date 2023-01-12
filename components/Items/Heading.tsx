import React from "react";
import { ContentComponentData } from "../../types/types";

const Heading: React.FC<ContentComponentData> = (props) => {
    if (!props.data) return null;

    const { data } = props;
    const { text, level } = data;

    return (
        <div className="component-heading paddingTop">
            {level && level === "1" && (
                <h1
                    className={"paddingTop fw--600" + (data?.class ?? "")}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
            {level && level === "2" && (
                <h2
                    className={data?.class ?? ""}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
            {level && level === "3" && (
                <h3
                    className={data?.class ?? ""}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
            {level && level === "4" && (
                <h4
                    className={data?.class ?? ""}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
            {!level && (
                <h2
                    className={data?.class ?? ""}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
        </div>
    );
};
export default Heading;
