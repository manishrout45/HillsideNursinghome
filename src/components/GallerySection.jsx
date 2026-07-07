// GallerySection.jsx
import { 
  Activity, 
  HeartHandshake, 
  ShieldCheck, 
} from "lucide-react";
import { motion } from "framer-motion";


const topImages = [
  "https://img.magnific.com/premium-photo/physiotherapy-training-band-with-old-man-doctor-stretching-rehabilitation-injury-medical-healing-healthcare-with-physiotherapist-patient-consulting-help-fitness_590464-189313.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  "https://www.ahu.edu/sites/default/files/styles/fc_800x533/public/media/occupational-therapy-swiss-ball-2000x1333px.jpg?h=bd81ee90&itok=Pk-sV7ZO",
  "https://images.squarespace-cdn.com/content/v1/56257cd5e4b046286a8a63f4/1447957834938-R1L6KBV0E7KZY6OGX149/speech-therapy-san-diego",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavRXSYRtVRNNFZ6FqXig9w_QknWi6EpF7pXt7ngJgRzlFFR6v24pDRME&s=10",
];

const bottomImages = [
  "https://img.magnific.com/free-photo/caucasian-young-doctor-nursing-home-checking-blood-pressure-elderly-age-male-with-crutches_482257-45230.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/free-photo/married-couple-having-problems-their-relationship-they-are-attending-pshycologist-advice_1157-47477.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/premium-photo/red-cord-rehabilitation-recover-from-muscle-pain-activation-back-muscles-after-injury-with-sling-system-red-cord_255847-13950.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/free-photo/woman-training-fitness-ball-while-wearing-medical-mask_23-2148763821.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
];

const services = [
  {
    icon: "/assets/icons/physical-therapy.png",
    title: "Physiotherapy",
  },
  {
    icon: "/assets/icons/occupational-therapy.png",
    title: "Occupational Therapy",
  },
  {
    icon: "/assets/icons/speech-therapy.png",
    title: "Speech Therapy",
  },
  {
    icon: "/assets/icons/RecoverySuites.png",
    title: "Recovery Suites",
  },
];

const benefits = [
  {
    icon: "/assets/icons/rehabilitation.png",
    title: "Patient Centric Care",
  },
  {
    icon: "/assets/icons/ExpertTherapists.png",
    title: "Expert Therapists",
  },
  {
    icon: "/assets/icons/AdvancedFacilities.png",
    title: "Advanced Facilities",
  },
  {
    icon: "/assets/icons/FasterRecovery.png",
    title: "Faster Recovery",
  },
  {
    icon: "/assets/icons/SupportEveryStep.png",
    title: "Support Every Step",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
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
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const zoom = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function GallerySection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center pb-6"
        >
          <span className="text-[#84C221] text-[18px] font-medium">
            Our Gallery
          </span>

          <h2 className="mt-3 text-[42px] leading-[1.25] font-medium text-[#1f5f97]">
            Explore Our Modern
            <br />
            Healthcare Facilities
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#9a9a9a]">
            Take a glimpse into Hillside Nursing Home's state-of-the-art
            medical facilities, experienced healthcare professionals,
            patient care environment, and modern infrastructure dedicated
            to quality treatment.
          </p>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="grid lg:grid-cols-[420px_1fr] gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          <motion.div
            variants={fadeLeft}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src="https://img.magnific.com/premium-photo/fabric-textured-background_236836-5916.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
              className="h-full min-h-[500px] w-full object-cover"
              alt=""
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent p-10">

              <span className="text-[#84C221] font-semibold">
                Rehabilitation
              </span>

              <h2 className="mt-3 text-4xl font-bold leading-tight text-[#1f5f97]">
                PHYSIOTHERAPY
                &
                <br />
                REHABILITATION
              </h2>

              <div className="mt-10 space-y-6"> 
                <div className="flex items-center gap-3"> 
                  <Activity className="text-[#84C221]" /> 
                  <span>Restoring Movement.</span> 
                </div> 
                  
                <div className="flex items-center gap-3"> 
                  <HeartHandshake className="text-[#84C221]" /> 
                  <span>Rebuilding Lives.</span> 
                </div> 
                <div className="flex items-center gap-3"> 
                  <ShieldCheck className="text-[#84C221]" /> 
                  <span>Stronger Together.</span> 
                </div> 
              </div>

            </div>
          </motion.div>

          {/* Top Images */}

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >

            {topImages.map((img, i) => (
              <motion.div
                key={i}
                variants={zoom}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={img}
                  alt=""
                  className="h-[242px] w-full object-cover hover:scale-110 duration-500"
                />
              </motion.div>
            ))}

          </motion.div>

        </motion.div>
                {/* Service Icons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 border rounded-xl overflow-hidden"
        >

          {services.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 border p-7 hover:bg-[#EEF7E3] transition duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-110"
              />

              <h3 className="text-center text-sm font-semibold text-[#1f5f97]">
                {item.title}
              </h3>
            </div>
          ))}

        </motion.div>

        {/* Bottom Gallery */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid md:grid-cols-4 gap-4"
        >

          {bottomImages.map((img, i) => (
            <motion.div
              key={i}
              variants={zoom}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={img}
                alt=""
                className="h-[220px] w-full object-cover hover:scale-110 duration-500"
              />
            </motion.div>
          ))}

        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-5 border rounded-xl overflow-hidden"
        >

          {benefits.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              className="flex flex-col items-center gap-4 border p-7 hover:bg-[#EEF7E3] transition duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
              />

              <span className="text-center text-sm font-medium text-[#1f5f97]">
                {item.title}
              </span>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}