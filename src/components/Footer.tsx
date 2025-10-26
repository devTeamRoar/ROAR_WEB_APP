import Link from "next/link";
import { FC } from "react";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/framework",
    label: "Framework",
  },
  {
    href: "/divisions",
    label: "Divisions",
  },
  {
    href: "/about",
    label: "About us",
  },
  {
    href: "/contact",
    label: "Contact us",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-100 relative overflow-hidden z-20">
      {/* Top divider line aligned with grid */}
      <div className="h-px bg-stone-700 mx-12 mb-3"></div>

      {/* Background grid pattern - same as CTA */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] z-0"></div>

      <div className="max-w-full px-4 md:px-8 relative z-10">
        <div className="py-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="size-3 rounded-full bg-green-400"></div>
            <span className="uppercase text-stone-300 font-medium">
              Connect to work with us.
            </span>
          </div>

          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-stone-100 font-light mt-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 9rem)" }}
              >
                Take this <span className="text-stone-300">opportunity</span>{" "}
                and grow your business.
              </h2>

              <a
                href="mailto:info@roarindustries.in"
                className="mt-8 inline-flex items-center gap-2 text-stone-300 hover:text-stone-100 transition-colors font-medium"
                style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
              >
                <span>info@roarindustries.in</span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>

            <div className="md:col-span-1">
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <Link href={href} key={label}>
                    <span className="uppercase text-stone-300 hover:text-stone-100 transition-colors font-medium text-sm">
                      {label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <p className="py-8 text-stone-400 text-sm text-center border-t pb-48 -mb-36 border-stone-700">
          © Roar Industries &nbsp; &bull; &nbsp; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
