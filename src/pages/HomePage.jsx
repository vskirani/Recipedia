import foto1 from "../assets/image/hero.png";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";


export default function HomePage() {
  return (
    <main className="pb-10">
      
      <section className="flex flex-col-reverse md:flex-row w-full items-center justify-between gap-6 md:gap-x-8 lg:gap-x-14">
        
        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight md:leading-none">
            Cooking Made Fun and Easy: Unleash Your Inner Chef
          </h1>

          <p className="font-poppins text-sm sm:text-base lg:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            Discover more than 10,000 recipes in your hand with the best recipe. Help you to find the easiest way to cook.
          </p>

          <button className="bg-primary text-white py-2 sm:py-3 px-8 sm:px-12 lg:px-18 rounded-[10px] font-poppins w-fit font-medium mx-auto md:mx-0 hover:bg-orange-400 transition-colors">
            Explore Recipes
          </button>
        </div>

        
        <img 
          src={foto1} 
          alt="Cooking Illustration" 
          className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[520px] h-auto md:ml-auto" 
        />
      </section>

      <div className="mt-10 sm:mt-14 lg:mt-20">
        <div className="flex flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center">
          
          <div className="flex flex-col text-center sm:text-left">
            <h2 className="font-poppins text-xl sm:text-2xl lg:text-[32px] font-bold">Discover, Create, Share</h2>
            <p className="text-sm sm:text-base text-gray-600">Check our most popular recipes of this week</p>
          </div>  
          
          <button className="bg-primary text-white py-2 px-6 sm:px-8 rounded-[10px] font-poppins font-medium w-fit mx-auto sm:mx-0 hover:bg-orange-400 transition-colors">
            See All
          </button>
        </div>
        <ProductList/>
      </div>

      
    </main>
  );
}