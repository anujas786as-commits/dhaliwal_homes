"use client";

import React from "react";
import { usePathname } from "next/navigation";

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
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center font-sans">
        <div className="text-center px-4">
          <h1 className="text-xl sm:text-2xl font-light tracking-[0.2em] uppercase text-white/90">
            WEBSITE IS UNDER CONSTRUCTION
          </h1>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
