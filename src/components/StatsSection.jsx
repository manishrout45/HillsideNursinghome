// StatsSection.jsx

import {
  UserRound,
  Stethoscope,
  Bed,
  Clock3,
  Plus,
  Activity,
  TimerReset,
} from "lucide-react";

const stats = [
  {
    icon: UserRound,
    value: "10K+",
    label: "Patients Treated",
    active: false,
  },
  {
    icon: Stethoscope,
    value: "25+",
    label: "Expert Doctors",
    active: true,
  },
  {
    icon: Bed,
    value: "50+",
    label: "Hospital Beds",
    active: false,
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Emergency Support",
    active: true,
  },
];

const progress = [
  { name: "Patient Satisfaction", value: 98 },
  { name: "Quality Healthcare", value: 96 },
  { name: "Emergency Response", value: 95 },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Top Section */}
      <div className="bg-[#f5f5f5] pt-14 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#84C221] text-[18px] font-medium">
              Our Strengths
            </span>

            <h2 className="mt-3 text-[40px] leading-tight font-medium text-[#1f5f97]">
              Committed to Excellence in Healthcare
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#8e8e8e]">
              We are dedicated to providing exceptional healthcare through experienced
              medical professionals, advanced technology, compassionate nursing, and
              patient-centered treatment in a safe and comfortable environment.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 shadow-xl">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`px-5 py-8 text-center ${
                    item.active
                      ? "bg-[#84C221] text-white"
                      : "bg-white"
                  }`}
                >
                  <Icon
                    size={40}
                    strokeWidth={1.5}
                    className={`mx-auto mb-4 ${
                      item.active
                        ? "text-white"
                        : "text-[#84C221]"
                    }`}
                  />

                  <h3
                    className={`text-[40px] font-semibold ${
                      item.active
                        ? "text-white"
                        : "text-[#84C221]"
                    }`}
                  >
                    {item.value}
                  </h3>

                  <p
                    className={`mt-2 text-[14px] ${
                      item.active
                        ? "text-white"
                        : "text-[#8d8d8d]"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative overflow-hidden bg-[#EEF7E3] py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1600"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Decorative Icons */}
        <Plus
          size={46}
          strokeWidth={2.5}
          className="absolute top-24 left-[38%] text-[#84C221]"
        />

        <Plus
          size={34}
          strokeWidth={2.5}
          className="absolute bottom-6 left-[38%] text-[#84C221]"
        />

        <TimerReset
          size={44}
          strokeWidth={1.5}
          className="absolute bottom-6 right-20 text-[#84C221]"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://img.magnific.com/premium-photo/senior-man-physiotherapy-leg-with-stretching-join-recovery-support-rehabilitation-bed-consultation-patient-with-exercise-help-knee-pain-inflammation-joint-strength_590464-422005.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
                alt="Home Care"
                className="w-[400px] h-[300px] object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-[#84C221] text-[18px] font-medium">
                Why Patients Trust Us
              </span>

              <h2 className="mt-3 text-[38px] leading-tight font-medium text-[#1f5f97]">
                Delivering Quality Medical
                Care with Compassion
              </h2>

              {/* Progress Bars */}
              <div className="mt-7 space-y-6">
                {progress.map((item, index) => (
                  <div key={index}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[17px] text-[#6f6f6f]">
                        {item.name}
                      </span>

                      <span className="text-[15px] text-[#6f6f6f]">
                        {item.value}%
                      </span>
                    </div>

                    <div className="h-[7px] rounded-full bg-[#1f5f97]">
                      <div
                        className="h-full rounded-full bg-[#84C221]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}