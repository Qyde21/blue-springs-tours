"use client";
import React from "react";

export default function WhatsAppButton() {
  // WhatsApp link with your number and pre-filled message
  const whatsappLink = "https://wa.me/254114525941?text=Hello%20Blue%20Springs%20Tours!";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M20.52 3.48a11.92 11.92 0 00-16.92 0c-4.68 4.68-4.68 12.24 0 16.92l-1.8 5.28 5.28-1.8c4.68 4.68 12.24 4.68 16.92 0a11.92 11.92 0 000-16.92zm-8.52 18a9.92 9.92 0 01-5.12-1.44l-.36-.24-3.12 1.08 1.08-3.12-.24-.36A9.92 9.92 0 1112 21zm5.28-7.68c-.24-.12-1.44-.72-1.68-.8s-.36-.12-.48.12-.56.8-.68.96-.24.24-.48.12a5.46 5.46 0 01-1.6-.96 6.48 6.48 0 01-1.2-1.44c-.12-.24 0-.36.12-.48s.12-.24.18-.36a.36.36 0 00.06-.24c0-.12-.48-1.08-.66-1.44s-.36-.24-.48-.24-.24 0-.36 0-.36.12-.54.36a2.28 2.28 0 00-.72.84c-.24.36-.96 1.44-.96 3.36s.96 3.84 1.08 4.08c.12.24 1.92 3 4.68 4.2a16.32 16.32 0 002.28.84c.96.12 1.32.12 1.8-.12s1.44-.6 1.64-1.2.2-1.08.12-1.2c-.06-.12-.24-.2-.48-.36z"/>
      </svg>
    </a>
  );
}