import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IrisHero from "@/app/divisions/iris/sections/IrisHero";
import IrisServices from "@/app/divisions/iris/sections/IrisServices";
import IrisInclusions from "@/app/divisions/iris/sections/IrisInclusions";
import IrisCapabilities from "@/app/divisions/iris/sections/IrisCapabilities";
import IrisProcess from "@/app/divisions/iris/sections/IrisProcess";
import IrisCTA from "@/app/divisions/iris/sections/IrisCTA";

export default function Iris() {
  return (
    <>
      <Header />
      <IrisHero />
      <IrisServices />
      <IrisInclusions />
      <IrisCapabilities />
      <IrisProcess />
      <IrisCTA />

      <Footer />
    </>
  );
}
