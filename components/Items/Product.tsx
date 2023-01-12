import React from "react";
import { NormalProps } from "../../types/types";

const Product = ({ data }: NormalProps) => {
    return (
        <div className="product">
            <p>{data?.display}</p>
        </div>
    );
};
export default Product;
