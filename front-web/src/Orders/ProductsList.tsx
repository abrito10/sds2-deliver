import { Product } from "./types";
import { checkIsSelected } from "./helpers";
import ProductsCard from "./ProductsCard";


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