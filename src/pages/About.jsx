export default function About() {
  return (
    <>
      {/* ================= Hero Section ================= */}
      <section className="bg-gradient-to-b from-white to-cyan-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#165c99]">
            About Us
          </h1>
        </div>
      </section>

      {/* ================= About Section ================= */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Image */}
            <div className="relative">

              <img
                src="/assets/images/about/about.jpg"
                alt="About"
                className="rounded-3xl w-full h-[600px] object-cover shadow-lg"
              />

              {/* Decorative Plus */}
              <div className="absolute -top-6 right-0 text-[#f6c9c3] text-7xl font-bold">
                +
              </div>

              <div className="absolute -bottom-10 left-4 text-[#f6c9c3] text-7xl font-bold">
                +
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">

              {/* Decorative Icon */}
              <div className="absolute -top-8 right-4 text-[#f6c9c3] text-4xl">
                ❤
              </div>

              <span className="text-pink-500 font-semibold text-lg">
                About Us
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#165c99] leading-tight">
                We deliver the best care and compassion.
              </h2>

              <p className="mt-6 text-gray-500 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam quis nostrud exercitation ullamco.
              </p>

              {/* Features */}
              <div className="space-y-8 mt-10">

                {/* Item 1 */}
                <div className="flex gap-5">

                  <div className="border-2 border-pink-500 rounded-xl w-20 h-16 flex items-center justify-center">
                    <span className="text-3xl font-bold text-pink-500">
                      16+
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-pink-500">
                      Year Of Experience
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>

                </div>

                {/* Item 2 */}
                <div className="flex gap-5">

                  <div className="border-2 border-pink-500 rounded-xl w-20 h-16 flex items-center justify-center">
                    <span className="text-3xl font-bold text-pink-500">
                      20+
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-pink-500">
                      Senior Care Services
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>

                </div>

                {/* Item 3 */}
                <div className="flex gap-5">

                  <div className="border-2 border-pink-500 rounded-xl w-20 h-16 flex items-center justify-center">
                    <span className="text-3xl font-bold text-pink-500">
                      18+
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-pink-500">
                      Professional Care
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>

                </div>

              </div>

              {/* Button */}
              <button className="mt-10 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-xl transition">
                Read More
              </button>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}