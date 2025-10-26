import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/app/contact/sections/ContactHero";
import ContactForm from "@/app/contact/sections/ContactForm";
import ContactFAQ from "@/app/contact/sections/ContactFAQ";
import ContactCTA from "@/app/contact/sections/ContactCTA";

export default function Contact() {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}
