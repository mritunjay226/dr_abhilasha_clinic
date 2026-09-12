"use client";

import React from "react";
import Image from "next/image";
import {
  Heart,
  Calendar,
  ShieldCheck,
  Sparkles,
  Star,
  Activity,
  UserCheck,
  Video,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: (mode?: "in-clinic" | "video", service?: string) => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const quickPills = [
    {
      id: "checkups",
      title: "Regular Checkups",
      icon: (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {/* Venus / Female glyph */}
          <circle cx="12" cy="9" r="5" />
          <path d="M12 14v7M9 18h6" />
        </svg>
      ),
      tag: "Preventive Care",
    },
    {
      id: "pregnancy",
      title: "Pregnancy Care",
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 fill-rose-100" />,
      tag: "Antenatal & Birth",
    },
    {
      id: "menstrual",
      title: "Menstrual Health",
      icon: (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {/* Lotus / Floral petals */}
          <path d="M12 3c-1.5 3-4 6-4 9a4 4 0 008 0c0-3-2.5-6-4-9z" />
          <path d="M5 14c2-1 4-1 6 1-2 3-5 3-7 1a4 4 0 011-2z" />
          <path d="M19 14c-2-1-4-1-6 1 2 3 5 3 7 1a4 4 0 00-1-2z" />
        </svg>
      ),
      tag: "Cycle & Pain Relief",
    },
    {
      id: "pcos",
      title: "PCOS & Hormonal Care",
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />,
      tag: "Metabolic Balance",
    },
  ];

  return (
    <section id="home" className="relative pt-4 sm:pt-6 pb-14 sm:pb-20 lg:pt-8 lg:pb-24 overflow-hidden">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 left-1/4 -z-10 w-72 sm:w-96 h-72 sm:h-96 bg-rose-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-5 -z-10 w-64 sm:w-80 h-64 sm:h-80 bg-pink-100/45 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Subhead, Badges & Proof */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-rose-800 uppercase mb-4 sm:mb-6 w-fit shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>COMPASSIONATE CARE • EXPERT GUIDANCE • HEALTHIER YOU</span>
            </div>

            {/* Giant Clean Headline matching reference */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.12] mb-4 sm:mb-6">
              Your Health. <br />
              Your Journey. <br />
              <span className="text-[#be185d] relative inline-block">
                Our Priority.
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full text-rose-300 -z-10"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,0 100,5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading description */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-xl leading-relaxed mb-6 sm:mb-8">
              Comprehensive gynecological care for every stage of your life —
              from adolescence to menopause. Led by{" "}
              <strong className="text-zinc-800 font-semibold">
                Dr. Abhilasha
              </strong>
              , Senior Obstetrician & Laparoscopic Surgeon with 20+ years of clinical excellence.
            </p>

            {/* 4 Feature Badges / Category Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 mb-7 sm:mb-9">
              {quickPills.map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => onOpenBooking("in-clinic", pill.title)}
                  className="group flex flex-col items-center text-center p-3 sm:p-3.5 rounded-2xl bg-white/95 hover:bg-rose-50/90 border border-rose-100 hover:border-rose-300 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-rose-50 group-hover:bg-white flex items-center justify-center mb-2 transition-transform duration-200 group-hover:scale-110 shadow-2xs">
                    {pill.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-zinc-800 group-hover:text-rose-700 leading-tight">
                    {pill.title}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-zinc-400 mt-0.5 group-hover:text-rose-500/80">
                    {pill.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7 sm:mb-9">
              <button
                onClick={() => onOpenBooking("in-clinic")}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-linear-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-md shadow-rose-600/25 hover:shadow-lg hover:shadow-rose-600/35 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                Book In-Clinic Visit
              </button>

              <button
                onClick={() => onOpenBooking("video")}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-rose-800 bg-white hover:bg-rose-50 border border-rose-200 shadow-2xs hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <Video className="w-4 h-4 text-rose-600" />
                Schedule Video Consult
              </button>
            </div>

            {/* Social Proof & Trust Bar from reference */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 pt-4 border-t border-rose-100/90">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-2 overflow-hidden shrink-0">
                <img
                  className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Patient"
                />
                <img
                  className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                  alt="Patient"
                />
                <img
                  className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Patient"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
                  Trusted by 50,000+
                </span>
                <span className="text-[10px] sm:text-[11px] text-zinc-500">
                  women for better health
                </span>
              </div>

              {/* 4.9 Rating Card */}
              <div className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-rose-100 shadow-2xs">
                <span className="text-xs sm:text-sm font-extrabold text-zinc-900">4.9</span>
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                <span className="text-[9px] sm:text-[10px] text-zinc-400 hidden xs:inline">
                  (500+ reviews)
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Dr. Abhilasha & Reference Mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-linear-to-b from-rose-50/70 via-white to-pink-50/40 p-2 sm:p-3 shadow-xl shadow-rose-900/5 border border-rose-100/90 group">
                <div className="relative aspect-4/3 sm:aspect-5/4 lg:aspect-4/3 w-full rounded-2xl sm:rounded-[2rem] overflow-hidden bg-rose-50">
                  <Image
                    src="/hero_image.png"
                    alt="Dr. Abhilasha's Clinic - Women's Health Clinic"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Subtle gradient overlay at bottom for smooth contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/25 to-transparent pointer-events-none" />
                </div>

                {/* Floating Handwritten Inspiration Callout Badge */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 flex flex-col items-end pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg shadow-rose-900/10 border border-rose-100/80 text-right transform rotate-2">
                    <p className="font-serif italic text-rose-800 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide">
                      Healthy Women <br />
                      Build Stronger Futures ♡
                    </p>
                  </div>
                </div>

                {/* Bottom Floating Pill: Doctor Experience */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-lg shadow-rose-900/10 border border-rose-100 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                    20+
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 truncate">
                      Dr. Abhilasha (MD, FMAS)
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-500 truncate">
                      Senior Gynecologist & Surgeon
                    </span>
                  </div>
                  <div className="ml-auto pl-2 shrink-0">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ● Open Today
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
