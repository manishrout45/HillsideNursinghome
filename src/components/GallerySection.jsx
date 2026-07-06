// GallerySection.jsx

import {
  Activity,
  Accessibility,
  Ear,
  BedDouble,
  HeartHandshake,
  UserRound,
  Hospital,
  Zap,
  ShieldCheck,
} from "lucide-react";

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
    icon: Activity,
    title: "Physiotherapy",
  },
  {
    icon: Accessibility,
    title: "Occupational Therapy",
  },
  {
    icon: Ear,
    title: "Speech Therapy",
  },
  {
    icon: BedDouble,
    title: "Recovery Suites",
  },
];

const benefits = [
  {
    icon: HeartHandshake,
    title: "Patient Centric Care",
  },
  {
    icon: UserRound,
    title: "Expert Therapists",
  },
  {
    icon: Hospital,
    title: "Advanced Facilities",
  },
  {
    icon: Zap,
    title: "Faster Recovery",
  },
  {
    icon: ShieldCheck,
    title: "Support Every Step",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */} 
        <div className="max-w-3xl mx-auto text-center pb-6"> 
          <span className="text-[#84C221] text-[18px] font-medium"> Our Gallery </span> 
          <h2 className="mt-3 text-[42px] leading-[1.25] font-medium text-[#1f5f97]"> 
            Explore Our Modern <br /> Healthcare Facilities 
            </h2> <p className="mt-5 text-[15px] leading-7 text-[#9a9a9a]"> Take a glimpse into Hillside Nursing Home's state-of-the-art medical facilities, experienced healthcare professionals, patient care environment, and modern infrastructure dedicated to quality treatment. </p> </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-6">
          

          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://img.magnific.com/premium-photo/fabric-textured-background_236836-5916.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80"
              className="h-full min-h-[500px] w-full object-cover"
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
          </div>

          {/* Top Images */}
          <div className="grid grid-cols-2 gap-4">
            {topImages.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={img}
                  className="h-[242px] w-full object-cover hover:scale-110 duration-500"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Service Icons */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 border rounded-xl overflow-hidden">

          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="flex flex-col items-center gap-3 border p-7 hover:bg-[#EEF7E3] transition"
              >
                <Icon
                  size={36}
                  className="text-[#1f5f97]"
                />

                <h3 className="text-center text-sm font-semibold text-[#1f5f97]">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Bottom Gallery */}
        <div className="mt-10 grid md:grid-cols-4 gap-4">

          {bottomImages.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={img}
                className="h-[220px] w-full object-cover hover:scale-110 duration-500"
              />
            </div>
          ))}

        </div>

        {/* Benefits */}

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 border rounded-xl overflow-hidden">

          {benefits.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="flex flex-col items-center gap-3 border p-6 hover:bg-[#EEF7E3] transition"
              >
                <Icon
                  size={34}
                  className="text-[#84C221]"
                />

                <span className="text-center text-sm font-medium text-[#1f5f97]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}