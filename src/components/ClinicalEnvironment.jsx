import { Building2, Plus } from "lucide-react";

const environments = [
  {
    title: "Modern ICU",
    image:
      "https://img.magnific.com/free-psd/interior-view-operating-room-generative-ai_587448-1909.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "Advanced intensive care unit equipped with modern life-support systems.",
  },
  {
    title: "Operation Theatre",
    image:
      "https://img.magnific.com/free-photo/interior-view-operating-room_1170-2254.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "Well-equipped modular operation theatres for safe surgical procedures.",
  },
  {
    title: "General Ward",
    image:
      "https://img.magnific.com/free-photo/hospital-room-interior_181624-15732.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "Comfortable and hygienic wards designed for quality patient care.",
  },
  {
    title: "Emergency Unit",
    image:
      "https://img.magnific.com/premium-photo/emergency-room-with-medical-equipment_53876-1195737.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "24×7 emergency services with rapid medical response and expert care.",
  },
  {
    title: "Patient Rooms",
    image:
      "https://img.magnific.com/premium-photo/checklist-bed-doctor-with-patient-hospital-healthcare-consultation-medical-service-clipboard-discussion-cardiology-surgeon-with-woman-postoperative-checkup-clinic_590464-456454.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "Clean, spacious, and comfortable rooms for a peaceful recovery.",
  },
  {
    title: "Nursing Station",
    image:
      "https://img.magnific.com/free-photo/retired-person-using-wheelchair-talking-with-senior-doctor-appointment-while-being-helped-by-professional-nurse-private-clinic-older-man-living-with-disability-busy-hospital-reception_482257-46754.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "Dedicated nursing staff ensuring continuous monitoring and support.",
  },
];

export default function ClinicalEnvironment() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <Plus
        className="absolute left-10 top-10 hidden lg:block text-[#84C221]/20"
        size={44}
      />

      <Building2
        className="absolute bottom-10 right-10 hidden lg:block text-[#84C221]/20"
        size={44}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#84C221]">
            Our Clinical Environment
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#1f5f97] sm:text-4xl lg:text-5xl">
            Modern Facilities Designed
            <br className="hidden sm:block" />
            For Better Patient Care
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Hillside Nursing Home offers advanced medical infrastructure,
            comfortable patient spaces and modern treatment facilities to
            provide safe and compassionate healthcare.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {environments.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden pt-[65%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-[#1f5f97]">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                <button className="mt-6 w-fit rounded-full bg-[#84C221] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#6ca71a]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}