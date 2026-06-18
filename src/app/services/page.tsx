"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      title: "Custom Homes",
      slug: "custom-homes",
      img: "/images/luxury-house-at-sunny-day-in-vancouver-canada-2026-03-26-11-34-19-utc.jpg.jpeg",
      desc: "Custom residential builds drafted to suit your land contours, easement requirements, and design preferences. We manage the process from preliminary sketches through to handover.",
      benefits: ["Drafting and design coordination", "Soil-responsive footings", "On-site owner-builder meetings"],
    },
    {
      title: "Luxury Homes",
      slug: "luxury-homes",
      img: "/images/beautiful-house-exterior-at-twilight-in-suburban-s-2026-03-18-08-25-48-utc.jpg.jpeg",
      desc: "Prestige builds requiring complex structural engineering, double-height portal framing, architectural claddings, and high-end joinery finishes.",
      benefits: ["Bespoke architectural facades", "Commercial-grade glazing tracks", "Integrated automation and lighting details"],
    },
    {
      title: "Home Renovations",
      slug: "renovations",
      img: "/images/Industrial Design Cafe Interiors.jpg",
      desc: "Full-scale internal alterations and layout redesigns, specializing in load-bearing wall removals, custom steel lintel installations, kitchen fit-outs, and bathroom refits.",
      benefits: ["Licensed carpentry and structural works", "Kitchen and bathroom refits", "Waterproofing membrane certifications"],
    },
    {
      title: "Home Extensions",
      slug: "extensions",
      img: "/images/a-suburban-luxury-home-in-a-north-american-city-2026-03-26-09-21-00-utc.jpg.jpeg",
      desc: "Increasing living space with ground-floor extensions or second-storey lifts, engineered to match your existing home's roof lines, tiles, and brickwork.",
      benefits: ["Ground-floor framing expansions", "Second-storey timber wall lifts", "Roofline joins and valley plumbing"],
    },
    {
      title: "Knockdown Rebuilds",
      slug: "knockdown-rebuild",
      img: "/images/modern-luxury-house-with-landscaped-garden-under-a-2026-03-09-02-55-27-utc.jpg.jpeg",
      desc: "Replacing an older home with a modern, energy-compliant residence on your current block. Retain your existing land while building to current energy standards and your own design brief.",
      benefits: ["Asset protection and service disconnects", "Fixed structural warranties", "7-Star Victorian energy compliance"],
    },
    {
      title: "Commercial Construction",
      slug: "commercial-construction",
      img: "/images/central-melbourne-city-riverside-skyline-in-austra-2026-03-25-08-25-38-utc.jpg.jpeg",
      desc: "Constructing small to medium corporate offices, custom retail shopfronts, and tilt-slab industrial warehouses compliant with the NCC and AS 1428.",
      benefits: ["NCC Class 5 & 8 compliant shells", "AS 1428 disabled access compliance", "Section J thermal energy modeling"],
    },
  ];

  const faqs = [
    {
      q: "Can I bring my own completed plans to Dhaliwal Homes?",
      a: "Yes, absolutely. We welcome owner-supplied plans and can work alongside your architect or drafting firm to produce detailed structural costings and coordinate construction gates.",
    },
    {
      q: "How long does a typical custom home build take in Melbourne?",
      a: "A standard custom single-storey build requires approximately 6 to 9 months, while complex multi-storey luxury projects require between 9 to 14 months of site time depending on site slope, material specification, and council permits.",
    },
    {
      q: "What warranty coverage is supplied with my build?",
      a: "All our builds are completed to Australian structural standards. We supply formal handover documentation, compliance certificates, and defect liability periods as required under Victorian building legislation. Speak to us directly for details applicable to your project.",
    },
    {
      q: "Do you build outside of South East Melbourne?",
      a: "We are based in Pakenham and focus primarily on Pakenham, Berwick, Officer, Cranbourne, Narre Warren, and the wider South East. However, we can take on premium architectural projects in outer areas on a case-by-case basis.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-charcoal pt-24 pb-12 border-b border-orange/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/luxury-house-at-sunny-day-in-vancouver-canada-2026-03-26-11-34-19-utc.jpg.jpeg"
            alt="Services Banner"
            fill
            className="object-cover opacity-20 object-center gsap-hero-parallax"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/45" />
        </div>
        <div className="relative z-10 max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 space-y-4">
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block gsap-hero-title">
            WHAT WE DO
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight gsap-hero-title">
            Our Building Capabilities
          </h1>
          <div className="h-[1px] w-20 bg-gold mx-auto mt-4 gsap-hero-title" />
          <p className="max-w-2xl mx-auto text-white/80 font-light text-base sm:text-lg gsap-hero-title">
            Registered Domestic Builder managing custom homes, structural extensions, and light commercial construction across Melbourne's South East.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="bg-white py-14 text-foreground">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceList.map((svc, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-orange/10 last:border-b-0 last:pb-0 reveal-on-scroll`}
                >
                  {/* Image Div */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } relative aspect-[16/10] w-full overflow-hidden border border-orange/15 rounded-sm shadow-xl group`}
                  >
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Content Div */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } space-y-6`}
                  >
                    <h2 className="text-2xl sm:text-3xl font-serif text-charcoal hover:text-gold transition-colors">
                      {svc.title}
                    </h2>
                    <p className="text-foreground/85 font-light leading-relaxed text-sm sm:text-base">
                      {svc.desc}
                    </p>
                    
                    {/* Key Benefits List */}
                    <div className="space-y-3">
                      {svc.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center text-xs sm:text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                          <span className="font-light">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-flex items-center bg-transparent border border-gold hover:bg-gold hover:text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gold transition-all duration-300 rounded-sm"
                      >
                        Explore Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="bg-beige py-14 text-foreground border-t border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="h-[1px] w-20 bg-gold mx-auto" />
          </div>

          <div className="space-y-6 gsap-stagger-grid">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-orange/15 shadow-sm p-6 sm:p-8 rounded-sm space-y-3 gsap-stagger-item"
              >
                <div className="flex items-start space-x-3 text-gold">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <h4 className="text-charcoal text-base font-semibold uppercase tracking-wider">
                    {faq.q}
                  </h4>
                </div>
                <p className="text-foreground/75 text-sm font-light leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-14 text-foreground text-center border-t border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal">Let's Design Your Dream Project</h2>
          <p className="text-foreground/75 font-light max-w-lg mx-auto text-sm sm:text-base">
            Reach out to our builder Devinder Dhaliwal to discuss drafting layouts, block boundaries, or get structural suggestions.
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
