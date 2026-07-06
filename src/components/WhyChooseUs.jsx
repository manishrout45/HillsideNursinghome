// WhyChooseUs.jsx

import { CheckCheck, Plus } from "lucide-react";

const features = [
  {
    title: "Experienced Medical Team",
    desc: "Qualified doctors, nurses, and specialists delivering compassionate, patient-focused treatment every day.",
  },
  {
    title: "Advanced Diagnostic Facilities",
    desc: "Modern laboratory and diagnostic services ensuring accurate evaluation and timely medical care.",
  },
  {
    title: "Affordable & Quality Care",
    desc: "Comprehensive healthcare services with transparent pricing and a commitment to clinical excellence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#1f5f97] py-20 lg:py-24">
      {/* Decorative Plus */}
      <Plus
        size={48}
        strokeWidth={2.5}
        className="absolute bottom-8 right-20 text-[#84C221]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="max-w-[460px]">
            <span className="text-[16px] font-medium text-[#84C221]">
              Why Choose Hillside Nursing Home
            </span>

            <h2 className="mt-3 text-[38px] lg:text-[44px] leading-[1.2] font-medium text-white">
              Trusted Healthcare with 
              Compassion & Excellence
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-white/90">
              Hillside Nursing Home combines experienced healthcare professionals, 
              modern medical facilities, and compassionate patient care to provide safe, 
              effective, and personalized treatment for every individual and family.
            </p>

            {/* Feature Cards */}
            <div className="mt-8 space-y-3">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-[#ffffff] px-5 py-5"
                >
                  {/* Icon Box */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#84C221]">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <CheckCheck
                        size={14}
                        className="text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-medium text-[#84C221]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[14px] leading-6 text-[#9a9a9a]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/images/HSN-3.jpg"
              alt="Care Service"
              className="w-[380px] h-[540px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}