import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Calendar, ShieldCheck } from "lucide-react";
import { Logo } from "../ui/logo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige text-charcoal border-t border-orange/10 pt-16 pb-8">
      <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Logo variant="main" size={200} />
            <p className="text-sm text-foreground/75 leading-relaxed font-light">
              Melbourne's premier custom builder specializing in luxury custom homes, multi-generational extensions, modern renovations, and knockdown-rebuild projects. Delivering quality craftsmanship built to last.
            </p>
            <div className="flex items-center space-x-3 text-xs text-gold font-medium tracking-wider">
              <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
              <span>Custom Home Builder<br />Melbourne, Victoria</span>
            </div>
          </div>

          {/* Column 2: Quick Links & Business Info */}
          <div className="space-y-4">
            <h4 className="text-charcoal text-sm font-semibold uppercase tracking-wider border-l-2 border-gold pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li>
                <Link href="/" className="hover:text-gold transition-colors duration-200">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors duration-200">
                  About Devinder
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gold transition-colors duration-200">
                  Design Vision
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors duration-200">
                  Construction Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services We Offer */}
          <div className="space-y-4">
            <h4 className="text-charcoal text-sm font-semibold uppercase tracking-wider border-l-2 border-gold pl-3">
              Our Specializations
            </h4>
            <ul className="space-y-2.5 text-sm text-foreground/75">
              <li>Custom & Luxury Homes</li>
              <li>Home Renovations (Kitchen & Bathroom)</li>
              <li>First Floor & Second Storey Extensions</li>
              <li>Knockdown Rebuild Projects</li>
              <li>Design & Construct (Turnkey)</li>
              <li>Small & Medium Commercial Construction</li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-4">
            <h4 className="text-charcoal text-sm font-semibold uppercase tracking-wider border-l-2 border-gold pl-3">
              Office Details
            </h4>
            <ul className="space-y-3.5 text-sm text-foreground/80">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-gold mt-1 flex-shrink-0" />
                <span className="font-light">
                  1424, 1 Queens Road,<br />Melbourne VIC 3004
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gold flex-shrink-0" />
                <a href="tel:0433704645" className="hover:text-gold transition-colors duration-200 font-light">
                  +61433 704 645
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gold flex-shrink-0" />
                <a href="mailto:devinder@hotmail.com.au" className="hover:text-gold transition-colors duration-200 font-light">
                  devinder@hotmail.com.au
                </a>
              </li>
              <li className="flex items-center text-xs text-foreground/70">
                <Calendar className="w-4 h-4 mr-3 text-gold flex-shrink-0" />
                <span>Established: January 2026</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Targeted Suburbs Covered */}
        <div className="border-t border-orange/10 mt-12 pt-8 text-center">
          <p className="text-xs text-foreground/60 font-light tracking-wide">
            <strong>Service Areas:</strong> Melbourne &bull; Pakenham &bull; Berwick &bull; Officer &bull; Cranbourne &bull; Narre Warren &bull; Melbourne Metro
          </p>
        </div>

        {/* Corporate Footprint & Copyright */}
        <div className="border-t border-orange/15 mt-6 pt-6 text-center text-xs text-charcoal/60 font-light">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>
              &copy; {currentYear} Dhaliwal Homes. All rights reserved.
            </p>
            <p>
              DSD Holdings Pty Ltd T/A Dhaliwal Homes | ACN: 676 000 000
            </p>
            <p>
              Built for Luxury, Craftsmanship & Precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
