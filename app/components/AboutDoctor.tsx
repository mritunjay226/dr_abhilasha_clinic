"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  CheckCircle2,
  Calendar,
  Sparkles,
  GraduationCap,
} from "lucide-react";

interface AboutDoctorProps {
  onOpenBooking: () => void;
}

export default function AboutDoctor({ onOpenBooking }: AboutDoctorProps) {
  const stats = [
    { label: "Clinical Experience", value: "20+ Years" },
    { label: "Safe Deliveries Assisted", value: "15,000+" },
    { label: "Laparoscopic Surgeries", value: "5,000+" },
    { label: "Patient Satisfaction", value: "4.9 / 5.0" },
  ];

  const highlights = [
    "MBBS & MD in Obstetrics and Gynaecology with clinical honors",
    "Fellowship in Minimal Access Surgery (FMAS) & Advanced Laparoscopy",
    "Pioneer in normal vaginal delivery and high-risk pregnancy protocols",
    "Specialized holistic management of PCOS, endometriosis & adolescent health",
    "Active member of FOGSI (Federation of Obstetric and Gynaecological Societies of India)",
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-72 h-72 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Floating Experience Badges */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Chamber Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white shadow-rose-950/10 aspect-4/3 sm:aspect-5/4">
                <Image
                  src="/clinic_chamber.jpg"
                  alt="Dr. Abhilasha Consultation Chamber"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose-200">
                    Consultation Sanctuary
                  </span>
                  <p className="text-sm font-medium text-white/90">
                    A warm, calming, non-judgmental clinical space
                  </p>
                </div>
              </div>

              {/* Floating Badge Top Left */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-rose-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-zinc-900">
                    Senior Specialist
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    MBBS, MD (OBGYN), FMAS
                  </div>
                </div>
              </div>

              {/* Floating Badge Bottom Right */}
              <div className="absolute -bottom-5 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-rose-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-zinc-900">
                    50,000+ Happy Patients
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    Across Central India & Globally
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3 w-fit">
              <GraduationCap className="w-3.5 h-3.5 text-rose-600" />
              Meet Your Doctor
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-2">
              Dr. Abhilasha Khandelwal Billore
            </h2>
            <p className="text-sm sm:text-base font-semibold text-rose-700 mb-6">
              Senior Consultant Gynecologist, Obstetrician & Laparoscopic Surgeon
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-4">
              With more than two decades of dedicated medical experience,{" "}
              <strong>Dr. Abhilasha</strong> is renowned for her gentle clinical
              acumen, empathetic bedside manner, and dedication to normal
              physiological births and minimally invasive surgical solutions.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6">
              She believes that women’s healthcare is deeply personal. Whether
              guiding a frightened teenager through irregular periods, supporting
              an expectant mother through high-risk labor, or assisting a woman
              navigating the complexities of perimenopause, Dr. Abhilasha provides
              unhurried consultations rooted in evidence-based medicine and sincere
              compassion.
            </p>

            {/* Credential Checkmarks */}
            <div className="space-y-2.5 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {stats.map((st) => (
                <div
                  key={st.label}
                  className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100 text-center"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-rose-700">
                    {st.value}
                  </div>
                  <div className="text-[11px] font-medium text-zinc-500 mt-1">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/25 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation with Dr. Abhilasha
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
