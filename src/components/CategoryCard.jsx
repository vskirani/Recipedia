export default function CategoryCard({image, title, onClick }) {
    return (
        <button onClick={onClick} className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-30 md:h-30">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>
            <span className="text-sm sm:text-base font-poppins font-medium text-gray-700 group-hover:text-primary">
                {title}
            </span>
        </button>
    );
}