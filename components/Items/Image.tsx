import React from "react";
import { ContentComponentData } from "../../types/types";

import NextImage from "next/image";
import { shimmer, toBase64 } from "../../helpers/imageLib";
const Image: React.FC<ContentComponentData> = ({ data }) => {
    if (!data?.asset?.path) return null;
    let imageUrl = process.env.STORAGE + data.asset?.path;

    return (
        <div className="component-image">
            <div className="image">
                <NextImage
                    src={imageUrl}
                    alt={data?.title ?? ""}
                    className="relative"
                    height={data?.asset?.height}
                    width={data?.asset?.width}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(700, 475),
                    )}`}
                />
            </div>
        </div>
    );
};
export default Image;
