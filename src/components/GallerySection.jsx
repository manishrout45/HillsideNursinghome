// GallerySection.jsx

const galleryImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600", // Hospital building
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600", // Doctor consultation
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600", // Hospital corridor
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600", // Medical team
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600", // Laboratory
  "https://images.unsplash.com/photo-1584516150909-c43483ee7938?w=600", // Patient care
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600", // Hospital room
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600", // Healthcare staff
];

export default function GallerySection() {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#ef2f63] text-[18px] font-medium">
            Our Gallery
          </span>

          <h2 className="mt-3 text-[42px] leading-[1.25] font-medium text-[#1f5f97]">
            Explore Our Modern
            <br />
            Healthcare Facilities
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#9a9a9a]">
            Take a glimpse into Hillside Nursing Home's state-of-the-art medical
            facilities, experienced healthcare professionals, patient care
            environment, and modern infrastructure dedicated to quality treatment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-[145px] w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}