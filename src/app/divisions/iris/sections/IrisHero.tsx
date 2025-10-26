"use client";

import { FC } from "react";

const IrisHero: FC = () => {
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
        <source src="/videos/Iris.mp4" type="video/mp4" />
      </video>

      {/* Black overlay with blend mode (homepage style) */}
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
                fontSize: "clamp(5rem, 38vw, 40rem)",
                letterSpacing: "",
              }}
            >
              IRIS
            </span>
            <span
              className="block text-center"
              style={{
                fontSize: "clamp(2.2rem, 16.5vw, 20rem)",
                letterSpacing: "",
              }}
            >
              STUDIOS
            </span>
          </h1>
        </div>
      </div>

      {/* Extra space below with intro-style text (bottom-right aligned) */}
      <div className="relative h-[120vh]">
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 max-w-6xl">
          <p className="font-bold text-stone-200 text-justify text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.5] sm:leading-[1.5] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.5]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cinematic storytelling and visual
            content that captivates audiences. From concept to final cut, we
            bring your brand narrative to life through compelling visuals that
            resonate and inspire action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IrisHero;
