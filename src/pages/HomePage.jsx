import foto1 from "../assets/image/hero.png";


export default function HomePage() {
  return (
    <main>
      {/* section hero */}
      <section className="flex flex-row w-full items-center justify-between gap-x-14">
        {/* left content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-[60px] font-bold leading-none">
            Cooking Made Fun and Easy: Unleash Your Inner Chef
          </h1>

          <p className="font-poppins text-lg text-gray-600 max-w-lg">
            Discover more than 10,000 recipes in your hand with the best recipe. Help you to find the easiest way to cook.
          </p>

          <button className="bg-primary text-white py-2 px-18 rounded-[10px] font-poppins w-fit font-medium">
            Explore Recipes
          </button>
        </div>

        {/* right content */}
        <img 
          src={foto1} 
          alt="Cooking Illustration" 
          className="w-[520px] h-auto ml-auto translate-y-2" 
        />
      </section>

      <div className="mt-20">
        <div className="flex flex-row justify-between">
          {/* left content */}
          <div className="flex flex-col">
            <h2 className="font-poppins text-[32px] font-bold">Discover, Create, Share</h2>
            <p>Check our most popular recipes of this week</p>
          </div>
          
          <button className="bg-primary text-white py-2 px-8 rounded-[10px] font-poppins font-medium">
            See All
          </button>
        </div>
      </div>
    </main>
  );
}