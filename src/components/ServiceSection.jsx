import {
  FlaskConical,
  Ambulance,
  ShieldPlus,
  Bed,
  BadgeDollarSign,
  Users,
  TimerReset,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const services = [
  {
    slug: "lab-pathology",
    title: "On-site Lab & Pathology",
    icon: FlaskConical,
  },
  {
    slug: "ambulance-service",
    type: "highlight",
    title: "Advanced Ambulance Service",
    subtitle: "",
    description:
      "Fully equipped ambulances with trained medical staff for fast emergency response.",
    icon: Ambulance,
  },
  {
    slug: "modular-ots",
    title: "Advanced Modular OTs",
    icon: ShieldPlus,
  },
  {
    slug: "dedicated-icu",
    title: "Dedicated ICU",
    icon: Bed,
  },
  {
    slug: "senior-citizen-consultation",
    title: "Special Fee Consultation for Sr. Citizens",
    icon: BadgeDollarSign,
  },
  {
    slug: "surgical-assistance",
    title: "Full-Time Surgical Assistance",
    icon: Users,
  },
];

const serviceDescriptions = {
  "On-site Lab & Pathology":
    "Advanced laboratory and pathology services with accurate diagnostics and quick reporting for better treatment.",

  "Advanced Ambulance Service":
    "24/7 fully equipped ambulance service ensuring safe and timely emergency transportation.",

  "Advanced Modular OTs":
    "Modern modular operation theatres designed for advanced surgical procedures with the highest safety standards.",

  "Dedicated ICU":
    "Well-equipped Intensive Care Unit providing continuous monitoring and critical care by experienced specialists.",

  "Special Fee Consultation for Sr. Citizens":
    "Affordable consultation services exclusively for senior citizens with compassionate and personalized healthcare.",

  "Full-Time Surgical Assistance":
    "Experienced surgical team providing comprehensive assistance before, during, and after every surgical procedure.",
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
              const Icon = service.icon;

              if (service.type === "highlight") {
                return (
                  <motion.div
                    key={service.slug}
                    variants={zoomIn}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="flex min-h-[340px] flex-col items-center justify-center bg-[#84C221] px-8 text-center text-white"
                  >
                    {/* Icon */}
                    <motion.div
                      className="mb-6 flex justify-center text-white"
                      whileHover={{
                        rotate: 8,
                        scale: 1.15,
                      }}
                    >
                      <Icon size={58} strokeWidth={1.5} />
                    </motion.div>

                    {service.subtitle && (
                      <span className="text-sm uppercase tracking-[4px] text-white/80">
                        {service.subtitle}
                      </span>
                    )}

                    <h3 className="text-2xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-xs text-[15px] leading-7 text-white/90">
                      {service.description}
                    </p>

                    <NavLink
                      to={`/services/${service.slug}`}
                      className="mt-8 inline-flex items-center gap-2 border border-white px-6 py-3 text-sm text-white transition-all duration-300 hover:bg-white hover:text-[#84C221]"
                    >
                      Book Appointment
                      <ChevronRight size={16} />
                    </NavLink>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={service.slug}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,.08)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="border border-gray-200 bg-[#f7f7f7] px-8 py-10 text-center"
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-5 flex justify-center text-[#84C221]"
                    whileHover={{
                      rotate: 8,
                      scale: 1.15,
                    }}
                  >
                    <Icon size={48} strokeWidth={1.3} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-[20px] font-medium text-[#1f5f97]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[14px] leading-7 text-[#8b8b8b]">
                    {serviceDescriptions[service.title]}
                  </p>

                  {/* Learn More */}
                  <NavLink
                    to={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-[#84C221] transition-all duration-300 hover:gap-2"
                  >
                    Learn More
                    <ChevronRight size={14} />
                  </NavLink>
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
          <NavLink
            to="/services"
            className="inline-flex items-center border border-[#84C221] px-10 py-3 text-[14px] text-[#84C221] transition-all duration-300 hover:bg-[#84C221] hover:text-white"
          >
            View All Services
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}