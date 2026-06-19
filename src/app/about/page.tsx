"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { ShieldAlert, Compass, CheckCircle2, Award, HardHat, Calendar, Target, Eye } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Structural Focus",
      desc: "We prioritize structural specifications over fast turnaround times. This includes using heavy timber gauges (MGP10/MGP12), certified concrete reinforcement, and structural steel portals.",
    },
    {
      icon: Compass,
      title: "Budget Certainty",
      desc: "We prepare thorough, itemized fixed-price HIA contracts before starting any site work, avoiding surprise costs or undisclosed variations during construction.",
    },
    {
      icon: CheckCircle2,
      title: "Direct Supervision",
      desc: "Devinder Dhaliwal supervises your site directly. You have a direct line of communication with the builder responsible for your keys.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-charcoal pt-24 pb-12 border-b border-orange/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/perfect-usa-home-2026-03-17-04-21-11-utc.jpg.jpeg"
            alt="About Dhaliwal Homes Banner"
            fill
            className="object-cover opacity-20 object-center gsap-hero-parallax"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/40" />
        </div>
        <div className="relative z-10 max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 space-y-4">
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block gsap-hero-title">
            WHO WE ARE
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight gsap-hero-title">
            Crafting Premium Melbourne Residences
          </h1>
          <div className="h-[1px] w-20 bg-gold mx-auto mt-4 gsap-hero-title" />
          <p className="max-w-2xl mx-auto text-white/80 font-light text-base sm:text-lg gsap-hero-title">
            Dhaliwal Homes is a bespoke residential builder dedicated to architectural precision, structural integrity, and absolute client transparency.
          </p>
        </div>
      </section>

      {/* Narrative & Founder Segment */}
      <section className="bg-white py-14 text-foreground">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Text column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block">
                Founder Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal leading-snug">
                A Local Builder Focused on Structural Quality
              </h2>
              <div className="h-[1px] w-16 bg-gold" />
              
              <div className="space-y-4 text-foreground/85 font-light leading-relaxed">
                <p>
                  In the residential construction sector, client communication and site supervision can often become secondary to volume targets. This can lead to structural shortcuts, scheduling delays, and poor oversight on-site.
                </p>
                <p>
                  Devinder Dhaliwal established <strong>Dhaliwal Homes</strong> in January 2026 to offer an alternative to volume builds. Based in Pakenham, we focus on custom residential homes, second-storey extensions, and full-scale structural renovations across Melbourne.
                </p>
                <p>
                  "My focus is on managing a limited number of active builds at any one time. This allows me to personally supervise critical phases, including slab pours, timber framing layouts, waterproofing, and internal fix stages," says Devinder.
                </p>
              </div>

              {/* History note */}
              <div className="bg-gradient-to-br from-beige to-white border border-orange/10 p-6 rounded-2xl shadow-xs flex items-center space-x-4">
                <Calendar className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h4 className="text-charcoal text-sm font-semibold uppercase tracking-wider">Established January 2026</h4>
                  <p className="text-foreground/70 text-xs font-light mt-1">
                  Incorporated under DSD Holdings Pty Ltd, committed to quality construction, structural integrity, and transparent project delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-gold/20 rounded-2xl shadow-xl">
                <Image
                  src="/images/logo/WhatsApp Image 2026-06-09 at 10.54.35 AM.jpeg"
                  alt="Founder Devinder Dhaliwal representation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center bg-gradient-to-br from-beige to-white border border-orange/10 p-5 rounded-2xl">
                <p className="text-gold text-xs font-bold uppercase tracking-widest">Devinder Dhaliwal</p>
                <p className="text-foreground/70 text-[11px] font-light">Managing Director & Builder | Dhaliwal Homes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-beige py-14 text-foreground border-y border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="bg-white border border-orange/10 p-8 md:p-10 rounded-2xl shadow-md relative group hover:border-gold/30 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 right-6 bg-gold/10 border border-orange/20 p-3 rounded-xl text-gold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-charcoal font-serif text-2xl mb-4 pr-12">Our Mission</h3>
              <p className="text-foreground/75 text-sm font-light leading-relaxed">
                To construct custom homes and structural extensions designed around our clients' requirements. We aim to provide clear fixed-price contracts, direct builder access, and quality framing and finishing standards.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-orange/10 p-8 md:p-10 rounded-2xl shadow-md relative group hover:border-gold/30 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 right-6 bg-gold/10 border border-orange/20 p-3 rounded-xl text-gold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-charcoal font-serif text-2xl mb-4 pr-12">Our Vision</h3>
              <p className="text-foreground/75 text-sm font-light leading-relaxed">
                To serve Melbourne as a reliable, licensed residential builder, known for quality workmanship and straightforward communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-14 text-foreground">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[80%] mx-auto mb-16 space-y-4">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              OUR STANDARDS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
              Values That Build Trust
            </h2>
            <div className="h-[1px] w-20 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gsap-stagger-grid">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-beige to-white border border-orange/10 p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-300 rounded-2xl shadow-sm flex flex-col justify-start items-start gsap-stagger-item"
                >
                  <div className="bg-white p-3 rounded-xl mb-6 border border-orange/10 text-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-charcoal font-serif text-xl mb-4">{val.title}</h3>
                  <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality & Safety Commitments */}
      <section className="bg-beige py-14 text-foreground border-t border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Construction Philosophy & Quality */}
            <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block">
                Quality Commitment
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-charcoal">
                Bespoke Materials & Structural Guarantees
              </h3>
              <div className="h-[1px] w-12 bg-gold" />
              <p className="text-foreground/75 text-sm font-light leading-relaxed">
                Our materials are sourced from premium local suppliers. We use F7/MGP10 structural grade framing timbers, termite-treated timbers, double-glazed dynamic glass, and premium COLORBOND steel profiles.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Rigorous pre-pour slab steel reinforcing inspections",
                  "Framing tolerances checked under Australian standard AS 1684",
                  "High-density R2.5 wall insulation and R4.0 ceiling thermal barrier installs",
                  "Comprehensive waterproofing checks in wet areas with dual-membrane layers",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-foreground/85">
                    <CheckCircle2 className="w-4.5 h-4.5 text-gold mr-3 flex-shrink-0" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety Commitments */}
            <div className="lg:col-span-6 bg-white border border-orange/10 shadow-md p-8 md:p-10 rounded-2xl space-y-6 hover:shadow-lg transition-shadow duration-300 reveal-on-scroll delay-200">
              <div className="flex items-center space-x-3 text-gold">
                <HardHat className="w-8 h-8" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase">
                  Safety First Philosophy
                </span>
              </div>
              <h3 className="text-2xl font-serif text-charcoal">
                Site Safety & Construction Management
              </h3>
              <p className="text-foreground/75 text-xs sm:text-sm font-light leading-relaxed">
                Every construction zone managed by Dhaliwal Homes operates under custom Site-Specific Safety Management Plans. We enforce regular toolbox meetings, certified scaffolding setups, and secure fencing limits.
              </p>
              
              <div className="bg-beige border border-orange/10 p-5 rounded-xl flex items-start space-x-3">
                <ShieldAlert className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-charcoal text-xs font-semibold uppercase tracking-wider">Zero-Harm Site Protocol</h4>
                  <p className="text-foreground/70 text-xs font-light mt-1">
                    We maintain clean workspaces, dry floors, and tidy scrap disposal, minimizing accidental slips and safeguarding carpenters and visiting clients.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-white py-14 text-foreground text-center border-t border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal">Ready to Discuss Your Project?</h2>
          <p className="text-foreground/75 font-light max-w-lg mx-auto text-sm sm:text-base">
            Book a consultation with our builder Devinder Dhaliwal to explore design options, site constraints, and get an initial feasibility assessment.
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
