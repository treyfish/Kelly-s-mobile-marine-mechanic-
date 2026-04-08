"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BOAT_TYPES, ENGINE_BRANDS, PHONE, PHONE_HREF } from "@/lib/constants";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  boatType: string;
  engineBrand: string;
  problem: string;
  preferredDate: string;
  location: string;
}

const initialFormData: FormData = {
  fullName: "",
  phone: "",
  email: "",
  boatType: "",
  engineBrand: "",
  problem: "",
  preferredDate: "",
  location: "",
};

export default function BookingForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep1 = () => {
    if (!formData.fullName.trim()) return "Full name is required.";
    if (!formData.phone.trim()) return "Phone number is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email.";
    if (!formData.problem.trim()) return "Please describe your problem.";
    if (!formData.location.trim()) return "Please enter your location.";
    return null;
  };

  const handleNext = () => {
    const err = validateStep1();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setStep(2);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      router.push("/book/success");
    } catch {
      setError(`Something went wrong. Please call ${PHONE} directly.`);
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-navy/20 rounded px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent min-h-[48px] text-base";
  const labelClass = "block font-oswald text-navy text-sm font-bold uppercase tracking-wider mb-1";

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-center mb-8 gap-3">
        <div className={`flex items-center gap-2 ${step >= 1 ? "text-teal" : "text-navy/30"}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-oswald font-bold text-sm ${step >= 1 ? "bg-teal text-white" : "bg-navy/10 text-navy/30"}`}>
            {step > 1 ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            ) : (
              "1"
            )}
          </div>
          <span className="font-oswald text-sm font-bold uppercase hidden sm:inline">Your Info</span>
        </div>
        <div className={`w-12 h-0.5 ${step >= 2 ? "bg-teal" : "bg-navy/10"}`} />
        <div className={`flex items-center gap-2 ${step >= 2 ? "text-teal" : "text-navy/30"}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-oswald font-bold text-sm ${step >= 2 ? "bg-teal text-white" : "bg-navy/10 text-navy/30"}`}>
            2
          </div>
          <span className="font-oswald text-sm font-bold uppercase hidden sm:inline">Review</span>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 text-sm">
          {error}
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label className={labelClass}>Full Name *</label>
            <input
              type="text"
              className={inputClass}
              value={formData.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              placeholder="John Smith"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Phone *</label>
              <input
                type="tel"
                className={inputClass}
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="352-555-0123"
              />
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input
                type="email"
                className={inputClass}
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Boat Type</label>
              <select
                className={inputClass}
                value={formData.boatType}
                onChange={(e) => updateField("boatType", e.target.value)}
              >
                <option value="">Select...</option>
                {BOAT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Engine Brand</label>
              <select
                className={inputClass}
                value={formData.engineBrand}
                onChange={(e) => updateField("engineBrand", e.target.value)}
              >
                <option value="">Select...</option>
                {ENGINE_BRANDS.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className={labelClass}>Describe Your Problem *</label>
            <textarea
              className={`${inputClass} min-h-[120px] resize-y`}
              value={formData.problem}
              onChange={(e) => updateField("problem", e.target.value)}
              placeholder="Tell us what's going on with your boat..."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Preferred Date</label>
              <input
                type="date"
                className={inputClass}
                value={formData.preferredDate}
                onChange={(e) => updateField("preferredDate", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Location (Where Should Kelly Come?) *</label>
              <input
                type="text"
                className={inputClass}
                value={formData.location}
                onChange={(e) => updateField("location", e.target.value)}
                placeholder="123 Marina Dr, Cedar Key, FL"
              />
            </div>
          </div>
          <button
            onClick={handleNext}
            className="w-full bg-teal hover:bg-teal/90 text-white font-oswald font-bold py-4 rounded text-lg uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] min-h-[48px]"
          >
            Review Your Booking
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="bg-navy/5 rounded-lg p-6 sm:p-8 mb-6">
            <h3 className="font-oswald text-navy text-xl font-bold uppercase mb-4">
              Booking Summary
            </h3>
            <div className="space-y-3 text-sm">
              <SummaryRow label="Name" value={formData.fullName} />
              <SummaryRow label="Phone" value={formData.phone} />
              <SummaryRow label="Email" value={formData.email} />
              {formData.boatType && <SummaryRow label="Boat Type" value={formData.boatType} />}
              {formData.engineBrand && <SummaryRow label="Engine Brand" value={formData.engineBrand} />}
              <SummaryRow label="Problem" value={formData.problem} />
              {formData.preferredDate && <SummaryRow label="Preferred Date" value={formData.preferredDate} />}
              <SummaryRow label="Location" value={formData.location} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setStep(1)}
              className="flex-1 border-2 border-navy/20 text-navy font-oswald font-bold py-4 rounded text-lg uppercase tracking-wider transition-all hover:bg-navy/5 min-h-[48px]"
            >
              Edit
            </button>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="flex-1 bg-gold hover:bg-gold/90 text-navy font-oswald font-bold py-4 rounded text-lg uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Booking"}
            </button>
          </div>

          <p className="text-navy/50 text-center text-xs mt-4">
            Need immediate help? Call{" "}
            <a href={PHONE_HREF} className="text-teal underline">{PHONE}</a>
          </p>
        </div>
      )}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <span className="font-oswald text-navy/50 uppercase tracking-wider text-xs sm:w-32 sm:text-right shrink-0">
        {label}
      </span>
      <span className="text-navy font-medium">{value}</span>
    </div>
  );
}
