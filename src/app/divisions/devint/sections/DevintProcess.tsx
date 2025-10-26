"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const DevintProcess: FC = () => {
  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description:
        "We analyze your requirements and create a detailed technical roadmap.",
    },
    {
      step: 2,
      title: "Design & Architecture",
      description:
        "Our architects design scalable solutions that meet your current and future needs.",
    },
    {
      step: 3,
      title: "Development & Testing",
      description:
        "Agile development with continuous testing ensures high-quality deliverables.",
    },
    {
      step: 4,
      title: "Deployment & Support",
      description:
        "Seamless deployment and ongoing support to keep your systems running smoothly.",
    },
  ];

  // Variants for staggering the grid items
  const gridVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  // Variants for each item in the grid
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="pt-28 pb-48 md:pb-56 bg-stone-200 overflow-x-hidden">
      <div className="max-w-full px-4 md:px-8">
        <div className="mb-16 md:mb-24">
          {/* Updated Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-6">
            Development
            <br className="hidden md:block" /> Process
          </h2>
          {/* Updated Subheading */}
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl">
            A proven methodology that ensures successful project delivery, from
            initial concept to final deployment and beyond.
          </p>
        </div>

        {/* --- Desktop Flow (New Animation) --- */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* 1. Animated Connecting Line (Timeline) */}
            <motion.div
              className="absolute top-8 left-0 right-0 h-0.5 bg-stone-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />

            {/* 2. Steps Grid (Staggered Children) */}
            <motion.div
              className="grid grid-cols-4 pt-20"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {processSteps.map((step) => (
                <motion.div
                  key={step.step}
                  className="relative text-center cursor-pointer"
                  variants={itemVariants}
                >
                  {/* Dropping Line */}
                  <motion.div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 bg-stone-400"
                    initial={{ height: 0 }}
                    animate={{ height: "3rem" }}
                    transition={{ duration: 0.4, ease: "circOut", delay: 0.3 }}
                  />

                  {/* Step Card (Text Only) */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    {/* Step Info */}
                    <div>
                      <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2 leading-tight">
                        <span className="block">
                          {step.title.split(" ").slice(0, -1).join(" ")}
                        </span>
                        <span className="block">
                          {step.title.split(" ").slice(-1)[0]}
                        </span>
                      </h3>
                      <p className="text-xs text-stone-500 px-10 mb-2">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- Mobile Flow (Vertical Timeline) --- */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Timeline */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-400"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "top" }}
            />

            {/* Steps Grid (Vertical) */}
            <motion.div
              className="space-y-12 pl-16"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {processSteps.map((step) => (
                <motion.div
                  key={step.step}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Horizontal Connecting Line */}
                  <motion.div
                    className="absolute -left-8 top-4 w-12 h-0.5 bg-stone-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="ml-8">
                      <h3 className="text-sm font-semibold text-stone-800 mb-1 leading-tight">
                        <span className="block">
                          {step.title.split(" ").slice(0, -1).join(" ")}
                        </span>
                        <span className="block">
                          {step.title.split(" ").slice(-1)[0]}
                        </span>
                      </h3>
                      <p className="text-xs text-stone-500 mb-2">
                        {step.description}
                      </p>
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

export default DevintProcess;
