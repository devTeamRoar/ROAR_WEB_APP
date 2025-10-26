"use client";

import { FC } from "react";
import { Check } from "lucide-react";

type FAQItem = {
  id: number;
  title: string;
  points: string[];
};

const FAQCard: FC<{ item: FAQItem }> = ({ item }) => {
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

const faqData: FAQItem[] = [
  {
    id: 1,
    title: "How long does a typical\nproject take?",
    points: [
      "Project timelines vary based on scope and complexity",
      "Web development projects typically take 4-8 weeks",
      "Complete brand transformation can take 3-6 months",
      "We provide detailed timelines during our initial consultation",
      "Regular milestone updates keep you informed throughout the process",
    ],
  },
  {
    id: 2,
    title: "Do you work with businesses\nof all sizes?",
    points: [
      "Yes! We work with startups, small businesses, and large enterprises",
      "Our scalable approach ensures we can deliver value regardless of company size",
      "We adapt our methodology to fit your budget and requirements",
      "Customized solutions tailored to each client's specific needs",
      "Proven track record across various industries and business models",
    ],
  },
  {
    id: 3,
    title: "Can you work with our\nexisting team?",
    points: [
      "Absolutely. We excel at collaborating with existing teams",
      "We can integrate seamlessly with your current processes and workflows",
      "Our approach is designed to complement, not replace, your internal capabilities",
      "Regular communication ensures smooth coordination between teams",
      "Flexible working arrangements to fit your team's schedule and preferences",
    ],
  },
  {
    id: 4,
    title: "What makes ROAR INDUSTRIES\ndifferent?",
    points: [
      "Our integrated approach sets us apart from traditional agencies",
      "Instead of working with multiple agencies, you get a complete ecosystem",
      "All expertise working together toward your success under one roof",
      "Comprehensive approach covering strategy, technology, creative, and marketing",
      "Proven methodology and framework that delivers measurable results",
    ],
  },
];

const ContactFAQ: FC = () => {
  return (
    <section className="bg-stone-200 pt-36 md:pt-48 pb-56 -mt-20 relative z-30">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4">
            Frequently Asked
            <br />
            Questions
          </h1>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl leading-relaxed">
            Get answers to common questions about working with ROAR INDUSTRIES
            <br className="hidden md:block" />
            and our comprehensive approach to business growth.
          </p>
        </div>

        {/* FAQ Content */}
        <div>
          {faqData.map((item) => (
            <FAQCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
