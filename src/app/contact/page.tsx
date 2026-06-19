"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  const services = [
    "Custom Home Building",
    "Luxury Homes",
    "Home Renovations",
    "Home Extensions",
    "Knockdown Rebuild",
    "Commercial Construction",
    "Project Management",
    "Design & Construct Services",
    "Interior & Exterior Upgrades",
  ];

  const budgets = [
    "Under $150,000",
    "$150,000 - $350,000",
    "$350,000 - $650,000",
    "$650,000 - $1,000,000",
    "$1,000,000 - $2,000,000",
    "$2,000,000+",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    // Client-side validation
    const { name, email } = formData;
    if (!name || !email) {
      setStatus({
        loading: false,
        success: false,
        message: "Name and Email are required fields.",
      });
      return;
    }

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Thank you! Your inquiry was submitted. Devinder and the team will get in touch shortly.",
        });
        // Clear form
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.error || "Form submission failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form submit error:", error);
      setStatus({
        loading: false,
        success: false,
        message: "A network error occurred. Please try again or call us directly.",
      });
    }
  };

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-charcoal pt-24 pb-12 border-b border-orange/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/central-melbourne-city-riverside-skyline-in-austra-2026-03-25-08-25-38-utc.jpg.jpeg"
            alt="Contact Dhaliwal Homes Banner"
            fill
            className="object-cover opacity-15 object-center gsap-hero-parallax"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/95 to-charcoal/45" />
        </div>
        <div className="relative z-10 max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 space-y-4">
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block gsap-hero-title">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight gsap-hero-title">
            Begin Your Building Journey
          </h1>
          <div className="h-[1px] w-20 bg-gold mx-auto mt-4 gsap-hero-title" />
          <p className="max-w-2xl mx-auto text-white/80 font-light text-base sm:text-lg gsap-hero-title">
            Ready to explore custom floor plans, planning guidelines, or commercial requirements? Drop us a line below.
          </p>
        </div>
      </section>

      {/* Main Form and details */}
      <section className="bg-white py-14 text-foreground">
        <div className="max-w-[94%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Intake Form */}
            <div className="lg:col-span-7 bg-white border border-orange/20 p-8 sm:p-12 rounded-sm shadow-sm space-y-6 reveal-on-scroll">
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">Project Consultation Intake</h2>
              <div className="h-[1px] w-12 bg-gold" />

              {/* Form Status Messages */}
              {status.success === true && (
                <div className="bg-green-50 border border-green-500/20 p-5 rounded-sm flex items-start space-x-3 text-green-800">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                  <p className="text-sm font-light leading-relaxed">{status.message}</p>
                </div>
              )}
              {status.success === false && (
                <div className="bg-red-50 border border-red-500/20 p-5 rounded-sm flex items-start space-x-3 text-red-800">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                  <p className="text-sm font-light leading-relaxed">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground/85">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Citizen"
                      className="w-full bg-beige border border-orange/10 text-charcoal px-4 py-3 rounded-xl focus:outline-none focus:border-gold transition-colors text-sm font-light shadow-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-foreground/85">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0400 000 000"
                      className="w-full bg-beige border border-orange/10 text-charcoal px-4 py-3 rounded-xl focus:outline-none focus:border-gold transition-colors text-sm font-light shadow-xs"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground/85">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. client@domain.com.au"
                    className="w-full bg-beige border border-orange/10 text-charcoal px-4 py-3 rounded-xl focus:outline-none focus:border-gold transition-colors text-sm font-light shadow-xs"
                  />
                </div>

                {/* Service Required & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-foreground/85">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-beige border border-orange/10 text-charcoal px-4 py-3 rounded-xl focus:outline-none focus:border-gold transition-colors text-sm font-light shadow-xs"
                    >
                      <option value="">-- Select Service (Optional) --</option>
                      {services.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wider text-foreground/85">
                      Estimated Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-beige border border-orange/10 text-charcoal px-4 py-3 rounded-xl focus:outline-none focus:border-gold transition-colors text-sm font-light shadow-xs"
                    >
                      <option value="">-- Select Budget (Optional) --</option>
                      {budgets.map((bdg) => (
                        <option key={bdg} value={bdg}>
                          {bdg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message / Brief */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground/85">
                    Project Brief / Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your property block, dimensions, zoning parameters, number of bedrooms, and framing ideas (Optional)..."
                    className="w-full bg-beige border border-orange/10 text-charcoal px-4 py-3 rounded-xl focus:outline-none focus:border-gold transition-colors text-sm font-light leading-relaxed resize-y shadow-xs"
                  />
                </div>

                {/* Submitting button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full flex items-center justify-center bg-gold hover:bg-gold/90 hover:scale-[1.01] active:scale-[0.99] text-white font-bold uppercase tracking-widest text-xs py-4 transition-all duration-300 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.loading ? (
                    <span>Submitting Consultation request...</span>
                  ) : (
                    <>
                      Submit Request <Send className="w-3.5 h-3.5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Contact Details, Map & Hours */}
            <div className="lg:col-span-5 space-y-8 reveal-on-scroll delay-200">

              {/* Direct Details Card */}
              <div className="bg-gradient-to-br from-beige to-white border border-orange/10 p-8 rounded-2xl shadow-sm space-y-6">
                <h3 className="text-charcoal font-serif text-xl border-l-2 border-gold pl-3 uppercase tracking-wider">
                  Contact Information
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-charcoal text-xs font-semibold uppercase tracking-wider">Corporate Address</h4>
                      <p className="text-foreground/80 text-sm font-light mt-1">
                        1424, 1 Queens Road,<br />Melbourne VIC 3004
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 text-gold mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-charcoal text-xs font-semibold uppercase tracking-wider">Phone Number</h4>
                      <a href="tel:0433704645" className="text-foreground/80 hover:text-gold text-sm font-light transition-colors mt-0.5 inline-block">
                        +61433 704 645
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 text-gold mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-charcoal text-xs font-semibold uppercase tracking-wider">Email Address</h4>
                      <a href="mailto:devinder@hotmail.com.au" className="text-foreground/80 hover:text-gold text-sm font-light transition-colors mt-0.5 inline-block">
                        devinder@hotmail.com.au
                      </a>
                    </div>
                  </li>
                </ul>
              </div>


              {/* Map & Direction Widget */}
              <div className="bg-white border border-orange/10 shadow-md p-8 rounded-2xl space-y-6">
                <div className="flex items-center space-x-3 text-gold">
                  <Clock className="w-5 h-5" />
                  <h4 className="text-charcoal text-sm font-semibold uppercase tracking-widest">Office Feasibility Map</h4>
                </div>
                <div className="h-[1px] w-full bg-gold/10" />
                <p className="text-foreground/70 text-xs font-light leading-relaxed">
                  Headquartered in Melbourne VIC. Licensed residential builder managing sites throughout Melbourne corridors.
                </p>
                <div className="relative aspect-[16/9] w-full bg-beige border border-orange/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-4">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                  <MapPin className="w-8 h-8 text-gold animate-pulse mb-2" />
                  <span className="text-charcoal text-xs font-medium uppercase tracking-wider">Melbourne, VIC 3004</span>
                  <a
                    href="https://maps.google.com/?q=1424,+1+Queens+Road,+Melbourne+VIC+3004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block bg-transparent border border-gold hover:bg-gold hover:text-white text-gold text-[10px] font-bold uppercase tracking-widest px-4 py-2 transition-all rounded-xl"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>




      <Footer />
      <WhatsAppWidget />
    </>
  );
}
