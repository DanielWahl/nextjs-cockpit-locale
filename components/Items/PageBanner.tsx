import React from "react";
import { NormalProps } from "../../types/types";

const PageBanner = ({ data }: NormalProps) => {
    return (
        <div className="component-text">
            <div dangerouslySetInnerHTML={{ __html: data?.text }} />
        </div>
    );
};
export default PageBanner;
