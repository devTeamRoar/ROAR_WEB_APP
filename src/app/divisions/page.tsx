import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DivisionsHero from "@/app/divisions/sections/DivisionsHero";
import DivisionsOverview from "@/app/divisions/sections/DivisionsOverview";
import DivisionsIntegration from "@/app/divisions/sections/DivisionsIntegration";
import DivisionsCTA from "@/app/divisions/sections/DivisionsCTA";

export default function Divisions() {
  return (
    <>
      <Header />
      
        <DivisionsHero />
        
          <DivisionsOverview />
          <DivisionsIntegration />
          <DivisionsCTA />
        
      
      <Footer />
    </>
  );
}
