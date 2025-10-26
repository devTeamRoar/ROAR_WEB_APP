"use client";

import { FC } from "react";

const ContactHero: FC = () => {
  return (
    <section className="relative w-full bg-stone-950 min-h-screen ">
      {/* Fixed Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for text readability - only covers hero section */}
      <div className="fixed inset-0 bg-black/40 z-10"></div>

      {/* Large Dark Area - Top 65-70% with Large Text */}
      <div className="h-[100vh] flex items-end justify-start relative z-20">
        <h1
          className="text-stone-200 font-bold leading-tight px-4 pb-8"
          style={{ fontSize: "clamp(1.5rem, 9vw, 20rem)" }}
        >
          Ready to Start
          <br />
          Your Growth Journey?
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;
