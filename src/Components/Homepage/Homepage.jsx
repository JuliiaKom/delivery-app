import css from "./Homepage.module.scss";
import blog1Img from "./../../fashion-images/categories/blog1.png";
import blog2Img from "./../../fashion-images/categories/blog2.png";
const Homepage = (props) => {
    return(<homepage className={css.homepage}>
            <div className={css.container}>
                <div className={css.homepageText}>
                    <h3 className={css.titleText}>New collection</h3>
                    <h1 className={css.title}>Menswear 2020</h1>
                    <div className={css.buttonsTitle}>
                        <button className={css.btnWrap}>
                            Shop sale
                        </button>
                        <button className={css.btnDesk}>
                            Shop the menswear
                        </button>
                    </div>
                </div>
                  <div className={css.categories}>
                      <img src={props.data.main.categoryImg1} alt="categoryImg1"/>
                               <p>Women’s</p>
                      <img src={props.data.main.categoryImg2} alt="categoryImg2"/>
                               <p>Men’s</p>
                      <img src={props.data.main.categoryImg3} alt="categoryImg3"/>
                              <p>Kids</p>
                </div>
            </div>
            <section>
<div className={css.fashionBlog}>
    <div className={css.fashionBlock}>
        <h1 className={css.blockTxt}>Fashion blog</h1>
        <button className={css.blockBtn}>
            View blog
        </button>
    </div>
<div className={css.blogsImg}>
    <img src={blog1Img} alt={blog1Img}/>
    <img src={blog2Img} alt={blog2Img}/>
</div>

</div>
            </section>
    </homepage>


    )
}
export default Homepage;