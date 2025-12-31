import foto1 from "../assets/image/hero.png";
import CategoryList from "../components/CategoryList";
import ProductCard from "../components/ProductCard";
import TestimonialSection from "../components/TestimonialSection";
import { products } from "../data/products";


export default function HomePage() {
  // Ambil 4 produk dengan likes terbanyak
  const popularProducts = [...products]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 4);

  return (
    <main className="pt-8">
      {/* HERO */}
      <section className="flex flex-col-reverse lg:flex-row w-full items-center justify-between gap-8 lg:gap-x-14">
        {/* left content */}
        <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left" data-aos="flip-down">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-none">
            Masak Praktis Tanpa Ribet
          </h1>

          <p className="font-poppins text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Resep favorit untuk masakan simpel hingga spesial, kapan saja kam
          </p>
          
          <button
            className="relative inline-flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded-md group w-fit mx-auto lg:mx-0"
          >
            <span
              className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-500 rounded group-hover:-mr-4 group-hover:-mt-4"
            >
              <span
                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
              ></span>
            </span>
            <span
              className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-500 rounded group-hover:-ml-4 group-hover:-mb-4"
            >
              <span
                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
              ></span>
            </span>
            <span
              className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-orange-400 rounded-md group-hover:translate-x-0"
            ></span>
            <span
              className="relative text-white transition-colors duration-200 ease-in-out group-hover:text-white"
            >Jelajahi Resep</span>
          </button>

        </div>

        {/* right content */}
        <img 
          src={foto1} 
          alt="Cooking Illustration" 
          className="w-48 sm:w-64 md:w-80 lg:w-[420px] xl:w-[520px] h-auto object-contain" data-aos="zoom-in" 
        />
      </section>

      {/* CATEGORY */}
      <div className="flex flex-col mt-16 sm:mt-20 lg:mt-28" data-aos="fade-down">
        <h2 className="font-poppins text-xl sm:text-2xl lg:text-[32px] font-bold mb-6">
          Category
        </h2>
        <CategoryList/>
      </div>

      {/* POPULAR */}
      <div className="mt-12 sm:mt-16 lg:mt-20" data-aos="fade-up">
        
        <h2 className="font-family-poppins text-xl sm:text-2xl lg:text-[32px] font-bold">
          Menu  
          <span className="text-primary ">  Ter-Favorite 💗</span>
        </h2>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {popularProducts.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 150}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="mt-16 sm:mt-20 lg:mt-28" data-aos="fade-up">
        <TestimonialSection />
      </div>



      
    </main>
  );
}