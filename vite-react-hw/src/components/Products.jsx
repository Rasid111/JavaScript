import {goods} from "../assets/products"
import Product from "./Product";

function Products() {
    return(
        <div id="products">
            <ul>
                <Product 
                product_name={goods[0].product_name}
                product_description={goods[0].product_description}
                product_price={goods[0].product_price}
                url={goods[0].url}/>
                <Product 
                product_name={goods[1].product_name}
                product_description={goods[1].product_description}
                product_price={goods[1].product_price}
                url={goods[1].url}/>
                <Product 
                product_name={goods[2].product_name}
                product_description={goods[2].product_description}
                product_price={goods[2].product_price}
                url={goods[2].url}/>
                <Product 
                product_name={goods[3].product_name}
                product_description={goods[3].product_description}
                product_price={goods[3].product_price}
                url={goods[3].url}/>
                <Product 
                product_name={goods[4].product_name}
                product_description={goods[4].product_description}
                product_price={goods[4].product_price}
                url={goods[4].url}/>
                <Product 
                product_name={goods[5].product_name}
                product_description={goods[5].product_description}
                product_price={goods[5].product_price}
                url={goods[5].url}/>
            </ul>
        </div>
    )
}
export default Products;