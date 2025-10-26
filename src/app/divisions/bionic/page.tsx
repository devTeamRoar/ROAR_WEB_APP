import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BionicHero from "@/app/divisions/bionic/sections/BionicHero";
import BionicServices from "@/app/divisions/bionic/sections/BionicServices";
import BionicInclusions from "@/app/divisions/bionic/sections/BionicInclusions";
import BionicProcess from "@/app/divisions/bionic/sections/BionicProcess";
import BionicCTA from "@/app/divisions/bionic/sections/BionicCTA";
import BionicStrategies from "./sections/BionicStrategies";

export default function Bionic() {
  return (
    <>
      <Header />
      <BionicHero />
      <BionicServices />
      <BionicInclusions />
      
      <BionicStrategies />
      <BionicProcess />
      <BionicCTA />
      <Footer />
    </>
  );
}
