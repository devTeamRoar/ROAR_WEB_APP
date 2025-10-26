"use client";

import { FC } from "react";
import { Check } from "lucide-react";

type IrisService = {
  id: number;
  title: string;
  description: string;
  points: string[];
};

const ServiceCard: FC<{ item: IrisService }> = ({ item }) => {
  return (
    <div className="mt-16 md:mt-28">
      {/* Top Divider */}
      <div className="w-full h-px bg-stone-400 mb-3"></div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Column - Title & Description */}
        <div>
          <h2 className="text-md md:text-lg font-semibold text-stone-800 leading-tight whitespace-pre-line mb-3">
            {item.title}
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
            {item.description}
          </p>
        </div>

        {/* Right Column - Points */}
        <div className="pr-8 sm:pr-16 md:pr-16 lg:pr-48 xl:pr-72">
          <ul className="space-y-2">
            {item.points.map((point, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-stone-800 text-sm md:text-base"
              >
                <Check className="h-4 w-4 text-stone-600 mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const irisServicesData: IrisService[] = [
  {
    id: 1,
    title: "Filmmaking & Direction",
    description:
      "From concept to final cut — full-scale film production for commercials,\n web films, and branded content.",
    points: [
      "Scriptwriting & Storyboarding",
      "Budgeting & Scheduling",
      "Crew & Talent Management",
      "On-set Direction",
    ],
  },
  {
    id: 2,
    title: "Cinematography",
    description:
      "Professional camera work that captures stories with cinematic precision\n and creative vision.",
    points: [
      "Studio & Outdoor Shoots",
      "Aerial/Drone Cinematography",
      "Lighting & Camera Setup",
      "Multi-camera Production",
    ],
  },
  {
    id: 3,
    title: "VFX & Post-Production",
    description:
      "Transform raw footage into visually stunning experiences through\n advanced effects and editing.",
    points: [
      "Visual Effects (VFX)",
      "Color Grading",
      "Sound Design",
      "Polishing & Final Delivery",
    ],
  },
  {
    id: 4,
    title: "Motion Graphics & CGI",
    description:
      "Add energy and depth through dynamic animation and computer-generated\n design.",
    points: [
      "2D/3D Motion Graphics",
      "Product Visualization",
      "CGI Integration",
      "Title Animation",
    ],
  },
  {
    id: 5,
    title: "Graphic Design & Visual Assets",
    description:
      "Design creative elements that strengthen your brand and enhance\n every frame.",
    points: [
      "Poster & Key Art Design",
      "Ad Creatives & Thumbnails",
      "Brand Graphics",
      "Social Campaign Visuals",
    ],
  },
  {
    id: 6,
    title: "Production Management",
    description:
      "Comprehensive on-ground support ensuring smooth, efficient,\n and scalable productions.",
    points: [
      "Location Scouting & Permissions",
      "Set Design & Logistics",
      "Budget Control",
      "Vendor Coordination",
    ],
  },
];

const IrisServices: FC = () => {
  return (
    <section className="bg-stone-200 pt-48 lg:pt-56 pb-24 md:pb-40">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4">
            Our Creative <br /> Services
          </h1>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl leading-relaxed">
            We craft cinematic experiences with precision and creativity —
            bringing stories to life across film, motion, and design.
          </p>
        </div>

        {/* Services Content */}
        <div>
          {irisServicesData.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IrisServices;
