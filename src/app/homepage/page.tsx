import Header from "@/components/Header";
import Hero from "@/app/homepage/sections/Hero";
import InteractiveSection from "@/app/homepage/sections/InteractiveSection";
import Intro from "@/app/homepage/sections/Intro";
import Steps from "@/app/homepage/sections/Steps";
import Domain from "@/app/homepage/sections/Domain";
import CTA from "@/app/homepage/sections/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <InteractiveSection />
      <Intro />
      <Steps />
      <Domain />
      <CTA />
      <Footer />
    </>
  );
}
