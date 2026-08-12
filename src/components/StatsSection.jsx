import { useEffect, useRef, useState } from "react";
import {
  UserRound,
  HeartHandshake,
  Bed,
  Clock3,
  Plus,
  TimerReset,
} from "lucide-react";

const stats = [
  {
    icon: UserRound,
    value: "10K+",
    label: "Patients Treated",
    active: false,
  },
    {
      icon: HeartHandshake,
      value: "100%",
      label: "Patient-Centered Care",
      active: true,
    },
  {
    icon: Bed,
    value: "50+",
    label: "Hospital Beds",
    active: false,
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Emergency Support",
    active: true,
  },
];

const progress = [
  { name: "Patient Satisfaction", value: 98 },
  { name: "Quality Healthcare", value: 96 },
  { name: "Emergency Response", value: 95 },
];

function Counter({ value, animate }) {
  // Don't animate values like "24/7"
  if (value.includes("/")) {
    return value;
  }

  const [count, setCount] = useState(0);

  const number = parseInt(value.replace(/\D/g, ""));
  const prefix = value.match(/^\D+/)?.[0] || "";
  const suffix = value.match(/\D+$/)?.[0] || "";

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 1800;
    const increment = number / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [animate, number]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Top Section */}
      <div className="bg-[#f5f5f5] pt-14 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#84C221] text-[18px] font-medium">
              Our Strengths
            </span>

            <h2 className="mt-3 text-[40px] leading-tight font-medium text-[#1f5f97]">
              Committed to Excellence in Healthcare
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#8e8e8e]">
              We are dedicated to providing exceptional healthcare through
              experienced medical professionals, advanced technology,
              compassionate nursing, and patient-centered treatment in a safe
              and comfortable environment.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 shadow-xl">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`px-5 py-8 text-center ${
                    item.active
                      ? "bg-[#84C221] text-white"
                      : "bg-white"
                  }`}
                >
                  <Icon
                    size={40}
                    strokeWidth={1.5}
                    className={`mx-auto mb-4 ${
                      item.active
                        ? "text-white"
                        : "text-[#84C221]"
                    }`}
                  />

                  <h3
                    className={`text-[40px] font-semibold ${
                      item.active
                        ? "text-white"
                        : "text-[#84C221]"
                    }`}
                  >
                    <Counter
                      value={item.value}
                      animate={animate}
                    />
                  </h3>

                  <p
                    className={`mt-2 text-[14px] ${
                      item.active
                        ? "text-white"
                        : "text-[#8d8d8d]"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative overflow-hidden bg-[#EEF7E3] py-20">
        <div className="absolute inset-0 opacity-[0.04]">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1600"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <Plus
          size={46}
          strokeWidth={2.5}
          className="absolute top-24 left-[38%] text-[#84C221]"
        />

        <TimerReset
          size={44}
          strokeWidth={1.5}
          className="absolute bottom-6 right-20 text-[#84C221]"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://img.magnific.com/free-photo/male-working-as-paediatrician_23-2151696318.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
                alt="Home Care"
                className="w-[400px] h-[300px] object-cover"
              />
            </div>

            <div>
              <span className="text-[#84C221] text-[18px] font-medium">
                Why Patients Trust Us
              </span>

              <h2 className="mt-3 text-[38px] leading-tight font-medium text-[#1f5f97]">
                Delivering Quality Medical
                <br />
                Care with Compassion
              </h2>

              <div className="mt-7 space-y-6">
                              {progress.map((item, index) => (
                  <div key={index}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[17px] text-[#6f6f6f]">
                        {item.name}
                      </span>

                      <span className="text-[15px] text-[#6f6f6f]">
                        {item.value}%
                      </span>
                    </div>

                    <div className="h-[7px] overflow-hidden rounded-full bg-[#1f5f97]">
                      <div
                        className="h-full rounded-full bg-[#84C221] transition-all duration-[1800ms] ease-out"
                        style={{
                          width: animate ? `${item.value}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}