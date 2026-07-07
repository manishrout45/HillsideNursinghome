// HeroSection.jsx

import { Play, Stethoscope, Clock3, Cross } from "lucide-react";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero */}
      <div className="bg-[#EEF7E3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-24 lg:pb-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              className="relative z-10 text-center lg:text-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
>
              <h1 className="text-4xl font-semibold leading-tight text-[#1f5f97] sm:text-5xl lg:text-6xl">
                Trusted Healthcare
                <br />
                Compassionate Care
                <br />
                For Every Family
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-[15px] leading-7 text-[#7f9b9c] lg:mx-0">
                At Hillside Nursing Home, we are dedicated to providing quality
                healthcare with experienced doctors, modern facilities, and
                compassionate care. Your health, comfort, and recovery remain
                our highest priority every day.
              </p>

              <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
                <button className="rounded-md border border-[#84C221] px-8 py-3 text-sm font-medium text-[#84C221] transition hover:bg-[#84C221] hover:text-white">
                  Book Appointment
                </button>

                <button className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#1f5f97] bg-[#84C221] shadow-lg">
                    <Play
                      size={16}
                      fill="white"
                      color="white"
                      className="ml-0.5"
                    />
                  </div>

                  <span className="text-sm font-medium text-[#1d1d1d]">
                    Watch Intro
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="absolute left-4 top-0 hidden text-6xl font-light text-[#84C221] lg:block">
                +
              </span>

              <img
                src="/assets/images/HeroImg.png"
                alt="Healthcare"
                className="w-full max-w-xs object-contain sm:max-w-sm md:max-w-md lg:max-w-lg"
              />

              <span className="absolute bottom-8 left-0 hidden text-5xl font-light text-[#84C221] lg:block">
                +
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-20 mx-auto -mt-12 max-w-7xl px-4 sm:px-6 lg:-mt-20 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl shadow-2xl md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            className="bg-[#84C221] px-8 py-10 text-center text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <Clock3
              size={50}
              strokeWidth={1.2}
              className="mx-auto mb-5"
            />

            <h3 className="text-2xl font-semibold">
              24/7 Emergency Care
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/90">
              Immediate medical attention from our experienced healthcare
              professionals whenever you need urgent care.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="border-y border-gray-200 bg-[#f5f5f5] px-8 py-10 text-center md:border-x md:border-y-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Stethoscope
              size={50}
              strokeWidth={1.2}
              className="mx-auto mb-5 text-[#84C221]"
            />

            <h3 className="text-2xl font-semibold text-[#1f5f97]">
              Expert Medical Team
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Our qualified doctors, nurses, and specialists provide
              personalized treatment with compassion and clinical excellence.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-[#f5f5f5] px-8 py-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Cross
              size={50}
              strokeWidth={1.2}
              className="mx-auto mb-5 text-[#84C221]"
            />

            <h3 className="text-2xl font-semibold text-[#1f5f97]">
              Advanced Diagnostics
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Equipped with modern diagnostic technology to ensure accurate
              diagnosis and effective treatment for every patient.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}