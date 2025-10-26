"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const IrisInclusions: FC = () => {
  const inclusions = [
    "Scriptwriting",
    "Art Direction",
    "Photography & Videography",
    "Advertising Shoots",
    "Post‑Production & Editing",
    "Animation & Motion Graphics",
    "3D & CGI Production",
    "Location Scouting & Permissions",
    "Set Design & Logistics",
  ];

  return (
    <section className="bg-stone-200 pt-40 pb-24 md:pb-40">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading */}
        <div className="mb-8 md:mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4">
            What IRIS STUDIOS
            <br /> Includes?
          </h1>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
            Comprehensive creative services covering every aspect of production
            and post-production.
          </p>
        </div>

        {/* Frosted Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-black/45 via-black/35 to-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((inclusion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <Check className="h-5 w-5 text-stone-100 mt-0.5 flex-shrink-0" />
                <span className="text-stone-100 text-sm md:text-base">
                  {inclusion}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IrisInclusions;
