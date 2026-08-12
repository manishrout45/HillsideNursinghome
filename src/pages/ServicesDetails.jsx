import {
  Ambulance,
  BadgeDollarSign,
  Bed,
  FlaskConical,
  ShieldPlus,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { NavLink, useParams, Navigate } from "react-router-dom";

const services = [
  {
    slug: "lab-pathology",
    title: "On-site Lab & Pathology",
    icon: FlaskConical,
    image: "https://img.magnific.com/premium-photo/female-pathologist-analyzing-tissue-samples-microscope-surrounded-lab-equipment-pathology-reports_1289822-10070.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
    shortDescription:
      "Advanced laboratory and pathology services with accurate diagnostics and quick reporting.",


    description: `Our state-of-the-art laboratory and pathology department
    provides fast, accurate and reliable diagnostic services to assist
    physicians in making timely treatment decisions. Equipped with
    advanced technology and managed by experienced professionals,
    we ensure precision, safety and quality in every test performed.`,

    overview: `From routine blood investigations to specialized pathology
    tests, our laboratory follows strict quality standards to deliver
    dependable results with minimal turnaround time.`,

    features: [
      "Complete Blood & Urine Tests",
      "Biochemistry & Hormone Analysis",
      "Microbiology & Culture Tests",
      "Digital Pathology Reporting",
      "Fast & Accurate Results",
      "Experienced Lab Professionals",
    ],
  },

  {
    slug: "ambulance-service",
    title: "Advanced Ambulance Service",
    icon: Ambulance,
    image: "https://img.magnific.com/premium-photo/emergency-entrance-with-security-vehicle-isolated-with-white-highlights_660230-164789.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
    shortDescription:
      "24×7 fully equipped ambulance service for emergency transportation.",

    description: `Our advanced ambulance service operates round-the-clock,
    providing rapid emergency transportation with trained medical staff
    and life-saving equipment for critical patients.`,

    overview: `We ensure quick response, safe patient transfer and
    continuous monitoring throughout the journey.`,

    features: [
      "24×7 Emergency Response",
      "Oxygen Support",
      "Cardiac Monitor",
      "Experienced Paramedics",
      "Emergency Medication",
      "Safe Patient Transfer",
    ],
  },

  {
    slug: "modular-ots",
    title: "Advanced Modular OTs",
    icon: ShieldPlus,
    image: "https://img.magnific.com/free-psd/interior-view-operating-room-generative-ai_587448-1909.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
    shortDescription:
      "Modern modular operation theatres designed for advanced surgeries.",

    description: `Our modular operation theatres are equipped with modern
    surgical technology, advanced infection control systems and
    world-class infrastructure for safe and successful surgeries.`,

    overview: `Designed to meet international healthcare standards,
    our operation theatres support both major and minimally invasive
    procedures.`,

    features: [
      "Laminar Air Flow",
      "Advanced Surgical Equipment",
      "High Infection Control",
      "LED Shadowless Lights",
      "Modern Anesthesia System",
      "Experienced Surgical Team",
    ],
  },

  {
    slug: "dedicated-icu",
    title: "Dedicated ICU",
    icon: Bed,
    image: "https://img.magnific.com/premium-photo/nurse-stands-patient-hospital-bed_875765-6773.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
    shortDescription:
      "Dedicated Intensive Care Unit with continuous monitoring.",

    description: `Our ICU offers intensive monitoring and advanced
    life-support facilities for critically ill patients under the care
    of experienced intensivists and nursing staff.`,

    overview: `The unit is equipped with advanced monitoring systems
    and emergency support equipment to ensure the highest level of care.`,

    features: [
      "24×7 Critical Care",
      "Ventilator Support",
      "Cardiac Monitoring",
      "Highly Skilled ICU Team",
      "Emergency Response",
      "Advanced Medical Equipment",
    ],
  },
    {
    slug: "senior-citizen-consultation",
    title: "Special Fee Consultation for Sr. Citizens",
    icon: BadgeDollarSign,
    image: "https://img.magnific.com/premium-photo/indian-male-doctor-consulting-patient_1107780-1771.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
    shortDescription:
      "Affordable healthcare consultation designed especially for senior citizens.",

    description: `We believe quality healthcare should be accessible to everyone.
    Our senior citizen consultation program offers affordable medical care,
    personalized attention and priority consultations for elderly patients.`,

    overview: `Our doctors understand the unique healthcare needs of senior
    citizens and provide compassionate treatment with adequate consultation time.`,

    features: [
      "Discounted Consultation Fees",
      "Priority Appointment",
      "Comprehensive Health Check-up",
      "Experienced Physicians",
      "Personalized Treatment",
      "Elderly-Friendly Care",
    ],
  },

  {
    slug: "surgical-assistance",
    title: "Full-Time Surgical Assistance",
    icon: Users,
    image: "https://img.magnific.com/free-photo/team-surgeons-is-fighting-life-real-operation-real-emotions-intensive-care-team-is-fighting-life-patient-saving-life-struggle-life_657921-783.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
    shortDescription:
      "Dedicated surgical team providing complete assistance before, during and after surgery.",

    description: `Our experienced surgical team works closely with surgeons,
    anesthetists and nursing staff to ensure safe, smooth and successful
    surgical procedures from admission through recovery.`,

    overview: `Every surgery is supported by trained professionals,
    modern equipment and strict safety protocols to provide the best
    possible patient outcomes.`,

    features: [
      "Experienced Surgical Team",
      "Pre & Post Operative Care",
      "Advanced Surgical Equipment",
      "Patient Safety Protocols",
      "24×7 Medical Support",
      "Comprehensive Recovery Care",
    ],
  },
];

const commonFeatures = [
  "Experienced Doctors",
  "Modern Infrastructure",
  "Advanced Medical Equipment",
  "24×7 Emergency Support",
  "Patient-Centric Care",
  "Affordable Treatment",
];

export default function ServicesDetails() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/service" replace />;
  }

  const Icon = service.icon;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#84C221]">
            Our Healthcare Services
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-[#165c99]">
            {service.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {service.shortDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Column */}
          <div>

            {/* Image */}
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                className="h-[520px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Why Choose Us */}
            <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#165c99]">
                Why Choose Hillside Nursing Home?
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {commonFeatures.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#84C221]"
                    />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Content */}
          <div>
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-lime-100 text-[#84C221]">
              <Icon size={38} />
            </div>

            <h2 className="mt-6 text-4xl font-bold text-[#165c99]">
              {service.title}
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              {service.description}
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              {service.overview}
            </p>

                        {/* Service Features */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-[#165c99]">
                Key Features
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#84C221] flex-shrink-0"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#84C221] px-7 py-3 font-semibold text-white transition hover:bg-[#6da61a]"
              >
                Book Appointment
                <ArrowRight size={18} />
              </NavLink>

              <NavLink
                to="/service"
                className="inline-flex items-center gap-2 rounded-xl border border-[#165c99] px-7 py-3 font-semibold text-[#165c99] transition hover:bg-[#165c99] hover:text-white"
              >
                Back to Services
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl bg-[#165c99] px-8 py-14 text-center text-white lg:px-20">
          <h2 className="text-3xl font-bold">
            Need Expert Medical Care?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-white/90 leading-8">
            Our experienced doctors, modern facilities, and dedicated
            healthcare professionals are committed to providing
            compassionate and high-quality medical care for every patient.
            Schedule your consultation today.
          </p>

          <NavLink
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#84C221] px-8 py-3 font-semibold text-white transition hover:bg-[#6da61a]"
          >
            Contact Us
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </div>
    </section>
  );
}