import makananUtama from "../assets/image/mn.png";
import {products} from "../data/products";
import CategoryCard from "./CategoryCard";

const categoryImages ={
    "Makanan Utama": makananUtama,
    "Sarapan": makananUtama,
    "Dessert": makananUtama,
    "Cemilan": makananUtama,
    "Minuman": makananUtama,

}
export default function CategoryList(){
    const categories = [... new Set(products.map((item)=> item.category))];
    return(
        <div className="flex gap-6 justify-center overflow-x-auto">
            {categories.map((category) => (
                <CategoryCard
                key={category}
                title={category}
                image={categoryImages[category]}
                onClick={() => console.log(category)}
                />
            ))}

        </div>
    );
}