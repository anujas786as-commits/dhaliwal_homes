"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export const ScrollReveal: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Subtle delay to allow page rendering to settle
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target); // Reveal once only
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};
