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
import { motion } from "framer-motion";

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
    icon: Ambulance,
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
  "Speech Therapy":
    "Specialized therapy programs designed to improve speech, language, communication, and swallowing abilities.",

  "Physical Therapy":
    "Personalized rehabilitation programs to restore mobility, strength, and overall physical function.",

  "Occupational Therapy":
    "Helping patients regain independence in daily living activities through expert therapeutic care.",

  "Nursing Care Services":
    "Compassionate nursing support delivered by trained professionals with 24/7 patient monitoring.",

  "Nursing Home Supplies":
    "Providing quality medical equipment and essential healthcare supplies for patient comfort.",
};

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

const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
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

      {/* Decorative Icon */}
      <motion.div
        initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <TimerReset
          size={46}
          strokeWidth={1.5}
          className="absolute left-16 top-8 text-[#84C221]"
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-[16px] font-medium text-[#84C221]">
            Our Medical Services
          </span>

          <h2 className="mt-3 text-[42px] font-medium leading-[1.2] text-[#1f5f97]">
            Comprehensive Healthcare
            <br />
            Services Under One Roof
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#8f9b9d]">
            We provide a complete range of healthcare services supported by
            experienced doctors, skilled nursing professionals, advanced
            diagnostics, and modern medical facilities to ensure the best care
            for every patient.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className="mt-14 overflow-hidden shadow-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid md:grid-cols-3">
            {services.map((service, index) => {
              if (service.type === "highlight") {
                return (
                  <motion.div
                    key={index}
                    variants={zoomIn}
                    whileHover={{
                      scale: 1.03,
                    }}
                    transition={{ duration: 0.3 }}
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

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#ffffff",
                        color: "#84C221",
                      }}
                      whileTap={{ scale: 0.96 }}
                      className="mt-8 inline-flex items-center gap-2 border border-white px-6 py-3 text-sm transition"
                    >
                      Book Appointment
                      <ChevronRight size={16} />
                    </motion.button>
                  </motion.div>
                );
              }

              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,.08)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="border border-gray-200 bg-[#f7f7f7] px-8 py-10 text-center"
                >
                  <motion.div
                    className="mb-5 flex justify-center text-[#84C221]"
                    whileHover={{
                      rotate: 8,
                      scale: 1.15,
                    }}
                  >
                    <Icon size={48} strokeWidth={1.3} />
                  </motion.div>

                  <h3 className="text-[20px] font-medium text-[#1f5f97]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#8b8b8b]">
                    {serviceDescriptions[service.title]}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-[#84C221]"
                  >
                    Learn More
                    <ChevronRight size={14} />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Button */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#84C221",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#84C221] px-10 py-3 text-[14px] text-[#84C221] transition"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}