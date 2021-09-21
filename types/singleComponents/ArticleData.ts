import ContentData from "../component/ContentData";

export default interface ArticleData {
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