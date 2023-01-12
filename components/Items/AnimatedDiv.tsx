import React, { FC, useState, useEffect } from "react";
import { ContentComponentData } from "../../types/types";
import {
    scrollChildVariant,
    scrollViewVariant,
} from "../../helpers/animationLib";
import NextImage from "next/image";
import Image from "./Image";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Text from "./Text";
import Divider from "./Divider";
import Button from "./Button";
import { randomNumber } from "../../helpers/randomNumber";
import Spacer from "./Spacer";
import ResetCookieButton from "./ResetCookieButton";

interface Props extends ContentComponentData {}

const defaultComponents: any = {
    heading: Heading,
    richtext: Text,
    image: Image,
    divider: Divider,
    button: Button,
    spacer: Spacer,
    resetcookiebutton: ResetCookieButton,
};

const AnimatedDiv: FC<Props> = (props) => {
    const { data, childrenData } = props;
    if (!data) return null;

    const renderContent = () => (
        <>
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
        </>
    );

    if (data?.ischild)
        return (
            <motion.div variants={scrollChildVariant}>
                {renderContent()}
            </motion.div>
        );
    return (
        <motion.div
            variants={scrollViewVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            {renderContent()}
        </motion.div>
    );
};

export default AnimatedDiv;
