import { CheckCheck, Plus } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Experienced Medical Team",
    desc: "Qualified doctors, nurses, and specialists delivering compassionate, patient-focused treatment every day.",
  },
  {
    title: "Advanced Diagnostic Facilities",
    desc: "Modern laboratory and diagnostic services ensuring accurate evaluation and timely medical care.",
  },
  {
    title: "Affordable & Quality Care",
    desc: "Comprehensive healthcare services with transparent pricing and a commitment to clinical excellence.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#1f5f97] py-20 lg:py-24">
      {/* Decorative Plus */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Plus
          size={48}
          strokeWidth={2.5}
          className="absolute bottom-8 right-20 text-[#84C221]"
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            className="max-w-[460px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.span
              variants={fadeLeft}
              className="text-[16px] font-medium text-[#84C221]"
            >
              Why Choose Hillside Nursing Home
            </motion.span>

            <motion.h2
              variants={fadeLeft}
              className="mt-3 text-[38px] font-medium leading-[1.2] text-white lg:text-[44px]"
            >
              Trusted Healthcare with
              Compassion & Excellence
            </motion.h2>

            <motion.p
              variants={fadeLeft}
              className="mt-4 text-[15px] leading-7 text-white/90"
            >
              Hillside Nursing Home combines experienced healthcare
              professionals, modern medical facilities, and compassionate
              patient care to provide safe, effective, and personalized
              treatment for every individual and family.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              variants={containerVariants}
              className="mt-8 space-y-3"
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,.15)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 bg-white px-5 py-5"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#84C221]"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <CheckCheck
                        size={14}
                        strokeWidth={2.5}
                        className="text-white"
                      />
                    </div>
                  </motion.div>

                  <div>
                    <h3 className="text-[18px] font-medium text-[#84C221]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[14px] leading-6 text-[#9a9a9a]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src="https://img.magnific.com/free-photo/nurses-getting-ready-work-day_23-2149309977.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
              alt="Care Service"
              className="h-[540px] w-[380px] object-cover"
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.4,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}