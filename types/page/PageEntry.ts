import ContentData from "../component/ContentData";

export default interface PageEntry {
    alias?: string;
    name?: string;
    content?: Array<ContentData>;
    meta_description?: string;
    meta_title?: string;
    published: boolean;
    slider?: true;
    subpages?: any;
    _by: string;
    _created: Date;
    _id: string;
    _mby: string;
    _modified?: Date;
}