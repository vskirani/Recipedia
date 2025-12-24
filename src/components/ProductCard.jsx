export default function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 cursor-pointer w-full">
      
      
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 sm:h-48 lg:h-56 object-cover"
        />

        
        <div className="absolute bottom-0 left-0 w-full">
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 
                          backdrop-blur-[10px] 
                          flex justify-between items-center text-xs sm:text-sm">
            
            <div className="flex items-center gap-1 text-green-600">
              ⏱ <span>{item.calories} Cal</span>
            </div>

            <div className="flex items-center gap-1 text-green-600 font-medium">
              📊 <span>{item.category}</span>
            </div>

          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-3 sm:px-4 lg:px-5 py-3 sm:py-4 lg:py-5">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 line-clamp-2">
          {item.title}
        </h3>

        <button className="mt-2 text-orange-500 text-xs sm:text-sm font-medium hover:underline">
          View Recipe
        </button>
      </div>
    </div>
  );
}
