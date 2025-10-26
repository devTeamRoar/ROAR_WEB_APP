"use client";

import { FC } from "react";
import { Check } from "lucide-react";

type FrameworkStep = {
  id: number;
  title: string;
  points: string[];
};

const StepCard: FC<{ item: FrameworkStep }> = ({ item }) => {
  return (
    <div className="mt-16 md:mt-28">
      {/* Top Divider */}
      <div className="w-full h-px bg-stone-400 mb-3"></div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Column - Title */}
        <div>
          <h2 className="text-md md:text-lg font-semibold text-stone-800 leading-tight whitespace-pre-line">
            {item.title}
          </h2>
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

const frameworkData: FrameworkStep[] = [
  {
    id: 1,
    title: "Building Business\nStrategy",
    points: [
      "Business Review & Audit",
      "Discovery Workshop",
      "Brand Positioning",
      "Brand Architecture",
      "Brand Storytelling",
      "Key Messaging",
      "Voice & Tone",
      "Content Strategy",
      "Copywriting",
    ],
  },
  {
    id: 2,
    title: "Research &\nAnalytics",
    points: [
      "Qualitative Research",
      "Quantitative Research",
      "Competition Analysis",
      "Business Analytics",
      "Data Engineering",
      "Consumer Behavior Analytics",
      "Audience Segmentation",
      "Market Trends & Forecasting",
      "Growth Opportunities Identification",
    ],
  },
  {
    id: 3,
    title: "Technology Design &\nDevelopment",
    points: [
      "User Experience (UX) Design",
      "Wireframe & Prototyping",
      "Product Design",
      "Mobile App Development",
      "Website & E-Commerce Development",
      "Technical Architecture",
      "APIs & Integrations",
      "Quality Assurance",
    ],
  },
  {
    id: 4,
    title: "Creative Content &\nProduction",
    points: [
      "Scriptwriting",
      "Art Direction",
      "Cinematography",
      "Advertising Shoots",
      "Filmmaking",
      "Budgeting",
      "Location Finding",
      "VFX",
      "Graphic Designing",
      "Video Editing",
      "Motion Graphics",
      "3D & CGI Production",
      "Post-Production & Editing",
    ],
  },
  {
    id: 5,
    title: "Brand Management &\nMarketing",
    points: [
      "Brand Identity",
      "Brand Guidelines & Design Systems",
      "Brand Consistency Monitoring",
      "Lifecycle Marketing",
      "Performance Marketing",
      "Media Buying & Planning",
      "Campaign Management",
      "Conversion Rate Optimization (CRO)",
      "SEO & Content Marketing",
      "Social Media Strategy & Management",
      "Influencer & Partnership Marketing",
    ],
  },
  {
    id: 6,
    title: "Reviewing Growth &\nPerformance",
    points: [
      "Performance Dashboards",
      "Business Intelligence Reports",
      "ROI Analysis",
      "Customer Feedback Loop",
      "Continuous Improvement Plans",
      "Scaling Roadmap",
    ],
  },
];

const FrameworkSteps: FC = () => {
  return (
    <section className="bg-stone-200 pt-48 lg:pt-56 pb-24 md:pb-40">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4 ">
          Our Path to<br /> Transformation
          </h1>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl leading-relaxed">
            Six comprehensive steps that transform businesses from concept to
            market leaders.
          </p>
        </div>

        {/* Steps Content */}
        <div>
          {frameworkData.map((item) => (
            <StepCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSteps;
