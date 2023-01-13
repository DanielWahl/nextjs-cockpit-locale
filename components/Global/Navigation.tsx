import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PageProps, PageEntry } from "../../types/types";
import navigationAnim from "../../helpers/NavigationAnim";
import { useRouter } from "next/router";

const Navigation = (props: PageProps) => {
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const router = useRouter();
    const slug = router.asPath.substring(1);

    useEffect(() => {
        const scrollEvent = () => {
            let st: number = window.pageYOffset;
            navigationAnim(lastScrollTop, window);
            setLastScrollTop(st);
        };

        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, [lastScrollTop]);

    const renderLogo = () => {
        return (
            <Link href="/">
                <div className="logo"> </div>
            </Link>
        );
    };

    const renderStaticNavigation = () => {
        return (
            <ul>
                <li className="mainNavigation__item">
                    <Link
                        href={`/aboutus`}
                        className={
                            "navLink" +
                            (slug === "aboutus" ? " navLink--active" : "")
                        }
                    >
                        About Us
                    </Link>
                </li>
                <li className="mainNavigation__item">
                    <Link
                        href={`/gallery`}
                        className={
                            "navLink" +
                            (slug === "gallery" ? " navLink--active" : "")
                        }
                    >
                        Gallery
                    </Link>
                </li>
                <li className="mainNavigation__item">
                    <Link
                        href={`/contact`}
                        className={
                            "navLink" +
                            (slug === "contact" ? " navLink--active" : "")
                        }
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        );
    };

    return (
        <nav className="fixed" id="mainNav">
            <div className="content grid fraction-auto paddingTop--none paddingBottom--none">
                <aside className="logoContainer flex flex-center--vertical">
                    {renderLogo()}
                </aside>

                <aside className="nav__wrapper">
                    <input type="checkbox" className="mobileCheckbox" />
                    <span className="mobileToggle"> </span>
                    <span className="mobileToggle"> </span>
                    <span className="mobileToggle"> </span>
                    <div className="nav__inner">{renderStaticNavigation()}</div>
                </aside>
            </div>
        </nav>
    );
};
export default Navigation;
