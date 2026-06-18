"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const GsapEffects: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Minor delay to let routes transition and mount DOM elements properly
    const timer = setTimeout(() => {
      // Clear any previous route triggers to prevent memory leaks/re-triggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // 1. Hero Text Load Reveals (e.g. titles, tags, text)
      const heroHeaders = document.querySelectorAll(".gsap-hero-title");
      if (heroHeaders.length > 0) {
        gsap.fromTo(
          heroHeaders,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power4.out",
            stagger: 0.12,
          }
        );
      }

      // 2. Parallax Scroll on Hero Background Images
      const parallaxBgs = document.querySelectorAll(".gsap-hero-parallax");
      parallaxBgs.forEach((bg) => {
        gsap.to(bg, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: bg.parentElement || "body",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // 3. Scroll Reveal for elements (cards, headers, images)
      const reveals = document.querySelectorAll(".reveal-on-scroll");
      reveals.forEach((el) => {
        // Remove basic CSS class so GSAP triggers smooth JS transitions
        el.classList.remove("reveal-on-scroll");

        // Extract transition delay if any
        let delayValue = 0;
        if (el.classList.contains("delay-100")) delayValue = 0.1;
        else if (el.classList.contains("delay-200")) delayValue = 0.2;
        else if (el.classList.contains("delay-300")) delayValue = 0.3;
        else if (el.classList.contains("delay-400")) delayValue = 0.4;
        else if (el.classList.contains("delay-500")) delayValue = 0.5;

        // Strip delay classes
        el.classList.remove("delay-100", "delay-200", "delay-300", "delay-400", "delay-500");

        gsap.fromTo(
          el,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            delay: delayValue,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 4. Staggered reveal lists
      const grids = document.querySelectorAll(".gsap-stagger-grid");
      grids.forEach((grid) => {
        const items = grid.querySelectorAll(".gsap-stagger-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: grid,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return null;
};
