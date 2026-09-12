"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, MapPin, Eye, Camera, ShieldCheck, Heart } from "lucide-react";

export default function ClinicGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      title: "Doctor's Consultation Chamber",
      subtitle: "Dr. Abhilasha's Private Suite",
      description:
        "A peaceful, sunlit environment designed for candid, unhurried conversations with complete patient confidentiality.",
      image: "/clinic_chamber.jpg",
      badge: "Consultation",
    },
    {
      title: "Diagnostic Ultrasound & Fetal Suite",
      subtitle: "High-Resolution Sonography",
      description:
        "Equipped with advanced ultrasound technology for early trimester dating, anomaly screening, and pelvic diagnostics.",
      image: "/ultrasound_suite.jpg",
      badge: "Imaging & Diagnostics",
    },
    {
      title: "Serene Reception & Patient Lounge",
      subtitle: "HerCare Welcoming Foyer",
      description:
        "Soft curved seating, soothing neutral tones, and a calming aesthetic that eliminates traditional clinic anxiety.",
      image: "/clinic_lounge.jpg",
      badge: "Patient Lounge",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 text-rose-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-rose-600" />
            Clinic Environment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Designed for Your Comfort & Privacy
          </h2>
          <p className="text-base sm:text-lg text-zinc-600">
            Step inside HerCare Clinic. Every corner has been curated with warm
            tones, natural light, and modern medical infrastructure to offer an
            exceptional healing experience.
          </p>
        </div>

        {/* 3 Prominent Clinic Spaces */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item, idx) => (
            <div
              key={item.title}
              onClick={() => setSelectedImage(item.image)}
              className="group flex flex-col bg-[#fffafb] rounded-3xl overflow-hidden border border-rose-100 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-rose-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-zinc-900 shadow-sm">
                    <Eye className="w-3.5 h-3.5 text-rose-600" />
                    Click to Enlarge
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[11px] font-bold text-rose-700 px-3 py-1 rounded-full shadow-xs">
                  {item.badge}
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hygiene & Ambience Feature Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-rose-50/70 via-pink-50/40 to-rose-50/70 border border-rose-100 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs text-rose-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900">
                100% Sterile Instrumentation
              </h4>
              <p className="text-xs text-zinc-500">
                Hospital-grade autoclave sterilization & single-use disposables.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs text-rose-600 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900">
                Gentle, Female-Led Team
              </h4>
              <p className="text-xs text-zinc-500">
                Empathetic nurses ensuring total privacy and dignity during visits.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs text-rose-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900">
                Zero Stress Scheduling
              </h4>
              <p className="text-xs text-zinc-500">
                Smart slot intervals so you are seen on time without crowded waits.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Image Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={selectedImage}
              alt="Clinic Space"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
