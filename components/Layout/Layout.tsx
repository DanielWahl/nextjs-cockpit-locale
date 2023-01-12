import React from "react";
import Footer from "../Global/Footer";
import Header from "../Global/Header";
import { PageProps } from "../../types/types";

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
