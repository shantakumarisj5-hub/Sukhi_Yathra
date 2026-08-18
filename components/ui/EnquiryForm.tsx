"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

interface EnquiryFormProps {
  packageName?: string;
  title?: string;
}

export default function EnquiryForm({
  packageName = "",
  title = "Tell us about your travel plan",
}: EnquiryFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const enquiry = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      destination: String(formData.get("destination") || packageName),
      travellers: String(formData.get("travellers") || ""),
      message: String(formData.get("message") || ""),
      packageName,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        throw new Error("Unable to submit enquiry");
      }

      setIsSubmitted(true);
      event.currentTarget.reset();
    } catch {
      setError("Something went wrong. Please call or WhatsApp our travel team.");
    } finally {
      setIsLoading(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-7 text-center">
        <CheckCircle2 size={42} className="mx-auto text-emerald-600" />
        <h3 className="mt-4 text-2xl font-black text-[#071F5B]">
          Enquiry received!
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Thank you for contacting Sukhi Yatra Holidays. Our travel team will
          get in touch with you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] bg-white p-6 shadow-xl sm:p-8"
    >
      <h3 className="text-2xl font-black tracking-tight text-[#071F5B]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Share a few details and our team will help plan the right journey.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          required
          placeholder="Your name *"
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071F5B] focus:ring-2 focus:ring-[#071F5B]/15"
        />

        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone number *"
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071F5B] focus:ring-2 focus:ring-[#071F5B]/15"
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071F5B] focus:ring-2 focus:ring-[#071F5B]/15"
        />

        <input
          name="destination"
          type="text"
          defaultValue={packageName}
          placeholder="Preferred destination"
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071F5B] focus:ring-2 focus:ring-[#071F5B]/15"
        />
      </div>

      <input
        name="travellers"
        type="text"
        placeholder="Number of travellers"
        className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071F5B] focus:ring-2 focus:ring-[#071F5B]/15"
      />

      <textarea
        name="message"
        rows={4}
        placeholder="Travel dates, budget or any special requirements"
        className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#071F5B] focus:ring-2 focus:ring-[#071F5B]/15"
      />

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#071F5B] px-5 py-3.5 font-bold text-white transition hover:bg-[#123e91] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send size={18} />
        {isLoading ? "Sending enquiry..." : "Send Enquiry"}
      </button>

      <p className="mt-3 text-center text-xs leading-5 text-slate-500">
        By submitting, you agree to be contacted about your travel enquiry.
      </p>
    </form>
  );
}