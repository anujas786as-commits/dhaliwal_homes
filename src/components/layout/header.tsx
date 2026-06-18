"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "../ui/logo";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll listener to trigger glassmorphic blur after 20px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Design Vision", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-orange/10 py-3 shadow-md"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo link */}
          <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
            <Logo variant="main" size={170} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[15px] font-medium tracking-wider uppercase transition-colors duration-200 py-2 ${isActive
                      ? "text-gold"
                      : scrolled
                        ? "text-charcoal hover:text-gold"
                        : "text-white/90 hover:text-gold"
                    }`}
                >
                  {link.name}
                  {/* Underline slide effect */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Contact Details & CTA (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:0433704645"
              className={`flex items-center transition-colors duration-200 text-sm font-medium tracking-wider ${scrolled
                  ? "text-charcoal hover:text-gold"
                  : "text-white/90 hover:text-gold"
                }`}
            >
              <Phone className="w-4 h-4 mr-2 text-gold animate-pulse" />
              +61433 704 645
            </a>
            <Link
              href="/contact"
              className="relative overflow-hidden group border border-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold hover:text-white bg-transparent transition-all duration-300 rounded-sm"
            >
              <span className="absolute inset-0 w-full h-full bg-gold transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 -z-10" />
              Request Consultation
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors focus:outline-none ${scrolled
                  ? "text-charcoal hover:text-gold"
                  : "text-white/90 hover:text-gold"
                }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[60px] bg-white/98 backdrop-blur-lg z-40 transition-transform duration-300 lg:hidden border-t border-orange/10 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="px-4 py-8 space-y-6 flex flex-col h-full items-center justify-start">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`text-xl font-medium tracking-widest uppercase transition-colors duration-200 py-1 ${isActive ? "text-gold" : "text-charcoal hover:text-gold"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="w-full border-t border-orange/10 my-4" />
          <a
            href="tel:0433704645"
            onClick={closeMenu}
            className="flex items-center text-lg font-medium text-charcoal hover:text-gold transition-colors duration-200"
          >
            <Phone className="w-5 h-5 mr-3 text-gold" />
            +61433 704 645
          </a>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="w-full text-center border border-gold py-3 text-sm font-semibold uppercase tracking-widest text-gold bg-transparent hover:bg-gold hover:text-white transition-all duration-300 rounded-sm"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};
