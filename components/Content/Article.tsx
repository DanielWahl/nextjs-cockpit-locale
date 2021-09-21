import React, { useState, useEffect } from "react";
import Vars from "../../helpers/Vars";
import Link from "next/link";
import Props from "../../types/singleComponents/NormalProps";

const Article = (props: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <main>
                <div className="content">Is Loading...</div>
            </main>
        );
    }

    let article = props.data;

    let date = new Date(article._modified * 1000);
    let dateString =
        date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    return (
        <main>
            <div className="content">
                <div className="article">
                    <Link href="/news">
                        <a>
                            <button className="full round primary">
                                &lt; Back
                            </button>
                        </a>
                    </Link>

                    <div className="article_container">
                        <img
                            src={Vars.domain + article.headerimage?.path}
                            alt={article.title}
                        />
                        <div className="article_details">
                            <span className="date">{dateString}</span>
                            <h3>{article.title}</h3>
                            <p
                                className="description"
                                dangerouslySetInnerHTML={{
                                    __html: article.description,
                                }}
                            />
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: article.text,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Article;
