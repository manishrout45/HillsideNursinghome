// Footer.jsx

import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#1f5f97] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer */}
        <div className="grid gap-10 py-8 md:grid-cols-3">
          {/* Logo & About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={fadeUp}
          >
            <div className="mb-4">
              <img
                src="/assets/images/logo/logoW.png"
                alt="Nursinga Logo"
                className="h-16 w-auto"
              />
            </div>

            <p className="max-w-[250px] text-[15px] leading-7 text-white/90">
              Hillside Nursing Home is committed to providing compassionate,
              high-quality healthcare through experienced doctors, modern
              medical facilities, and patient-centered care for every
              individual.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <motion.a
                href="#"
                aria-label="Facebook"
                whileHover={{ scale: 1.12, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white transition hover:bg-white hover:text-[#1f5f97]"
              >
                <Facebook size={16} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/hillside_nursing_home/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.12, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white transition hover:bg-white hover:text-[#1f5f97]"
              >
                <Instagram size={16} />
              </motion.a>

              <motion.a
                href="#"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.12, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white transition hover:bg-white hover:text-[#1f5f97]"
              >
                <Linkedin size={16} />
              </motion.a>

              <motion.a
                href="#"
                aria-label="Twitter"
                whileHover={{ scale: 1.12, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white transition hover:bg-white hover:text-[#1f5f97]"
              >
                <Twitter size={16} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.15}
            variants={fadeUp}
          >
            <h3 className="mb-5 text-[26px] font-semibold">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-4 text-[15px]">
              {[
                "Home",
                "Contact",
                "About",
                "Blog",
                "Services",
                "FAQs",
              ].map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{ x: 6 }}
                  className="transition hover:text-gray-200"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.3}
            variants={fadeUp}
          >
            <h3 className="mb-5 text-[26px] font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5 text-[15px]">
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <MapPin className="mt-1 shrink-0" size={18} />
                <span> 92, Khandagiri Square, Amrit Nagar, Dumuduma, Bhubaneswar, Odisha 751030</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
              >
                <Mail size={18} />
                <span>hillside@adyantwellness.com</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Phone size={18} />
                <div className="flex flex-col">
                  <span>+91 8245446860</span>
                  <span>+91 9090863974</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-white/30 py-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
        >
          <div className="flex flex-col items-center justify-between gap-3 text-center text-[13px] text-white/90 lg:flex-row">
            <p>
              Copyright © 2026 Hillside Nursinghome. All Rights Reserved.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>

              <span>|</span>

              <a href="#" className="hover:text-white transition">
                Terms and Conditions
              </a>
            </div>

            <p>Powered by: MarcadsPro.com</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}