"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Baby,
  Activity,
  ShieldCheck,
  Stethoscope,
  Scissors,
  Sparkles,
  Calendar,
  ChevronRight,
  Eye,
  CheckCircle2,
} from "lucide-react";

interface ServicesGridProps {
  onOpenBooking: (mode?: "in-clinic" | "video", service?: string) => void;
}

export default function ServicesGrid({ onOpenBooking }: ServicesGridProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "pregnancy", label: "Pregnancy & Delivery" },
    { id: "hormonal", label: "PCOS & Hormonal" },
    { id: "surgical", label: "Surgical & Scans" },
  ];

  const services = [
    {
      id: "antenatal",
      category: "pregnancy",
      title: "High-Risk Pregnancy & Antenatal Care",
      desc: "Complete prenatal tracking, gestational diabetes management, preeclampsia monitoring, and normal delivery guidance.",
      features: [
        "Trimester-by-trimester fetal growth scans",
        "Painless and normal delivery advocacy",
        "Postpartum recovery & lactation guidance",
      ],
      icon: <Baby className="w-6 h-6 text-rose-600" />,
      badge: "Core Specialty",
    },
    {
      id: "pcos-clinic",
      category: "hormonal",
      title: "Advanced PCOS & PCOD Reversal Clinic",
      desc: "Evidence-based metabolic assessment addressing irregular periods, weight fluctuations, cystic acne, and insulin resistance.",
      features: [
        "Tailored hormone panel review",
        "Lifestyle & nutritional intervention",
        "Ovulation restoration protocols",
      ],
      icon: <Activity className="w-6 h-6 text-rose-600" />,
      badge: "Comprehensive",
    },
    {
      id: "infertility",
      category: "pregnancy",
      title: "Infertility Evaluation & Reproductive Care",
      desc: "Empathetic diagnosis for couples attempting conception. Follicular monitoring, tubal patency tests, and fertility optimization.",
      features: [
        "Follicular tracking & ovulation induction",
        "Semen analysis & female factor evaluation",
        "Guidance for IUI and IVF pathways",
      ],
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      badge: "Gentle Care",
    },
    {
      id: "laparoscopy",
      category: "surgical",
      title: "Minimally Invasive Laparoscopic Surgery",
      desc: "Keyhole surgical management for ovarian cysts, uterine fibroids, endometriosis, and laparoscopic hysterectomy with minimal pain.",
      features: [
        "Tiny cosmetic incisions & fast recovery",
        "Same-day or next-day hospital discharge",
        "Minimal blood loss and tissue trauma",
      ],
      icon: <Scissors className="w-6 h-6 text-rose-600" />,
      badge: "FMAS Certified",
    },
    {
      id: "menstrual",
      category: "hormonal",
      title: "Adolescent Health & Menstrual Disorders",
      desc: "Compassionate, confidential care for teenagers and young women dealing with heavy bleeding, severe cramps, or irregular cycles.",
      features: [
        "Safe, friendly, non-intimidating consults",
        "Dysmenorrhea and pelvic pain management",
        "Period hygiene and hormonal education",
      ],
      icon: <Sparkles className="w-6 h-6 text-rose-600" />,
      badge: "Teen-Friendly",
    },
    {
      id: "menopause",
      category: "hormonal",
      title: "Menopause & Perimenopause Wellness",
      desc: "Navigating hot flashes, mood changes, insomnia, and bone density health during transition years with tailored solutions.",
      features: [
        "Hormone replacement therapy (HRT) evaluation",
        "Osteoporosis & bone mineral screening",
        "Cardiovascular and metabolic wellness",
      ],
      icon: <ShieldCheck className="w-6 h-6 text-rose-600" />,
      badge: "Senior Wellness",
    },
    {
      id: "preventive",
      category: "surgical",
      title: "Cervical Cancer Screening & HPV Vaccine",
      desc: "Preventive oncology including liquid-based Pap smears, HPV DNA testing, colposcopy referrals, and Cervarix/Gardasil vaccinations.",
      features: [
        "Painless Pap test in 5 minutes",
        "HPV cervical cancer immunization",
        "Clinical breast examinations",
      ],
      icon: <Stethoscope className="w-6 h-6 text-rose-600" />,
      badge: "Preventive",
    },
    {
      id: "ultrasound",
      category: "surgical",
      title: "Pelvic Ultrasound & Fetal Monitoring",
      desc: "High-resolution real-time diagnostic ultrasound scanning on-site for immediate clinical clarity without multiple lab visits.",
      features: [
        "Early pregnancy viability & dating scan",
        "Uterine & ovarian follicular assessment",
        "Immediate report explanation with doctor",
      ],
      icon: <Eye className="w-6 h-6 text-rose-600" />,
      badge: "On-Site Imaging",
      image: "/ultrasound_suite.jpg",
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-[#fefcfc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 text-rose-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-rose-600" />
            Specialized Care Areas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Comprehensive Clinical Services
          </h2>
          <p className="text-base text-zinc-600">
            From routine checkups and prenatal journeys to advanced laparoscopic
            interventions, our clinic delivers scientifically sound, gentle care
            tailored for every woman.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                  : "bg-white text-zinc-600 hover:bg-rose-50 border border-zinc-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="flex flex-col justify-between bg-white rounded-3xl p-6 border border-rose-100/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div>
                {/* Optional Image for ultrasound service or icon box */}
                {srv.image ? (
                  <div className="relative h-32 w-full rounded-2xl overflow-hidden mb-4 border border-rose-100">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs text-[10px] font-bold text-rose-700 px-2 py-0.5 rounded-md">
                      {srv.badge}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {srv.icon}
                    </div>
                    <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {srv.badge}
                    </span>
                  </div>
                )}

                <h3 className="font-bold text-base text-zinc-900 mb-2 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                  {srv.desc}
                </p>

                <ul className="space-y-2 mb-6 text-xs text-zinc-600">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenBooking("in-clinic", srv.title)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-600 hover:text-white transition-colors cursor-pointer group/btn"
              >
                <span>Book This Service</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
