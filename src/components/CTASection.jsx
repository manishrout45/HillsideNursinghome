
// CTASection.jsx

export default function CTASection() {
  return (
    <section className="relative overflow-hidden h-[320px] md:h-[350px] lg:h-[400px]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1600"
        alt="Healthcare"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#EEF7E3]/95" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl text-center ">
          <span className="text-sm font-medium md:text-base text-[#84C221]">
            Your Health, Our Priority
          </span>

          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl text-[#1f5f97]">
            Compassionate Care,
            <br className="hidden sm:block" />
            Trusted Healthcare
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8f9b9d] md:text-base">
            At Hillside Nursing Home, our experienced doctors, dedicated nursing
            staff, and modern medical facilities work together to provide
            personalized, high-quality healthcare for you and your family.
          </p>

          <button className="mt-8 rounded-lg bg-[#84C221] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6ea51c] sm:px-8 lg:px-10">
            Book An Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

