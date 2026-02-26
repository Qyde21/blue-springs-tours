"use client";

import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <Image
          src="/hero.jpg"
          alt="Safari Hero"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay Text */}
        <div className="absolute z-10 bg-black bg-opacity-60 text-white p-6 sm:p-8 md:p-12 rounded-xl max-w-4xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Blue Springs Tours
          </h1>
          <p className="mb-6 text-sm sm:text-base md:text-lg">
            Discover breathtaking safari adventures across Kenya and East Africa.
          </p>
          <a href="#booking">
            <button className="bg-yellow-500 text-black px-5 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-yellow-600 transition-colors duration-300">
              Book Your Safari
            </button>
          </a>
        </div>
      </section>

      {/* Safari Packages */}
      <section id="packages" className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Safari Packages</h2>

        <div className="grid gap-6 max-w-6xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <Image
              src="/safari1.jpg"
              alt="3 Day Safari"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">3-Day Safari</h3>
              <p className="mb-4 text-gray-600">
                Experience the best wildlife in Nairobi National Park.
              </p>
              <p className="font-bold mb-4">KES 15,000</p>
              <a href="#booking">
                <button className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
                  Book Now
                </button>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <Image
              src="/safari2.jpg"
              alt="5 Day Safari"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">5-Day Safari</h3>
              <p className="mb-4 text-gray-600">
                Explore Maasai Mara and witness the Big Five.
              </p>
              <p className="font-bold mb-4">KES 35,000</p>
              <a href="#booking">
                <button className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
                  Book Now
                </button>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <Image
              src="/safari3.jpg"
              alt="7 Day Safari"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">7-Day Adventure</h3>
              <p className="mb-4 text-gray-600">
                Full Kenya safari tour including Amboseli and Tsavo.
              </p>
              <p className="font-bold mb-4">KES 60,000</p>
              <a href="#booking">
                <button className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
                  Book Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-8">Book Your Safari</h2>
        <BookingForm />
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Blue Springs Tours</p>
      </footer>
    </>
  );
}