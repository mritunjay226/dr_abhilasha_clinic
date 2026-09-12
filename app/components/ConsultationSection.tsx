"use client";

import React from "react";
import {
  Video,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  ArrowRight,
  PhoneCall,
  FileCheck,
} from "lucide-react";

interface ConsultationSectionProps {
  onOpenBooking: (mode: "in-clinic" | "video", service?: string) => void;
}

export default function ConsultationSection({ onOpenBooking }: ConsultationSectionProps) {
  const packages = [
    {
      title: "First-Time Comprehensive Gynec Consult",
      subtitle: "Ideal for new patients seeking detailed evaluation",
      mode: "in-clinic" as const,
      price: "₹700",
      originalPrice: "₹1,000",
      tag: "Most Popular",
      features: [
        "In-depth 25-minute one-on-one medical consultation",
        "Complete pelvic & gynecological physical examination",
        "Review of past medical history and blood reports",
        "Personalized lifestyle and preventive care prescription",
        "Free 7-day query follow-up over clinic desk",
      ],
      cta: "Book In-Clinic Visit",
    },
    {
      title: "Online Video Tele-Consultation",
      subtitle: "Accessible care from the comfort & privacy of your home",
      mode: "video" as const,
      price: "₹600",
      originalPrice: "₹800",
      tag: "Virtual Care",
      features: [
        "Secure, encrypted 1-on-1 video call with Dr. Abhilasha",
        "Instant digital prescription delivered to WhatsApp & Email",
        "Review of ultrasound, blood work, or prior doctor notes",
        "Second surgical opinion on fibroids, cysts, or hysterectomy",
        "Dedicated WhatsApp follow-up support for 5 days",
      ],
      cta: "Schedule Video Consult",
    },
    {
      title: "PCOS & Hormonal Health 3-Month Plan",
      subtitle: "Root-cause metabolic reversal & cycle regulation",
      mode: "in-clinic" as const,
      price: "₹2,499",
      originalPrice: "₹3,500",
      tag: "Specialized Care",
      features: [
        "3 detailed clinical follow-up consultations",
        "Complete hormonal profile & ultrasound scan analysis",
        "Personalized dietary & insulin-resistance protocol",
        "Cycle tracking & symptom alleviation guidance",
        "Continuous chat guidance with clinic coordinator",
      ],
      cta: "Enroll in PCOS Plan",
    },
    {
      title: "Antenatal / Pregnancy Journey Program",
      subtitle: "Continuous care from positive test to safe delivery",
      mode: "in-clinic" as const,
      price: "₹4,999",
      originalPrice: "₹6,500",
      tag: "Mom & Baby Care",
      features: [
        "Monthly trimester checkups & fetal heartbeat checks",
        "High-risk pregnancy screening & blood pressure monitoring",
        "Fetal growth scan review & nutrition guidelines",
        "Labor preparation, birth planning & normal delivery guidance",
        "Priority emergency contact direct line",
      ],
      cta: "Book Pregnancy Journey",
    },
  ];

  return (
    <section id="consultations" className="py-20 bg-linear-to-b from-white via-rose-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 text-rose-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            Flexible Healthcare Options
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Appointment & Consultation Options
          </h2>
          <p className="text-base sm:text-lg text-zinc-600">
            Whether you prefer a calm, face-to-face consultation at our modern
            clinic or a private online video call from home, we ensure attentive,
            unhurried care tailored to your needs.
          </p>
        </div>

        {/* Dual Mode Cards (In-Clinic vs Video) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: In-Clinic */}
          <div className="p-8 rounded-3xl bg-white border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/40 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>

            <div className="inline-block text-xs font-bold text-rose-600 uppercase tracking-wider mb-2">
              Physical Visit
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-3">
              In-Clinic Consultation
            </h3>
            <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
              Visit our serene clinic in Bhanwar Kuwa / Palasia, Indore. Enjoy a
              gentle, non-judgmental environment equipped with on-site
              diagnostics and private consultation chambers.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-zinc-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>On-site pelvic ultrasound & diagnostic imaging</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pap smear screening & cervical health check</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Private examination chamber with female nurse present</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No long queues — pre-scheduled timing slots</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenBooking("in-clinic")}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/25 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book In-Clinic Slot
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Online Video */}
          <div className="p-8 rounded-3xl bg-white border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/40 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Video className="w-7 h-7" />
            </div>

            <div className="inline-block text-xs font-bold text-pink-600 uppercase tracking-wider mb-2">
              Virtual Telehealth
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-3">
              Online Video Consultation
            </h3>
            <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
              Consult directly with Dr. Abhilasha from anywhere in India or
              abroad. Perfect for lab report reviews, second opinions, and
              routine follow-ups without travel stress.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-zinc-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% private, HD video call with Dr. Abhilasha</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Digitally signed legal prescription on WhatsApp & Email</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Detailed report review (Scans, Blood work, Biopsies)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Convenient evening & weekend appointment slots</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenBooking("video")}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer"
            >
              <Video className="w-4 h-4 text-rose-600" />
              Schedule Online Video Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Pricing & Care Packages Grid */}
        <div className="mt-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-zinc-900 tracking-tight mb-2">
              Transparent Consultation Packages
            </h3>
            <p className="text-sm text-zinc-500">
              No hidden charges. Clear, compassionate care designed around your comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="flex flex-col justify-between p-6 rounded-3xl bg-white border border-rose-100 shadow-xs hover:shadow-lg transition-all duration-200 hover:-translate-y-1 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60">
                      {pkg.tag}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400">
                      {pkg.mode === "in-clinic" ? "In-Clinic" : "Online"}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-zinc-900 mb-1 leading-snug">
                    {pkg.title}
                  </h4>
                  <p className="text-xs text-zinc-500 mb-4">{pkg.subtitle}</p>

                  <div className="flex items-baseline gap-2 mb-6 pb-4 border-b border-rose-100">
                    <span className="text-2xl font-extrabold text-zinc-900">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-zinc-400 line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs text-zinc-600">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenBooking(pkg.mode, pkg.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-600 hover:text-white border border-rose-200 hover:border-rose-600 transition-all cursor-pointer active:scale-95"
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
