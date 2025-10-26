"use client";

import { FC } from "react";

const AboutMission: FC = () => {
  return (
    <section className="bg-stone-200  pb-24 md:pb-40">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading */}
        <div className="">
          <h1
            className="font-bold text-stone-800  flex justify-end uppercase"
            style={{ fontSize: "clamp(3rem, 13vw, 20rem)" }}
          >
            Our Mission
          </h1>
        </div>

        {/* Video and Text Layout */}
        <div className="my-8 md:my-12">
          <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
            {/* Left Column - Video */}
            <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 md:-ml-8 lg:-ml-12">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-contain"
              >
                <source src="/videos/about.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right Column - Text */}
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 space-y-4">
              <p className="text-stone-700 text-lg  md:text-lg lg:text-xl xl:text-2xl leading-[1.5] sm:leading-[1.5] md:leading-[1.5] lg:leading-[1.8] xl:leading-[2] text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We believe that every business
                has the potential to make a significant impact. Our role is to
                provide the expertise, tools, and support needed to unlock that
                potential and turn ambitious visions into market-leading
                realities. Through strategic thinking, creative excellence, and
                technological innovation, we help organizations navigate complex
                challenges and achieve sustainable growth in an ever-evolving
                marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Content */}
        <div className="w-full">
          {/* Key Points */}
          <div className="space-y-6 pt-8 mx-4 lg:mx-16 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-stone-600 rounded-full mt-6 flex-shrink-0"></div>
              <p className="text-stone-700 text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed">
                Strategic thinking that drives measurable results
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-stone-600 rounded-full mt-6 flex-shrink-0"></div>
              <p className="text-stone-700 text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed">
                Creative excellence that captivates audiences
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-stone-600 rounded-full mt-6 flex-shrink-0"></div>
              <p className="text-stone-700 text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed">
                Technological innovation that scales efficiently
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
