import {
  MessageCircleHeart,
  Ambulance,
  Dumbbell,
  HandHelping,
  HeartHandshake,
  PackagePlus,
   TimerReset,
   ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Speech Therapy",
    icon: MessageCircleHeart,
  },
  {
    type: "highlight",
    title: "24/7 Emergency Care",
    subtitle: "Always Here For You",
    description:
      "Our experienced nursing team provides compassionate round-the-clock support for patients and their families.",
    icon: Ambulance, // Optional if you want to display an icon in the highlight card
  },
  {
    title: "Physical Therapy",
    icon: Dumbbell,
  },
  {
    title: "Occupational Therapy",
    icon: HandHelping,
  },
  {
    title: "Nursing Care Services",
    icon: HeartHandshake,
  },
  {
    title: "Nursing Home Supplies",
    icon: PackagePlus,
  },
];

const serviceDescriptions = {
  "General Medicine":
    "Comprehensive diagnosis and treatment for common illnesses and chronic health conditions.",

  "General Surgery":
    "Safe and advanced surgical procedures performed by experienced surgeons.",

  "Diagnostic Services":
    "Accurate laboratory testing and modern diagnostic imaging for effective treatment.",

  Pharmacy:
    "Well-stocked pharmacy providing genuine medicines and healthcare essentials.",

  "Critical Care":
    "Advanced intensive care with continuous monitoring for critically ill patients.",
};

export default function ServiceSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF7E3] py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1600"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Top Left Icon */}
      <TimerReset
        size={46}
        strokeWidth={1.5}
        className="absolute left-16 top-8 text-[#84C221]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[16px] font-medium text-[#84C221]">
            Our Medical Services
          </span>

          <h2 className="mt-3 text-[42px] font-medium leading-[1.2] text-[#1f5f97]">
           Comprehensive Healthcare
            <br />
            Services Under One Roof
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#8f9b9d]">
            We provide a complete range of healthcare services supported by experienced
doctors, skilled nursing professionals, advanced diagnostics, and modern
medical facilities to ensure the best care for every patient.
          </p>
        </div>

        {/* Service Grid */}
        <div className="mt-14 overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-3">
            {services.map((service, index) => {
              // Special middle card
              if (service.type === "highlight") {
                return (
                  <div
                    key={index}
                    className="flex min-h-[340px] flex-col items-center justify-center bg-[#84C221] px-8 text-center text-white"
                  >
                    <span className="text-sm uppercase tracking-[4px] text-white/80">
                      {service.subtitle}
                    </span>

                    <h3 className="mt-4 text-3xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-xs text-[15px] leading-7 text-white/90">
                      {service.description}
                    </p>

                    <button className="mt-8 inline-flex items-center gap-2 border border-white px-6 py-3 text-sm transition hover:bg-white hover:text-[#84C221]">
                      Book Appointment
                      <ChevronRight size={16} />
                    </button>
                  </div>
                );
              }

              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="border border-gray-200 bg-[#f7f7f7] px-8 py-10 text-center transition-all hover:bg-white"
                >
                  <div className="mb-5 flex justify-center text-[#84C221]">
                    <Icon size={48} strokeWidth={1.3} />
                  </div>

                  <h3 className="text-[20px] font-medium text-[#1f5f97]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#8b8b8b]">
                    {serviceDescriptions[service.title]}
                  </p>

                  <button className="mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-[#84C221]">
                    Learn More
                    <ChevronRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-12 text-center">
          <button className="border border-[#84C221] px-10 py-3 text-[14px] text-[#84C221] transition hover:bg-[#84C221] hover:text-white">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}