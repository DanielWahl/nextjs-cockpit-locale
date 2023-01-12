import React from "react";
import { PageProps } from "../../types/types";
import AgencyIcon from "./AgencyIcon";

const Footer = ({ siteSettings }: PageProps) => {
    return (
        <footer className="footer__main">
            <div className="content">
                <div
                    dangerouslySetInnerHTML={{
                        __html: siteSettings?.copyright,
                    }}
                />
            </div>
            <AgencyIcon />
        </footer>
    );
};
export default Footer;
