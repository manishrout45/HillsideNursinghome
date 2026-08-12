import {
  HeartPulse,
  FlaskConical,
  Ambulance,
  ShieldPlus,
  Bed,
  BadgeDollarSign,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const services = [
  {
    slug: "lab-pathology",
    icon: FlaskConical,
    title: "On-site Lab & Pathology",
    desc: "Advanced laboratory and pathology services with accurate diagnostics and quick reporting for better treatment.",
  },
  {
    slug: "ambulance-service",
    icon: Ambulance,
    title: "Advanced Ambulance Service",
    desc: "24/7 fully equipped ambulance service ensuring safe and timely emergency transportation.",
  },
  {
    slug: "modular-ots",
    icon: ShieldPlus,
    title: "Advanced Modular OTs",
    desc: "Modern modular operation theatres designed for advanced surgical procedures with the highest safety standards.",
  },
  {
    slug: "dedicated-icu",
    icon: Bed,
    title: "Dedicated ICU",
    desc: "Well-equipped Intensive Care Unit providing continuous monitoring and critical care by experienced specialists.",
  },
  {
    slug: "senior-citizen-consultation",
    icon: BadgeDollarSign,
    title: "Special Fee Consultation for Sr. Citizens",
    desc: "Affordable consultation services exclusively for senior citizens with compassionate and personalized healthcare.",
  },
  {
    slug: "surgical-assistance",
    icon: Users,
    title: "Full-Time Surgical Assistance",
    desc: "Experienced surgical team providing comprehensive assistance before, during, and after every surgical procedure.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-lg font-medium text-[#84C221]"
          >
            Our Services
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-4xl font-semibold leading-tight text-[#1F5F97] lg:text-5xl"
          >
            Comprehensive Healthcare
            <br />
            Services for Every Patient
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-gray-500"
          >
            Hillside Nursing Home provides quality healthcare services with
            experienced doctors, modern medical facilities and compassionate
            patient care under one roof.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,.12)",
                }}
                transition={{ duration: 0.3 }}
                className="group rounded-[22px] border border-[#1F5F97] bg-white px-8 py-10 text-center transition-all duration-300"
              >
                {/* Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-100 transition duration-300 group-hover:bg-[#1F5F97]">
                  <Icon
                    size={38}
                    strokeWidth={1.8}
                    className="text-[#84C221] transition duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-7 text-3xl font-medium text-[#1F5F97]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-7 text-gray-500">
                  {service.desc}
                </p>

                {/* Read More */}
                <NavLink
                  to={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-medium text-[#84C221] transition-all duration-300 hover:gap-3"
                >
                  Read More
                  <ArrowRight size={18} />
                </NavLink>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-12 top-12 hidden lg:block"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime-100 bg-white shadow-md">
          <HeartPulse
            size={26}
            strokeWidth={2}
            className="text-[#84C221]"
          />
        </div>
      </motion.div>

      {/* Decorative Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -bottom-24 -right-24 hidden h-72 w-72 rounded-full bg-[#1F5F97] lg:block"
      />

      {/* Decorative Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -top-20 -right-20 hidden h-40 w-40 rounded-full bg-[#84C221] lg:block"
      />

      {/* Decorative Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-24 -left-12 hidden h-32 w-32 rounded-full bg-[#84C221] lg:block"
      />
    </section>
  );
}