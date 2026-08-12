import { Link, NavLink } from "react-router-dom";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";
export default function About() {
  return (
    <>
      {/* ================= Hero Section ================= */}
      <section className="bg-gradient-to-b from-white to-lime-100 py-20">
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
                  src="/assets/images/HeroImg1.jpeg"
                  alt="Hillside Nursing Home"
                  className="rounded-3xl w-full h-[600px] object-cover shadow-lg"
                />

                {/* Decorative Plus */}
                <div className="absolute -top-6 right-0 text-[#84C221] text-7xl font-bold">
                  +
                </div>

                <div className="absolute -bottom-10 left-4 text-[#84C221] text-7xl font-bold">
                  +
                </div>

              </div>

              {/* Right Content */}
              <div className="relative">

                {/* Decorative Icon */}
                <div className="absolute -top-8 right-4 text-[#84C221] text-4xl">
                  ❤
                </div>

                <span className="text-lime-500 font-semibold text-lg">
                  About Hillside Nursing Home
                </span>

                <h2 className="mt-4 text-4xl font-bold text-[#165c99] leading-tight">
                  Compassionate Healthcare with Excellence in Every Step
                </h2>

                <p className="mt-6 text-gray-500 leading-8">
                  At <strong>Hillside Nursing Home</strong>, we are dedicated to
                  providing high-quality healthcare with compassion, integrity, and
                  professionalism. Our experienced doctors, skilled nursing staff, and
                  modern medical facilities work together to ensure every patient
                  receives personalized treatment in a safe and comfortable
                  environment. Whether it's routine consultations, emergency care,
                  advanced diagnostics, or surgical procedures, our commitment is to
                  deliver exceptional healthcare with a patient-first approach.
                </p>

                {/* Why Patients Trust Us */}
                <div className="mt-10 space-y-5">

                  {/* Card 1 */}
                  <div className="flex items-start gap-5 rounded-2xl border border-gray-200 p-5 hover:border-[#84C221] hover:shadow-md transition-all duration-300">

                    <div className="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center text-2xl text-[#84C221] flex-shrink-0">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#165c99]">
                        Experienced Medical Professionals
                      </h3>

                      <p className="text-gray-500 mt-2 leading-7">
                        Our dedicated team of experienced doctors, specialists, nurses,
                        and healthcare professionals provides compassionate and
                        personalized treatment for patients of all ages.
                      </p>
                    </div>

                  </div>

                  {/* Card 2 */}
                  <div className="flex items-start gap-5 rounded-2xl border border-gray-200 p-5 hover:border-[#84C221] hover:shadow-md transition-all duration-300">

                    <div className="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center text-2xl text-[#84C221] flex-shrink-0">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#165c99]">
                        Advanced Medical Facilities
                      </h3>

                      <p className="text-gray-500 mt-2 leading-7">
                        Equipped with modern laboratories, ICU facilities, modular
                        operation theatres, and emergency ambulance services to deliver
                        comprehensive healthcare under one roof.
                      </p>
                    </div>

                  </div>

                  {/* Card 3 */}
                  <div className="flex items-start gap-5 rounded-2xl border border-gray-200 p-5 hover:border-[#84C221] hover:shadow-md transition-all duration-300">

                    <div className="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center text-2xl text-[#84C221] flex-shrink-0">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#165c99]">
                        Patient-Centered Care
                      </h3>

                      <p className="text-gray-500 mt-2 leading-7">
                        Every patient is treated with dignity, respect, and individual
                        attention. We focus on delivering quality healthcare while
                        ensuring comfort, safety, and a smooth recovery journey.
                      </p>
                    </div>

                  </div>

                </div>


              </div>

            </div>

          </div>
        </section>
      <WhyChooseUs />
      <StatsSection />
    </>
  );
}