"use client";

import { FC } from "react";

const DevintHero: FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Fixed Video Background (No change) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-screen object-cover -z-50"
      >
        <source src="/videos/Devint.mp4" type="video/mp4" />
      </video>

      {/* CHANGE 1: 
        - Changed bg-stone-950 to bg-white
        - Changed mix-blend-darken to mix-blend-lighten
      */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-64 bg-white mix-blend-lighten">
        <h1
          className="
            pt-24 font-extrabold 
            leading-[0.69]
           
          "
        >
          <span
            className="
              block text-center 
              text-black 
            "
            style={{
              fontSize: "clamp(5rem, 25vw, 35rem)",
              letterSpacing: "",
            }}
          >
            DEVINT
          </span>
        </h1>
      </div>
      <div className="absolute top-0 left-0 right-0 z-20 pt-64 bg-stone-200 mix-blend-lighten">
        <h1
          className="
            pt-24 font-extrabold 
            leading-[0.69]
            bg-stone-200 
          "
        >
          <span
            className="
              block text-center 
              text-black 
            "
            style={{
              fontSize: "clamp(5rem, 25vw, 35rem)",
              letterSpacing: "",
            }}
          >
            DEVINT
          </span>
        </h1>
      </div>

      {/* Extra space below with intro-style text (bottom-right aligned) */}
      <div className="relative h-[200vh]">
        <div className=" pl-3 absolute bottom-8 right-8 md:bottom-16 md:right-16 max-w-6xl">
          <p className="font-bold text-stone-200 text-justify text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.5] sm:leading-[1.5] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.5]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technology solutions that power
            business transformation. From web development to AI integration, we
            build the digital infrastructure your business needs to scale
            efficiently and stay competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevintHero;
