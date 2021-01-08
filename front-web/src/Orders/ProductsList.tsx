import { type } from "os";
import { checkIsSelected } from "./helpers";
import ProductsCard from "./ProductsCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product:Product) => void;
}
function ProductsList({ products, selectedProducts, onSelectProduct } : Props ){
    return (

        <div className = "orders-list-container ">
            <div className = "orders-list-items">
                {products.map(products => (            
                <ProductsCard 
                    key = {products.id} 
                    product={products}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts, products)}/>
                ))}
            </div>
        </div>

    )
}

export default ProductsList;