// HeroSection.jsx

import { Play, Stethoscope, Clock3, Cross } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main Hero */}
      <div className="bg-[#EEF7E3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 lg:pt-16 pb-32">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            {/* Left Content */}
            <div className="relative z-10 ml-16">
              <h1 className="max-w-md text-[48px] leading-[1.2] font-semibold text-[#1f5f97]">
                Trusted Healthcare
                
                Compassionate Care
                
                For Every Family
              </h1>

              <p className="mt-6 max-w-sm text-[15px] text-[#7f9b9c] leading-7">
                At Hillside Nursing Home, we are dedicated to providing quality
  healthcare with experienced doctors, modern facilities, and
  compassionate care. Your health, comfort, and recovery remain our
  highest priority every day.
              </p>

              <div className="mt-8 flex items-center gap-8">
                <button className="border border-[#84C221] px-8 py-3 text-sm text-[#84C221] font-medium hover:bg-[#84C221] hover:text-white transition">
                  Book Appointment
                </button>

                <button className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#84C221] border-[4px] border-[#1f5f97] flex items-center justify-center shadow-lg">
                    <Play
                      size={16}
                      fill="white"
                      color="white"
                      className="ml-0.5"
                    />
                  </div>

                  <span className="text-sm font-medium text-[#1d1d1d]">
                    Watch Intro
                  </span>
                </button>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="relative flex justify-center lg:justify-end mr-12">
              {/* Decorative Plus */}
              <span className="absolute -top-4 left-8 text-[#84C221] text-6xl font-light">
                +
              </span>

              {/* Nurse Image */}
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=900"
                  alt="Nurse"
                  className="h-[420px] w-auto object-contain"
                />
              </div>

              {/* Decorative Plus */}
              <span className="absolute bottom-6 left-[-40px] text-[#84C221] text-5xl font-light">
                +
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 -mt-24">
        <div className="grid md:grid-cols-3 shadow-2xl">
          {/* Card 1 */}
          <div className="bg-[#84C221] text-white px-8 py-12 text-center">
            <Clock3
              size={50}
              strokeWidth={1.2}
              className="mx-auto mb-5"
            />

            <h3 className="text-2xl font-semibold">
              24/7 Emergency Care
            </h3>

            <p className="mt-4 text-sm text-white/90 leading-7">
              Immediate medical attention from our experienced healthcare
  professionals whenever you need urgent care.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f5f5f5] border-r border-gray-300 px-8 py-12 text-center">
            <Stethoscope
              size={50}
              strokeWidth={1.2}
              className="mx-auto mb-5 text-[#84C221]"
            />

            <h3 className="text-2xl font-medium text-[#1d5d99]">
              Expert Medical Team
            </h3>

            <p className="mt-4 text-sm text-gray-500 leading-7">
              Our qualified doctors, nurses, and specialists provide personalized
  treatment with compassion and clinical excellence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f5f5f5] px-8 py-12 text-center">
            <Cross
              size={50}
              strokeWidth={1.2}
              className="mx-auto mb-5 text-[#84C221]"
            />

            <h3 className="text-2xl font-medium text-[#1f5f97]">
              Advanced Diagnostics
            </h3>

            <p className="mt-4 text-sm text-gray-500 leading-7">
              Equipped with modern diagnostic technology to ensure accurate
  diagnosis and effective treatment for every patient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}