import foto1 from "../assets/image/hero.png";
import CategoryList from "../components/CategoryList";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";


export default function HomePage() {
  // Ambil 4 produk dengan likes terbanyak
  const popularProducts = [...products]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 4);

  return (
    <main>
      {/* section hero */}
      <section className="flex flex-col-reverse lg:flex-row w-full items-center justify-between gap-8 lg:gap-x-14">
        {/* left content */}
        <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-none">
            Cooking Made Fun and Easy
          </h1>

          <p className="font-poppins text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Temukan resep favoritmu, dari yang simpel sampai spesial. Masak jadi lebih santai, tanpa ribet.
          </p>

          <button className="bg-primary text-white py-2 sm:py-3 px-8 sm:px-12 lg:px-18 rounded-[10px] font-poppins w-fit font-medium mx-auto lg:mx-0">
            Lihat Resep
          </button>
        </div>

        {/* right content */}
        <img 
          src={foto1} 
          alt="Cooking Illustration" 
          className="w-48 sm:w-64 md:w-80 lg:w-[420px] xl:w-[520px] h-auto" 
        />
      </section>

      {/* CATEGORY */}
      <div className="flex flex-col mt-10 sm:mt-10 lg:mt-10">
        <h2 className="font-poppins text-xl sm:text-2xl lg:text-[32px] font-bold mb-6">
          Category
        </h2>
        <CategoryList/>
      </div>

    {/* POPULAR */}
      <div className="mt-10 sm:mt-16 lg:mt-20">
        
        <div className="flex flex-col text-center sm:text-left">
          <h2 className="font-poppins text-xl sm:text-2xl lg:text-[32px] font-bold">Popular This Week</h2>
          <p className="text-sm sm:text-base text-gray-600">Paling sering dimasak minggu ini</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {popularProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      
    </main>
  );
}