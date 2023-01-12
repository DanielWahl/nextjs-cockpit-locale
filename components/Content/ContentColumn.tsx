import React from "react";

import Text from "../Items/Text";
import Image from "../Items/Image";
import Grid from "./Grid";
import Divider from "../Items/Divider";
import Heading from "../Items/Heading";
import Button from "../Items/Button";
import FlexBox from "./FlexBox";
import Section from "./Section";

import { ContentData, ContentComponentData } from "../../types/types";
import { randomNumber } from "../../helpers/randomNumber";
import AnimatedDiv from "../Items/AnimatedDiv";

const defaultComponents: any = {
    heading: Heading,
    richtext: Text,
    image: Image,
    divider: Divider,
    button: Button,
    flexbox: FlexBox,
    section: Section,
    animateddiv: AnimatedDiv,
};

const ContentColumn = ({ childrenData }: ContentData) => {
    return (
        <div className="frame">
            {childrenData &&
                childrenData.map((component: ContentComponentData, j: any) => {
                    const comp_name = component.component;
                    const comp_settings = component.settings;
                    const comp_children = component.children || [];
                    const comp_columns = component.columns || [];

                    if (defaultComponents[comp_name] === undefined) {
                        return null;
                    }

                    const NewComponent = defaultComponents[comp_name];

                    return (
                        <NewComponent
                            name={comp_name}
                            settings={comp_settings}
                            childrenData={comp_children}
                            columns={comp_columns}
                            key={`component__${j}__${randomNumber}`}
                        />
                    );
                })}
        </div>
    );
};
export default ContentColumn;
