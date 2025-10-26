"use client";

import { FC, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import image1 from "@/assets/images/devint.jpg";
import image2 from "@/assets/images/iris.jpg";
import image3 from "@/assets/images/bionic.jpg";
import Image from "next/image";

// --- Domain Data ---
const domains = [
  {
    name: "DEVINT",
    tagline: "Engineering the Future of Growth",
    quote:
      "Technology solutions that power business transformation. From web development to AI integration, we build the digital infrastructure your business needs to scale efficiently and stay competitive.",
    image: image1,
    video: "/videos/DEVINT_homepage.mp4",
    imagePositionY: 0.2,
    ctaText: "Get Tech Consultation",
    ctaPath: "/divisions/devint",
  },
  {
    name: "IRIS STUDIOS",
    tagline: "We Turn Stories Into Motion",
    quote:
      "Cinematic storytelling and visual content that captivates audiences. From concept to final cut, we bring your brand narrative to life through compelling visuals that resonate and inspire action.",
    image: image2,
    video: "/videos/IRIS_homepage.mp4",
    imagePositionY: 0.1,
    ctaText: "Create With IRIS",
    ctaPath: "/divisions/iris",
  },
  {
    name: "BIONIC MEDIA",
    tagline: "Where Brands Come Alive",
    quote:
      "Strategic brand management and marketing that drives growth. We amplify your brand presence and connect you with your ideal customers through data-driven strategies and creative campaigns.",
    image: image3,
    video: "/videos/BIONIC_homepage.mp4",
    imagePositionY: 0.55,
    ctaText: "Amplify With BIONIC",
    ctaPath: "/divisions/bionic",
  },
];

// --- Animation Variants ---
const transition = { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const };
const exitTransition = { duration: 0.3, ease: "easeOut" as const };

// For Column 0 (DEVINT)
const sidePanelFromLeft = {
  initial: { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
  animate: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition,
  },
  exit: {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    transition: exitTransition,
  },
};

// For Column 2 (BIONIC)
const sidePanelFromRight = {
  initial: { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
  animate: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition,
  },
  exit: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    transition: exitTransition,
  },
};

// For Column 1 (IRIS) - Left Panel
const centerPanelLeft = {
  initial: { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
  animate: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition,
  },
  exit: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    transition: exitTransition,
  },
};

// For Column 1 (IRIS) - Right Panel
const centerPanelRight = {
  initial: { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
  animate: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition,
  },
  exit: {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    transition: exitTransition,
  },
};

// --- Reusable Content Component ---
interface DomainContentProps {
  name: string;
  tagline: string;
  quote: string;
  ctaText: string;
  ctaPath: string;
}

// 2-Column layout for side panels (DEVINT, BIONIC)
const DomainContent: FC<DomainContentProps> = ({
  name,
  tagline,
  quote,
  ctaText,
  ctaPath,
}) => (
  <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 max-w-3xl md:max-w-4xl mx-auto">
    {/* Col 1: Title, Tag, CTA */}
    <div className="flex flex-col justify-center">
      <h3
        className="font-bold text-white mb-2"
        style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
      >
        {name}
      </h3>
      <p
        className="text-stone-300 font-semibold mb-6 md:mb-8"
        style={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}
      >
        {tagline}
      </p>
      <motion.div whileHover={{ x: 5 }}>
        <Link
          href={ctaPath}
          className="inline-flex items-center space-x-2 text-stone-300 hover:text-stone-100 transition-colors font-semibold"
          style={{ fontSize: "clamp(0.625rem, 1.2vw, 0.875rem)" }}
        >
          <span>{ctaText}</span>
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </Link>
      </motion.div>
    </div>
    {/* Col 2: Quote */}
    <div className="flex items-center">
      <p
        className="text-stone-300 leading-relaxed"
        style={{ fontSize: "clamp(0.75rem, 2vw, 1.25rem)" }}
      >
        {quote}
      </p>
    </div>
  </div>
);

// --- Main Component ---
const Domain: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Handle video play/pause on hover
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (hoveredIndex === index) {
          video.currentTime = 0;
          video.play().catch((error) => {
            // Ignore play() interrupted errors
            if (error.name !== "AbortError") {
              console.warn("Video play error:", error);
            }
          });
        } else {
          video.pause();
        }
      }
    });
  }, [hoveredIndex]);

  return (
    <section className="bg-stone-200 pt-24 md:pt-32 pb-56">
      <div className="max-w-full px-4 md:px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-8">
            Looking for individual
            <br /> services?
          </h1>
          <Link
            href="/divisions"
            className="inline-flex items-center space-x-2 text-stone-600 hover:text-stone-800 transition-colors text-base md:text-xl lg:text-2xl mb-8 leading-relaxed"
          >
            <span>Explore our divisions</span>
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="block md:hidden space-y-6 mx-[-1rem] px-4">
          {domains.map((domain) => (
            <div
              key={domain.name}
              className="grid grid-cols-2 overflow-hidden" // No gap here
            >
              {/* Left Column - Image */}
              <div className="relative aspect-[1080/1444]">
                <Image
                  src={domain.image}
                  alt={domain.name}
                  fill
                  className="object-cover rounded-lg"
                  style={{
                    objectPosition: `50% ${domain.imagePositionY * 100}%`,
                  }}
                />
              </div>

              {/* Right Column - Content */}
              <div className="relative text-white p-4 flex flex-col justify-center space-y-3 h-full bg-black rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] z-0"></div>
                <div className="relative z-10">
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
                  >
                    {domain.name}
                  </h3>
                  <p
                    className="text-stone-300 font-semibold"
                    style={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}
                  >
                    {domain.tagline}
                  </p>
                  <Link
                    href={domain.ctaPath}
                    className="inline-flex items-center space-x-2 text-stone-300 hover:text-stone-100 transition-colors font-semibold"
                    style={{ fontSize: "clamp(0.625rem, 1.2vw, 0.875rem)" }}
                  >
                    <span>{domain.ctaText}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Three Column with Hover */}
        <div
          className="hidden md:block relative w-full"
          style={{ height: "calc(100vw * 1444 / 1080 / 3)" }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Layer 1: The three-column image grid */}
          <div className="grid grid-cols-3 h-full gap-2 md:gap-2 lg:gap-4">
            {domains.map((domain, index) => (
              <div
                key={domain.name}
                className="relative size-full cursor-pointer overflow-hidden rounded-lg"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {/* Video Element */}
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={domain.video}
                  muted
                  loop
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out rounded-lg"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform:
                      hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                  }}
                />

                {/* Image Element */}
                <Image
                  src={domain.image}
                  alt={domain.name}
                  fill
                  className="object-cover size-full transition-all duration-700 ease-in-out rounded-lg"
                  style={{
                    objectPosition: `50% ${domain.imagePositionY * 100}%`,
                    opacity: hoveredIndex === index ? 0 : 1,
                    transform:
                      hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Layer 2: The Animated Panels */}
          <AnimatePresence>
            {/* Case 1: Hovering Column 0 (DEVINT) */}
            {hoveredIndex === 0 && (
              <motion.div
                key="devint-panel"
                className="absolute top-0 h-full bg-black text-stone-100 p-8 md:p-12 flex items-center overflow-hidden"
                style={{
                  left: "33.33%",
                  width: "66.66%",
                }} // Covers col 1, 2 with no gap
                variants={sidePanelFromLeft}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] z-0"></div>
                <div className="relative z-10 w-full">
                  <DomainContent {...domains[0]} />
                </div>
              </motion.div>
            )}

            {/* Case 2: Hovering Column 1 (IRIS) - Split Panel */}
            {hoveredIndex === 1 && (
              <>
                {/* Left Panel (covers Col 0) */}
                <motion.div
                  key="iris-panel-left"
                  className="absolute top-0 h-full w-[33.33%] bg-black text-stone-100 p-8 md:p-12 flex flex-col justify-center items-end overflow-hidden"
                  style={{ left: "0%" }}
                  variants={centerPanelLeft}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] z-0"></div>
                  <div className="relative z-10 w-full max-w-xs md:max-w-sm pl-4">
                    <h3
                      className="font-bold text-white mb-2"
                      style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
                    >
                      {domains[1].name}
                    </h3>
                    <p
                      className="text-stone-300 font-semibold mb-6 md:mb-8"
                      style={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}
                    >
                      {domains[1].tagline}
                    </p>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href={domains[1].ctaPath}
                        className="inline-flex items-center space-x-2 text-stone-300 hover:text-stone-100 transition-colors font-semibold"
                        style={{ fontSize: "clamp(0.625rem, 1.2vw, 0.875rem)" }}
                      >
                        <span>{domains[1].ctaText}</span>
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Panel (covers Col 2) */}
                <motion.div
                  key="iris-panel-right"
                  className="absolute top-0 h-full w-[33.33%] bg-black text-stone-100 p-8 md:p-12 flex flex-col justify-center items-start overflow-hidden"
                  style={{ right: "0%" }}
                  variants={centerPanelRight}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] z-0"></div>
                  <div className="relative z-10 w-full max-w-xs md:max-w-sm pr-4">
                    <p
                      className="text-stone-300 leading-relaxed"
                      style={{ fontSize: "clamp(0.75rem, 2vw, 1.25rem)" }}
                    >
                      {domains[1].quote}
                    </p>
                  </div>
                </motion.div>
              </>
            )}

            {/* Case 3: Hovering Column 2 (BIONIC) */}
            {hoveredIndex === 2 && (
              <motion.div
                key="bionic-panel"
                className="absolute top-0 h-full bg-black text-stone-100 p-8 md:p-12 flex items-center overflow-hidden"
                style={{ left: "0%", width: "66.66%" }} // Covers col 0, 1 with no gap
                variants={sidePanelFromRight}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] z-0"></div>
                <div className="relative z-10 w-full">
                  <DomainContent {...domains[2]} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Domain;
