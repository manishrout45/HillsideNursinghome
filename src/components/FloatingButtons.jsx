import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-2 right-0 -translate-y-1/2 flex flex-col gap-4 z-[999]">

      {/* ================= WHATSAPP ================= */}
      <div className="relative flex items-center group">

        {/* Sliding Panel (comes from behind button) */}
        <div
          className="absolute right-12 flex items-center gap-2 
                     bg-white shadow-lg rounded-l-lg px-4 py-2 whitespace-nowrap
                     translate-x-10 opacity-0
                     group-hover:translate-x-0 group-hover:opacity-100
                     transition-all duration-300"
        >
          <span className="text-sm text-gray-700">Chat with us</span>
          <a
            href="https://wa.me/916370197899"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold"
          >
            +91 63701 97899
          </a>
        </div>

        {/* Square Button */}
        <div
          className="w-12 h-12 bg-[#84C221] flex items-center justify-center 
                     shadow-lg hover:bg-[#8cd11f] transition-all duration-300 cursor-pointer z-10"
        >
          <FaWhatsapp className="text-white text-xl" />
        </div>
      </div>

      {/* ================= CALL ================= */}
      <div className="relative flex items-center group">

        {/* Sliding Panel */}
        <div
          className="absolute right-12 flex items-center gap-2 
                     bg-white shadow-lg rounded-l-lg px-4 py-2 whitespace-nowrap
                     translate-x-10 opacity-0
                     group-hover:translate-x-0 group-hover:opacity-100
                     transition-all duration-300"
        >
          <span className="text-sm text-gray-700">Call us</span>
          <a
            href="tel:+916370197899"
            className="text-blue-600 font-semibold"
          >
            +91 63701 97899
          </a>
        </div>

        {/* Square Button */}
        <div
          className="w-12 h-12 bg-[#1f5f97] flex items-center justify-center 
                     shadow-lg hover:bg-[#1e6aac] transition-all duration-300 cursor-pointer z-10"
        >
          <FaPhoneAlt className="text-white text-lg" />
        </div>
      </div>

    </div>
  );
}