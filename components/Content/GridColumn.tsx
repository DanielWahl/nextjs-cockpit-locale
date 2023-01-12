import React from "react";
import Text from "../Items/Text";
import Image from "../Items/Image";
import Divider from "../Items/Divider";
import Heading from "../Items/Heading";
import Button from "../Items/Button";
import { randomNumber } from "../../helpers/randomNumber";
import { ContentComponentData, ContentData } from "../../types/types";
import ResetCookieButton from "../Items/ResetCookieButton";
import Grid from "./Grid";
import FlexBox from "./FlexBox";
import Spacer from "../Items/Spacer";
import AnimatedDiv from "../Items/AnimatedDiv";

const defaultComponents: any = {
    heading: Heading,
    richtext: Text,
    image: Image,
    divider: Divider,
    button: Button,
    flexbox: FlexBox,
    spacer: Spacer,
    resetcookiebutton: ResetCookieButton,
    animateddiv: AnimatedDiv,
};

const GridColumn = ({ childrenData }: ContentData) => {
    return (
        <div className="frame">
            {childrenData &&
                childrenData.map((component: ContentComponentData, j: any) => {
                    const comp_name = component.component;
                    const comp_data = component.data;
                    const comp_children = component.children || [];
                    const comp_columns = component.columns || [];

                    if (defaultComponents[comp_name] === undefined) {
                        return null;
                    }

                    const NewComponent = defaultComponents[comp_name];

                    return (
                        <NewComponent
                            name={comp_name}
                            data={comp_data}
                            childrenData={comp_children}
                            columns={comp_columns}
                            key={`component__${j}__${randomNumber}`}
                        />
                    );
                })}
        </div>
    );
};
export default GridColumn;