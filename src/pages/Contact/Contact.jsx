import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaHome,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50">

      {/* ================= HERO ================= */}

      <section
        className="relative h-[520px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}contact-bg.png)`,
        }}
      >
        <div className="absolute inset-0 bg-blue-950/1"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">

          <div className="text-white">

            <h1 className="text-6xl font-bold">
              Contact Nestora
            </h1>

            <p className="mt-5 text-xl text-gray-200 max-w-xl">
              We're here to help you find your perfect room.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 duration-300 flex items-center gap-3 font-semibold">

                <FaHeadset />

                Contact Support

              </button>

              <button className="px-8 py-4 rounded-xl bg-white text-blue-700 hover:bg-gray-100 duration-300 flex items-center gap-3 font-semibold">

                <FaHome />

                Browse Rooms

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT CARDS ================= */}

      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Address */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300">

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">

              <FaMapMarkerAlt className="text-blue-600 text-2xl" />

            </div>

            <h2 className="font-bold text-2xl mt-6">
              Address
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Nestora Office,
              <br />
              2nd Floor,
              <br />
              Tech Park,
              <br />
              Hinjewadi,
              <br />
              Pune,
              Maharashtra 411057
            </p>

            <div className="w-12 h-1 bg-blue-600 mt-6 rounded-full"></div>

          </div>

          {/* Phone */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300">

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">

              <FaPhoneAlt className="text-blue-600 text-2xl" />

            </div>

            <h2 className="font-bold text-2xl mt-6">
              Phone
            </h2>

            <p className="mt-5 text-gray-600 leading-8">

              +91 98765 43210

              <br />

              +91 87654 32109

            </p>

            <div className="w-12 h-1 bg-blue-600 mt-6 rounded-full"></div>

          </div>

          {/* Email */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300">

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">

              <FaEnvelope className="text-blue-600 text-2xl" />

            </div>

            <h2 className="font-bold text-2xl mt-6">
              Email
            </h2>

            <p className="mt-5 text-gray-600 leading-8">

              support@nestora.com

              <br />

              info@nestora.com

            </p>

            <div className="w-12 h-1 bg-blue-600 mt-6 rounded-full"></div>

          </div>

          {/* Hours */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300">

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">

              <FaClock className="text-blue-600 text-2xl" />

            </div>

            <h2 className="font-bold text-2xl mt-6">
              Working Hours
            </h2>

            <p className="mt-5 text-gray-600 leading-8">

              Mon - Sat

              <br />

              9:00 AM - 7:00 PM

              <br /><br />

              Sunday

              <br />

              10:00 AM - 4:00 PM

            </p>

            <div className="w-12 h-1 bg-blue-600 mt-6 rounded-full"></div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT FORM ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl p-8">

          {/* LEFT */}

          <div>

            <h2 className="text-5xl font-bold text-gray-800">
              Send Us A Message
            </h2>

            <div className="w-20 h-1 bg-blue-600 rounded-full mt-4"></div>

            <p className="text-gray-500 mt-6 leading-8">
              Have questions or need help? Fill out the form and our team
              will get back to you as soon as possible.
            </p>

            {/* Form */}

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              <div>
                <label className="font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="font-medium text-gray-700">
                  Subject
                </label>

                <select
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-blue-600"
                >
                  <option>Select Subject</option>
                  <option>Room Inquiry</option>
                  <option>Owner Support</option>
                  <option>Technical Issue</option>
                  <option>General Question</option>
                </select>
              </div>

            </div>

            <div className="mt-6">

              <label className="font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Type your message here..."
                className="w-full mt-2 border rounded-xl p-4 outline-none resize-none focus:border-blue-600"
              ></textarea>

            </div>

            <button
              className="
        mt-8
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-8
        py-4
        rounded-xl
        font-semibold
        duration-300
        shadow-lg
      "
            >
              Send Message
            </button>

          </div>

          {/* RIGHT */}

          <div className="flex items-center">

            <div className="overflow-hidden rounded-3xl shadow-lg flex items-center justify-center">

              <img
                className="w-full h-150 object-cover hover:scale-105 duration-500"
                src={`${import.meta.env.BASE_URL}office.png`}
                alt="Nestora Office"
              />


            </div>

          </div>

        </div>

      </section>
      {/* ================= WHY CONTACT NESTORA ================= */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center">
          Why Contact Nestora?
        </h2>

        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              ⚡
            </div>
            <h3 className="text-2xl font-bold mt-6">Quick Response</h3>
            <p className="text-gray-500 mt-4">
              We respond to all queries within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              🛡️
            </div>
            <h3 className="text-2xl font-bold mt-6">Verified Support</h3>
            <p className="text-gray-500 mt-4">
              Our support team is trained and verified.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              💬
            </div>
            <h3 className="text-2xl font-bold mt-6">Live Assistance</h3>
            <p className="text-gray-500 mt-4">
              Get real-time help from our support experts.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              😊
            </div>
            <h3 className="text-2xl font-bold mt-6">Customer Satisfaction</h3>
            <p className="text-gray-500 mt-4">
              We are committed to providing the best experience.
            </p>
          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

        <div className="mt-12 space-y-5">

          <details className="bg-white rounded-2xl shadow-md p-6 cursor-pointer">
            <summary className="font-semibold text-xl">
              How can I contact the property owner?
            </summary>

            <p className="mt-5 text-gray-600 leading-8">
              You can contact the owner directly using the contact button available
              on every room listing.
            </p>

          </details>

          <details className="bg-white rounded-2xl shadow-md p-6 cursor-pointer">
            <summary className="font-semibold text-xl">
              Is Nestora free to use?
            </summary>

            <p className="mt-5 text-gray-600">
              Yes, browsing rooms and contacting owners is free.
            </p>

          </details>

          <details className="bg-white rounded-2xl shadow-md p-6 cursor-pointer">
            <summary className="font-semibold text-xl">
              How do I list my room?
            </summary>

            <p className="mt-5 text-gray-600">
              Click on "Post Room", fill in the details, upload images and submit.
            </p>

          </details>

          <details className="bg-white rounded-2xl shadow-md p-6 cursor-pointer">
            <summary className="font-semibold text-xl">
              How long does room verification take?
            </summary>

            <p className="mt-5 text-gray-600">
              Verification is usually completed within 24–48 hours.
            </p>

          </details>

        </div>

      </section>

      {/* ================= GOOGLE MAP ================= */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl h-70 overflow-hidden">

          <iframe
            title="Nestora Office"
            src="https://www.google.com/maps?q=Yaval Pimpri,Jalna&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </div>
  );
};

export default Contact;