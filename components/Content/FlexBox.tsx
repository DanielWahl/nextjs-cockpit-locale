import React from "react";
import Text from "../Items/Text";
import Image from "../Items/Image";
import Divider from "../Items/Divider";
import Heading from "../Items/Heading";
import Button from "../Items/Button";
import { randomNumber } from "../../helpers/randomNumber";
import Spacer from "../Items/Spacer";

const defaultComponents: any = {
    heading: Heading,
    richtext: Text,
    image: Image,
    divider: Divider,
    spacer: Spacer,
};

interface Props {
    children?: any;
}

const FlexBox = ({ children }: Props) => {
    return (
        <div className="content flex">
            {children &&
                children.map((component: any, j: number) => {
                    const comp_name = component.component;
                    const comp_settings = component.data;
                    const comp_children = component.children || [];

                    if (defaultComponents[comp_name] === undefined) {
                        return null;
                    }

                    const NewComponent = defaultComponents[comp_name];

                    return (
                        <NewComponent
                            name={comp_name}
                            data={comp_settings}
                            childrenData={comp_children}
                            key={`component__${j}__${randomNumber}`}
                        />
                    );
                })}
        </div>
    );
};
export default FlexBox;
