import React from "react";
import { Scrollchor } from "react-scrollchor";
import PageProps from "../../types/page/PageProps";
import AgencyIcon from "./AgencyIcon";

const Footer = ({ siteSettings }: PageProps) => {
    return (
        <footer className="footer__main">
            <div className="content">
                <Scrollchor to="#mainHeader" className="navLink">
                    <div className="goToTopButton">
                        <span>&#10094;</span>
                    </div>
                </Scrollchor>

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
