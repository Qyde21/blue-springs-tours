"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 max-w-6xl mx-auto flex justify-between items-center">
      <div className="font-bold text-2xl">Blue Springs Tours</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#packages" className="hover:underline">Packages</a>
        <a href="#booking" className="hover:underline">Book</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-900 flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#packages" className="hover:underline">Packages</a>
          <a href="#booking" className="hover:underline">Book</a>
        </div>
      )}
    </nav>
  );
}