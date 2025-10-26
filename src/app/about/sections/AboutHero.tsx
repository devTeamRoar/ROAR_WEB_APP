"use client";

import { FC } from "react";

const AboutHero: FC = () => {
  return (
    <section className="relative w-full bg-stone-950 min-h-screen -mt-96 sm:-mt-80 md:-mt-20 lg:-mt-0">
      {/* Large Dark Area - Top 65-70% with Large Text */}
      <div className="h-[100vh] bg-stone-950 flex items-end justify-start relative">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] z-0"></div>

        <h1
          className="text-stone-200 font-bold leading-tight px-4 pb-8 relative z-10"
          style={{ fontSize: "clamp(1.5rem, 9vw, 20rem)" }}
        >
          Every Great Brand
          <br />
          Starts With a ROAR
        </h1>
      </div>

      <div className="bg-stone-200 px-4 md:px-8 py-16 md:py-24 lg:py-32 ">
        <div className="max-w-full">
          {/* Left-aligned Introduction */}
          <div className="mb-12 mr-6 sm:mr-12 md:mr-56">
            <h1 className="text-stone-800 text-2xl md:text-3xl lg:text-4xl font-light leading-[1.5] sm:leading-[1.5] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.5]">
              We&apos;re not just another agency. We&apos;re your complete
              business growth partner, providing an integrated ecosystem of
              expertise that transforms visions into victories.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
