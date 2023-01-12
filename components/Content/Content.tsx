import React from "react";
import { randomNumber } from "../../helpers/randomNumber";
import Heading from "../Items/Heading";
import Text from "../Items/Text";
import Image from "../Items/Image";
import Divider from "../Items/Divider";
import Grid from "./Grid";
import Button from "../Items/Button";
import News from "./News";
import PopupBox from "../Items/PopupBox";
import Section from "./Section";
import { ContentComponentData, IPageData } from "../../types/types";
import ResetCookieButton from "../Items/ResetCookieButton";
import FlexBox from "./FlexBox";
import Spacer from "../Items/Spacer";
import AnimatedDiv from "../Items/AnimatedDiv";

interface Props extends IPageData {
    data?: any;
    allPages?: any;
    siteSettings?: any;
}

const Content = ({
    data,
    allPages,
    siteSettings,
    projects,
    clientsAndFriends,
}: Props) => {
    let content = data?.data?.layout;

    // @ts-ignore
    let gridColumns = 0; //grid[content?.length];

    return (
        <div className={`page-content`}>
            {content?.map((component: ContentComponentData, j: any) => {
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
                        pageData={{
                            allPages,
                            siteSettings,
                            projects,
                            clientsAndFriends,
                        }}
                        key={`component__${j}__${randomNumber}`}
                    />
                );
            })}
        </div>
    );
};

const defaultComponents: any = {
    heading: Heading,
    richtext: Text,
    image: Image,
    divider: Divider,
    grid: Grid,
    button: Button,
    flexbox: FlexBox,
    news: News,
    popupbox: PopupBox,
    section: Section,
    spacer: Spacer,
    resetcookiebutton: ResetCookieButton,
    animateddiv: AnimatedDiv,
};
export default Content;
