import SiteSettings from "./../settings/SiteSettings";

export default interface PageProps {
    data?: any;
    page?: any;
    siteSettings?: SiteSettings;
    slides?: any;
    isHome?: boolean;
    errorPage?: any;
}
