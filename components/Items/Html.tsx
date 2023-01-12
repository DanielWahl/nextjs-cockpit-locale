import React from "react";
import { ContentComponentData } from "../../types/types";

const Html = (props: ContentComponentData) => {
    if (!props.data) return null;

    return (
        <div className="component-html">
            <div
                dangerouslySetInnerHTML={{ __html: props?.data?.html ?? "" }}
            />
        </div>
    );
};

export default Html;
