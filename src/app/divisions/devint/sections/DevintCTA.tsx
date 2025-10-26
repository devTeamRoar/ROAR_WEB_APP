"use client";

import { FC } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DevintCTA: FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-stone-950 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] z-0"></div>

      <div className="max-w-full px-4 md:px-8 relative z-10">
        {/* Heading */}
        <div className="mb-8 md:mb-16">
          <h1
            className="text-stone-100 font-light mb-4 whitespace-pre-line"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Ready to Transform Your{"\n"}Technology?
          </h1>
        </div>

        {/* Subheading with Link */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column - Subheading */}
          <div>
            <p
              className="text-stone-300 text-base md:text-xl lg:text-2xl leading-relaxed whitespace-pre-line"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
            >
              Let&apos;s discuss how DEVINT can help you build the technology
              solutions that will drive your business growth and competitive
              advantage.
            </p>
          </div>

          {/* Right Column - Link */}
          <div className="flex justify-end items-end pr-8 md:pr-16 lg:pr-24">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-stone-300 hover:text-stone-100 transition-colors font-medium"
              style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
            >
              <span>Get Tech Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevintCTA;
