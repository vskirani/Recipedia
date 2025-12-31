export default function CategoryCard({image, title, onClick }) {
    return (
        <button 
            onClick={onClick} 
            className="flex flex-col items-center gap-3 hover:scale-105 
                       transition-transform duration-300 
                       p-2 sm:p-3 md:p-4" data-aos="flip-right">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 " >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain
                               group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <span className="text-sm sm:text-base font-poppins font-semibold 
                             text-gray-700 group-hover:text-orange-500
                             transition-colors duration-300">
                {title}
            </span>
        </button>
    );
}