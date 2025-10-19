

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Blog/News", path: "/blogs" },
  { label: "Contact Us", path: "/contact" },
  { label: "Careers", path: "/careers" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // ✅ Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        headerRef.current &&
        !headerRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* Fixed Header */}
   <header
  ref={headerRef}
  className={`fixed top-0 left-0 right-0 z-50 p-3 md:p-4 transition-shadow duration-300
    lg:bg-white
    ${
      scrolled
        ? "bg-white shadow-md lg:shadow-lg"
        : menuOpen
        ? "bg-white" // no shadow when menu is active
        : "bg-transparent lg:bg-white"
    }
  `}
>

        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image src="/logo.svg" alt="Logo" width={56} height={56} className="h-12 md:h-14 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 text-base">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={
                  pathname === path
                    ? "text-app-green-1 font-semibold"
                    : "text-gray-800 hover:text-app-green-1 transition-colors"
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger / Close */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 focus:outline-none transition-colors duration-300 text-gray-800 hover:text-app-green-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6 text-app-green-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-app-green-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-[50px] md:top-[72px] left-0 right-0 z-40 bg-white backdrop-blur-md shadow-md rounded-b-lg"
          >
            <nav className="flex flex-col space-y-4 p-8">
              {navItems.map(({ label, path }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setMenuOpen(false)}
                  className={
                    pathname === path
                      ? "text-app-green-1 font-semibold text-lg"
                      : "text-gray-700 hover:text-app-green-1 transition-colors text-lg"
                  }
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
