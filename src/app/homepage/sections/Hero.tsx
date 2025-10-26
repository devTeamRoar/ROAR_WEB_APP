"use client";

import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Fixed Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-screen object-cover -z-50"
      >
        <source src="/videos/homepageBG.mp4" type="video/mp4" />
      </video>

      {/* Black overlay with blend mode */}
      <div className="relative z-10 bg-stone-950 mix-blend-darken pt-64 md:pt-20 lg:pt-10 xl:pt-0">
        {/* Grid background overlay like footer/CTA */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] z-0"></div>

        <div className="relative z-10">
          <h1
            className="
            pt-24 font-extrabold text-white
            leading-[0.69]  
          "
          >
            <span
              className="block text-center"
              style={{
                fontSize: "clamp(5rem, 35.5vw, 40rem)",
                letterSpacing: "",
              }}
            >
              ROAR
            </span>
            <span
              className="block text-center"
              style={{
                fontSize: "clamp(2.2rem, 15.9vw, 20rem)",
                letterSpacing: "",
              }}
            >
              INDUSTRIES
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
