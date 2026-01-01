import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function ResepPage() {
  const [sortBy, setSortBy] = useState("likes"); // likes, cookTime, calories
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Ambil semua kategori unik
  const categories = ["Semua", ...new Set(products.map((item) => item.category))];

  // Filter dan sort produk
  const filteredProducts = products
    .filter((product) => 
      selectedCategory === "Semua" ? true : product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "likes") return b.likes - a.likes;
      if (sortBy === "cookTime") return a.cookTime - b.cookTime;
      if (sortBy === "calories") return a.calories - b.calories;
      return 0;
    });

  return (
    <main className="pt-24 pb-16 min-h-screen">
      
      <div className="text-center mb-10" data-aos="fade-up">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Koleksi Lengkap</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3">
          Semua Resep 🍽️
        </h1>
        <p className="text-gray-500 max-w-md mx-auto">
          {filteredProducts.length} resep lezat menanti untuk kamu coba
        </p>
      </div>

      {/* FILTER SHORT */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-orange-100" data-aos="fade-up">
        
        <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Urutkan:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
          >
            <option value="likes">❤️ Paling Disukai</option>
            <option value="cookTime">⏱️ Waktu Tercepat</option>
            <option value="calories">🔥 Kalori Terendah</option>
          </select>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((item, index) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={index * 50}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>

      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-6xl mb-4">😢</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tidak Ada Resep</h2>
          <p className="text-gray-500">Coba pilih kategori lain</p>
        </div>
      )}
    </main>
  );
}