// CTASection.jsx

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function CTASection() {
  return (
    <section className="relative overflow-hidden h-[320px] md:h-[350px] lg:h-[400px]">
      {/* Background Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1600"
        alt="Healthcare"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#EEF7E3]/95" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl text-center">
          {/* Subtitle */}
          <motion.span
            className="text-sm font-medium md:text-base text-[#84C221] block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeUp}
          >
            Your Health, Our Priority
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl text-[#1f5f97]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15}
            variants={fadeUp}
          >
            Compassionate Care,
            <br className="hidden sm:block" />
            Trusted Healthcare
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8f9b9d] md:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.3}
            variants={fadeUp}
          >
            At Hillside Nursing Home, our experienced doctors, dedicated nursing
            staff, and modern medical facilities work together to provide
            personalized, high-quality healthcare for you and your family.
          </motion.p>

          {/* Button */}
          <motion.button
            className="mt-8 rounded-lg bg-[#84C221] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6ea51c] sm:px-8 lg:px-10"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Book An Appointment
          </motion.button>
        </div>
      </div>
    </section>
  );
}