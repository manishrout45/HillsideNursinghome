import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anita Sharma",
    role: "Patient",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    text: `The doctors and nursing staff at Hillside Nursing Home were incredibly caring throughout my treatment. Their professionalism and compassionate approach made my recovery comfortable and stress-free.`,
  },
  {
    name: "Rajesh Kumar",
    role: "Patient Attendant",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=200",
    text: `We are grateful for the excellent medical care and constant support provided to our family member. The staff was attentive, friendly, and always ready to help whenever needed.`,
  },
  {
    name: "Priya Das",
    role: "Patient",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    text: `From admission to discharge, every step of my treatment was handled with great care. The facilities are modern, the doctors are experienced, and the entire team made me feel safe and valued.`,
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-[#84C221] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[360px_1fr]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Left Content */}
          <motion.div variants={fadeLeft} className="text-white">
            <span className="text-[16px] font-semibold">
              What They Say?
            </span>

            <h2 className="mt-4 text-[30px] font-semibold leading-[1.25]">
              Trusted Healthcare,
              <br />
              Compassionate Care
            </h2>

            <p className="mt-6 max-w-sm text-[14px] leading-7 text-white/90">
              Our patients' trust is our greatest achievement. We are committed
              to delivering quality healthcare with compassion, advanced medical
              facilities, and a dedicated team of healthcare professionals.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#84C221",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 border border-white px-7 py-2.5 text-[13px] font-medium"
            >
              Book Appointment
            </motion.button>
          </motion.div>

          {/* Slider */}
          <motion.div
            variants={fadeRight}
            className="overflow-hidden"
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: -(activeIndex * 346),
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              {[...testimonials, ...testimonials].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,.18)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative w-[320px] shrink-0 rounded-3xl bg-white p-8 shadow-xl"
                >
                  {/* Stars */}
                  <div className="mb-5 flex gap-1 text-[#f3b421]">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.08,
                          duration: 0.3,
                        }}
                      >
                        <Star
                          size={14}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-[14px] leading-7 text-gray-500">
                    {item.text}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="text-[16px] font-semibold text-[#262626]">
                        {item.name}
                      </h4>

                      <span className="text-[13px] text-gray-500">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{
                      rotate: 15,
                      scale: 1.15,
                    }}
                    className="absolute bottom-6 right-6"
                  >
                    <Quote
                      size={52}
                      fill="currentColor"
                      strokeWidth={0}
                      className="rotate-180 text-[#84C221]/20"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-3">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}