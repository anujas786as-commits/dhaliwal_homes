"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import {
  ShieldCheck,
  MapPin,
  Hammer,
  MessageCircle,
  Clock,
  Compass,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  HardHat,
  Award,
  Layers,
  Quote,
} from "lucide-react";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  const trustIndicators = [
    {
      icon: ShieldCheck,
      title: "Quality-First Builder",
      desc: "Every project delivered with precision craftsmanship, structural integrity, and full accountability from start to handover.",
    },
    {
      icon: MapPin,
      title: "Melbourne Southeast Specialist",
      desc: "In-depth knowledge of local soil classes, council overlays, and planning schemes.",
    },
    {
      icon: Hammer,
      title: "Structural Specifications",
      desc: "Building with MGP10 structural timber, reinforced concrete slabs, and custom steel portals.",
    },
    {
      icon: MessageCircle,
      title: "Direct Builder Contact",
      desc: "Supervised directly by Devinder Dhaliwal, with site meetings at every major phase.",
    },
    {
      icon: Clock,
      title: "Fixed HIA Milestones",
      desc: "Structured stages governed by fixed HIA contracts to prevent scheduling delays.",
    },
  ];

  const services = [
    {
      title: "Custom Homes",
      slug: "custom-homes",
      img: "/images/luxury-house-at-sunny-day-in-vancouver-canada-2026-03-26-11-34-19-utc.jpg.jpeg",
      desc: "Site-responsive custom homes drafted to maximize your block's solar orientation and contours.",
    },
    {
      title: "Luxury Homes",
      slug: "luxury-homes",
      img: "/images/beautiful-house-exterior-at-twilight-in-suburban-s-2026-03-18-08-25-48-utc.jpg.jpeg",
      desc: "Premium residential builds featuring architectural facades, double-glazed window walls, and custom stonework.",
    },
    {
      title: "Home Renovations",
      slug: "renovations",
      img: "/images/Industrial Design Cafe Interiors.jpg",
      desc: "Full-scale interior renovations, bathroom conversions, and custom cabinet joinery refits.",
    },
    {
      title: "Home Extensions",
      slug: "extensions",
      img: "/images/a-suburban-luxury-home-in-a-north-american-city-2026-03-26-09-21-00-utc.jpg.jpeg",
      desc: "Structural ground-floor extensions and second-storey lifts designed to join seamlessly with your existing roofline.",
    },
    {
      title: "Knockdown Rebuilds",
      slug: "knockdown-rebuild",
      img: "/images/modern-luxury-house-with-landscaped-garden-under-a-2026-03-09-02-55-27-utc.jpg.jpeg",
      desc: "Demolition of old residences to construct energy-efficient homes on your current block.",
    },
    {
      title: "Commercial Construction",
      slug: "commercial-construction",
      img: "/images/central-melbourne-city-riverside-skyline-in-austra-2026-03-25-08-25-38-utc.jpg.jpeg",
      desc: "Small to medium office blocks, custom shopfront fit-outs, and tilt-slab commercial warehouses.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      desc: "We review your site dimensions, title overlays, and design goals at our Pakenham office or directly on-site.",
    },
    {
      number: "02",
      title: "Preliminary Design",
      desc: "Our drafting team prepares layout concepts, focusing on natural light, setbacks, and room flow.",
    },
    {
      number: "03",
      title: "Specifications & Contract",
      desc: "Select interior fixtures, claddings, and appliances to lock in a fixed-price HIA contract.",
    },
    {
      number: "04",
      title: "Engineering & Permits",
      desc: "We arrange soil testing, structural engineering designs, and manage the Victorian building permit application.",
    },
    {
      number: "05",
      title: "Supervised Construction",
      desc: "Devinder Dhaliwal supervises structural framing, lockup, fixing, and finishing stages directly.",
    },
    {
      number: "06",
      title: "Inspections & Handover",
      desc: "Following independent certifier reviews and occupancy sign-off, we hand over keys and structural warranties.",
    },
  ];

  const galleryImages = [
    "/images/beautiful-house-exterior-at-twilight-in-suburban-s-2026-03-18-08-25-48-utc.jpg.jpeg",
    "/images/luxury-house-at-sunny-day-in-vancouver-canada-2026-03-26-11-34-19-utc.jpg.jpeg",
    "/images/modern-luxury-house-with-landscaped-garden-under-a-2026-03-09-02-55-27-utc.jpg.jpeg",
    "/images/attractive-suburban-home-with-black-iron-gate-2026-03-26-11-36-08-utc.jpg.jpeg",
    "/images/beautiful-blue-house-on-a-sunny-day-in-vancouver-2026-03-26-09-48-53-utc.jpg.jpeg",
    "/images/a-suburban-luxury-home-in-a-north-american-city-2026-03-26-09-21-00-utc.jpg.jpeg",
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/beautiful-house-exterior-at-twilight-in-suburban-s-2026-03-18-08-25-48-utc.jpg.jpeg"
            alt="Dhaliwal Homes Luxury Twilight Exterior"
            fill
            className="object-cover opacity-35 object-center scale-105 animate-subtle-zoom gsap-hero-parallax"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-transparent to-charcoal/30" />
        </div>

        <div className="relative z-10 max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <span className="inline-flex items-center gap-2 bg-gold/10 border border-orange/30 text-gold text-xs font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-6 gsap-hero-title">
            <Award className="w-3.5 h-3.5" /> ESTABLISHED JANUARY 2026
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 font-serif leading-[1.15] gsap-hero-title">
            Building Melbourne's Future,<br />
            <span className="text-gradient-gold font-normal font-serif">One Exceptional Project</span> at a Time
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 mb-10 font-light leading-relaxed gsap-hero-title">
            Custom Homes, Renovations & Commercial Construction Built With Precision. Delivering premium Victorian properties tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 gsap-hero-title">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-charcoal font-semibold uppercase tracking-widest text-xs px-8 py-4 transition-all duration-300 rounded-sm shadow-xl"
            >
              Request Consultation
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto border border-beige/30 hover:border-gold hover:text-gold text-white font-semibold uppercase tracking-widest text-xs px-8 py-4 bg-charcoal/40 backdrop-blur-sm transition-all duration-300 rounded-sm"
            >
              View Design Vision
            </Link>
          </div>
        </div>

        {/* Dynamic down-arrow indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Scroll</span>
          <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-beige py-10 border-y border-orange/10 text-charcoal">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {trustIndicators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-start border-l border-orange/20 pl-6 group hover:border-gold transition-colors duration-300 reveal-on-scroll delay-${(idx + 1) * 100}`}
                >
                  <div className="bg-white p-3 rounded-sm mb-4 border border-orange/20 group-hover:border-orange/30 transition-all">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-charcoal font-medium text-sm tracking-wide mb-2 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-xs leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="bg-white py-14 text-foreground relative overflow-hidden">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative group reveal-on-scroll">
              <div className="absolute -inset-2 border border-orange/20 rounded-sm -z-10 group-hover:inset-0 transition-all duration-500" />
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl rounded-sm">
                <Image
                  src="/images/logo/WhatsApp Image 2026-06-09 at 10.54.35 AM.jpeg"
                  alt="Devinder Dhaliwal Founder Story"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 border border-orange/20 p-5 backdrop-blur-sm rounded-sm">
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">Owner & Founder</p>
                  <h4 className="text-charcoal text-lg font-serif">Devinder Dhaliwal</h4>
                  <p className="text-foreground/70 text-[11px] font-light">Established Dhaliwal Homes &bull; January 2026</p>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6 reveal-on-scroll delay-200">
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block">
                The Founder's Commitment
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight leading-[1.2]">
                Building Custom Homes with Builder-Direct Accountability
              </h2>
              <div className="h-[1px] w-20 bg-gold" />
              <p className="text-foreground/80 font-light leading-relaxed">
                Dhaliwal Homes was established in early 2026 by Devinder Dhaliwal. As a registered builder, Devinder started this company to offer custom home construction focused on structural specifications, clear budgets, and direct site supervision.
              </p>
              <p className="text-foreground/80 font-light leading-relaxed">
                We coordinate a reliable team of local tradesmen, structural engineers, and drafting professionals across South East Melbourne. Our builds follow Australian construction standards strictly, using quality timber frames, certified slab steel, and dual-layer wet area waterproofing.
              </p>

              {/* Quote Card */}
              <div className="relative border-l-2 border-gold pl-6 py-2 bg-beige rounded-r-md">
                <Quote className="absolute top-2 right-4 w-12 h-12 text-orange/15 -scale-x-100" />
                <p className="text-charcoal italic text-base font-serif leading-relaxed mb-2">
                  "A custom home or structural extension is a significant financial commitment. That's why you work directly with me on-site, ensuring that your plans are built exactly as drafted with structural integrity from the footings to the roof."
                </p>
                <cite className="text-gold text-xs font-semibold uppercase tracking-wider block">
                  — Devinder Dhaliwal
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-beige py-14 text-foreground border-y border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[80%] mx-auto mb-16 space-y-4">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
              Our Core Construction Services
            </h2>
            <div className="h-[1px] w-20 bg-gold mx-auto" />
            <p className="text-foreground/75 font-light">
              We specialize in custom residential homes, second-storey additions, knockdown rebuilds, and light commercial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className={`group relative bg-white border border-orange/15 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-gold/40 hover:-translate-y-1 flex flex-col justify-between reveal-on-scroll delay-${(idx % 3 + 1) * 100}`}
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-charcoal font-serif text-xl mb-3 tracking-wide group-hover:text-gold transition-colors duration-200">
                      {svc.title}
                    </h3>
                    <p className="text-foreground/70 text-sm font-light leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center text-xs font-bold text-gold uppercase tracking-wider hover:text-gold/80 transition-colors duration-200"
                  >
                    Explore Service <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dhaliwal Homes */}
      <section className="bg-white py-14 text-foreground relative">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Features Info */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
                The Premium Builder Choice
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
                Our Core Building Standards
              </h2>
              <p className="text-foreground/75 font-light leading-relaxed">
                Building a custom home or undertaking a second-storey extension is a major commitment. We manage the process transparently by sticking to three core principles:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold/10 border border-orange/30 p-2.5 rounded-sm mr-4 mt-1">
                    <HardHat className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-charcoal text-base font-semibold uppercase tracking-wider mb-1">Direct Builder Liaison</h4>
                    <p className="text-foreground/70 text-sm font-light leading-relaxed">
                      You won't deal with sales representatives or standard corporate managers. Devinder Dhaliwal supervises your build and coordinates all site meetings directly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/10 border border-orange/30 p-2.5 rounded-sm mr-4 mt-1">
                    <Layers className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-charcoal text-base font-semibold uppercase tracking-wider mb-1">Fixed-Price HIA Contracts</h4>
                    <p className="text-foreground/70 text-sm font-light leading-relaxed">
                      Based on soil tests, architectural designs, and engineering specifications, we prepare detailed fixed-price HIA contracts, ensuring budget clarity before site start.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/10 border border-orange/30 p-2.5 rounded-sm mr-4 mt-1">
                    <Compass className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-charcoal text-base font-semibold uppercase tracking-wider mb-1">Local South East Trades</h4>
                    <p className="text-foreground/70 text-sm font-light leading-relaxed">
                      We source reliable, licensed sub-contractors in Pakenham, Berwick, Officer, and surrounding areas. This ensures local trade knowledge and quick response times.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Inspiration Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-orange/10">
                  <Image
                    src="/images/a-suburban-luxury-home-in-a-north-american-city-2026-01-11-09-38-23-utc.jpg.jpeg"
                    alt="Luxury exterior materials"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-orange/10">
                  <Image
                    src="/images/Industrial Design Cafe Interiors.jpg"
                    alt="Premium internal finishes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-orange/10">
                  <Image
                    src="/images/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg"
                    alt="Architectural details"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-orange/10">
                  <Image
                    src="/images/attractive-suburban-home-with-black-iron-gate-2026-03-26-11-36-08-utc.jpg.jpeg"
                    alt="Completed rendering style"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Inspiration Gallery */}
      <section className="bg-beige py-14 text-foreground border-y border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[80%] mx-auto mb-16 space-y-4">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              Design Inspiration
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
              Our Architectural Vision
            </h2>
            <div className="h-[1px] w-20 bg-gold mx-auto" />
            <p className="text-foreground/75 font-light">
              A collection of architectural concepts, fine building materials, and interior details that represent the design standards of Dhaliwal Homes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((imgSrc, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] w-full overflow-hidden border border-orange/10 rounded-sm shadow-md"
              >
                <Image
                  src={imgSrc}
                  alt={`Design Vision Concept ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-750 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/95 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div>
                    <h4 className="text-gold font-serif text-lg mb-2">Architectural Concept</h4>
                    <p className="text-charcoal text-xs font-light">Premium layouts, bespoke masonry, and optimized window profiles.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-xs font-semibold text-gold uppercase tracking-widest border border-gold px-8 py-3.5 transition-all duration-300 hover:bg-gold hover:text-white rounded-sm"
            >
              Explore Full Gallery <ChevronRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="bg-white py-14 text-foreground relative overflow-hidden">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[80%] mx-auto mb-16 space-y-4">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              The Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
              Our Construction Process
            </h2>
            <div className="h-[1px] w-20 bg-gold mx-auto" />
            <p className="text-foreground/75 font-light">
              We follow a structured 6-stage construction sequence. Click on any stage below to review the key building milestones.
            </p>
          </div>

          {/* Steps navigation tab layout */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-[94%] mx-auto">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm border focus:outline-none ${activeStep === idx
                    ? "bg-gold border-gold text-white font-bold shadow-lg"
                    : "bg-white border-orange/20 text-charcoal hover:border-gold hover:text-gold"
                  }`}
              >
                {step.number}. {step.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Active Step Content Card */}
          <div className="max-w-[94%] mx-auto bg-beige border border-orange/20 rounded-md p-6 md:p-10 shadow-sm relative">
            <div className="absolute top-4 right-6 text-7xl font-bold font-serif text-orange/10">
              {steps[activeStep].number}
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
              <span className="text-gold text-xs font-bold tracking-[0.35em] uppercase block">
                STAGE {steps[activeStep].number} OF 06
              </span>
              <h3 className="text-charcoal text-2xl font-serif">{steps[activeStep].title}</h3>
            </div>
            <p className="text-foreground/80 font-light leading-relaxed text-base">
              {steps[activeStep].desc}
            </p>
            <div className="mt-8 flex items-center justify-between border-t border-orange/15 pt-6">
              <span className="text-xs text-foreground/60 font-light">Direct supervision by Devinder Dhaliwal</span>
              {activeStep < 5 ? (
                <button
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="flex items-center text-xs font-semibold text-gold hover:text-gold/80 uppercase tracking-wider"
                >
                  Next Stage <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="flex items-center text-xs font-semibold text-gold hover:text-gold/80 uppercase tracking-wider"
                >
                  Start Consultation <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="bg-beige py-12 text-foreground border-t border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Areas List */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
                Service Hubs
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
                Building Throughout South East Melbourne
              </h2>
              <div className="h-[1px] w-20 bg-gold" />
              <p className="text-foreground/75 font-light leading-relaxed">
                Dhaliwal Homes is based in Pakenham and serves clients across Melbourne's rapidly expanding South Eastern growth corridors.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Melbourne Metro",
                  "Pakenham VIC 3810",
                  "Berwick VIC 3806",
                  "Cranbourne VIC 3977",
                  "Officer VIC 3809",
                  "Narre Warren VIC 3805",
                  "South East Suburbs",
                  "Gippsland Corridor",
                ].map((suburb, idx) => (
                  <div key={idx} className="flex items-center text-foreground/80 text-sm">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                    <span>{suburb}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] bg-white border border-orange/20 rounded-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-sm">
                {/* Abstract grid lines simulating a blueprint/map */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-orange/30 flex items-center justify-center mx-auto text-gold animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-charcoal text-lg font-serif">Melbourne Office & Site Core</h4>
                  <p className="text-foreground/70 text-xs font-light max-w-sm mx-auto">
                    Headquartered at 1424, 1 Queens Road, Melbourne VIC 3004. Custom builder consultations available by booking.
                  </p>
                  <a
                    href="https://maps.google.com/?q=1424,+1+Queens+Road,+Melbourne+VIC+3004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-semibold text-gold uppercase tracking-wider hover:text-gold/80 transition-colors mt-2"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-white py-16 text-foreground overflow-hidden border-t border-orange/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/a-suburban-luxury-home-in-a-north-american-city-2026-03-26-09-21-00-utc.jpg.jpeg"
            alt="Dhaliwal Homes Custom Construction Rendering Background"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-beige/85 to-white" />
        </div>

        <div className="relative z-10 max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-6xl font-serif text-charcoal tracking-tight leading-tight">
            Let's Build Something<br />
            <span className="text-gradient-gold font-normal">Extraordinary Together</span>
          </h2>
          <p className="max-w-xl mx-auto text-foreground/75 font-light text-base sm:text-lg leading-relaxed">
            Partner with Melbourne's dedicated custom residential builder. Contact Devinder Dhaliwal today to coordinate your initial concept exploration.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white font-semibold uppercase tracking-widest text-xs px-8 py-4 transition-all duration-300 rounded-sm shadow-xl"
            >
              Request Consultation
            </Link>
            <a
              href="tel:0433704645"
              className="w-full sm:w-auto border border-orange/30 hover:border-gold hover:text-gold text-charcoal font-semibold uppercase tracking-widest text-xs px-8 py-4 bg-beige/60 backdrop-blur-sm transition-all duration-300 rounded-sm"
            >
              Call +61433 704 645
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}
