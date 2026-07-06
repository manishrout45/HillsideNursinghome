import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
import useScrollFade from "../hooks/useScrollFade";
import Testimonial from "../components/Testimonial";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";

const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <ServiceSection className="fade-left" />
      <WhyChooseUs />
      <StatsSection />
      <Testimonial />
      <ContactSection className="fade-up" />
      <GallerySection className="fade-left" />
      <CTASection />


    </>
  );
};

export default Home;