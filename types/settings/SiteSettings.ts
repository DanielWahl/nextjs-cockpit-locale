import ComponentLink from "./../component/ComponentLink";

export default interface SiteSettings {
    copyright: string;
    description: string|null
    errorpage: ComponentLink;
    homepage: ComponentLink;
    name: string

}