import React from "react";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello! I found your portfolio and would like to connect.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-colors duration-200"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.67 20.13a10 10 0 1 0-3.54 3.54l2.2-.63a1 1 0 0 0 .7-.7l.63-2.2z" />
        <path d="M16.71 13.37a4 4 0 0 1-5.08-5.08" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
