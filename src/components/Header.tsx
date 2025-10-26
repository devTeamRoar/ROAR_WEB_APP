"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Equal, ArrowUpRight } from "lucide-react";

const navItems = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "FRAMEWORK",
    href: "/framework",
  },
  {
    label: "DIVISIONS",
    href: "/divisions",
  },
  {
    label: "ABOUT",
    href: "/about",
  },
];

// Content for the new dropdown
const divisionItems = [
  {
    label: "Devint",
    href: "/divisions/devint",
  },
  {
    label: "Iris Studios",
    href: "/divisions/iris",
  },
  {
    label: "Bionic Media",
    href: "/divisions/bionic",
  },
];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      {/* Header with backdrop blur and mix-blend-difference */}
      <div className="fixed top-0 left-0 w-full z-40 mix-blend-difference backdrop-blur-md pointer-events-none">
        <div className="container !max-w-full">
          <motion.div
            className="flex justify-between items-start py-6 px-6 overflow-visible"
            // Close when mouse leaves the entire header area
            onMouseLeave={() => setIsDivisionsOpen(false)}
            initial={false}
            animate={{ height: isDivisionsOpen ? 155 : 75 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: 80 }}
          >
            {/* Left side - Logo */}
            <div className="pointer-events-auto">
              <Link href="/">
                <span className="text-sm font-medium text-white">
                  ROAR INDUSTRIES
                </span>
              </Link>
            </div>

            {/* Center - Navigation (hidden on small screens) */}
            {/* We add items-start here so that when the "Divisions" column grows,
              the other links ("Home", "Framework") stay aligned at the top.
            */}
            <nav className="hidden md:flex items-start gap-8 pointer-events-auto ">
              {navItems.map(({ label, href }) =>
                // Check if the item is "DIVISIONS" to render it specially
                label === "DIVISIONS" ? (
                  <div
                    key={label}
                    className="flex flex-col"
                    // Open when mouse enters; close when leaving this block
                    onMouseEnter={() => setIsDivisionsOpen(true)}
                    onMouseLeave={() => setIsDivisionsOpen(false)}
                  >
                    {/* The "Divisions" link itself */}
                    <Link
                      href={href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>

                    {/* The Dropdown, now a direct child */}
                    <AnimatePresence>
                      {isDivisionsOpen && (
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{
                            hidden: { opacity: 0, height: 0 },
                            visible: {
                              opacity: 1,
                              height: "auto",
                              transition: {
                                duration: 0.18,
                                ease: [0.16, 1, 0.3, 1],
                                when: "beforeChildren",
                                staggerChildren: 0.08,
                              },
                            },
                          }}
                          className="flex flex-col gap-2 pt-4"
                        >
                          {divisionItems.map((item) => (
                            <motion.li
                              key={item.label}
                              variants={{
                                hidden: { opacity: 0, y: -6 },
                                visible: {
                                  opacity: 1,
                                  y: 0,
                                  transition: {
                                    duration: 0.18,
                                    ease: [0.16, 1, 0.3, 1],
                                  },
                                },
                              }}
                            >
                              <Link
                                href={item.href}
                                className="text-sm text-gray-300 hover:text-white transition-colors"
                              >
                                {item.label}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // All other links render normally
                  <Link
                    key={label}
                    href={href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                )
              )}
            </nav>

            {/* Right side - Contact and Menu */}
            <div className="flex gap-4 items-center pointer-events-auto uppercase">
              <Link
                href="/contact"
                className="text-sm text-gray-300 hover:text-white transition-colors hidden md:inline-flex items-center gap-1"
              >
                Contact
                <ArrowUpRight className="w-3 h-3" />
              </Link>

              <motion.div
                whileHover={{ rotate: 270 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden size-8 inline-flex items-center justify-center cursor-pointer mix-blend-difference"
              >
                {isMenuOpen ? (
                  <X size={26} className="text-white" />
                ) : (
                  <Equal size={26} className="text-white" />
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-page Navigation Menu (No changes here) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-black z-30 pt-8 overflow-y-auto"
          >
            <nav className="mt-20 flex flex-col">
              {navItems.map(({ label, href }) => (
                <Link
                  href={href}
                  key={label}
                  className="text-stone-300 group/nav-item relative isolate"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="container flex items-center justify-between !max-w-full border-b border-stone-900 py-4 px-6 transition-colors">
                    <span className="text-lg group-hover/nav-item:pl-4 transition-all duration-300 ">
                      {label}
                    </span>
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="absolute left-0 w-full h-0 -z-10 bg-[#1a1a1a] group-hover/nav-item:h-full transition-all duration-300 bottom-0"></div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
