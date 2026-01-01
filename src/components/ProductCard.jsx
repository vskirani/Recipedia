import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <Link to={`/resep/${item.id}`}>
    <div className="group bg-white rounded-2xl overflow-hidden 
                    shadow-md hover:shadow-2xl 
                    transform hover:-translate-y-3 
                    transition-all duration-400 ease-out 
                    cursor-pointer w-full
                    border border-gray-100 hover:border-orange-200">
      
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 sm:h-48 md:h-56 object-cover
                     group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md 
                        px-3 py-1.5 rounded-full text-sm font-medium
                        shadow-lg group-hover:bg-red-500 group-hover:text-white
                        transition-all duration-300 flex items-center gap-1">
          <span className="group-hover:animate-pulse">❤️</span> {item.likes}
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="px-3 sm:px-4 py-2.5 
                          backdrop-blur-md
                          flex justify-between items-center text-xs sm:text-sm">
            
            <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
              <span className="text-base">🔥</span> 
              <span>{item.calories} Cal</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-600 font-medium">
              <span className="text-base">🏷️</span>
              <span className="truncate max-w-[80px] sm:max-w-none">{item.category}</span>
            </div>

          </div>
        </div>
      </div>

      <div className="px-4 sm:px-5 py-4 sm:py-5 bg-gradient-to-br from-white to-orange-50/30">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 
                       line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
          {item.title}
        </h3>

        <button className="mt-3 text-orange-500 text-xs sm:text-sm font-semibold 
                           flex items-center gap-1 group/btn
                           hover:text-orange-600 transition-colors duration-300">
          View Recipe 
          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </div>
    </Link>
  );
}
