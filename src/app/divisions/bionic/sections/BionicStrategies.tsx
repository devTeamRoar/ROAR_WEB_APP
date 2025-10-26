"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const BionicStrategies: FC = () => {
  const strategies = [
    "Brand Storytelling",
    "Customer Journey Mapping",
    "Omnichannel Marketing",
    "Influencer Marketing",
    "Content Strategy",
    "Community Building",
    "Reputation Management",
    "Crisis Communications",
  ];

  return (
    <section className="bg-stone-200 pt-40 pb-24 md:pb-40">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading */}
        <div className="mb-8 md:mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4">
            Strategic Approaches
          </h1>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
            Proven marketing strategies and innovative approaches to help your
            brand stand out.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-400/70 max-w-6xl mx-auto"></div>

        {/* Simple text list */}
        <div className="flex flex-wrap justify-center py-10 gap-x-6 gap-y-3 max-w-6xl mx-auto">
          {strategies.map((cap, index) => (
            <motion.span
              key={cap}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="text-stone-800 px-4 py-2 text-sm md:text-base uppercase"
            >
              {cap}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BionicStrategies;
