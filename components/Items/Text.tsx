import React from "react";
import { ContentComponentData } from "../../types/types";

const Text = (props: ContentComponentData) => {
    return (
        <div className="component-text">
            <div
                dangerouslySetInnerHTML={{ __html: props?.data?.html ?? "" }}
            />
        </div>
    );
};

export default Text;
