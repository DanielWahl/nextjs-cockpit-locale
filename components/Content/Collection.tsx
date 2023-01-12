import React from "react";
import Product from "../Items/Product";
import { NormalProps } from "../../types/types";

const Collection = ({ settings }: NormalProps) => {
    let collections = settings.collection;

    return (
        <div className="component-addcollection">
            {collections &&
                collections.map((entry: any, i: number) => {
                    if (entry.link === "products") {
                        return <Product data={entry} key={`product-${i}`} />;
                    } else {
                        return null;
                    }
                })}
        </div>
    );
};

export default Collection;
