import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <>
      {/* ================= Hero Section ================= */}
      <section className="bg-gradient-to-b from-white to-lime-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#165c99]">
            Contact
          </h1>
        </div>
      </section>

      <ContactSection />

      {/* ================= Location Map ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-lime-100 text-[#84C221] font-semibold text-sm uppercase tracking-wider">
              Visit Us
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#165c99]">
              Find Us on the Map
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Easily locate Hillside Nursing Home and get directions for your
              visit. We are conveniently located for quick access during
              emergencies and routine appointments.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200">
            <iframe
              title="Hillside Nursing Home Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.1180743188033!2d85.7879141!3d20.2539373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7bf9ceee341%3A0xfcb52ab4383b0ad8!2sHILLSIDE%20NURSING%20HOME!5e0!3m2!1sen!2sin!4v1785406801757!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;