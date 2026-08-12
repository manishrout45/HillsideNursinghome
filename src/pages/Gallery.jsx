import React from "react";
import GallerySection from "../components/GallerySection";


export default function Gallery() {
  return (
    <>
      {/* ================= Hero Section ================= */}
      <section className="bg-gradient-to-b from-white to-lime-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#165c99]">
            Gallery
          </h1>
        </div>
      </section>
    <GallerySection />
    </>
  );
}