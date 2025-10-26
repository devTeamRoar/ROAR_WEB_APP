"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const BionicProcess: FC = () => {
  const processSteps = [
    {
      step: 1,
      title: "Discovery & Strategy",
      description: "Understand goals, audience, and market fit.",
    },
    {
      step: 2,
      title: "Campaign Planning",
      description: "Define channels, messaging, and creative direction.",
    },
    {
      step: 3,
      title: "Execution",
      description: "Launch campaigns with continuous optimization.",
    },
    {
      step: 4,
      title: "Measurement",
      description: "Report results and iterate based on insights.",
    },
  ];

  const gridVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.8 },
    },
  } as const;
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  } as const;

  return (
    <section className="pt-28 pb-48 md:pb-56 bg-stone-200 overflow-x-hidden">
      <div className="max-w-full px-4 md:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-6">
            Marketing
            <br className="hidden md:block" /> Process
          </h2>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl">
            A proven approach that drives consistent brand growth.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <motion.div
              className="absolute top-8 left-0 right-0 h-0.5 bg-stone-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />
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
                  className="relative text-center"
                  variants={itemVariants}
                >
                  <motion.div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 bg-stone-400"
                    initial={{ height: 0 }}
                    animate={{ height: "3rem" }}
                    transition={{ duration: 0.4, ease: "circOut", delay: 0.3 }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
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

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <div className="relative">
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-400"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "top" }}
            />
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
                  <motion.div
                    className="absolute -left-8 top-4 w-12 h-0.5 bg-stone-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "left" }}
                  />
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

export default BionicProcess;
