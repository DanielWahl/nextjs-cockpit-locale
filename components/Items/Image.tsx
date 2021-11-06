import React from "react";
import ContentComponentData from "../../types/component/ContentComponentData";
import PageProps from "../../types/page/PageProps";

const Image: React.FC<ContentComponentData> = ({ settings }) => {
    let imageUrl = process.env.API + settings.image?.path;

    return (
        <div className="component-image">
            <img src={imageUrl} alt={settings?.image?.path} />
        </div>
    );
};
export default Image;
