"use client";

import { FC } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type FrameworkStep = {
  id: number;
  title: string;
  text: string;
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

        {/* Right Column - Content */}
        <div className=" pr-8 sm:pr-16 md:pr-16 lg:pr-48 xl:pr-72">
          <p className="text-stone-800 leading-relaxed text-sm md:text-base">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};

const frameworkData: FrameworkStep[] = [
  {
    id: 1,
    title: "Building Business\nStrategy",
    text: "We establish a foundational understanding of your core vision, market position, and strategic growth objectives to ensure complete alignment from the outset.",
  },
  {
    id: 2,
    title: "Research &\nAnalytics",
    text: "Leveraging comprehensive data-driven insights to refine strategy, identify untapped market opportunities, and mitigate potential risks.",
  },
  {
    id: 3,
    title: "Technology Design &\nDevelopment",
    text: "Architecting and engineering scalable, high-performance digital products and platforms, meticulously crafted to deliver an intuitive and world-class user experience.",
  },
  {
    id: 4,
    title: "Creative Content &\nProduction",
    text: "Employing high-fidelity, cinematic production techniques to translate your core brand strategy into compelling and resonant visual narratives.",
  },
  {
    id: 5,
    title: "Brand Management &\nMarketing",
    text: "Strategically managing your brand identity to ensure a consistent voice and executing multi-channel marketing campaigns designed for measurable, data-backed growth.",
  },
  {
    id: 6,
    title: "Reviewing Growth &\nPerformance",
    text: "Implementing a continuous feedback loop, utilizing performance dashboards and qualitative analysis to create a clear, actionable roadmap for iterative improvement and scaling success.",
  },
];

const Steps: FC = () => {
  return (
    <section className="bg-stone-200 py-24 md:py-36">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4 leading-tight">
            The Growth Partner <br />
            Framework
          </h1>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl leading-relaxed">
            Our proven 6-step methodology transforms businesses from concept to
            market leaders.
          </p>
        </div>

        {/* Steps Content */}
        <div>
          {frameworkData.map((item) => (
            <StepCard key={item.id} item={item} />
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 md:mt-32">
          <div className="flex justify-end text-xl md:text-2xl lg:text-4xl">
            <Link
              href="/framework"
              className="text-stone-800 hover:text-stone-600 transition-colors flex items-center gap-2"
            >
              Explore the framework{" "}
              <ArrowUpRight className="size-4 md:size-5 lg:size-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
