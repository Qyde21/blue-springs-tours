"use client";
import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO SECTION */}
        <section
          className="relative h-[80vh] flex items-center justify-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        >
          <div className="text-center px-6 max-w-4xl bg-black/40 p-6 rounded">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Welcome to Blue Springs Tours
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Luxury & Mid-Market Safari Experiences
            </p>
            <a
              href="#booking"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition duration-300"
            >
              Book Your Safari
            </a>
          </div>
        </section>

        {/* BOOKING FORM SECTION */}
        <section id="booking" className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Book Your Safari Today
          </h2>
          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
        </section>

        {/* SAFARI PACKAGES SECTION */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Safari Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <img src="/safari1.jpg" alt="Safari 1" className="rounded mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Maasai Mara Classic</h3>
              <p className="text-gray-800 mb-2">3 Days / 2 Nights</p>
              <p className="text-gray-800 font-bold mb-4">$600 per person</p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                View Details
              </button>
            </div>
            {/* Package 2 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <img src="/safari2.jpg" alt="Safari 2" className="rounded mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Amboseli Adventure</h3>
              <p className="text-gray-800 mb-2">2 Days / 1 Night</p>
              <p className="text-gray-800 font-bold mb-4">$450 per person</p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                View Details
              </button>
            </div>
            {/* Package 3 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <img src="/safari3.jpg" alt="Safari 3" className="rounded mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Lake Naivasha Escape</h3>
              <p className="text-gray-800 mb-2">2 Days / 1 Night</p>
              <p className="text-gray-800 font-bold mb-4">$500 per person</p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <p className="text-gray-800 mb-4">
                “Blue Springs Tours gave us the most unforgettable Maasai Mara experience. Everything was perfectly organized!”
              </p>
              <h4 className="font-bold text-gray-900">— Sarah M., UK</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <p className="text-gray-800 mb-4">
                “The Amboseli safari exceeded our expectations. The team was professional and very friendly.”
              </p>
              <h4 className="font-bold text-gray-900">— James K., USA</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <p className="text-gray-800 mb-4">
                “Highly recommend Blue Springs Tours! The booking process was smooth and the safari was breathtaking.”
              </p>
              <h4 className="font-bold text-gray-900">— Anita W., Germany</h4>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Blue Springs Tours?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Licensed & Trusted</h3>
              <p className="text-gray-800">
                Fully licensed tour company with years of trusted service across Kenya’s top safari destinations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Guides</h3>
              <p className="text-gray-800">
                Experienced safari guides ensure you enjoy safe, informative, and unforgettable wildlife adventures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Safari Packages</h3>
              <p className="text-gray-800">
                Tailor-made safari experiences to match your budget, style, and preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Customer Support</h3>
              <p className="text-gray-800">
                Our team is always available to assist you before, during, and after your safari.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />
    </>
  );
}