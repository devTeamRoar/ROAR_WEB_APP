"use client";

import { FC } from "react";
import { Check } from "lucide-react";

type DevintService = {
  id: number;
  title: string;
  description: string;
  points: string[];
};

const ServiceCard: FC<{ item: DevintService }> = ({ item }) => {
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

const devintServicesData: DevintService[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build fast, secure, and SEO-optimized web applications\n tailored to your business goals.",
    points: [
      "Custom Web Applications",
      "CMS & API Integration",
      "SEO & Performance Optimization",
      "Scalable Architecture",
    ],
  },
  {
    id: 2,
    title: "Data Science, Machine Learning & AI",
    description:
      "Transform your data into actionable insights with intelligent systems\n built on advanced analytics and automation.",
    points: [
      "Predictive Analytics & Modeling",
      "Data Visualization & BI Dashboards",
      "AI-Powered Automation",
      "Natural Language Processing (NLP)",
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We craft seamless, human-centered digital experiences\n that combine creativity and usability.",
    points: [
      "User Research & Persona Mapping",
      "Wireframes & Prototypes",
      "Interface Design Systems",
      "Experience Optimization & Testing",
    ],
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile applications built for performance\n engagement, and scalability.",
    points: [
      "iOS & Android App Development",
      "Flutter & React Native",
      "API & Database Integration",
      "App Maintenance & Versioning",
    ],
  },
  {
    id: 5,
    title: "Cloud & DevOps Solutions",
    description:
      "Cloud-native infrastructure and automation solutions\n that ensure speed, stability, and scalability.",
    points: [
      "AWS / Azure / GCP Architecture",
      "CI/CD Pipeline Setup",
      "Server Monitoring & Optimization",
      "Backup & Deployment Automation",
    ],
  },
  {
    id: 6,
    title: "Cybersecurity & Data Protection",
    description:
      "Advanced protection solutions to secure your applications\n infrastructure, and sensitive data.",
    points: [
      "Security Audits & Penetration Testing",
      "Data Encryption & Access Control",
      "Threat Detection & Response",
      "Compliance & Risk Management",
    ],
  },
];

const DevintServices: FC = () => {
  return (
    <section className="bg-stone-200 pt-48 lg:pt-56 pb-24 md:pb-40">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4">
            Our Technology <br/> Services
          </h1>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl leading-relaxed">
            We design and develop intelligent, scalable digital systems —
            combining design, data, and engineering to help businesses grow
            faster and smarter.
          </p>
        </div>

        {/* Services Content */}
        <div>
          {devintServicesData.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevintServices;
