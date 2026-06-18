import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { CheckCircle2, ArrowRight, HelpCircle, HardHat, Compass, FileText } from "lucide-react";

// Service content definitions
interface ServiceContent {
  title: string;
  subtitle: string;
  heroImg: string;
  intro: string;
  subsections: { title: string; desc: string }[];
  processTitle: string;
  processSteps: { step: string; title: string; desc: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

const serviceData: Record<string, ServiceContent> = {
  "custom-homes": {
    title: "Custom Homes",
    subtitle: "Architectural Drafting & Bespoke Single/Multi-Storey Residences",
    heroImg: "/images/luxury-house-at-sunny-day-in-vancouver-canada-2026-03-26-11-34-19-utc.jpg.jpeg",
    intro: "A custom home should be designed around your specific block contours, solar orientation, and family requirements. We handle the process from preliminary drafting and council approvals through to frame lockup, fixing, and keys handover.",
    subsections: [
      {
        title: "Bespoke Architectural Design",
        desc: "We coordinate with residential draftsmen to develop plans that suit your land slopes and maximize natural light.",
      },
      {
        title: "Rigorous Structural Planning",
        desc: "Our engineers design footings and frames based on soil reports and structural steel tolerances to ensure build longevity.",
      },
      {
        title: "Full Permit & Approval Management",
        desc: "We submit plans to local councils and independent building surveyors, managing all asset protection and building permit applications.",
      },
    ],
    processTitle: "Our Custom Home Build Process",
    processSteps: [
      { step: "01", title: "Concept & Budget Setup", desc: "Consult on design ideas, soil variables, site limits, and financial parameters." },
      { step: "02", title: "Architectural Drafting", desc: "Develop sketch designs, site plans, elevations, and 3D perspectives." },
      { step: "03", title: "Engineering & Estimating", desc: "Run soil metrics, design slab structures, and lock in a fixed-price cost schedule." },
      { step: "04", title: "Council Approvals", desc: "Coordinate building permit submissions and manage municipal requirements." },
      { step: "05", title: "Precision Framing & Build", desc: "Pour concrete slab, frame the house, lock up the structure, complete interior linings, and fit joinery." },
      { step: "06", title: "Handover & Warranties", desc: "Conduct final inspections with a certifier, present the keys, and supply warranties." },
    ],
    benefits: [
      "Custom plans designed for your specific land size and slope.",
      "Direct on-site liaison with builder Devinder Dhaliwal.",
      "7-Star energy ratings using insulation and double-glazed windows.",
    ],
    faqs: [
      { q: "Can I make changes to the plans during construction?", a: "Yes. Minor framing variations can be handled via formal variation orders. We coordinate closely to discuss feasibility and quote costs before performing the work." },
      { q: "Do you supply interior layout advisors?", a: "Yes. We work alongside professional interior consultants to guide you through kitchen joinery layouts, tile specifications, paint palettes, and electrical fixtures." },
    ],
  },
  "luxury-homes": {
    title: "Luxury Homes",
    subtitle: "High-End Architectural Façades & Premium Internal Finishes",
    heroImg: "/images/beautiful-house-exterior-at-twilight-in-suburban-s-2026-03-18-08-25-48-utc.jpg.jpeg",
    intro: "Luxury residential builds require precise structural engineering and detailed finishes. We construct high-end custom homes with features like double-height voids, commercial-grade window tracks, natural stone work, and custom timber joinery.",
    subsections: [
      {
        title: "Architectural Elevations",
        desc: "We construct architectural facades using premium claddings, handmade masonry, standing-seam metal profiles, and custom steel frames.",
      },
      {
        title: "Prestige Internal Spec",
        desc: "We source high-spec interior finishes including engineered stone benchtops, custom oak flooring, and recessed strip lighting designs.",
      },
      {
        title: "Turnkey Landscape Integration",
        desc: "We coordinate structural landscape elements, retaining walls, pools, and outdoor kitchen decking under our single contract.",
      },
    ],
    processTitle: "Crafting a Luxury Residence",
    processSteps: [
      { step: "01", title: "Vision Alignment", desc: "Align with architects to review engineering options and finish specifications." },
      { step: "02", title: "Detail Engineering", desc: "Draft complex structural steel columns, double-height portal frames, and slab dynamics." },
      { step: "03", title: "Premium Selections", desc: "Select high-end masonry, structural stone slabs, and designer tapware." },
      { step: "04", title: "Permit Logistics", desc: "Secure specialized building permissions and coordinate heavy equipment site access." },
      { step: "05", title: "Artisan Construction", desc: "Assemble frames with specialized trade crews, monitoring tolerances at every stage." },
      { step: "06", title: "Polishing & Commissioning", desc: "Execute detailed hand-finishing, test automated networks, and complete the final handover." },
    ],
    benefits: [
      "Experienced tradespeople selected for premium finish tolerances.",
      "Thermal and acoustic insulation upgrades exceeding standard ratings.",
      "Itemized maintenance manuals and certificates supplied at handover.",
    ],
    faqs: [
      { q: "Do you coordinate custom pools and landscape design?", a: "Yes. We manage integrated pool excavation and landscape plans under a single construction schedule, avoiding trade overlap conflicts." },
      { q: "What is your project limit for luxury builds?", a: "We limit the number of active high-end builds to maintain direct builder supervision by Devinder on every site." },
    ],
  },
  renovations: {
    title: "Home Renovations",
    subtitle: "Kitchen, Bathroom, & High-End Structural Upgrades",
    heroImg: "/images/Industrial Design Cafe Interiors.jpg",
    intro: "Home renovations require blending existing structural frames with updated layouts. We specialize in kitchen renovations, load-bearing wall removals, open-plan structural alterations, and bathroom conversions.",
    subsections: [
      {
        title: "Designer Kitchen Upgrades",
        desc: "Install custom polyurethane joinery, soft-close hardware, custom stone island benchtops, and butler's pantries.",
      },
      {
        title: "Luxury Bathroom Remodels",
        desc: "Create floor-to-ceiling porcelain tiling, walk-in double showers, under-floor heating, and custom solid timber vanities.",
      },
      {
        title: "Structural Alterations",
        desc: "Remove structural load-bearing load paths, insert structural lintels, and install double-glazed sliding doors to connect internal zones with external spaces.",
      },
    ],
    processTitle: "Our Renovation Process",
    processSteps: [
      { step: "01", title: "On-Site Assessment", desc: "Inspect structural framing walls, verify plumbing positions, and discuss goals." },
      { step: "02", title: "Design Concept", desc: "Create layout options, select fittings, and draw joinery elevations." },
      { step: "03", title: "Cost Schedule", desc: "Detail exact material prices, trade durations, and fixed contracts." },
      { step: "04", title: "Demolition & Prep", desc: "Perform controlled strip-out, reinforce load-bearing frameworks, and rough-in services." },
      { step: "05", title: "Fit-out & Tiling", desc: "Install plasterboards, complete structural tiling, install cabinetry, and connect appliances." },
      { step: "06", title: "Final Polish", desc: "Complete paint finishes, clear building debris, and present the renovated spaces." },
    ],
    benefits: [
      "Floor protection and dust isolation barriers during demolition.",
      "Waterproofing membrane installation certificates (AS 3740) supplied.",
      "Scheduled trade sequencing to keep timelines on track.",
    ],
    faqs: [
      { q: "Can we remain in the home during the renovation?", a: "This depends on the scope. For kitchen or single bathroom upgrades, you can usually remain on-site in the unaffected areas. For whole-house structural renovations, vacating the premises during active construction stages is recommended for safety and to allow faster trade access." },
      { q: "Are municipal permits needed for renovations?", a: "If we remove structural walls or alter external windows/rooflines, a building permit is legally required in Victoria. We manage this entire submission." },
    ],
  },
  extensions: {
    title: "Home Extensions",
    subtitle: "Ground Floor Living Extensions & Second Storey Additions",
    heroImg: "/images/a-suburban-luxury-home-in-a-north-american-city-2026-03-26-09-21-00-utc.jpg.jpeg",
    intro: "Adding ground-floor extensions or lifting a second storey allows you to increase living space on your existing property. We construct structural additions that align with your home's original timber framing and rooflines.",
    subsections: [
      {
        title: "Second Storey Lifts",
        desc: "Add bedrooms and living zones. We install floor trusses, locate staircases, and modify roof structural framings.",
      },
      {
        title: "Ground Floor Extensions",
        desc: "Extend living rooms and kitchens outwards, including alfresco deck spaces and structural foundation extensions.",
      },
      {
        title: "Structural Integration",
        desc: "Our carpenters join new and old roof structures, sourcing matching tiles, claddings, and brickwork.",
      },
    ],
    processTitle: "Our Extension Workflow",
    processSteps: [
      { step: "01", title: "Structural Survey", desc: "Inspect current roof spaces, check footing depths, and evaluate wind loads." },
      { step: "02", title: "Design Interface", desc: "Draft floor layouts that align staircase portals and match existing style lines." },
      { step: "03", title: "Engineering Lifts", desc: "Design structural steel beams to span load-bearing openings below." },
      { step: "04", title: "Energy Rating & Permits", desc: "Submit drawings for planning permission and verify compliance with Victorian energy codes." },
      { step: "05", title: "Framing & Waterproofing", desc: "Erect framing walls, complete roofing extensions, and secure the structure from weather." },
      { step: "06", title: "Interior Finishing", desc: "Incorporate internal finishes, align floor levels, and complete final clean-up." },
    ],
    benefits: [
      "Maximise your existing block's living potential.",
      "Weatherproof structural joins that prevent roof leaks.",
      "Frames engineered to support upper-storey loads.",
    ],
    faqs: [
      { q: "How is a second storey extension constructed safely?", a: "We install temporary weather protection sheets, reinforce ground floor studs, install structural floor joists, and raise the new framing walls before opening the lower ceiling." },
      { q: "Will the new section match the older portion of the home?", a: "Yes. We source matching bricks, mortar pigments, timber siding profiles, and roofing tiles to ensure a cohesive look." },
    ],
  },
  "knockdown-rebuild": {
    title: "Knockdown Rebuilds",
    subtitle: "Demolish Aging Structures & Build Custom Dream Homes",
    heroImg: "/images/modern-luxury-house-with-landscaped-garden-under-a-2026-03-09-02-55-27-utc.jpg.jpeg",
    intro: "A knockdown rebuild allows you to build a brand-new custom home on your existing block. We coordinate the full demolition of your current structure and construct a purpose-designed home to current energy and structural standards.",
    subsections: [
      {
        title: "Demolition Logistics",
        desc: "We coordinate utility disconnections (electricity, gas, water, telco), council hoarding clearances, asbestos removal, and site demolition.",
      },
      {
        title: "Site Preparation & Surveying",
        desc: "Complete land surveys, re-establish boundary pegs, test soil layers, and clear existing roots to prepare for excavation.",
      },
      {
        title: "Maximized Land Use",
        desc: "Design custom home orientations that optimize natural light, setbacks, and yard space on your block.",
      },
    ],
    processTitle: "Knockdown Rebuild Roadmap",
    processSteps: [
      { step: "01", title: "Feasibility Audit", desc: "Evaluate easement codes, local planning overlays, and municipal setbacks." },
      { step: "02", title: "Architectural Drafting", desc: "Draft floor plans optimized around site slopes and orientation." },
      { step: "03", title: "Demolition Logistics", desc: "Secure municipal approvals and manage demolition crews." },
      { step: "04", title: "Engineering Designs", desc: "Design structural footings and organize site drainage layouts." },
      { step: "05", title: "Precision Construction", desc: "Erect a high-efficiency frame, complete lockup, fix, and internal detailing." },
      { step: "06", title: "Warranties & Handover", desc: "Conduct compliance checks, hand over keys, and supply structural warranties." },
    ],
    benefits: [
      "Retain your existing land title and block.",
      "Achieve a 7-star energy rating with insulation and double glazing.",
      "Full permit and demolition management from start to finish.",
    ],
    faqs: [
      { q: "Who manages the demolition phase?", a: "We coordinate with licensed demolition sub-contractors to manage utility disconnections, asbestos checks, site clearance, and waste recycling." },
      { q: "Are there council overlays that could block a rebuild?", a: "Yes. Heritage, vegetation, and single-dwelling overlays can impact your plans. We review all title details during our feasibility audit." },
    ],
  },
  "commercial-construction": {
    title: "Commercial Construction",
    subtitle: "Corporate Offices, Custom Retail Outlets, & Warehousing",
    heroImg: "/images/central-melbourne-city-riverside-skyline-in-austra-2026-03-25-08-25-38-utc.jpg.jpeg",
    intro: "We construct small to medium commercial developments, retail layouts, office partition fit-outs, and clear-span tilt-slab warehouses in accordance with commercial building codes.",
    subsections: [
      {
        title: "Office Fitouts",
        desc: "Create premium executive spaces, glass boardrooms, acoustic panel walls, and custom mechanical HVAC venting systems.",
      },
      {
        title: "Light Industrial Warehouses",
        desc: "Construct reinforced concrete tilt-slab portals, clear-span steel portals, commercial roller doors, and mezzanine floor systems.",
      },
      {
        title: "Corporate Compliance",
        desc: "All builds strictly comply with the National Construction Code (NCC), Section J energy rules, and disabled access guidelines (AS 1428).",
      },
    ],
    processTitle: "Commercial Construction Roadmap",
    processSteps: [
      { step: "01", title: "Zoning & Feasibility", desc: "Verify commercial zoning limits, parking spaces, and site entry access." },
      { step: "02", title: "Drafting & Engineering", desc: "Design architectural profiles and calculate structural slab load limits." },
      { step: "03", title: "Quantity Costings", desc: "Outline clear cost matrices and contract variables." },
      { step: "04", title: "Permits & NCC Checks", desc: "Coordinate building surveyor permissions and disabled access compliance." },
      { step: "05", title: "Structural Shell Build", desc: "Pour heavy concrete foundations, raise structural steel, and complete cladding panels." },
      { step: "06", title: "Fitout & Sign-off", desc: "Complete internal framing, partition walls, and secure commercial occupancy certs." },
    ],
    benefits: [
      "Structured programming to meet client handover dates.",
      "Adherence to commercial building codes and standards.",
      "Progress reporting structured around building surveyor checkpoints.",
    ],
    faqs: [
      { q: "Do you coordinate fire safety compliance?", a: "Yes. All commercial designs are integrated with fire exit doors, thermal detectors, emergency lighting, and fire extinguisher placements." },
      { q: "Can we execute construction outside business hours?", a: "For office/retail fit-outs within shared complexes, we can coordinate quiet trade phases and evening work to minimize disruptions." },
    ],
  },
};

export async function generateStaticParams() {
  return [
    { slug: "custom-homes" },
    { slug: "luxury-homes" },
    { slug: "renovations" },
    { slug: "extensions" },
    { slug: "knockdown-rebuild" },
    { slug: "commercial-construction" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} Melbourne – ${service.subtitle}`,
    description: service.intro.slice(0, 160),
    alternates: {
      canonical: `https://dhaliwalhomes.com.au/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Dhaliwal Homes Melbourne`,
      description: service.intro.slice(0, 160),
      url: `https://dhaliwalhomes.com.au/services/${slug}`,
      images: [
        {
          url: service.heroImg,
          width: 1200,
          height: 630,
          alt: `${service.title} – Dhaliwal Homes Melbourne`,
        },
      ],
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-charcoal pt-24 pb-12 border-b border-orange/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImg}
            alt={service.title}
            fill
            className="object-cover opacity-20 object-center gsap-hero-parallax"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/45" />
        </div>
        <div className="relative z-10 max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 space-y-4">
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block gsap-hero-title">
            SPECIALIZED SERVICE
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight gsap-hero-title">
            {service.title}
          </h1>
          <div className="h-[1px] w-20 bg-gold mx-auto mt-2 gsap-hero-title" />
          <p className="max-w-2xl mx-auto text-white/80 font-light text-base sm:text-lg gsap-hero-title">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Main Info */}
      <section className="bg-white py-14 text-foreground">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-12 reveal-on-scroll">
              <div className="space-y-4">
                <h2 className="text-charcoal font-serif text-3xl">Services Overview</h2>
                <div className="h-[1px] w-12 bg-gold" />
                <p className="text-foreground/85 font-light leading-relaxed text-base sm:text-lg">
                  {service.intro}
                </p>
              </div>

              {/* Subsections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 gsap-stagger-grid">
                {service.subsections.map((sub, idx) => (
                  <div key={idx} className="bg-beige border border-orange/15 p-6 rounded-sm space-y-3 gsap-stagger-item">
                    <h4 className="text-gold text-sm font-semibold uppercase tracking-wider">{sub.title}</h4>
                    <p className="text-foreground/75 text-xs sm:text-sm font-light leading-relaxed">{sub.desc}</p>
                  </div>
                ))}
              </div>

              {/* Timeline/Process */}
              <div className="space-y-8 pt-8">
                <div className="space-y-3">
                  <h3 className="text-charcoal font-serif text-2xl">{service.processTitle}</h3>
                  <div className="h-[1px] w-12 bg-gold" />
                </div>
                <div className="relative border-l border-orange/20 pl-8 ml-4 space-y-10">
                  {service.processSteps.map((step, idx) => (
                    <div key={idx} className="relative group reveal-on-scroll">
                      {/* Timeline dot */}
                      <span className="absolute left-[-42px] top-1 flex items-center justify-center w-7 h-7 bg-gold border border-charcoal text-charcoal font-bold text-[10px] rounded-full">
                        {step.step}
                      </span>
                      <h4 className="text-charcoal text-base font-semibold uppercase tracking-wider mb-2 group-hover:text-gold transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-foreground/70 text-xs sm:text-sm font-light leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 reveal-on-scroll delay-200">
              
              {/* Benefits Box */}
              <div className="bg-beige border border-orange/15 p-8 rounded-sm space-y-6">
                <div className="flex items-center space-x-3 text-gold">
                  <HardHat className="w-6 h-6" />
                  <h4 className="text-charcoal text-sm font-semibold uppercase tracking-widest">Why Choose Us</h4>
                </div>
                <div className="h-[1px] w-full bg-gold/10" />
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-foreground/80">
                      <CheckCircle2 className="w-4.5 h-4.5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-light leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents Box */}
              <div className="bg-white border border-orange/15 shadow-sm p-8 rounded-sm space-y-6">
                <div className="flex items-center space-x-3 text-gold">
                  <FileText className="w-6 h-6" />
                  <h4 className="text-charcoal text-sm font-semibold uppercase tracking-widest">Resources</h4>
                </div>
                <div className="h-[1px] w-full bg-gold/10" />
                <p className="text-foreground/70 text-xs font-light leading-relaxed">
                  We supply detailed planning schedules and compliance check documents during the setup phase.
                </p>
                <Link
                  href="/contact"
                  className="w-full text-center block bg-transparent border border-gold hover:bg-gold hover:text-white text-gold font-semibold uppercase tracking-widest text-xs py-3 transition-colors duration-200 rounded-sm"
                >
                  Request Consultation Brief
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Specific FAQs */}
      <section className="bg-beige py-14 text-foreground border-y border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              SERVICE INSIGHTS
            </span>
            <h2 className="text-3xl font-serif text-charcoal tracking-tight">
              Service Specific FAQs
            </h2>
            <div className="h-[1px] w-20 bg-gold mx-auto" />
          </div>

          <div className="space-y-6 gsap-stagger-grid">
            {service.faqs.map((faq, idx) => (
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

      {/* Related Projects - Design Inspiration Link */}
      <section className="bg-white py-14 text-foreground text-center">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">VISUALIZE YOUR BUILD</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal">Explore Material & Render Inspirations</h2>
          <p className="text-foreground/75 font-light max-w-lg mx-auto text-sm sm:text-base">
            Review the textures, visual concepts, masonry styles, and layouts we recommend to help design your space.
          </p>
          <div className="pt-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center bg-gold hover:bg-gold/90 text-white font-semibold uppercase tracking-widest text-xs px-8 py-4 transition-all duration-300 rounded-sm shadow-lg"
            >
              View Design Vision <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}
