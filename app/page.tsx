"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutDoctor from "./components/AboutDoctor";
import ServicesGrid from "./components/ServicesGrid";
import ConsultationSection from "./components/ConsultationSection";
import ClinicGallery from "./components/ClinicGallery";
import TestimonialsSection from "./components/TestimonialsSection";
import ClinicInfoSection from "./components/ClinicInfoSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import { Calendar, Video, PhoneCall } from "lucide-react";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingMode, setBookingMode] = useState<"in-clinic" | "video">("in-clinic");
  const [bookingService, setBookingService] = useState<string>("");

  const handleOpenBooking = (mode?: "in-clinic" | "video", service?: string) => {
    if (mode) setBookingMode(mode);
    if (service) setBookingService(service);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbfb] text-[#18181b] relative">
      {/* Navigation Header */}
      <Navbar onOpenBooking={(mode) => handleOpenBooking(mode || "in-clinic")} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section matching user reference mockup */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Doctor Spotlight: Dr. Abhilasha Bio, Stats & Philosophy */}
        <AboutDoctor onOpenBooking={() => handleOpenBooking("in-clinic")} />

        {/* Clinical Services with Categories */}
        <ServicesGrid onOpenBooking={handleOpenBooking} />

        {/* Consultation Options & Packages (In-Clinic vs Video) */}
        <ConsultationSection onOpenBooking={handleOpenBooking} />

        {/* Clinic Spaces & Gallery */}
        <ClinicGallery />

        {/* Patient Reviews & Verified Ratings */}
        <TestimonialsSection />

        {/* Clinic Info, Hours, Location & FAQ */}
        <ClinicInfoSection onOpenBooking={() => handleOpenBooking("in-clinic")} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Appointment & Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialMode={bookingMode}
        initialService={bookingService}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-rose-100 flex items-center gap-2 shadow-lg">
        <button
          onClick={() => handleOpenBooking("video")}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200"
        >
          <Video className="w-3.5 h-3.5 text-rose-600" />
          Video Consult
        </button>
        <button
          onClick={() => handleOpenBooking("in-clinic")}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-white bg-rose-600 shadow-md shadow-rose-600/25"
        >
          <Calendar className="w-3.5 h-3.5" />
          Book Visit
        </button>
      </div>
    </div>
  );
}
