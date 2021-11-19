import React from "react";
import { Scrollchor } from "react-scrollchor";
import PageProps from "../../types/page/PageProps";

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
        </footer>
    );
};
export default Footer;
