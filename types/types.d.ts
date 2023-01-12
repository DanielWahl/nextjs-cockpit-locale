import SiteSettings from "./settings/SiteSettings";
import React from "react";

export interface ButtonProps {
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    addClass?: string;
    tooltip?: string;
    children?: React.ReactChild | React.ReactChild[];
}

export interface IconProps extends ButtonProps {
    hrefInternal?: string;
    hrefExternal?: string;
}

export interface ComponentLink {
    _id: string;
    link: string;
    display: string;
}

export interface ComponentSettings {
    class?: string;
    id?: string | number;
    style?: string;
    level?: string | [];
    text?: string | any;
    image?: any;
    asset?: IPicture;
    link?: string | any;
    open?: boolean | string;
    title?: string;
    html?: string;
    content?: string | any;
    icon?: any;
    colWidth?: any;
    description?: string;
    name?: string;
    image?: IPicture;
    introtext?: string;
    ischild?: boolean;
}

export interface IPageData {
    projects?: TProjects;
    clientsAndFriends?: TClientsAndFriends;
}

export interface ContentComponentData {
    columns?: [];
    components?: [];
    children?: [];
    component: string;
    settings: ComponentSettings;
    label?: string;
    data?: ComponentSettings;
    name: string;
    pageData?: IPageData;
    childrenData?: any;
}

export interface ContentData {
    childrenData?: any;
    settings?: ComponentSettings;
}

export interface FieldData {
    alias: any;
    content: any;
    meta_description: any;
    meta_title: any;
    name: any;
    published: any;
    slider: any;
    subpages: any;
}

export interface PageData {
    entries: [];
    fields: FieldData;
}

export interface PageEntry {
    data?: any;
    seo?: {
        title?: string;
        keywords?: any;
        description: string;
    };
    slug?: string;
    title?: string;
    type?: string;
    _id?: string;
}

export interface PageProps {
    data?: any;
    page?: PageEntry | any;
    siteSettings?: SiteSettings;
    slides?: any;
    isHome?: boolean;
    errorPage?: any;

    projects?: TProjects;
    project?: IProjectData;
    clientsAndFriends?: TClientsAndFriends;
}

export interface SiteSettings {
    copyright: string;
    description: string | null;
    errorpage: ComponentLink;
    homepage: ComponentLink;
    name: string;
}

export interface ArticleData {
    description: string;
    headerimage: any;
    images: any;
    published: boolean;
    slug: string;
    text?: string | HTMLElement;
    title: string;
    _by: string;
    _created: number;
    _id: string;
    _mby: string;
    _modified?: any;
}

export interface CarouselData {}

export interface NormalProps {
    data?: any;
    settings?: any;
    children?: any;
    childrenData?: any;
}

export interface IProjectItem {
    id: number | string;
    highlight?: boolean;
    image?: string;
    date?: string;
    title?: string;
    description?: string;
    location?: string;
    contact?: string;
    error?: string;
}

export interface IPicture {
    colors?: string[];
    description?: string;
    folder?: string;
    height?: number;
    mime?: string;
    path?: string;
    size?: number;
    tags?: any[];
    title?: string;
    type?: string;
    width?: number;
}

export interface IImage {
    src: string;
    width: number;
    height: number;
}
export interface IProjectData {
    image: IPicture;
    clientName: string;
    projectName?: string;
    category?: TProjectCategory;
    year?: string;
    pace?: number;
    vimeoId: string;
    showonfrontpage?: boolean;
}

export type TProjects = IProjectData[];
