"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  Calendar,
  AlertCircle,
} from "lucide-react";

interface ClinicInfoSectionProps {
  onOpenBooking: () => void;
}

export default function ClinicInfoSection({ onOpenBooking }: ClinicInfoSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How should I prepare for my first gynecological visit?",
      a: "Please carry any previous ultrasound scans, blood test reports, and a note of your last menstrual period (LMP) date. If you take regular medications or supplements, having their names helps Dr. Abhilasha tailor the most precise prescription.",
    },
    {
      q: "How does the online video consultation work?",
      a: "After you choose a time slot and complete the booking, our clinic team sends you a private, encrypted video consultation link via WhatsApp and email. During your 20-25 minute video call, Dr. Abhilasha reviews your concerns and reports, and generates a digitally signed legal prescription immediately.",
    },
    {
      q: "Does Dr. Abhilasha advocate for normal vaginal delivery?",
      a: "Yes, passionately. Dr. Abhilasha strongly champions physiological normal deliveries whenever clinically safe. We provide antenatal pelvic floor exercises, natural labor support, and painless epidural analgesia options, reserving C-sections strictly for necessary obstetric indications.",
    },
    {
      q: "What is your approach to managing PCOS & PCOD?",
      a: "Rather than simply putting patients on synthetic oral contraceptives, we address the metabolic root cause: insulin sensitivity, inflammation, circadian rhythm, and customized nutrition. We conduct regular follicular and hormonal reviews to restore natural ovulatory cycles.",
    },
    {
      q: "Are emergency appointments available on Sundays?",
      a: "While regular OPD is Monday to Saturday, Dr. Abhilasha is on-call for acute obstetric emergencies, severe pelvic pain, and active labor 24/7. You can contact our emergency helpline number directly.",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Clinic Info & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Clinic Address, Timings & Helpline */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5 text-rose-600" />
                Clinic Location & Timings
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
                Visit Dr. Abhilasha’s Clinic
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mb-8 leading-relaxed">
                Conveniently located with dedicated patient parking, peaceful
                waiting areas, and immediate on-site diagnostic support.
              </p>

              {/* Info Cards */}
              <div className="space-y-4 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <div className="w-10 h-10 rounded-xl bg-white text-rose-600 flex items-center justify-center shadow-xs shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">
                      HerCare Clinic / Dr. Abhilasha's Clinic
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                      102, Ground & 1st Floor, Near Bhanwar Kuwa Square / Old
                      Palasia, A.B. Road, Indore, Madhya Pradesh 452001
                    </p>
                    <a
                      href="https://maps.google.com/?q=Dr.+Abhilasha's+clinic+Indore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:underline mt-2"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <div className="w-10 h-10 rounded-xl bg-white text-rose-600 flex items-center justify-center shadow-xs shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">
                      Visiting & Consultation Hours
                    </h4>
                    <div className="text-xs text-zinc-600 mt-1 space-y-1">
                      <div>
                        <strong>Morning OPD:</strong> Monday – Saturday: 10:00 AM – 01:30 PM
                      </div>
                      <div>
                        <strong>Evening OPD:</strong> Monday – Saturday: 05:00 PM – 08:30 PM
                      </div>
                      <div className="text-rose-700 font-medium">
                        <strong>Sunday:</strong> Urgent Cases & Prior Bookings Only
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Helpline */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <div className="w-10 h-10 rounded-xl bg-white text-rose-600 flex items-center justify-center shadow-xs shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">
                      Appointments & Helpline Desk
                    </h4>
                    <div className="text-xs text-zinc-600 mt-1 space-y-1">
                      <div>
                        <strong>Reception:</strong> +91 98260 55432 / +91 731 249 1100
                      </div>
                      <div>
                        <strong>WhatsApp Assistance:</strong> +91 98260 55432
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-rose-100">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Your Visit Now
              </button>

              <a
                href="https://wa.me/919826055432?text=Hello%20Dr.%20Abhilasha%20Clinic,%20I%20would%20like%20to%20inquire%20about%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp Quick Chat
              </a>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3 w-fit">
              <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mb-6">
              Answers to Common Inquiries
            </h2>

            <div className="space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-rose-300 bg-rose-50/40 shadow-xs"
                        : "border-zinc-200 hover:border-rose-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-zinc-800">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-rose-600 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-zinc-600 leading-relaxed border-t border-rose-100/60">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Safety & Emergency Callout */}
            <div className="mt-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed">
                <strong>Emergency Notice:</strong> If you are experiencing sudden
                severe abdominal bleeding, fluid leakage in pregnancy, or acute
                pelvic pain, please head directly to the nearest hospital emergency
                room or call 112 immediately.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
