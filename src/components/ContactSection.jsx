// ContactSection.jsx

import { HeartHandshake, Plus } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#1f5f97] py-20">
      {/* Decorative Icons */}
      <Plus
        size={48}
        strokeWidth={2.5}
        className="absolute top-10 right-40 text-[#f3c3b8]"
      />

      <HeartHandshake
        size={46}
        strokeWidth={1.7}
        className="absolute bottom-8 left-24 text-[#f3c3b8]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=900"
              alt="Appointment"
              className="w-[380px] h-[470px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="max-w-[460px]">
            <span className="text-[16px] font-medium text-white">
              Book an Appointment
            </span>

            <h2 className="mt-3 text-[42px] leading-[1.15] font-medium text-white">
              Schedule Your Visit
              <br />
              With Our Medical Experts
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-white/90">
              Book an appointment with our experienced doctors for expert medical
              consultation, diagnosis, and personalized treatment. Our dedicated team
              is committed to providing quality healthcare with compassion and
              professionalism.
            </p>

            {/* Form */}
            <form className="mt-7 space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="h-[50px] w-full border-none bg-[#f4f4f4] px-4 text-[14px] text-gray-700 outline-none placeholder:text-[#a8a8a8]"
              />

              <input
                type="text"
                placeholder="Number"
                className="h-[50px] w-full border-none bg-[#f4f4f4] px-4 text-[14px] text-gray-700 outline-none placeholder:text-[#a8a8a8]"
              />

              <select
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
              </select>

              <button
                type="submit"
                className="mt-2 bg-[#ef2f63] px-8 py-3 text-[14px] font-semibold text-white transition hover:bg-[#e02658]"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}