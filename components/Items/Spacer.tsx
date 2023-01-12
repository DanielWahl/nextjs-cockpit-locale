import React, { FC, useState, useEffect } from "react";

interface Props {
    data?: {
        size?: string;
        error?: any;
    };
}

const Spacer: FC<Props> = ({ data }) => {
    if (!data || !data.size || data?.error) return null;

    return <div className={data?.size + " w--100"} />;
};

export default Spacer;
