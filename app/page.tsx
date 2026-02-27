"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Floating WhatsApp Button with slide-in animation
function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/254114525941?text=Hello%20Blue%20Springs%20Tours!"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition transform ${
        visible ? "translate-x-0" : "translate-x-32 opacity-0"
      } hover:scale-110 z-50`}
      style={{ transition: "all 0.7s ease-in-out" }}
    >
      WhatsApp
    </a>
  );
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Blue Springs Tours | Luxury & Mid-Market Safaris in Kenya</title>
        <meta
          name="description"
          content="Explore Kenya's wildlife with Blue Springs Tours. Luxury & mid-market safari packages, booking forms, client testimonials, and more."
        />
        <meta property="og:title" content="Blue Springs Tours" />
        <meta
          property="og:description"
          content="Luxury & mid-market safari experiences in Kenya."
        />
        <meta property="og:image" content="/hero.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Blue Springs Tours",
              "image": "https://yourdomain.com/hero.jpg",
              "telephone": "+254114525941",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street",
                "addressLocality": "Nairobi",
                "addressRegion": "Kenya",
                "postalCode": "00100",
                "addressCountry": "KE",
              },
              "url": "https://yourdomain.com",
            }),
          }}
        />
      </Head>

      {/* HERO SECTION */}
      <section
        className="relative h-[80vh] w-full flex items-center justify-center bg-gray-800"
        data-aos="fade-up"
      >
        <img
          src="/hero.jpg"
          alt="Blue Springs Safari"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-gray-100">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore the Wild</h1>
          <p className="text-lg md:text-2xl">
            Luxury & Mid-Market Safari Experiences
          </p>
        </div>
      </section>

      {/* SAFARI PACKAGES SECTION */}
      <section className="py-16 px-6 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Safari Packages
        </h2>

        <Slider {...sliderSettings}>
          {[1, 2, 3].map((pkg) => (
            <div key={pkg} className="p-4" data-aos="zoom-in">
              <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300 relative">
                <img src={`/safari${pkg}.jpg`} alt={`Safari ${pkg}`} className="rounded mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {pkg === 1
                    ? "Maasai Mara Classic"
                    : pkg === 2
                    ? "Amboseli Adventure"
                    : "Lake Naivasha Escape"}
                </h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 mr-2">
                    {pkg === 3 ? "★ ★ ★ ☆ ☆" : "★ ★ ★ ★ ☆"}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {pkg === 1
                      ? "(120 reviews)"
                      : pkg === 2
                      ? "(85 reviews)"
                      : "(60 reviews)"}
                  </span>
                </div>
                <p className="text-gray-800 mb-2">
                  {pkg === 1 ? "3 Days / 2 Nights" : "2 Days / 1 Night"}
                </p>
                <p className="text-gray-800 font-bold mb-4">
                  {pkg === 1 ? "$600" : pkg === 2 ? "$450" : "$500"} per person
                </p>
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose Us
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Guides",
              iconPath: "M12 2L15 8H9L12 2zM2 22h20v-2H2v2zm4-8h12v-2H6v2z",
              desc: "Knowledgeable, friendly, and local experts lead your safari.",
            },
            {
              title: "Customized Tours",
              iconPath:
                "M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM2 20v-2c0-2.21 4-4 10-4s10 1.79 10 4v2H2z",
              desc: "Flexible itineraries tailored to your preferences and schedule.",
            },
            {
              title: "Best Value",
              iconPath:
                "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
              desc: "Affordable packages without compromising on quality or experience.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 text-center"
              data-aos="fade-up"
            >
              <svg
                className="w-12 h-12 mx-auto mb-4 text-blue-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={card.iconPath} />
              </svg>
              <h3 className="font-bold mb-2 text-gray-900">{card.title}</h3>
              <p className="text-gray-700">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-16 px-6 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded shadow-md">
            <p className="text-gray-800 mb-4">
              "Our safari experience was absolutely amazing! The guides were professional and the scenery breathtaking."
            </p>
            <p className="font-bold text-gray-900">— John Doe</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow-md">
            <p className="text-gray-800 mb-4">
              "Blue Springs Tours made our trip unforgettable. Highly recommend for anyone visiting Kenya!"
            </p>
            <p className="font-bold text-gray-900">— Jane Smith</p>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Book Your Safari Today
        </h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
          <label className="block mb-4 text-gray-900">
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2 border rounded text-gray-900"
            />
          </label>
          <label className="block mb-4 text-gray-900">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded text-gray-900"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </section>

      <WhatsAppButton />
    </>
  );
}