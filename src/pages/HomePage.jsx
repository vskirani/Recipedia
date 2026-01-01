import { Link } from "react-router-dom";
import foto1 from "../assets/image/hero.png";
import CategoryList from "../components/CategoryList";
import ProductCard from "../components/ProductCard";
import TestimonialSection from "../components/TestimonialSection";
import { products } from "../data/products";


export default function HomePage() {
  
  const popularProducts = [...products]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 4);

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col-reverse lg:flex-row w-full items-center justify-center gap-8 lg:gap-x-14 pt-20 pb-12">
        {/* left content */}
        <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-left max-w-xl" data-aos="fade-right">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">🍳 Platform Resep Terbaik</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight lg:leading-[1.1] text-gray-900">
            Masak Praktis <br className="hidden lg:block" />
            <span className="text-primary">Tanpa Ribet</span>
          </h1>

          <p className="font-poppins text-base sm:text-lg text-gray-600 leading-relaxed">
            Temukan resep favoritmu dari masakan simpel hingga spesial. 
            Panduan lengkap dengan langkah mudah untuk semua level.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
            <Link to="/allresep" className="px-8 py-4 bg-primary hover:bg-orange-400 text-white font-semibold rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Jelajahi Resep
            </Link>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
              </svg>
              Lihat Video
            </button>
          </div>

          {/* Rating */}
          <div className="flex gap-8 mt-4 justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-500">Resep</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">50K+</p>
              <p className="text-sm text-gray-500">Pengguna</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">4.9</p>
              <p className="text-sm text-gray-500">Rating ⭐</p>
            </div>
          </div>
        </div>

        <div className="relative" data-aos="fade-left">
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl opacity-40"></div>
          <img 
            src={foto1} 
            alt="Cooking Illustration" 
            className="relative w-64 sm:w-80 md:w-96 lg:w-[450px] xl:w-[500px] h-auto object-contain drop-shadow-2xl" 
          />
        </div>
      </section>

      {/* CATEGORY */}
      <section id="category" className="py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Kategori</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-gray-900">
            Pilih Sesuai Selera
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Berbagai kategori resep untuk memenuhi semua kebutuhan memasakmu
          </p>
        </div>
        <CategoryList/>
      </section>

      {/* POPULAR */}
      <section id="menupopular" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-orange-50/50 to-white rounded-3xl -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Paling Populer</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-gray-900">
            Menu Ter-Favorite 💗
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Resep paling disukai oleh pengguna kami
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10" data-aos="fade-up">
          <Link to="/allresep" className="px-8 py-3 bg-white hover:bg-primary text-primary hover:text-white font-semibold rounded-xl border-2 border-primary hover:-translate-y-1 transition-all duration-300">
            Lihat Semua Resep →
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section id="testi" className="py-16 sm:py-20 lg:py-24">
        <TestimonialSection />
      </section>


    </main>
  );
}