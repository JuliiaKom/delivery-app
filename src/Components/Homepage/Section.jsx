import css from "./Section.module.scss";

const Section = (props) => {
    return (
        <div className={css.section}>
            <div className={css.fashionBlog}>
                <h1 className={css.blogTxt}>Fashion blog</h1>
                <button className={css.blogBtn}>
                    View blog
                </button>
            </div>
            <div className={css.blogsImg}>
                <img src={props.data.blog1Img} alt="blog1Img"/>
                <img src={props.data.blog2Img} alt="blog2Img"/>

                <div className={css.blocks_posts}>
                    <div className={css.post}>
                        <h3>Bag Trends for Summer 2020</h3>
                        <span className={css.title}>Fashion</span>
                        <span className={css.date}>August 24, 2020</span>
                        <span className={css.text}>No comments</span>
                        <p>Ipsum aliquet nisi, hendrerit rhoncus quam tortor,
                            maecenas faucibus. Tincidunt aliquet sit vel,
                            venenatis nulla. Integer bibendum turpis convallis...</p>
                    </div>

                    <div className={css.post}>
                        <h3>Top 10 of This Season’s Hottest Sneakers</h3>
                        <span className={css.title}>Lifestyle</span>
                        <span className={css.date}>July 16, 2020</span>
                        <span className={css.text}>No comments</span>
                        <p>Porta habitant vitae quam interdum.
                            Leo viverra non volutpat rhoncus placerat vitae scelerisque.
                            Rhoncus augue faucibus maecenas lacus...</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section;