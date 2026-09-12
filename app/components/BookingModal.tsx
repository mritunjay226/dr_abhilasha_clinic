"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  Video,
  MapPin,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Printer,
  Download,
  Check,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "in-clinic" | "video";
  initialService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialMode = "in-clinic",
  initialService = "",
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [consultType, setConsultType] = useState<"in-clinic" | "video">(initialMode);
  const [selectedService, setSelectedService] = useState(
    initialService || "Routine Gynecological Checkup"
  );
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingRef, setBookingRef] = useState<string>("");

  // Patient Info State
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    notes: "",
  });

  // Sync props on open
  useEffect(() => {
    if (isOpen) {
      setConsultType(initialMode);
      if (initialService) {
        setSelectedService(initialService);
      }
      setStep(1);
      // default to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(
        tomorrow.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      );
      setSelectedTime("11:15 AM");
    }
  }, [isOpen, initialMode, initialService]);

  if (!isOpen) return null;

  const services = [
    { name: "Routine Gynecological Checkup", fee: "₹700", duration: "25 mins" },
    { name: "Pregnancy & Antenatal Care", fee: "₹800", duration: "30 mins" },
    { name: "PCOS & Hormonal Care", fee: "₹750", duration: "30 mins" },
    { name: "Infertility Assessment", fee: "₹850", duration: "40 mins" },
    { name: "Menstrual Health & Cycle Issues", fee: "₹700", duration: "25 mins" },
    { name: "Laparoscopic / Surgical Second Opinion", fee: "₹900", duration: "35 mins" },
  ];

  // Dates (Next 5 Days)
  const getDates = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      list.push({
        label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-US", { weekday: "short" }),
        full: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
        dayNum: d.getDate(),
      });
    }
    return list;
  };

  const morningSlots = ["10:00 AM", "10:45 AM", "11:30 AM", "12:15 PM", "01:00 PM"];
  const eveningSlots = ["05:00 PM", "05:45 PM", "06:30 PM", "07:15 PM", "08:00 PM"];

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!formData.name.trim() || !formData.phone.trim()) {
        alert("Please enter patient name and mobile number to confirm your booking.");
        return;
      }
      const ref = `DA-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
      setStep(4);
    }
  };

  const datesList = getDates();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-rose-100 overflow-hidden flex flex-col max-h-[94vh]">
        
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-linear-to-r from-rose-50/90 via-white to-pink-50/60 border-b border-rose-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
              {step < 4 ? `Step ${step}/3` : "✓"}
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-zinc-900 leading-tight">
                {step === 1 && "Select Consultation Mode & Service"}
                {step === 2 && "Choose Preferred Date & Time Slot"}
                {step === 3 && "Patient Information"}
                {step === 4 && "Appointment Confirmed!"}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-zinc-500 flex items-center gap-1 mt-0.5">
                <span>Dr. Abhilasha's Clinic</span>
                <span>•</span>
                <span className="text-rose-600 font-medium">Bhanwar Kuwa / Palasia</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-rose-100 text-zinc-400 hover:text-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 flex-1">
          
          {/* STEP 1: Consultation Type & Service */}
          {step === 1 && (
            <div className="space-y-5">
              {/* Type Switcher */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  Consultation Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultType("in-clinic")}
                    className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                      consultType === "in-clinic"
                        ? "border-rose-600 bg-rose-50/70 shadow-xs"
                        : "border-zinc-200 hover:border-rose-200 bg-white"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        consultType === "in-clinic"
                          ? "bg-rose-600 text-white"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-zinc-900">
                        In-Clinic Visit
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-zinc-500">
                        Bhanwar Kuwa / Palasia, Indore
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultType("video")}
                    className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                      consultType === "video"
                        ? "border-rose-600 bg-rose-50/70 shadow-xs"
                        : "border-zinc-200 hover:border-rose-200 bg-white"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        consultType === "video"
                          ? "bg-rose-600 text-white"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-zinc-900">
                        Online Video Consult
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-zinc-500">
                        Secure 1-on-1 Video Call with Doctor
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  Select Specialty / Reason for Visit
                </label>
                <div className="space-y-2">
                  {services.map((srv) => (
                    <div
                      key={srv.name}
                      onClick={() => setSelectedService(srv.name)}
                      className={`flex items-center justify-between p-3 sm:p-3.5 rounded-xl border transition-all cursor-pointer ${
                        selectedService === srv.name
                          ? "border-rose-600 bg-rose-50/80 shadow-xs ring-1 ring-rose-500"
                          : "border-zinc-200 hover:border-rose-200 hover:bg-zinc-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            selectedService === srv.name
                              ? "border-rose-600"
                              : "border-zinc-300"
                          }`}
                        >
                          {selectedService === srv.name && (
                            <div className="w-2 h-2 rounded-full bg-rose-600" />
                          )}
                        </div>
                        <span className="font-semibold text-xs sm:text-sm text-zinc-800">
                          {srv.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-right shrink-0">
                        <span className="text-[10px] sm:text-xs text-zinc-400">
                          {srv.duration}
                        </span>
                        <span className="text-xs font-bold text-rose-700 bg-rose-100/70 px-2 py-0.5 rounded-md">
                          {srv.fee}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Date & Slot Selection */}
          {step === 2 && (
            <div className="space-y-5">
              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                  Select Consultation Date
                </label>
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {datesList.map((d) => (
                    <button
                      key={d.full}
                      type="button"
                      onClick={() => setSelectedDate(d.full)}
                      className={`p-2 sm:p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        selectedDate === d.full
                          ? "border-rose-600 bg-rose-600 text-white shadow-md shadow-rose-600/20"
                          : "border-zinc-200 bg-white hover:border-rose-200 text-zinc-700"
                      }`}
                    >
                      <div className="text-[10px] sm:text-[11px] font-medium opacity-85">
                        {d.label}
                      </div>
                      <div className="text-base sm:text-lg font-extrabold my-0.5">
                        {d.dayNum}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <div className="text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-rose-600" />
                  Morning Slots (10:00 AM – 01:30 PM)
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2 mb-3.5">
                  {morningSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                        selectedTime === slot
                          ? "border-rose-600 bg-rose-50 text-rose-800 ring-2 ring-rose-500 font-bold"
                          : "border-zinc-200 bg-white hover:border-rose-200 text-zinc-700"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                <div className="text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-rose-600" />
                  Evening Slots (05:00 PM – 08:30 PM)
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2">
                  {eveningSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                        selectedTime === slot
                          ? "border-rose-600 bg-rose-50 text-rose-800 ring-2 ring-rose-500 font-bold"
                          : "border-zinc-200 bg-white hover:border-rose-200 text-zinc-700"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Booking Summary Box */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-rose-50/80 border border-rose-100 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1.5 text-xs">
                <div>
                  <span className="text-zinc-500">Selected Appointment:</span>{" "}
                  <strong className="text-rose-900">
                    {selectedDate} at {selectedTime}
                  </strong>
                </div>
                <div className="font-bold text-rose-700">
                  {consultType === "in-clinic" ? "In-Clinic Visit" : "Video Telehealth"}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Form */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-xs sm:text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 29"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-xs sm:text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Mobile Phone Number (WhatsApp updates) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98260 12345"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-xs sm:text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="e.g. ananya@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-xs sm:text-sm outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Primary Medical Concern / Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Routine trimester checkup, irregular cycle for 3 months, ultrasound review..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-zinc-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-xs sm:text-sm outline-none"
                />
              </div>

              <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-[11px] text-amber-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  100% Medical Confidentiality Guaranteed. Your details are
                  shared strictly with Dr. Abhilasha and her clinic team.
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: Success Digital Pass */}
          {step === 4 && (
            <div className="space-y-4 sm:space-y-5 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/15">
                <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-extrabold text-zinc-900">
                  Appointment Confirmed!
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  A confirmation SMS & WhatsApp reminder have been triggered.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="bg-linear-to-b from-rose-50/90 to-pink-50/40 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-rose-200 text-left space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-rose-600 text-white text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider">
                  CONFIRMED PASS
                </div>

                <div className="flex justify-between items-center border-b border-rose-200/60 pb-2.5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-rose-700 tracking-wider">
                      Reference ID
                    </span>
                    <div className="text-base sm:text-lg font-mono font-extrabold text-zinc-900">
                      {bookingRef}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-zinc-400">
                      Consultation Mode
                    </span>
                    <div className="text-xs font-bold text-rose-800">
                      {consultType === "in-clinic"
                        ? "🏥 In-Clinic Visit"
                        : "📱 Online Video Consult"}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs">
                  <div>
                    <span className="text-zinc-500">Patient:</span>
                    <div className="font-bold text-zinc-900 truncate">
                      {formData.name}
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500">Doctor:</span>
                    <div className="font-bold text-zinc-900 truncate">
                      Dr. Abhilasha (MD)
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500">Date & Slot:</span>
                    <div className="font-bold text-rose-800 truncate">
                      {selectedDate}, {selectedTime}
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500">Specialty:</span>
                    <div className="font-bold text-zinc-900 truncate">
                      {selectedService}
                    </div>
                  </div>
                </div>

                {consultType === "in-clinic" ? (
                  <div className="pt-2 border-t border-rose-200/60 text-[11px] text-zinc-600 flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>
                      Clinic: Near Bhanwar Kuwa Square / Palasia, Indore. Please
                      arrive 10 minutes prior with previous reports.
                    </span>
                  </div>
                ) : (
                  <div className="pt-2 border-t border-rose-200/60 text-[11px] text-zinc-600 flex items-start gap-1.5">
                    <Video className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>
                      Video link will be sent to <strong>{formData.phone}</strong> via WhatsApp 15 minutes before your consultation.
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
                <button
                  onClick={() => alert("Booking pass saved to device!")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 shadow-2xs cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Save Pass
                </button>
                <button
                  onClick={() => alert("Added to Google Calendar!")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4" />
                  Add to Calendar
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/20 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {step < 4 && (
          <div className="px-5 sm:px-6 py-3 sm:py-3.5 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s - 1) as any)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-600 hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-sm shadow-rose-600/25 transition-all cursor-pointer active:scale-95"
            >
              {step === 3 ? "Confirm Appointment" : "Continue"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
