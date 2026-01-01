import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function DetailRecipePage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  
  // State untuk likes
  const [likes, setLikes] = useState(product?.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  if (!product) {
    return (
      <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resep Tidak Ditemukan 😢</h1>
          <Link to="/" className="text-primary hover:underline">← Kembali ke Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 min-h-screen">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        <div data-aos="fade-right">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-amber-200 rounded-3xl blur-2xl opacity-40"></div>
            <img 
              src={product.image} 
              alt={product.title} 
              className="relative w-full h-80 sm:h-96 lg:h-[450px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-orange-100">
              <p className="text-2xl mb-1">⏱️</p>
              <p className="text-xl font-bold text-gray-900">{product.cookTime}</p>
              <p className="text-sm text-gray-500">Menit</p>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-orange-100">
              <p className="text-2xl mb-1">🔥</p>
              <p className="text-xl font-bold text-gray-900">{product.calories}</p>
              <p className="text-sm text-gray-500">Kalori</p>
            </div>
            
            {/* Likes Button - Bisa diklik */}
            <button 
              onClick={handleLike}
              className={`rounded-2xl p-4 text-center shadow-md border transition-all duration-300 transform hover:scale-105 active:scale-95
                ${isLiked 
                  ? 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200 shadow-red-100' 
                  : 'bg-white border-orange-100 hover:border-red-200'
                }`}
            >
              <p className={`text-2xl mb-1 transition-transform duration-300 ${isLiked ? 'scale-125' : ''}`}>
                {isLiked ? '❤️' : '🤍'}
              </p>
              <p className={`text-xl font-bold ${isLiked ? 'text-red-500' : 'text-gray-900'}`}>
                {likes.toLocaleString()}
              </p>
              <p className={`text-sm ${isLiked ? 'text-red-400' : 'text-gray-500'}`}>
                {isLiked ? 'Liked!' : 'Likes'}
              </p>
            </button>
          </div>
        </div>

        
        <div data-aos="fade-left">
          <span className="inline-block bg-orange-100 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {product.category}
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {product.deskription}
          </p>

          
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🥗 Bahan-bahan
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 px-4 py-2 rounded-xl text-gray-700 text-sm"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📝 Langkah-langkah
            </h2>
            <div className="space-y-4">
              {product.steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          
          <div className="flex gap-4 mt-10">
            <button className="flex-1 px-6 py-4 bg-primary hover:bg-orange-400 text-white font-semibold rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <span>🧾</span> Simpan Resep
            </button>
            <button className="px-6 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary hover:-translate-y-1 transition-all duration-300">
              <span>🔗</span> Bagikan
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}