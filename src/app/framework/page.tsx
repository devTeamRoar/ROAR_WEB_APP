import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FrameworkHero from "@/app/framework/sections/FrameworkHero";
import FrameworkSteps from "@/app/framework/sections/FrameworkSteps";
import FrameworkProcessFlow from "@/app/framework/sections/FrameworkProcessFlow";
import FrameworkCTA from "@/app/framework/sections/FrameworkCTA";

export default function Framework() {
  return (
    <>
      <Header />
      
        <FrameworkHero />
        <FrameworkSteps />
        <FrameworkProcessFlow />
        <FrameworkCTA />
      
      <Footer />
    </>
  );
}
