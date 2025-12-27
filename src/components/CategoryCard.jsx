export default function CategoryCard({image, title, onClick }) {
    return (
        <button onClick={onClick} className="flex flex-col items-center gap-2 group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-transparent group-hover:border-primary transition">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <span className="text-sm sm:text-base font-poppins font-medium text-gray-700 group-hover:text-primary">
                {title}
            </span>
        </button>
    );
}