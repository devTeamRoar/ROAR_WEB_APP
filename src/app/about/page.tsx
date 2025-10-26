import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/app/about/sections/AboutHero";
import AboutMission from "@/app/about/sections/AboutMission";
import AboutValues from "@/app/about/sections/AboutValues";
import AboutCTA from "@/app/about/sections/AboutCTA";

export default function About() {
  return (
    <>
      <Header />
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutCTA />
      <Footer />
    </>
  );
}
