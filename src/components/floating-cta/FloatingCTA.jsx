"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";

export default function FloatingCTA() {
  const phoneNumber = "+917977757864";
  const whatsappNumber = "917977757864";
  const email = "info@hometuitionacademy.com";

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Home Tuition Academy"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700"
      >
        <Phone size={22} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hello%20Home%20Tuition%20Academy,%20I%20want%20to%20know%20about%20home%20tuition%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
      >
        <MessageCircle size={24} />
      </a>

      {/* Email Button */}
      <a
        href={`mailto:${email}?subject=Home Tuition Inquiry`}
        aria-label="Send Email"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-orange-600"
      >
        <Mail size={22} />
      </a>

    </div>
  );
}
