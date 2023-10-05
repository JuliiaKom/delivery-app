import css from "./Homepage.module.scss";

const Homepage = (props) => {
    return (
        <div className={css.homepage}>
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
                    <div>
                        <img src={props.data.categoryImg1} alt="categoryImg1"/>
                        <p>Women’s</p>
                    </div>
                    <div>
                        <img src={props.data.categoryImg2} alt="categoryImg2"/>
                        <p>Men’s</p>
                    </div>
                    <div>
                        <img src={props.data.categoryImg3} alt="categoryImg3"/>
                        <p>Kids</p>
                    </div>

                </div>
            </div>
        </div>


    )
}
export default Homepage;