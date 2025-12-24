import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList(){
    
    return (
       <div className="pt-4 sm:pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {products.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
       </div>
    );
}