"use client";

import { FC } from "react";

const Intro: FC = () => {
  return (
    <section className="bg-stone-200 pt-28 pb-12 md:pb-18 lg:pb-24">
      <div className="max-w-full px-8 md:px-16">
        <div className="flex justify-end">
          <div className="max-w-6xl text-justify">
            <p className="font-bold text-stone-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.5] sm:leading-[1.5] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.5]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Your vision has a voice. It deserves to ROAR. We help founders translate that energy into a powerful brand that captivates, grows, and endures. Explore how we bring brands to life below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;