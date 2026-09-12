"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Phone,
  Video,
  Menu,
  X,
  Heart,
  Sparkles,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

interface NavbarProps {
  onOpenBooking: (mode?: "in-clinic" | "video") => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Dr. Abhilasha", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Consultations", href: "#consultations" },
    { name: "Clinic Tour", href: "#gallery" },
    { name: "Patient Reviews", href: "#reviews" },
    { name: "Location & Hours", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-rose-100/80 py-2.5 sm:py-3"
          : "bg-transparent py-3.5 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo: Dr. Abhilasha Clinic */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 sm:gap-3 transition-transform duration-200 hover:scale-[1.01]"
          >
            {/* Elegant Monogram & Floral Heart Badge */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-linear-to-br from-rose-500 via-pink-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-rose-500/25 group-hover:shadow-rose-500/40 transition-all">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Heart outline with botanical flourish */}
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 9v6" strokeWidth="1.5" />
                <path d="M9 12h6" strokeWidth="1.5" />
              </svg>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-zinc-900 leading-tight">
                  Dr. Abhilasha
                </span>
                <span className="hidden xs:inline-flex text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200/70 px-1.5 py-0.2 rounded-md uppercase">
                  MD (OBGYN)
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-500 tracking-wide">
                Women's Health & Fertility Clinic
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] xl:text-[14px] font-medium text-zinc-600">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 hover:text-rose-600 relative py-1 ${
                  idx === 0 ? "text-rose-600 font-semibold" : ""
                }`}
              >
                {link.name}
                {idx === 0 && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:+919826055432"
              className="p-2 text-zinc-500 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
              title="Call Clinic Helpline"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBooking("video")}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100/90 border border-rose-200/80 transition-all duration-200 cursor-pointer"
            >
              <Video className="w-3.5 h-3.5 text-rose-600" />
              Online Consult
            </button>

            <button
              onClick={() => onOpenBooking("in-clinic")}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-sm shadow-rose-600/25 hover:shadow-md hover:shadow-rose-600/35 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => onOpenBooking("in-clinic")}
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-xs"
            >
              <Calendar className="w-3 h-3" />
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-rose-600" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-rose-100 px-5 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-100/70">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
              Quick Navigation
            </span>
            <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open Today
            </span>
          </div>

          <nav className="flex flex-col gap-2.5 text-sm font-semibold text-zinc-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-rose-50 hover:text-rose-600 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-zinc-300 text-xs">›</span>
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-rose-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking("video");
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200 hover:bg-rose-100"
            >
              <Video className="w-4 h-4 text-rose-600" />
              Book Online Video Consult (₹600)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking("in-clinic");
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/20"
            >
              <Calendar className="w-4 h-4" />
              Book In-Clinic Slot at Indore Clinic
            </button>

            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-zinc-500">
              <a
                href="tel:+919826055432"
                className="inline-flex items-center gap-1.5 text-zinc-700 hover:text-rose-600 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                Call Helpline
              </a>
              <span>•</span>
              <a
                href="https://wa.me/919826055432"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
