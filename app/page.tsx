"use client";

import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";
import WhatsAppButton from "../components/WhatsAppButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="bg-white">

        {/* HERO SECTION */}
        <section
          className="h-[70vh] flex items-center justify-center bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/safari1.jpg')" }}
        >
          <div className="bg-black/50 p-8 rounded-xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Kenya with Blue Springs Tours
            </h1>
            <p className="text-lg md:text-xl">
              Luxury & Mid-Market Safari Experiences
            </p>
          </div>
        </section>

        {/* SAFARI PACKAGES SECTION */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Safari Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Package 1 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <Image
                src="/safari1.jpg"
                alt="Maasai Mara Safari"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Maasai Mara Safari</h3>
                <p className="text-gray-600">
                  3 Days adventure in Kenya’s most famous wildlife reserve.
                </p>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <Image
                src="/safari2.jpg"
                alt="Amboseli Safari"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Amboseli Safari</h3>
                <p className="text-gray-600">
                  Stunning elephant views with Mount Kilimanjaro backdrop.
                </p>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <Image
                src="/safari3.jpg"
                alt="Lake Nakuru Safari"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lake Nakuru Safari</h3>
                <p className="text-gray-600">
                  Experience flamingos and rhinos in this scenic park.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* BOOKING SECTION */}
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">
            Book Your Safari Today
          </h2>

          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
        </section>

      </main>

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />
    </>
  );
}