import React from "react";
import Footer from "../Page/Footer";
import Header from "../Page/Header";
import PageProps from "../../types/page/PageProps";

interface Props extends PageProps {
    children?: any;
}

const Layout = ({ siteSettings, children }: Props) => {
    return (
        <div className="global">
            <Header {...children} />
            <main>
                <div className="content">{children}</div>
            </main>
            <Footer siteSettings={siteSettings} />
        </div>
    );
};
export default Layout;
