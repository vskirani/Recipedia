import { testimonials } from "../data/testimonials";

export default function TestimonialSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">What People Say</h2>
        <p className="text-gray-500 mt-2">
          Cerita dari mereka yang sudah mencoba resep kami
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            <div className="flex mb-2">
              {"⭐".repeat(item.rating)}
            </div>

            <p className="text-gray-600 text-sm">
              “{item.comment}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
