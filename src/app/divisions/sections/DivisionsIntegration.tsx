"use client";

import { FC } from "react";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

import Image from "next/image";

import devintLogo from "@/assets/images/devintlogo.png";

import irisLogo from "@/assets/images/irislogo.png";

import bionicLogo from "@/assets/images/bioniclogo.png";

const DivisionsIntegration: FC = () => {
  const divisions = [
    {
      name: "DEVINT",

      tagline: "Engineering the Future of Growth",

      logo: devintLogo,

      ctaText: "Get Tech Consultation",

      ctaPath: "/divisions/devint",
    },

    {
      name: "IRIS STUDIOS",

      tagline: "We Turn Stories Into Motion",

      logo: irisLogo,

      ctaText: "Create With IRIS",

      ctaPath: "/divisions/iris",
    },

    {
      name: "BIONIC MEDIA",

      tagline: "Where Brands Come Alive",

      logo: bionicLogo,

      ctaText: "Amplify With BIONIC",

      ctaPath: "/divisions/bionic",
    },
  ];

  // Variants for staggering the grid items

  const gridVariants = {
    hidden: { opacity: 1 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous

        delayChildren: 0.8, // Wait for the timeline to draw
      },
    },
  };

  // Variants for each item in the grid

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },

    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 lg:py-32 bg-stone-200 relative overflow-hidden">
      {/* Background Pattern */}

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 md:mb-24 text-center">
          {/* Enhanced Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Seamless Integration
          </motion.h2>

          {/* Enhanced Subheading */}
          <motion.p
            className="text-stone-600 text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Our divisions don&apos;t just work alongside each other, they work
            together. <br className="hidden md:block" />
            This integrated approach ensures cohesive execution and maximum
            impact.
          </motion.p>
        </div>

        {/* --- Desktop Flow (Enhanced Timeline Animation) --- */}

        <div className="hidden lg:block">
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <motion.div
              className="absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-transparent via-stone-400 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              style={{ transformOrigin: "center" }}
            />

            {/* Enhanced Divisions Grid */}
            <motion.div
              className="grid grid-cols-3 pt-32 gap-8"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {divisions.map((division, index) => (
                <motion.div
                  key={division.name}
                  className="relative text-center group"
                  variants={itemVariants}
                >
                  {/* Enhanced Dropping Line */}
                  <motion.div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-stone-400 to-stone-300"
                    initial={{ height: 0 }}
                    animate={{ height: "4rem" }}
                    transition={{
                      duration: 0.6,
                      ease: "circOut",
                      delay: 0.5 + index * 0.1,
                    }}
                  />

                  {/* Enhanced Division Card */}
                  <motion.div
                    className="bg-gradient-to-br from-black/45 via-black/35 to-black/40 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-white/10 shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-4">
                      <Image
                        src={division.logo}
                        alt={`${division.name} Logo`}
                        width={100}
                        height={100}
                        className="mx-auto drop-shadow-sm"
                      />
                    </div>

                    <h3 className="text-sm font-semibold text-stone-200 mb-2">
                      {division.name}
                    </h3>

                    <p className="text-xs text-stone-200 mb-4 leading-relaxed">
                      {division.tagline}
                    </p>

                    <Link
                      href={division.ctaPath}
                      className="inline-flex items-center space-x-2 text-xs font-medium text-stone-200 hover:text-white transition-all duration-200 group-hover:translate-x-1"
                    >
                      <span>{division.ctaText}</span>
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- Mobile Flow (Enhanced Vertical Timeline) --- */}

        <div className="lg:hidden">
          <div className="relative">
            {/* Enhanced Vertical Timeline */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-stone-400 via-stone-300 to-stone-400"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "top" }}
            />

            {/* Enhanced Divisions Grid (Vertical) */}
            <motion.div
              className="space-y-16 pl-20 pr-2 sm:pr-10"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {divisions.map((division, index) => (
                <motion.div
                  key={division.name}
                  className="relative group"
                  variants={itemVariants}
                >
                  {/* Enhanced Horizontal Connecting Line */}
                  <motion.div
                    className="absolute -left-12 top-16 w-12 h-0.5 bg-gradient-to-r from-stone-400 to-stone-300"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.4 + index * 0.1,
                    }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Enhanced Division Card */}
                  <motion.div
                    className="bg-gradient-to-br from-black/45 via-black/35 to-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 shadow-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={division.logo}
                          alt={`${division.name} Logo`}
                          width={70}
                          height={70}
                          className="drop-shadow-sm"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-stone-200 mb-1">
                          {division.name}
                        </h3>

                        <p className="text-xs text-stone-200 mb-3 leading-relaxed">
                          {division.tagline}
                        </p>

                        <Link
                          href={division.ctaPath}
                          className="inline-flex items-center space-x-2 text-xs font-medium text-stone-200 hover:text-white transition-all duration-200 group-hover:translate-x-1"
                        >
                          <span>{division.ctaText}</span>
                          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:rotate-45" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionsIntegration;
