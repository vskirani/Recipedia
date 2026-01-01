import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function CategoryPage() {
  const { kategori } = useParams();
  
  // Decode URL parameter (misal: "makanan-utama" jadi "Makanan Utama")
  const kategoriName = kategori
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Filter produk berdasarkan kategori
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === kategoriName.toLowerCase()
  );

  // Emoji untuk setiap kategori
  const categoryEmoji = {
    "Makanan Utama": "🍛",
    "Sarapan": "🍳",
    "Dessert": "🍰",
    "Cemilan": "🍿",
    "Minuman": "🥤",
  };

  return (
    <main className="pt-24 pb-16 min-h-screen">

      <div className="text-center mb-10" data-aos="fade-up">
        <span className="text-5xl mb-4 block">{categoryEmoji[kategoriName] || "🍽️"}</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
          {kategoriName}
        </h1>
        <p className="text-gray-500 max-w-md mx-auto">
          Menampilkan {filteredProducts.length} resep dalam kategori {kategoriName}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-6xl mb-4">😢</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tidak Ada Resep</h2>
          <p className="text-gray-500">Belum ada resep untuk kategori ini</p>
        </div>
      )}

      {/* All Resep Link */}
      <div className="text-center mt-12" data-aos="fade-up">
        <Link 
          to="/allresep" 
          className="px-8 py-3 bg-white hover:bg-primary text-primary hover:text-white font-semibold rounded-xl border-2 border-primary hover:-translate-y-1 transition-all duration-300 inline-block"
        >
          Lihat Semua Resep →
        </Link>
      </div>
    </main>
  );
}