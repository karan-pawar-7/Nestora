import React from "react";
import {
  FaCalendarCheck,
  FaHeart,
  FaComments,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const savedRooms = [
    {
      id: 1,
      title: "Luxury 1 BHK Apartment",
      image: "r4.png",
      location: "Baner, Pune",
      price: "₹18,000",
      rating: "4.9",
    },
    {
      id: 2,
      title: "Single Room For Boys",
      image: "r2.png",
      location: "Viman Nagar",
      price: "₹4,000",
      rating: "4.8",
    },
    {
      id: 3,
      title: "Premium Studio Flat",
      image: "r8.png",
      location: "Koregaon Park",
      price: "₹9,500",
      rating: "4.7",
    },
  ];

  return (
    <div className="space-y-8">

      {/* ================= HERO ================= */}

      <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 text-white p-10 shadow-2xl">

        <div className="flex justify-between items-center">

          <div>

            <p className="uppercase tracking-widest text-blue-100">
              Welcome Back 👋
            </p>

            <h1 className="text-5xl font-bold mt-2">
              Rahul Sharma
            </h1>

            <p className="mt-5 text-blue-100 max-w-xl leading-8">
              Manage your bookings, save your favourite rooms,
              chat with owners and discover premium rentals
              across India.
            </p>

            <div className="flex gap-5 mt-8">

              <button
                onClick={() => navigate("/browseRooms")}
                className="bg-white text-blue-700 px-7 py-3 rounded-xl font-bold hover:scale-105 duration-300"
              >
                Browse Rooms
              </button>

              <button
                onClick={() => navigate("/user/bookings")}
                className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-blue-700 duration-300"
              >
                My Bookings
              </button>

            </div>

          </div>

          <img
            src={`${import.meta.env.BASE_URL}user1.png`}
            className="hidden lg:block w-44 h-44 rounded-full border-8 border-white shadow-2xl object-cover"
            alt=""
          />

        </div>

      </div>

      {/* ================= STATS ================= */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

          <FaCalendarCheck className="text-5xl text-blue-600" />

          <h1 className="text-5xl font-bold mt-5">
            08
          </h1>

          <p className="text-gray-500 mt-2">
            Total Bookings
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

          <FaHeart className="text-5xl text-pink-500" />

          <h1 className="text-5xl font-bold mt-5">
            14
          </h1>

          <p className="text-gray-500 mt-2">
            Saved Rooms
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

          <FaComments className="text-5xl text-green-500" />

          <h1 className="text-5xl font-bold mt-5">
            05
          </h1>

          <p className="text-gray-500 mt-2">
            Messages
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

          <FaStar className="text-5xl text-yellow-500" />

          <h1 className="text-5xl font-bold mt-5">
            4.9
          </h1>

          <p className="text-gray-500 mt-2">
            Average Rating
          </p>

        </div>

      </div>

      {/* ================= SAVED ROOMS ================= */}

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            ❤️ Recently Saved Rooms
          </h1>

          <button
            onClick={() => navigate("/user/saved")}
            className="text-blue-600 font-semibold flex items-center gap-2"
          >
            View All
            <FaArrowRight />
          </button>

        </div>

        <div className="space-y-6">

          {savedRooms.map((room) => (

            <div
              key={room.id}
              className="flex items-center justify-between border rounded-2xl p-5 hover:shadow-xl hover:border-blue-500 duration-300"
            >

              <div className="flex items-center gap-6">

                <img
                  src={`${import.meta.env.BASE_URL}${room.image}`}
                  className="w-40 h-28 rounded-xl object-cover"
                  alt=""
                />

                <div>

                  <h2 className="text-2xl font-bold">
                    {room.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    📍 {room.location}
                  </p>

                  <div className="flex gap-6 mt-4">

                    <span className="font-bold text-blue-600">
                      {room.price}/month
                    </span>

                    <span className="text-yellow-500">
                      ⭐ {room.rating}
                    </span>

                  </div>

                </div>

              </div>

              <button
                onClick={() => navigate(`/room/${room.id}`)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
              >
                View Details
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}