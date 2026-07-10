import { Building2, Plus } from "lucide-react";
import { motion } from "framer-motion";

const environments = [
  {
    title: "Modern ICU",
    image:
      "https://img.magnific.com/free-psd/interior-view-operating-room-generative-ai_587448-1909.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "Advanced intensive care unit equipped with modern life-support systems.",
  },
  {
    title: "Sterilization (CSSD, ETO)",
    image:
      "https://img.magnific.com/free-photo/interior-view-operating-room_1170-2254.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "Advanced sterilization facilities with CSSD and ETO systems ensuring the highest standards of infection control and patient safety.",
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
    title: "Advance Imaging",
    image:
      "https://img.magnific.com/free-photo/hispanic-doctor-nurse-discussing-xray-while-standing-together-corridor-hospital_662251-3075.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "State-of-the-art imaging services providing accurate diagnostic support for faster and more effective treatment planning.",
  },
  {
    title: "Nursing Station",
    image:
      "https://img.magnific.com/premium-photo/people-tablet-iv-bag-hospital-healthcare-drip-treatment-medicine-infusion-wellness-set-up-tech-nurses-with-medical-equipment-patient-care-antibiotics-electrolytes-line_590464-568155.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    description:
      "Dedicated nursing staff ensuring continuous monitoring and support.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function ClinicalEnvironment() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Decorative Icons */}
      <motion.div
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Plus
          className="absolute left-10 top-10 hidden text-[#84C221]/20 lg:block"
          size={44}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Building2
          className="absolute bottom-10 right-10 hidden text-[#84C221]/20 lg:block"
          size={44}
        />
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#84C221]">
            Our Clinical Environment
          </span>

          <h2 className="mt-3 text-3xl font-medium leading-tight text-[#1f5f97] sm:text-4xl lg:text-5xl">
            Modern Facilities Designed
            <br className="hidden sm:block" />
            For Better Patient Care
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Hillside Nursing Home offers advanced medical infrastructure,
            comfortable patient spaces and modern treatment facilities to
            provide safe and compassionate healthcare.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {environments.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,.15)",
              }}
              transition={{ duration: 0.3 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden pt-[65%]">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
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

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#6ca71a",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-fit rounded-full bg-[#84C221] px-5 py-2 text-sm font-medium text-white"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}