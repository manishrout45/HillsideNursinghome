
import { useEffect, useState } from "react";
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

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-[#84C221] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[360px_1fr]">
          {/* Left Content */}
          <div className="text-white">
            <span className="text-[16px] font-semibold">
              What They Say?
            </span>

            <h2 className="mt-4 text-[30px] leading-[1.25] font-semibold">
              Trusted Healthcare,
              <br />
              Compassionate Care
            </h2>

            <p className="mt-6 max-w-sm text-[14px] leading-7 text-white/90">
              Our patients' trust is our greatest achievement. We are committed to
              delivering quality healthcare with compassion, advanced medical
              facilities, and a dedicated team of healthcare professionals.
            </p>

            <button className="mt-8 border border-white px-7 py-2.5 text-[13px] font-medium transition hover:bg-white hover:text-[#84C221]">
              Book Appointment
            </button>
          </div>

          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 346}px)`,
              }}
            >
              {[...testimonials, ...testimonials].map(
                (item, index) => (
                  <div
                    key={index}
                    className="relative w-[320px] shrink-0 rounded-3xl bg-white p-8 shadow-xl"
                  >
                    {/* Stars */}
                    <div className="mb-5 flex gap-1 text-[#f3b421]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    <p className="text-[14px] leading-7 text-gray-500">
                      {item.text}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <img
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

                    <Quote
                      size={52}
                      fill="currentColor"
                      strokeWidth={0}
                      className="absolute bottom-6 right-6 rotate-180 text-[#84C221]/20"
                    />
                  </div>
                )
              )}
            </div>

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

