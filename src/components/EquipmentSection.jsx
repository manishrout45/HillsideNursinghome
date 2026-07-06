import { ArrowRight } from "lucide-react";

const equipments = [
  {
    title: "Surgical Microscopes",
    image:
      "https://img.magnific.com/free-photo/medical-eyepieces-dental-cabinet_140725-7722.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "High-precision surgical microscopes that enhance visualization during delicate neurosurgical and vascular procedures.",
  },
  {
    title: "Neurodrills",
    image:
      "https://img.magnific.com/premium-photo/cnc-machine-tools-milling-metal-factory_251740-163.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "Advanced cranial and spinal drilling systems designed for safe, efficient, and minimally invasive surgeries.",
  },
  {
    title: "C-Arms",
    image:
      "https://img.magnific.com/premium-photo/chicago-il-usa-august-162023-cuttingedge-medical-insight-xray-ct-machines-illuminate_871349-7869.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "Real-time fluoroscopic imaging technology providing exceptional accuracy during orthopedic and trauma procedures.",
  },
  {
    title: "Vessel Sealing Systems",
    image:
      "https://www.westerntrading.in/wp-content/uploads/2019/09/ligasure-impact-instrument-b.jpg",
    description:
      "Modern vessel sealing technology ensuring secure hemostasis with reduced blood loss and faster recovery.",
  },
  {
    title: "Ultrasonic Dissection",
    image:
      "https://5.imimg.com/data5/PV/GD/MY-65997230/aidpac-ultrasonic-dissection-1000x1000.jpg",
    description:
      "Precision ultrasonic energy for tissue dissection, minimizing thermal damage and improving surgical outcomes.",
  },
  {
    title: "Stryker Laparoscopy",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/11/468740327/MO/PK/TE/48816797/stryker-laparoscopy.jpeg",
    description:
      "State-of-the-art laparoscopic system enabling minimally invasive procedures with enhanced visualization.",
  },
];

export default function EquipmentSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[340px_1fr] xl:grid-cols-[400px_1fr]">
          {/* Left Side */}
          <div className="h-fit lg:sticky lg:top-24">
            <span className="text-base font-semibold text-[#84C221] sm:text-lg">
              Advanced Technology
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              <span className="text-[#1f5f97]">
                ADVANCED
                <br />
                EQUIPMENT
              </span>

              <br />

              <span className="text-[#4A9DF8]">
                FOR PRECISION
              </span>
            </h2>

            <div className="mt-5 h-1 w-20 rounded bg-[#84C221]" />

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
              Hillside Nursing Home is equipped with advanced surgical
              technologies and modern medical equipment that support accurate
              diagnosis, minimally invasive procedures, and superior patient
              care.
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {equipments.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#84C221] hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="overflow-hidden md:w-[250px] lg:w-[240px] xl:w-[260px] shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-56 w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 md:h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 lg:p-8">
                    <h3 className="text-xl font-semibold text-[#1f5f97] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-[15px]">
                      {item.description}
                    </p>

                    <button className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#84C221] transition-all duration-300 group-hover:gap-4">
                      Learn More
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}