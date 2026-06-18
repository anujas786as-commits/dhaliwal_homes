"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Layers, ArrowRight, Eye, Grid } from "lucide-react";
import gsap from "gsap";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // Stagger animate cards whenever activeCategory changes
    gsap.fromTo(
      ".portfolio-card",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out", overwrite: "auto" }
    );
  }, [activeCategory]);

  const categories = [
    { id: "all", name: "All Styles" },
    { id: "exteriors", name: "Exteriors" },
    { id: "interiors", name: "Interiors" },
    { id: "modern", name: "Modern" },
    { id: "classic", name: "Classic" },
    { id: "landscape", name: "Landscape" },
  ];

  const concepts = [
    {
      title: "Twilight Architectural Facade",
      category: "exteriors",
      img: "/images/beautiful-house-exterior-at-twilight-in-suburban-s-2026-03-18-08-25-48-utc.jpg.jpeg",
      desc: "A dramatic exterior composition featuring natural cedar claddings offset against off-form concrete walls, suspended balcony, and double-glazed window profiles under evening lighting.",
      specs: ["Cedar Cladding", "Double Glazing", "Architectural Lighting"],
    },
    {
      title: "Cantilevered Glass Residence",
      category: "modern",
      img: "/images/luxury-house-at-sunny-day-in-vancouver-canada-2026-03-26-11-34-19-utc.jpg.jpeg",
      desc: "Floor-to-ceiling glazing, clean geometric volumes, and a cantilevered upper level define this contemporary residence. Open plan indoor-outdoor connection with a seamless deck transition.",
      specs: ["Structural Steel", "Custom Glazing", "7.2-Star Energy Rating"],
    },
    {
      title: "Warm Industrial Interior",
      category: "interiors",
      img: "/images/Industrial Design Cafe Interiors.jpg",
      desc: "An interior concept featuring sandblasted brickwork, exposed heavy timber roof girders, black powder-coated steel joints, and custom copper pendant lighting accents.",
      specs: ["Exposed Timber Beams", "Acoustic Insulation", "Polished Concrete Floor"],
    },
    {
      title: "Classic Suburban Double-Storey",
      category: "classic",
      img: "/images/a-suburban-luxury-home-in-a-north-american-city-2026-03-26-09-21-00-utc.jpg.jpeg",
      desc: "A timeless double-storey form with symmetrical facade, pitched roof lines, and rendered brick. Designed to complement established streetscapes in Melbourne's south-east suburbs.",
      specs: ["Rendered Brick", "Pitched Roof", "COLORBOND Steel"],
    },
    {
      title: "Sculpted Garden Courtyard",
      category: "landscape",
      img: "/images/modern-luxury-house-with-landscaped-garden-under-a-2026-03-09-02-55-27-utc.jpg.jpeg",
      desc: "A landscaped courtyard design wrapping around the home's perimeter, incorporating structured garden beds, timber composite decking, and perimeter drainage solutions.",
      specs: ["Retaining Walls", "Composite Decking", "Perimeter Drainage"],
    },
    {
      title: "Victorian Terrace Streetscape",
      category: "classic",
      img: "/images/victorian-style-homes-in-san-francisco-2026-03-09-08-13-52-utc.jpg.jpeg",
      desc: "Classic Victorian-era terrace styling with decorative iron lacework, symmetrical bay windows, and period-accurate rendered facades — ideal for heritage-adjacent Melbourne neighbourhoods.",
      specs: ["Iron Lacework Detail", "Period Render", "Slate-style Roofing"],
    },
    {
      title: "Sleek Luxury Exterior",
      category: "exteriors",
      img: "/images/attractive-suburban-home-with-black-iron-gate-2026-03-26-11-36-08-utc.jpg.jpeg",
      desc: "A contemporary luxury exterior featuring premium black gate entries, clean horizontal cladding lines, and lush planted borders for privacy and street appeal.",
      specs: ["Aluminium Gates", "Feature Cladding", "Landscaped Borders"],
    },
    {
      title: "Coastal Blue Facade",
      category: "modern",
      img: "/images/beautiful-blue-house-on-a-sunny-day-in-vancouver-2026-03-26-09-48-53-utc.jpg.jpeg",
      desc: "A fresh modern exterior with bold blue weatherboard cladding, crisp white trims, and a welcoming covered porch. Suited to lifestyle-focused residential projects.",
      specs: ["Weatherboard Cladding", "White Trim Detail", "Covered Entry Porch"],
    },
    {
      title: "Outdoor Alfresco Living",
      category: "landscape",
      img: "/images/queentears-wr-mshjNzupCEg-unsplash.jpg",
      desc: "Integrated alfresco entertaining with seamless indoor-outdoor flow, overhead timber pergola, travertine paving, and feature planting to create a resort-style backyard environment.",
      specs: ["Timber Pergola", "Travertine Paving", "Feature Planting"],
    },
  ];

  const filteredConcepts =
    activeCategory === "all"
      ? concepts
      : concepts.filter((c) => c.category === activeCategory);

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-charcoal pt-24 pb-12 border-b border-orange/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/a-suburban-luxury-home-in-a-north-american-city-2026-03-26-09-21-00-utc.jpg.jpeg"
            alt="Design Vision Portfolio Banner"
            fill
            className="object-cover opacity-20 object-center gsap-hero-parallax"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/45" />
        </div>
        <div className="relative z-10 max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 space-y-4">
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block gsap-hero-title">
            VISUAL GALLERY
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight gsap-hero-title">
            Our Architectural Vision
          </h1>
          <div className="h-[1px] w-20 bg-gold mx-auto mt-4 gsap-hero-title" />
          <p className="max-w-2xl mx-auto text-white/80 font-light text-base sm:text-lg gsap-hero-title">
            Dhaliwal Homes is a newly established premium builder (Jan 2026). Explore our design templates, materials, and potential renovation outcomes.
          </p>
        </div>
      </section>

      {/* Before/After Visual Showcase */}
      <section className="bg-white py-14 text-foreground">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Slider Column */}
            <div className="lg:col-span-7 reveal-on-scroll">
              <BeforeAfterSlider
                beforeImage="/images/beautiful-blue-house-on-a-sunny-day-in-vancouver-2026-03-26-09-48-53-utc.jpg.jpeg"
                afterImage="/images/luxury-house-at-sunny-day-in-vancouver-canada-2026-03-26-11-34-19-utc.jpg.jpeg"
                beforeLabel="Old Suburb Facade (Before Rebuild)"
                afterLabel="Dhaliwal Custom Concept (After Rebuild)"
              />
              <span className="block text-center text-xs text-foreground/50 font-light mt-3 italic">
                Drag the gold slider handle to compare the traditional site with our modern custom rebuild vision.
              </span>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 space-y-6 reveal-on-scroll delay-200">
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block">
                INTERACTIVE COMPARISON
              </span>
              <h2 className="text-3xl font-serif text-charcoal">
                Knockdown Rebuild & Remodeling Potential
              </h2>
              <div className="h-[1px] w-12 bg-gold" />
              <p className="text-foreground/80 font-light leading-relaxed text-sm sm:text-base">
                Our before/after visualization highlights the structural transformations possible under our custom design and construction packages.
              </p>
              <p className="text-foreground/80 font-light leading-relaxed text-sm sm:text-base">
                We handle the dismantling of existing old suburban brick or weatherboard facades, coordinate site soil remediation, prepare reinforced foundations, and erect architectural homes matching 7-star environmental regulations.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services/knockdown-rebuild"
                  className="inline-flex items-center text-xs font-semibold text-gold hover:text-white uppercase tracking-wider"
                >
                  Learn About Knockdown Rebuilds <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Design Gallery & Filters */}
      <section className="bg-beige py-14 text-foreground border-t border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[80%] mx-auto mb-16 space-y-4">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              INSPIRATION GALLERY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
              Browse Styles &amp; Aesthetics
            </h2>
            <div className="h-[1px] w-20 bg-gold mx-auto" />
            <p className="text-foreground/65 font-light text-sm max-w-xl mx-auto">
              Explore design directions across exteriors, interiors, and landscaping to find your ideal style.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-[94%] mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm border focus:outline-none ${
                  activeCategory === cat.id
                    ? "bg-gold border-gold text-white font-bold shadow-lg"
                    : "bg-white border-orange/20 text-charcoal hover:border-gold hover:text-gold"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Concepts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-on-scroll">
            {filteredConcepts.map((item, idx) => (
              <div
                key={idx}
                className="portfolio-card group bg-white border border-orange/15 overflow-hidden shadow-sm hover:shadow-md hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 space-y-4">
                    <span className="text-[10px] text-gold font-semibold uppercase tracking-widest bg-gold/10 border border-orange/20 px-2.5 py-1 rounded-sm inline-block">
                      {item.category === "exteriors"
                        ? "Exterior"
                        : item.category === "interiors"
                        ? "Interior"
                        : item.category === "modern"
                        ? "Modern"
                        : item.category === "classic"
                        ? "Classic"
                        : "Landscape"}
                    </span>
                    <h3 className="text-charcoal font-serif text-xl group-hover:text-gold transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 text-xs sm:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="border-t border-orange/10 pt-4 flex flex-wrap gap-2">
                    {item.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="text-[10px] text-foreground/60 font-light border border-orange/15 px-2 py-0.5 rounded-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-14 text-foreground text-center border-t border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal">Let's Design Your Dream Space</h2>
          <p className="text-foreground/75 font-light max-w-lg mx-auto text-sm sm:text-base">
            Reach out to our founder Devinder Dhaliwal today to coordinate your initial blueprint feasibility session.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold/90 text-white font-semibold uppercase tracking-widest text-xs px-8 py-4 transition-all duration-300 rounded-sm shadow-lg"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}
