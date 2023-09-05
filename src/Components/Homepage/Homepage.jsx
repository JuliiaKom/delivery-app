import css from "./Homepage.module.scss";
import homepageImg from "./../../fashion-images/categories/image.jpg";
import categoryImg1 from "./../../fashion-images/categories/category1.png"
import categoryImg2 from "./../../fashion-images/categories/category2.png"
import categoryImg3  from "./../../fashion-images/categories/category3.png"
const Homepage = () => {
    return(<section className={css.homepage}>
            <div className={css.container}>
                <div className={css.homepageImg}>
                    <img src={homepageImg} alt={homepageImg}/>
                </div>
                <div className={css.homepageText}>
                    <h3>New collection</h3>
                    <h1>Menswear 2020</h1>
                    <buttons className={css.button}>
                        <button>
                            Shop sale
                        </button>
                        <button>
                            Shop the menswear
                        </button>
                    </buttons>
                </div>
                  <div className={css.categories}>
                           <img src={categoryImg1} alt={categoryImg1}/>
                               <p>Women’s</p>
                          <img src={categoryImg2} alt={categoryImg2}/>
                               <p>Men’s</p>
                           <img src={categoryImg3} alt={categoryImg3}/>
                              <p>Kids</p>
                </div>
            </div>
    </section>

    )
}
export default Homepage;