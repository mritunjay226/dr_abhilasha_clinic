"use client";

import React from "react";
import { Heart, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1c1917] text-zinc-300 pt-14 sm:pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-zinc-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center shadow-md shadow-rose-600/30">
                <Heart className="w-5 h-5 fill-white/20" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Dr. Abhilasha
                </span>
                <span className="block text-[11px] text-rose-400 font-medium">
                  Women's Health & Fertility Clinic
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed mb-5">
              Compassionate, state-of-the-art gynecological care, high-risk
              obstetrics, laparoscopic surgery, and metabolic PCOS balancing led
              by Dr. Abhilasha (MBBS, MD, FMAS) with over 20 years of clinical
              devotion.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-rose-400" />
              <span>Certified Healthcare & Strict Patient Confidentiality</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#home" className="hover:text-rose-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose-400 transition-colors">
                  About Dr. Abhilasha
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-400 transition-colors">
                  Clinical Services
                </a>
              </li>
              <li>
                <a href="#consultations" className="hover:text-rose-400 transition-colors">
                  Consultation Options
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-rose-400 transition-colors">
                  Clinic Tour
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-rose-400 transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-400 transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>High-Risk Pregnancy & Antenatal Care</li>
              <li>PCOS & Hormonal Reversal Protocol</li>
              <li>Infertility Evaluation & Follicular Scans</li>
              <li>Minimally Invasive Laparoscopy Surgery</li>
              <li>Adolescent Health & Menstrual Pain</li>
              <li>Preventive Cervical Cancer & Pap Smear</li>
              <li>Menopause Transition & Bone Health</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Clinic Contact
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  Bhanwar Kuwa / Old Palasia, A.B. Road, Indore, M.P. 452001
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <a href="tel:+919826055432" className="hover:text-white transition-colors">
                  +91 98260 55432 / +91 731 249 1100
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <span>care@drabhilasha.clinic</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 10:00 AM - 1:30 PM & 5:00 PM - 8:30 PM
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Abhilasha's Clinic. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span>Medical Privacy</span>
            <span>Terms of Care</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-rose-600 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="mt-5 pt-4 border-t border-zinc-800/60 text-[10px] text-zinc-600 text-center leading-relaxed">
          Disclaimer: The medical information on this website is for educational
          and informational purposes only and does not substitute professional
          clinical diagnosis or emergency medical care. Please book an appointment
          or visit your nearest hospital emergency department for acute medical
          needs.
        </div>
      </div>
    </footer>
  );
}
