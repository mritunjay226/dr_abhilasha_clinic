"use client";

import React, { useState } from "react";
import { Star, Quote, CheckCircle2, Heart, MessageSquare } from "lucide-react";

export default function TestimonialsSection() {
  const [filter, setFilter] = useState<string>("all");

  const reviews = [
    {
      id: 1,
      category: "pregnancy",
      name: "Sneha & Rohit Verma",
      role: "New Parents • Normal Delivery",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "2 weeks ago",
      headline: "Dr. Abhilasha made my dream of a normal delivery come true!",
      text: "I was told by other clinics that due to slight gestational diabetes I might need an early C-section. Dr. Abhilasha gave us immense confidence, closely monitored my diet and baby's growth, and motivated me throughout labor. We delivered a healthy baby girl naturally!",
    },
    {
      id: 2,
      category: "pcos",
      name: "Ananya Mishra",
      role: "Software Professional • PCOS Care",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "1 month ago",
      headline: "First doctor who treated the root cause instead of just birth control pills.",
      text: "I struggled with irregular periods and cystic acne for over 4 years. Dr. Abhilasha took 30 minutes in our first session to explain insulin resistance and gave me a clear, sustainable dietary and medical roadmap. Within 4 months, my cycles are regular!",
    },
    {
      id: 3,
      category: "surgery",
      name: "Kavita Singhal",
      role: "Teacher • Laparoscopic Ovarian Cystectomy",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "3 weeks ago",
      headline: "Pain-free keyhole surgery and back home next morning!",
      text: "I was terrified of having surgery for a 6cm endometrioma. Dr. Abhilasha's surgical expertise and calming words comforted me completely. The laparoscopy incisions were tiny and virtually unnoticeable, and I had almost zero post-op pain.",
    },
    {
      id: 4,
      category: "telehealth",
      name: "Dr. Meera Nambiar",
      role: "Consultant • Online Video Consultation",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      date: "Last month",
      headline: "Invaluable second opinion for fibroid management via video call.",
      text: "Living in another city, I booked a video consultation with Dr. Abhilasha to review my MRI and pelvic ultrasound. Her breakdown was crystal clear, scientific, and helped me avoid an unnecessary hysterectomy. Highly recommended!",
    },
  ];

  const filtered =
    filter === "all" ? reviews : reviews.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="py-20 bg-linear-to-b from-white via-rose-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/70 text-rose-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            Patient Stories & Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Words From Women We Cherish
          </h2>
          <p className="text-base text-zinc-600">
            Real experiences from thousands of women who found answers, comfort,
            and renewed health under Dr. Abhilasha’s clinical care.
          </p>

          {/* Aggregate Rating Scoreboard */}
          <div className="inline-flex items-center gap-6 mt-6 px-6 py-3 rounded-2xl bg-white border border-rose-100 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-3xl font-extrabold text-zinc-900">4.9</span>
              <div className="flex flex-col text-left">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-zinc-400 font-medium">
                  Verified Google Rating
                </span>
              </div>
            </div>
            <div className="h-8 w-px bg-zinc-200" />
            <div className="text-left">
              <span className="text-sm font-bold text-zinc-800">500+</span>
              <div className="text-[10px] text-zinc-400">Patient Reviews</div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {[
            { id: "all", label: "All Stories" },
            { id: "pregnancy", label: "Pregnancy & Birth" },
            { id: "pcos", label: "PCOS Recovery" },
            { id: "surgery", label: "Laparoscopy Surgery" },
            { id: "telehealth", label: "Online Consult" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-rose-600 text-white shadow-xs"
                  : "bg-white text-zinc-600 hover:bg-rose-50 border border-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-rose-100/90 shadow-xs hover:shadow-lg transition-all duration-200 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400">{item.date}</span>
                </div>

                <h4 className="font-bold text-base text-zinc-900 mb-2 leading-snug">
                  "{item.headline}"
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  {item.text}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-rose-50">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-rose-100"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                    {item.name}
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-full font-medium">
                      ✓ Verified
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
