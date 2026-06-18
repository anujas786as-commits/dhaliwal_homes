"use client";

import React, { useState, useEffect } from "react";
import {
  Lock,
  LogOut,
  Users,
  Search,
  Mail,
  Phone,
  DollarSign,
  Hammer,
  Calendar,
  Layers,
  MessageSquare,
  RefreshCw,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface Inquiry {
  _id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Dashboard state
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("ALL");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [dashboardLoading, setDashboardLoading] = useState(true);

  // Check auth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/auth");
      if (res.ok) {
        setIsAuthenticated(true);
        fetchDashboardData();
      } else {
        setIsAuthenticated(false);
        setDashboardLoading(false);
      }
    } catch {
      setIsAuthenticated(false);
      setDashboardLoading(false);
    }
  };

  const fetchDashboardData = async () => {
    setDashboardLoading(true);
    try {
      // Fetch settings
      const settingsRes = await fetch("/api/admin/settings");
      if (settingsRes.ok) {
        const settings = await settingsRes.json();
        setMaintenanceMode(!!settings.maintenanceMode);
      }

      // Fetch inquiries
      const inquiriesRes = await fetch("/api/admin/inquiries");
      if (inquiriesRes.ok) {
        const data = await inquiriesRes.json();
        setInquiries(data.inquiries || []);
      }
    } catch (err) {
      console.error("Error loading dashboard data:", err);
    } finally {
      setDashboardLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        fetchDashboardData();
      } else {
        setError(data.error || "Invalid password");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      setIsAuthenticated(false);
      setPassword("");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const toggleMaintenance = async () => {
    setActionLoading(true);
    const newValue = !maintenanceMode;
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ maintenanceMode: newValue }),
      });

      if (res.ok) {
        setMaintenanceMode(newValue);
      } else {
        alert("Failed to toggle maintenance mode");
      }
    } catch {
      alert("Network error toggle failed");
    } finally {
      setActionLoading(false);
    }
  };

  // Filter inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesService =
      selectedService === "ALL" ||
      inq.service.toLowerCase().replace(/\s+/g, "-") === selectedService.toLowerCase();
    return matchesSearch && matchesService;
  });

  const getUniqueServices = () => {
    const services = new Set(inquiries.map((i) => i.service));
    return ["ALL", ...Array.from(services)];
  };

  if (dashboardLoading && isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center font-sans">
        <div className="flex flex-col items-center space-y-4">
          <RefreshCw className="w-8 h-8 text-[#c49a3c] animate-spin" />
          <p className="text-sm tracking-widest text-[#c49a3c] uppercase font-semibold">
            Loading Dashboard...
          </p>
        </div>
      </div>
    );
  }

  // 1. LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center px-4 relative overflow-hidden font-sans">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,154,60,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(17,17,17,0.8),transparent)]" />

        <div className="relative z-10 w-full max-w-md bg-[#181818] border border-[#c49a3c]/15 p-8 rounded-sm shadow-2xl">
          <div className="text-center space-y-3 mb-8">
            <span className="text-[#c49a3c] text-xs font-bold tracking-[0.3em] uppercase block">
              Control Portal
            </span>
            <h2 className="text-3xl font-serif text-white tracking-tight">
              Dhaliwal Admin
            </h2>
            <div className="h-[1px] w-16 bg-[#c49a3c] mx-auto" />
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] text-white/50 tracking-wider uppercase font-semibold block">
                Enter Security Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#111111] border border-white/10 focus:border-[#c49a3c]/50 text-white rounded-sm py-3 px-4 pl-11 text-sm outline-none transition-colors"
                  required
                />
                <Lock className="w-4.5 h-4.5 text-white/30 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-400 text-xs bg-red-950/20 border border-red-900/50 p-3 rounded-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c49a3c] hover:bg-[#c49a3c]/90 disabled:opacity-50 text-white font-bold uppercase tracking-widest text-xs py-3.5 transition-colors rounded-sm shadow-lg flex items-center justify-center space-x-2"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <span>Access Portal</span>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. DASHBOARD PANEL
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-white/5 bg-[#181818] py-4 px-6 sm:px-8">
        <div className="max-w-[96%] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="font-serif text-lg tracking-[0.2em] font-semibold text-white uppercase">
              Dhaliwal <span className="text-[#c49a3c]">Homes</span>
            </span>
            <span className="bg-[#c49a3c]/15 text-[#c49a3c] text-[9px] font-bold tracking-widest px-2.5 py-0.5 border border-[#c49a3c]/30 uppercase rounded-sm">
              Admin
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 border border-white/10 hover:border-red-500/30 text-white/60 hover:text-red-400 text-xs font-semibold uppercase tracking-wider px-4 py-2 transition-all rounded-sm bg-[#111111]"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[96%] mx-auto w-full px-6 sm:px-8 py-8 space-y-8">
        
        {/* Top Control Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Inquiries card */}
          <div className="bg-[#181818] border border-white/5 p-6 rounded-sm flex items-center space-x-4 shadow-xl">
            <div className="p-3 bg-[#c49a3c]/10 text-[#c49a3c] rounded-full">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Total Inquiries</p>
              <h3 className="text-3xl font-serif font-bold text-white mt-1">{inquiries.length}</h3>
            </div>
          </div>

          {/* Site Maintenance Feature Toggle Card */}
          <div className="md:col-span-2 bg-[#181818] border border-white/5 p-6 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Hammer className="w-4.5 h-4.5 text-[#c49a3c]" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Under Build / Process Mode</h4>
              </div>
              <p className="text-xs text-white/50 font-light">
                When active, the public website displays a beautiful "Under Construction" page. The Admin dashboard remains accessible.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className={`w-2.5 h-2.5 rounded-full ${maintenanceMode ? "bg-amber-500 animate-pulse" : "bg-emerald-500"}`} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {maintenanceMode ? "Active" : "Disabled"}
                </span>
              </div>
              <button
                onClick={toggleMaintenance}
                disabled={actionLoading}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 ${
                  maintenanceMode
                    ? "bg-red-950/40 hover:bg-red-900/40 text-red-300 border border-red-900/60"
                    : "bg-[#c49a3c] hover:bg-[#c49a3c]/90 text-white shadow-lg"
                }`}
              >
                {actionLoading ? "Toggling..." : maintenanceMode ? "Turn Off" : "Turn On"}
              </button>
            </div>
          </div>
        </div>

        {/* Inquiries List View */}
        <div className="bg-[#181818] border border-white/5 rounded-sm shadow-2xl overflow-hidden">
          {/* Header & Filter options */}
          <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#1f1f1f]">
            <h3 className="text-lg font-serif text-white flex items-center space-x-2">
              <Layers className="w-5 h-5 text-[#c49a3c]" />
              <span>Contact Queries</span>
            </h3>

            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search inquiries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 bg-[#111111] border border-white/10 focus:border-[#c49a3c]/50 text-white rounded-sm py-2 px-3 pl-9 text-xs outline-none transition-colors"
                />
                <Search className="w-3.5 h-3.5 text-white/30 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>

              {/* Service Filter */}
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="bg-[#111111] border border-white/10 text-white text-xs py-2 px-3 outline-none rounded-sm focus:border-[#c49a3c]/50"
              >
                <option value="ALL">All Services</option>
                {getUniqueServices()
                  .filter((s) => s !== "ALL")
                  .map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* List grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* List Sidebar */}
            <div className="lg:col-span-5 border-r border-white/5 max-h-[600px] overflow-y-auto divide-y divide-white/5 bg-[#141414]">
              {filteredInquiries.length === 0 ? (
                <div className="p-12 text-center text-white/40 space-y-2">
                  <MessageSquare className="w-8 h-8 text-white/20 mx-auto" />
                  <p className="text-xs uppercase tracking-wider font-light">No queries found</p>
                </div>
              ) : (
                filteredInquiries.map((inq) => (
                  <div
                    key={inq._id}
                    onClick={() => setSelectedInquiry(inq)}
                    className={`p-5 cursor-pointer transition-all duration-200 text-left border-l-2 ${
                      selectedInquiry?._id === inq._id
                        ? "bg-[#1f1f1f] border-[#c49a3c]"
                        : "border-transparent hover:bg-[#181818]"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-semibold text-white truncate max-w-[180px]">
                        {inq.name}
                      </h4>
                      <span className="text-[9px] text-white/40 font-light flex items-center">
                        <Calendar className="w-3 h-3 mr-1 text-[#c49a3c]/75" />
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="bg-[#c49a3c]/10 text-[#c49a3c] text-[9px] font-bold tracking-wider px-2 py-0.5 border border-[#c49a3c]/15 uppercase rounded-sm">
                        {inq.service}
                      </span>
                      <span className="text-[10px] text-white/50 font-light">
                        {inq.budget}
                      </span>
                    </div>

                    <p className="text-xs text-white/60 font-light line-clamp-1 mt-3">
                      {inq.message}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Inquiry Details Viewer */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#181818] min-h-[400px] flex flex-col justify-between">
              {selectedInquiry ? (
                <div className="space-y-8 text-left">
                  {/* Title Header */}
                  <div className="border-b border-white/5 pb-5">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-2xl font-serif text-white">{selectedInquiry.name}</h3>
                        <p className="text-[10px] text-[#c49a3c] font-bold tracking-widest uppercase mt-1">
                          Inquiry Details
                        </p>
                      </div>
                      <span className="text-xs text-white/40 font-light flex items-center bg-[#111111] px-3 py-1.5 border border-white/5 rounded-sm">
                        <Calendar className="w-3.5 h-3.5 mr-2 text-[#c49a3c]" />
                        {new Date(selectedInquiry.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Grid details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-[#111111] border border-white/5 p-4 rounded-sm space-y-1">
                      <div className="flex items-center space-x-2 text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                        <Mail className="w-3.5 h-3.5 text-[#c49a3c]" />
                        <span>Email Address</span>
                      </div>
                      <a
                        href={`mailto:${selectedInquiry.email}`}
                        className="text-sm text-white hover:text-[#c49a3c] transition-colors break-all"
                      >
                        {selectedInquiry.email}
                      </a>
                    </div>

                    <div className="bg-[#111111] border border-white/5 p-4 rounded-sm space-y-1">
                      <div className="flex items-center space-x-2 text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                        <Phone className="w-3.5 h-3.5 text-[#c49a3c]" />
                        <span>Phone Number</span>
                      </div>
                      <a
                        href={`tel:${selectedInquiry.phone}`}
                        className="text-sm text-white hover:text-[#c49a3c] transition-colors"
                      >
                        {selectedInquiry.phone}
                      </a>
                    </div>

                    <div className="bg-[#111111] border border-white/5 p-4 rounded-sm space-y-1">
                      <div className="flex items-center space-x-2 text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                        <Layers className="w-3.5 h-3.5 text-[#c49a3c]" />
                        <span>Project Service</span>
                      </div>
                      <p className="text-sm font-semibold text-white">{selectedInquiry.service}</p>
                    </div>

                    <div className="bg-[#111111] border border-white/5 p-4 rounded-sm space-y-1">
                      <div className="flex items-center space-x-2 text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                        <DollarSign className="w-3.5 h-3.5 text-[#c49a3c]" />
                        <span>Estimated Budget</span>
                      </div>
                      <p className="text-sm font-semibold text-white">{selectedInquiry.budget}</p>
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="bg-[#111111] border border-white/5 p-6 rounded-sm space-y-3">
                    <h5 className="text-[10px] text-white/40 uppercase tracking-widest font-semibold flex items-center space-x-2">
                      <MessageSquare className="w-4.5 h-4.5 text-[#c49a3c]" />
                      <span>Client Message</span>
                    </h5>
                    <p className="text-sm text-white/85 font-light leading-relaxed whitespace-pre-wrap">
                      {selectedInquiry.message}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="my-auto text-center text-white/30 space-y-3 p-12">
                  <CheckCircle className="w-10 h-10 text-white/15 mx-auto" />
                  <p className="text-sm font-serif italic font-light">
                    Select an inquiry from the sidebar to inspect details
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

      </main>

      {/* Footer bar */}
      <footer className="border-t border-white/5 bg-[#181818] py-4 text-center">
        <p className="text-[10px] text-white/30 tracking-wider">
          &copy; {new Date().getFullYear()} Dhaliwal Homes Control Dashboard. Secure Administrator Session.
        </p>
      </footer>
    </div>
  );
}
