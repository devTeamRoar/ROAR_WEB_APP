"use client";

import { FC, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minimize, Play } from "lucide-react";

const InteractiveSection: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (sectionRef.current && isHovering) {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  const handleClick = () => {
    console.log("Interactive section clicked!");
    if (isHovering) {
      setIsVideoOpen(true);
    }
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered interactive section");
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left interactive section");
    setIsHovering(false);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full h-screen bg-transparent cursor-pointer -mt-screen"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              // Apply the blend mode directly to the animated element
              className="fixed pointer-events-none z-50 mix-blend-difference"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                left: mousePosition.x + 20,
                top: mousePosition.y - 20,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                left: { type: "spring", damping: 25, stiffness: 200 },
                top: { type: "spring", damping: 25, stiffness: 200 },
              }}
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* This div is now just for layout, and the children are white */}
              <div className="flex items-center gap-1">
                <span className="text-white text-md">Show reel</span>
                <Play className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Blurred background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={closeVideo}
            ></motion.div>

            {/* Video container */}
            <motion.div
              initial={{ opacity: 1, scale: 0, y: 0, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 360 }}
              exit={{ opacity: 1, scale: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-[95vw] h-[70vh] sm:w-[90vw] sm:h-[60vh] md:w-[80vw] lg:w-[70vw] lg:h-[65vh] xl:w-[60vw] xl:h-[70vh] max-w-[1600px] max-h-[90vh] z-10 rounded-lg overflow-hidden p-4 sm:p-6 md:p-8"
            >
              <video
                src="/videos/ROAR-exp.mp4"
                className="w-full h-full object-contain"
                loop
                autoPlay
                controls
                playsInline
                muted
                onError={(e) => {
                  console.log("Video loading error:", e);
                }}
                onLoadStart={() => {
                  console.log("Video loading started");
                }}
              />
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                onClick={closeVideo}
                className="absolute top-4 right-4 text-white p-2 bg-white/20 rounded-full transition-colors hover:bg-white/30"
                aria-label="Close"
              >
                <Minimize className="h-6 w-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveSection;
