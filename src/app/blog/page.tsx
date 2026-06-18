"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { blogPosts } from "@/lib/blog-data";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // Stagger animate blog cards on category change
    gsap.fromTo(
      ".blog-card",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out", overwrite: "auto" }
    );
  }, [activeCategory]);

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "Regulations", name: "Building Regulations" },
    { id: "Trends", name: "Design Trends" },
    { id: "Renovations", name: "Renovation Advice" },
    { id: "Building", name: "Home Building" },
    { id: "Commercial", name: "Commercial" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-charcoal pt-24 pb-12 border-b border-orange/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/a-suburban-luxury-home-in-a-north-american-city-2026-01-11-09-38-23-utc.jpg.jpeg"
            alt="Dhaliwal Homes Construction Blog Banner"
            fill
            className="object-cover opacity-20 object-center gsap-hero-parallax"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/45" />
        </div>
        <div className="relative z-10 max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 space-y-4">
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block gsap-hero-title">
            CONSTRUCTION INSIGHTS
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight gsap-hero-title">
            The Building & Design Blog
          </h1>
          <div className="h-[1px] w-20 bg-gold mx-auto mt-4 gsap-hero-title" />
          <p className="max-w-2xl mx-auto text-white/80 font-light text-base sm:text-lg gsap-hero-title">
            Expert advice, local Melbourne building permit updates, luxury design trends, and renovation checklists.
          </p>
        </div>
      </section>

      {/* Main Blog Area */}
      <section className="bg-white py-14 text-foreground">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Filters Bar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-16 bg-beige border border-orange/15 p-6 rounded-sm w-full">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-orange/20 text-charcoal pl-10 pr-4 py-2.5 rounded-sm focus:outline-none focus:border-gold transition-colors text-sm font-light shadow-sm"
              />
              <Search className="w-4 h-4 text-gold absolute left-3 top-3.5" />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border rounded-sm ${
                    activeCategory === cat.id
                      ? "bg-gold border-gold text-white font-bold"
                      : "bg-white border-orange/15 text-charcoal hover:border-gold hover:text-gold"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-on-scroll">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="blog-card group bg-white border border-orange/15 overflow-hidden shadow-sm hover:shadow-md hover:border-gold/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Cover image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Metadata & Title */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between text-[11px] text-foreground/60 font-light">
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1 text-gold" /> {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1 text-gold" /> {post.readTime}
                        </span>
                      </div>
                      <span className="text-[10px] text-gold font-semibold uppercase tracking-wider bg-gold/10 border border-gold/25 px-2.5 py-1 rounded-sm inline-block">
                        {post.category}
                      </span>
                      <h3 className="text-charcoal font-serif text-lg leading-snug group-hover:text-gold transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-foreground/70 text-xs sm:text-sm font-light leading-relaxed">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-bold text-gold uppercase tracking-wider hover:text-gold/80 transition-colors duration-200"
                    >
                      Read Article <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-beige border border-orange/15 rounded-sm">
              <p className="text-charcoal font-light text-base">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-xs font-semibold text-gold underline uppercase tracking-widest hover:text-orange transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* CTA section */}
      <section className="bg-white py-14 text-foreground text-center border-t border-orange/10">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal">Have a Specific Design Project?</h2>
          <p className="text-foreground/75 font-light max-w-lg mx-auto text-sm sm:text-base">
            Reach out to Devinder Dhaliwal to schedule a feasibility session and outline local planning requirements.
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
