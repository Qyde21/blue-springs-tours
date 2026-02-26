"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254114525941?text=Hello%20Blue%20Springs%20Tours!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg
                 animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300"
    >
      WhatsApp
    </a>
  );
}