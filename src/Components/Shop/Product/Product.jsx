import css from "./Product.module.scss";

const Product = (props) => {
    return (
        <div className={css.Product}>
            <div>
                <img src={props.image} alt={props.title}/>
            </div>
            <h2>{props.title}</h2>
            <h3>{props.price}</h3>
            <button>Show more info</button>
            <button>Add to cart</button>
        </div>
    )
}
export default Product;