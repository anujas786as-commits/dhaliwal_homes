"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Hammer, Phone, Mail, Clock } from "lucide-react";

export function MaintenanceProvider({
  children,
  initialMaintenanceMode,
}: {
  children: React.ReactNode;
  initialMaintenanceMode: boolean;
}) {
  const pathname = usePathname();

  // If path starts with admin or api, bypass maintenance mode
  const isAdminOrApi = pathname.startsWith("/admin") || pathname.startsWith("/api");

  if (initialMaintenanceMode && !isAdminOrApi) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex flex-col justify-between relative overflow-hidden font-sans">
        {/* Background Decorative Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,154,60,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(17,17,17,0.8),transparent)]" />
        
        {/* Header */}
        <header className="relative z-10 max-w-[94%] mx-auto w-full px-4 py-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-lg tracking-[0.2em] font-semibold text-white uppercase">
              Dhaliwal <span className="text-[#c49a3c]">Homes</span>
            </span>
          </div>

        </header>

        {/* Main Content */}
        <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center my-auto flex flex-col items-center space-y-8">
          <div className="inline-flex items-center justify-center p-5 rounded-full bg-[#c49a3c]/10 border border-[#c49a3c]/20 text-[#c49a3c] mb-2 animate-pulse">
            <Hammer className="w-10 h-10" />
          </div>
          
          <div className="space-y-4">
            <span className="text-[#c49a3c] text-xs font-bold tracking-[0.4em] uppercase block">
              Website Currently Under Build
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-none">
              Crafting Premium Spaces
            </h1>
            <div className="h-[2px] w-24 bg-[#c49a3c] mx-auto mt-6" />
          </div>

          <p className="max-w-xl text-white/70 font-light text-base sm:text-lg leading-relaxed">
            Our online design vision gallery and portal are currently undergoing scheduled upgrades to serve you better. We build custom and luxury homes with quality craftsmanship.
          </p>

          <div className="w-full max-w-md bg-[#181818] border border-[#c49a3c]/15 p-6 rounded-sm space-y-4 text-left shadow-2xl">
            <h3 className="text-white font-serif text-lg border-b border-white/5 pb-2 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#c49a3c]" />
              <span>Get in Touch Directly</span>
            </h3>
            <div className="space-y-3 pt-2">
              <a
                href="tel:+61433704645"
                className="flex items-center text-sm text-white/80 hover:text-[#c49a3c] transition-colors"
              >
                <Phone className="w-4.5 h-4.5 text-[#c49a3c] mr-3" />
                <span>+61 433 704 645</span>
              </a>
              <a
                href="mailto:admin@dhaliwalhomes.com.au"
                className="flex items-center text-sm text-white/80 hover:text-[#c49a3c] transition-colors"
              >
                <Mail className="w-4.5 h-4.5 text-[#c49a3c] mr-3" />
                <span>admin@dhaliwalhomes.com.au</span>
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 max-w-[94%] mx-auto w-full px-4 py-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/40 tracking-wider">
            &copy; {new Date().getFullYear()} Dhaliwal Homes. All Rights Reserved. T/A DSD Holdings Pty Ltd.
          </p>
        </footer>
      </div>
    );
  }

  return <>{children}</>;
}
