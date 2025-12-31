import { testimonials } from "../data/testimonials";

export default function TestimonialSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">What People Say</h2>
        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Cerita dari mereka yang sudah mencoba resep kami
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Featured Card - Large */}
        <div className="md:col-span-5 bg-gradient-to-br from-primary/10 to-orange-50 rounded-3xl p-8 border border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={testimonials[0].avatar}
              alt={testimonials[0].name}
              className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/30 group-hover:ring-primary/60 group-hover:scale-105 transition-all duration-300"
            />
            <div>
              <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{testimonials[0].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[0].role}</p>
            </div>
          </div>
          <div className="flex mb-4 text-xl">
            {String.fromCodePoint(0x2B50).repeat(testimonials[0].rating)}
          </div>
          <p className="text-gray-700 text-base leading-relaxed italic">
            "{testimonials[0].comment}"
          </p>
          <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm">
            <span>Verified User</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="md:col-span-7 flex flex-col gap-6">
          {testimonials.slice(1).map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              
            >
              <div className="flex items-start gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary/50 transition-all duration-300"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                    <div className="flex text-sm">
                      {String.fromCodePoint(0x2B50).repeat(item.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
