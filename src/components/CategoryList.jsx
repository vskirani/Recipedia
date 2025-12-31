import makananUtama from "../assets/image/maincourse.png";
import sarapan from "../assets/image/sarapan.png";
import dessert from "../assets/image/dessert.png";
import snack from "../assets/image/snack.png";
import drink from "../assets/image/drink.png";

import {products} from "../data/products";
import CategoryCard from "./CategoryCard";

const categoryImages ={
    "Makanan Utama": makananUtama,
    "Sarapan": sarapan,
    "Dessert": dessert,
    "Cemilan": snack,
    "Minuman": drink,

}
export default function CategoryList(){
    const categories = [... new Set(products.map((item)=> item.category))];
    return(
        <div className="flex justify-between overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
                <div key={category} data-aos="flip-up" data-aos-delay={index * 150}>
                    <CategoryCard
                        title={category}
                        image={categoryImages[category]}
                        onClick={() => console.log(category)}
                    />
                </div>
            ))}

        </div>
    );
}