function Product(props) {
    return(
        <li class="product">
            <img src={props.url} alt="img" />
            <h4>{props.product_name}</h4>
            <p>{props.product_description}</p>
            <span>{props.product_price}</span>
        </li>
    )
}
export default Product;