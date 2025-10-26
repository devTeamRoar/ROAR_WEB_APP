"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Target, Users, Award, Shield } from "lucide-react";

const AboutValues: FC = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, delivering exceptional results that exceed expectations.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of collaboration, working closely with our clients as true partners.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace innovation and cutting-edge solutions to stay ahead of industry trends.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate with the highest standards of integrity, transparency, and ethical business practices.",
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
    <section className="pt-24 pb-56 bg-stone-200 overflow-x-hidden">
      <div className="max-w-full px-4 md:px-8">
        <div className="mb-16 md:mb-24">
          {/* Updated Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-6">
            OUR PRINCIPLES
          </h2>
          {/* Updated Subheading */}
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl">
            These principles guide everything we do and shape how we work with
            our clients to achieve extraordinary results.{" "}
            <br className="hidden md:block" />
            Each value represents a commitment to excellence and partnership.
          </p>
        </div>

        {/* --- Desktop Flow (Timeline Animation) --- */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* 1. Animated Connecting Line (Timeline) */}
            <motion.div
              className="absolute top-8 left-20 right-20 h-0.5 bg-stone-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />

            {/* 2. Values Grid (Staggered Children) */}
            <motion.div
              className="grid grid-cols-4 pt-24"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
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

                  {/* Value Card */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-6 w-6 text-stone-200" />
                      </div>

                      {/* Content */}
                      <h3 className="text-base font-semibold text-stone-800 mt-4 mb-2 leading-tight">
                        {value.title}
                      </h3>
                      <p className="text-sm text-stone-500 mb-2 px-16">
                        {value.description}
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

            {/* Values Grid (Vertical) */}
            <motion.div
              className="space-y-12 pl-20"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
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

                  {/* Value Card */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="ml-8">
                      {/* Icon */}
                      <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center mb-3">
                        <value.icon className="h-5 w-5 text-stone-200" />
                      </div>

                      {/* Content */}
                      <h3 className="text-sm font-semibold text-stone-800 mb-1 leading-tight">
                        {value.title}
                      </h3>
                      <p className="text-xs text-stone-500 mb-2">
                        {value.description}
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

export default AboutValues;
