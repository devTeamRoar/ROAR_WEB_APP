"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "@/app/homepage/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for exactly 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{
              y: { duration: 1.5, delay: 1, ease: "easeInOut" },
              opacity: { duration: 0.1, delay: 2.5 },
            }}
            className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: { duration: 0.2, delay: 0.1 },
              }}
              className="text-lg  font-semibold flex items-center justify-center gap-2"
            >
              <motion.span
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                Want
              </motion.span>
              <motion.span
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                to
              </motion.span>
              <motion.span
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                grow
              </motion.span>
              <motion.span
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.4,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                your
              </motion.span>
              <motion.span
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                business?
              </motion.span>
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && <HomePage />}
    </>
  );
}
