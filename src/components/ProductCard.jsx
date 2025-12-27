export default function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 cursor-pointer w-full">
      
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 sm:h-48 md:h-56 object-cover"
        />

        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur px-2 py-1 rounded-full text-sm">
          ❤️ {item.likes}
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="px-3 sm:px-4 py-2 
                          backdrop-blur-[10px] 
                          flex justify-between items-center text-xs sm:text-sm">
            
            <div className="flex items-center gap-1 text-green-600">
              ⏱ <span>{item.calories} Cal</span>
            </div>
            <div className="flex items-center gap-1 text-green-600 font-medium">
              📊 <span className="truncate max-w-[80px] sm:max-w-none">{item.category}</span>
            </div>

          </div>
        </div>
      </div>

      <div className="px-4 sm:px-5 py-4 sm:py-5">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 line-clamp-2">
          {item.title}
        </h3>

        <button className="mt-2 text-orange-500 text-xs sm:text-sm font-medium hover:underline">
          View Recipe
        </button>
      </div>
    </div>
  );
}
