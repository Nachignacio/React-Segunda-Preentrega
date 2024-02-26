import Fetching from "./Fetching";
import productjson from "../Items.js";

function ProductsContainer(){
    const data = Fetching("../Item1.json");

    
    return(
    <h2>Hola</h2>
    )
}

export default ProductsContainer;