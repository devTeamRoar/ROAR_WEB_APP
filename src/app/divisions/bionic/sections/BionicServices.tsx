"use client";

import { FC } from "react";
import { Check } from "lucide-react";

type BionicService = {
  id: number;
  title: string;
  description: string;
  points: string[];
};

const ServiceCard: FC<{ item: BionicService }> = ({ item }) => {
  return (
    <div className="mt-16 md:mt-28">
      <div className="w-full h-px bg-stone-400 mb-3"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h2 className="text-md md:text-lg font-semibold text-stone-800 leading-tight whitespace-pre-line mb-3">
            {item.title}
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
            {item.description}
          </p>
        </div>
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

const bionicServicesData: BionicService[] = [
  {
    id: 1,
    title: "Brand Strategy & Positioning",
    description:
      "Comprehensive brand strategy development that positions your business\n for market leadership and sustainable growth.",
    points: [
      "Brand Identity",
      "Market Positioning",
      "Competitive Analysis",
      "Brand Guidelines",
    ],
  },
  {
    id: 2,
    title: "Social Media Management",
    description:
      "Strategic social media management that builds engaged communities\n and drives meaningful interactions with your audience.",
    points: [
      "Content Strategy",
      "Community Management",
      "Influencer Partnerships",
      "Performance Analytics",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Campaigns",
    description:
      "Data-driven digital marketing campaigns that reach your target audience\n and deliver measurable results.",
    points: [
      "Paid Advertising",
      "Email Marketing",
      "Content Marketing",
      "Conversion Optimization",
    ],
  },
  {
    id: 4,
    title: "SEO & Content Marketing",
    description:
      "Search engine optimization and content strategies that improve visibility\n and drive organic traffic.",
    points: [
      "Keyword Research",
      "Content Creation",
      "Link Building",
      "Technical SEO",
    ],
  },
  {
    id: 5,
    title: "Public Relations",
    description:
      "Strategic PR and communications that build brand reputation\n and establish thought leadership.",
    points: [
      "Media Relations",
      "Crisis Management",
      "Press Releases",
      "Industry Partnerships",
    ],
  },
  {
    id: 6,
    title: "Performance Analytics",
    description:
      "Comprehensive analytics and reporting that provide insights into campaign\n performance and ROI optimization.",
    points: [
      "Data Analysis",
      "ROI Tracking",
      "Performance Reports",
      "Strategy Optimization",
    ],
  },
];

const BionicServices: FC = () => {
  return (
    <section className="bg-stone-200 pt-48 lg:pt-56 pb-24 md:pb-40">
      <div className="max-w-full px-4 md:px-8">
        <div className="mb-8 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4">
            Our Marketing<br/> Services
          </h1>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl leading-relaxed">
            We combine strategic thinking with creative execution to deliver
            marketing solutions that drive measurable growth and ROI.
          </p>
        </div>
        <div>
          {bionicServicesData.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BionicServices;
