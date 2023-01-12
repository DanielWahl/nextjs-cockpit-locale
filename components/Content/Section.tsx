import React from "react";
import Heading from "../Items/Heading";
import Text from "../Items/Text";
import Image from "../Items/Image";
import Divider from "../Items/Divider";
import Grid from "./Grid";
import Button from "../Items/Button";
import FlexBox from "./FlexBox";
import { ContentComponentData, NormalProps } from "../../types/types";
import { randomNumber } from "../../helpers/randomNumber";
import Spacer from "../Items/Spacer";
import AnimatedDiv from "../Items/AnimatedDiv";

const Section = (props: NormalProps) => {
    let { childrenData, data } = props;

    return (
        <section
            className={`page-section` + (data?.class ? " " + data?.class : "")}
        >
            <div className="content">
                {childrenData &&
                    childrenData.map(
                        (component: ContentComponentData, j: number) => {
                            const comp_name = component.component;
                            const comp_settings = component.data;
                            const comp_children = component.children || [];
                            const comp_columns = component.columns || [];

                            if (defaultComponents[comp_name] === undefined) {
                                return null;
                            }

                            const NewComponent = defaultComponents[comp_name];

                            return (
                                <div
                                    className="frame"
                                    key={`component__${j}__${randomNumber}`}
                                >
                                    <NewComponent
                                        {...props}
                                        name={comp_name}
                                        settings={comp_settings}
                                        childrenData={comp_children}
                                        columns={comp_columns}
                                        data={comp_settings}
                                    />
                                </div>
                            );
                        },
                    )}
            </div>
        </section>
    );
};

const defaultComponents: any = {
    heading: Heading,
    richtext: Text,
    image: Image,
    divider: Divider,
    button: Button,
    flexbox: FlexBox,
    grid: Grid,
    animateddiv: AnimatedDiv,
    spacer: Spacer,
};

export default Section;
