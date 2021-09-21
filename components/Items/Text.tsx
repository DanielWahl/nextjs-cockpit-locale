import React from "react";
import ContentComponentData from "../../types/component/ContentComponentData";

const Text = (props: ContentComponentData) => {
    return (
        <div className="component-text">
            <div dangerouslySetInnerHTML={{ __html: props?.settings?.text }} />
        </div>
    );
};

export default Text;
