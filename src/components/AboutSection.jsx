// AboutSection.jsx

import { Plus, HeartHandshake, TimerReset } from "lucide-react";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-20">
      {/* Decorative Elements */}
      <Plus
        className="absolute top-4 left-[40%] text-[#84C221]"
        size={48}
        strokeWidth={2}
      />


      <TimerReset
        className="absolute top-5 right-10 text-[#84C221]"
        size={38}
        strokeWidth={1.6}
      />

      <HeartHandshake
        className="absolute bottom-6 right-10 text-[#84C221]"
        size={38}
        strokeWidth={1.6}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/assets/images/HeroImg1.jpeg"
              alt="Nursing Care"
              className="w-[380px] h-[500px] object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-[#84C221] text-[18px] font-medium">
              About Us
            </span>

            <h2 className="mt-3 max-w-[520px] text-[42px] leading-[1.2] font-medium text-[#1f5f97]">
             Providing Quality Healthcare With Compassion & Excellence
            </h2>

            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-[#8b8b8b]">
              Hillside Nursing Home is committed to delivering exceptional healthcare
              through experienced doctors, skilled nursing staff, and modern medical
              facilities. We focus on providing personalized treatment in a safe,
              comfortable, and caring environment for every patient.
            </p>

            {/* Stats Cards */}
            <motion.div
              className="mt-8 flex flex-wrap w-fit shadow-xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="min-w-[200px] bg-white px-12 py-8 text-center">
                <h3 className="text-[42px] font-semibold text-[#84C221]">
                  15+
                </h3>

                <p className="mt-1 text-[15px] text-[#84C221]">
                  Years of Trusted Care
                </p>
              </div>

              <div className="min-w-[200px] bg-[#84C221] px-12 py-8 text-center">
                <h3 className="text-[42px] font-semibold text-white">
                  10K+
                </h3>

                <p className="mt-1 text-[15px] text-white">
                  Happy Patients Treated
                </p>
              </div>
            </motion.div>

            <p className="mt-10 max-w-[520px] text-[15px] leading-7 text-[#8b8b8b]">
              From preventive healthcare and diagnostics to specialized treatments and
              emergency medical services, our dedicated team is committed to ensuring
              the highest standards of patient care with compassion, integrity, and
              professionalism.
            </p>

            <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }} className="mt-8 border border-[#84C221] px-10 py-3 text-[15px] font-medium text-[#84C221] transition-all duration-300 hover:bg-[#84C221] hover:text-white">
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}