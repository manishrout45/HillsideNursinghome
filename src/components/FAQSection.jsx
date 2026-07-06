import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How can I book an event with Eden Events?",
    answer:
      "You can book your event by contacting us through our website, phone, or email. Our team will guide you through the entire planning process.",
  },
  {
    question: "What types of events does Eden Events organize?",
    answer:
      "Eden Events specializes in weddings, birthdays, corporate events, anniversaries, engagements, and customized celebrations.",
  },
  {
    question: "What is the pricing for organizing an event?",
    answer:
      "Pricing depends on the type of event, number of guests, location, and customization. We offer flexible packages to suit different budgets.",
  },
  {
    question: "Can Eden Events customize themes and decorations?",
    answer:
      "Yes, we provide fully customized themes, décor, and setups based on your preferences to make your event unique and memorable.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <div className="mb-10">
            <div className="w-16 h-1 bg-[#5B5F97] mb-4"></div>
            <p className="uppercase tracking-widest text-gray-500 text-sm">
              Find Your Answer
            </p>
            <h2 className="text-3xl md:text-5xl font-light">
              Ask & <span className="font-bold">Questions</span>
            </h2>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="border-b border-gray-300 pb-4"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <div className="flex gap-4">
                    <span className="text-gray-400 font-semibold">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <span className="font-semibold text-gray-800 group-hover:text-[#5B5F97] transition">
                      {faq.question}
                    </span>
                  </div>

                  <FaChevronDown
                    className={`transition-transform duration-500 ${
                      activeIndex === index
                        ? "rotate-180 text-[#5B5F97]"
                        : "rotate-0 text-gray-400"
                    }`}
                  />
                </button>

                {/* Smooth Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 ml-10 pr-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden md:block rounded-xl " 
        >
          <img
            src="/assets/images/EdenImg12.jpeg"
            alt="faq"
            className="w-full max-h-[500px] object-contain "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;