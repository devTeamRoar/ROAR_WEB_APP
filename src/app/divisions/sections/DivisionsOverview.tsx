"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import devintLogo from "@/assets/images/devintlogo.png";
import irisLogo from "@/assets/images/irislogo.png";
import bionicLogo from "@/assets/images/bioniclogo.png";

// Division Data (Unchanged)
const divisions = [
  {
    name: "DEVINT",
    tagline: "Engineering the Future of Growth",
    description:
      "Technology solutions that power business transformation. From web development to AI integration, we build the digital infrastructure your business needs to scale efficiently and stay competitive in the digital age.",
    logo: devintLogo,
    ctaText: "Get Tech Consultation",
    ctaPath: "/divisions/devint",
    services: [
      "Web Development & Design",
      "Mobile Application Development",
      "AI & Machine Learning Solutions",
      "Cloud Infrastructure & DevOps",
      "API Development & Integration",
      "Business Process Automation",
    ],
  },
  {
    name: "IRIS STUDIOS",
    tagline: "We Turn Stories Into Motion",
    description:
      "Cinematic storytelling and visual content that captivates audiences. From concept to final cut, we bring your brand narrative to life through compelling visuals that resonate and inspire action.",
    logo: irisLogo,
    ctaText: "Create With IRIS",
    ctaPath: "/divisions/iris",
    services: [
      "Filmmaking & Direction",
      "Cinematography (Aerial & Studio)",
      "Scriptwriting & Storyboarding",
      "VFX & Post-Production",
      "Motion Graphics & 3D/CGI Design",
      "Production Budgeting & Scheduling",
    ],
  },
  {
    name: "BIONIC MEDIA",
    tagline: "Where Brands Come Alive",
    description:
      "Strategic brand management and marketing that drives growth. We amplify your brand presence and connect you with your ideal customers through data-driven strategies and creative campaigns.",
    logo: bionicLogo,
    ctaText: "Amplify With BIONIC",
    ctaPath: "/divisions/bionic",
    services: [
      "Brand Strategy & Positioning",
      "Social Media Management",
      "Public Relations & Communications",
      "Digital Marketing Campaigns",
      "SEO & Content Marketing",
      "Influencer Partnerships",
    ],
  },
];

// --- Improved DivisionCard Component ---
const DivisionCard: FC<{ division: (typeof divisions)[0]; index: number }> = ({
  division,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="mt-16 md:mt-28"
    >
      {/* Frosted Glass Card with Gradient Effect */}
      <div className="bg-gradient-to-br from-black/45 via-black/35 to-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column (1/3) - Logo Only */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <Image
              src={division.logo}
              alt={`${division.name} Logo`}
              width={250}
              height={250}
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>

          {/* Right Column (2/3) - All Details */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            {/* Info */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-200 mb-2">
                {division.name}
              </h2>
              <p className="text-stone-100 font-semibold text-lg md:text-xl mb-6">
                {division.tagline}
              </p>
              <p className="hidden lg:block text-stone-100 text-base md:text-lg leading-relaxed">
                {division.description}
              </p>
            </div>

            {/* Divider */}
            <hr className="my-8 border-stone-600/60" />

            {/* Services */}
            <div>
              <h3 className="text-stone-100 font-semibold text-lg md:text-xl mb-6 text-center lg:text-left">
                Key Services:
              </h3>
              <ul className="space-y-3 sm:columns-2 sm:gap-x-8">
                {division.services.map((service, serviceIndex) => (
                  <li
                    key={serviceIndex}
                    className="flex items-start space-x-3 text-stone-100 text-sm md:text-base"
                  >
                    <Check className="h-4 w-4 text-stone-100 mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center lg:text-left">
              <motion.div whileHover={{ x: 5 }}>
                <Link
                  href={division.ctaPath}
                  className="inline-flex items-center space-x-2 text-stone-200 hover:text-white transition-colors font-semibold"
                >
                  <span>{division.ctaText}</span>
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- DivisionsOverview Component (Unchanged) ---
const DivisionsOverview: FC = () => {
  return (
    <section className="bg-stone-200 pt-40 pb-24 md:pb-40">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading */}
        <div className="mb-8 md:mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4">
            Specialized
            Excellence
          </h1>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
            Each division is a master of its domain, bringing deep expertise and
            innovative solutions to every project.
          </p>
        </div>

        {/* Division Cards */}
        <div className="px-2  md:px-16 lg:px-20 xl:px-40">
          {divisions.map((division, index) => (
            <DivisionCard
              key={division.name}
              division={division}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsOverview;
