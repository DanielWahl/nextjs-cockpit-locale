import React from "react";
import { NormalProps } from "../../types/types";

const Divider = ({ data }: NormalProps) => {
    if (!data) return null;

    return (
        <div className="component-text">
            <div dangerouslySetInnerHTML={{ __html: data?.text }} />
        </div>
    );
};
export default Divider;
