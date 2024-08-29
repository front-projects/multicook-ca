import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getBlogs } from "../../utils/getBlogs";

export default function BlogPageEn() {
    const { blog } = useParams();
    const [activeBlog, setActiveBlog] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getBlogs();
            const active = data.find(el => el.name == blog);
            setActiveBlog(active);
        }
        fetchData();
    }, [])

    return <main className="page__main">
        <article className="blog-article">
            <div className="blog-article__container container">
                <h2 className="blog-article__title">{activeBlog ? activeBlog.title : "Title"}</h2>
                <time className="blog-article__date" dateTime="2024-08-26">{activeBlog ? activeBlog.date : "date"}</time>
                <div className="blog-article__photo">
                    <img src={activeBlog ? activeBlog.img : '/images'} alt="MULTI COOK (Kaunas, Lithuania) – easy to prepare, tastes incredible" width="1" height="1" decoding="async" loading="lazy" />
                </div>
                <div className="blog-article__content">
                    <div className="blog-article__blocks">
                        {activeBlog ? activeBlog.content : "content"}
                    </div>


                </div>
            </div>
        </article>

    </main>
}