import { HeartHandshake, Plus } from "lucide-react";
import { motion } from "framer-motion";

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
    y: 40,
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#1f5f97] py-20">
      {/* Decorative Icons */}
      <motion.div
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Plus
          size={48}
          strokeWidth={2.5}
          className="absolute top-10 right-40 text-[#84C221]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeartHandshake
          size={46}
          strokeWidth={1.7}
          className="absolute bottom-8 left-24 text-[#84C221]"
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.img
              src="https://img.magnific.com/premium-photo/scientist-conducting-research-his-desk_1254878-13051.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
              alt="Appointment"
              className="h-[470px] w-[380px] object-cover"
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.4,
              }}
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="max-w-[460px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.span
              variants={fadeUp}
              className="text-[16px] font-medium text-white"
            >
              Book an Appointment
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-3 text-[42px] font-medium leading-[1.15] text-white"
            >
              Schedule Your Visit
              <br />
              With Our Medical Experts
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[15px] leading-7 text-white/90"
            >
              Book an appointment with our experienced doctors for expert
              medical consultation, diagnosis, and personalized treatment. Our
              dedicated team is committed to providing quality healthcare with
              compassion and professionalism.
            </motion.p>

            {/* Form */}
            <motion.form
              variants={containerVariants}
              className="mt-7 space-y-3"
            >
              <motion.input
                variants={fadeUp}
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#84C221",
                }}
                type="text"
                placeholder="Full Name"
                className="h-[50px] w-full border-none bg-[#f4f4f4] px-4 text-[14px] text-gray-700 outline-none placeholder:text-[#a8a8a8]"
              />

              <motion.input
                variants={fadeUp}
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#84C221",
                }}
                type="text"
                placeholder="Number"
                className="h-[50px] w-full border-none bg-[#f4f4f4] px-4 text-[14px] text-gray-700 outline-none placeholder:text-[#a8a8a8]"
              />

              <motion.select
                variants={fadeUp}
                whileFocus={{
                  scale: 1.02,
                }}
                className="h-[50px] w-full appearance-none border-none bg-[#f4f4f4] px-4 text-[14px] text-[#a8a8a8] outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Department
                </option>
                <option>General Medicine</option>
                <option>General Surgery</option>
                <option>Emergency Care</option>
                <option>Diagnostic Services</option>
                <option>Pharmacy</option>
                <option>Health Check-up</option>
              </motion.select>

              <motion.button
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#98db2b",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                type="submit"
                className="mt-2 bg-[#84C221] px-8 py-3 text-[14px] font-semibold text-white"
              >
                Book Appointment
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}