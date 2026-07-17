import React from "react";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaWifi,
  FaCar,
  FaSnowflake,
  FaStar,
  FaHeart,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import { useParams } from "react-router-dom";
import rooms from "../../data/rooms";

export default function RoomDetails() {

  const { id } = useParams();

  const room = rooms.find((item) => item.id === Number(id));
  return (
    <div className="bg-slate-100 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Images */}

        <div className="grid lg:grid-cols-2 gap-8">

          <img
            src={`${import.meta.env.BASE_URL}${room.image}`}
            alt={room.title}
            className="w-full h-130 object-cover rounded-3xl shadow-xl"
          />

          <div className="grid grid-cols-2 gap-5">

            <img
              src={`${import.meta.env.BASE_URL}r1.png`}
              className="rounded-2xl h-60 object-cover w-full"
            />

            <img
              src={`${import.meta.env.BASE_URL}r2.png`}
              className="rounded-2xl h-60 object-cover w-full"
            />

            <img
              src={`${import.meta.env.BASE_URL}r5.png`}
              className="rounded-2xl h-60 object-cover w-full"
            />

            <img
              src={`${import.meta.env.BASE_URL}r6.png`}
              className="rounded-2xl h-60 object-cover w-full"
            />

          </div>

        </div>

        {/* Details */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Left */}

          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg">

            <div className="flex justify-between items-center">

              <div>

                <h1 className="text-4xl font-bold">
                  {room.title}
                </h1>

                <div className="flex items-center gap-2 text-gray-500 mt-3">

                  <FaMapMarkerAlt />

                  {room.location}

                </div>

              </div>

              <button className="bg-red-100 p-4 rounded-full text-red-500 hover:scale-110 duration-300">

                <FaHeart />

              </button>

            </div>

            {/* Rating */}

            <div className="flex gap-2 mt-6 text-yellow-500 text-xl">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <span className="text-gray-600 text-base ml-3">
                4.9 (128 Reviews)
              </span>

            </div>

            {/* Features */}

            <div className="grid md:grid-cols-4 gap-5 mt-10">

              <div className="bg-slate-100 rounded-2xl p-5 text-center">

                <FaBed className="mx-auto text-3xl text-blue-600" />

                <p className="mt-3">2 Bedrooms</p>

              </div>

              <div className="bg-slate-100 rounded-2xl p-5 text-center">

                <FaBath className="mx-auto text-3xl text-blue-600" />

                <p className="mt-3">2 Bathrooms</p>

              </div>

              <div className="bg-slate-100 rounded-2xl p-5 text-center">

                <FaWifi className="mx-auto text-3xl text-blue-600" />

                <p className="mt-3">Free WiFi</p>

              </div>

              <div className="bg-slate-100 rounded-2xl p-5 text-center">

                <FaCar className="mx-auto text-3xl text-blue-600" />

                <p className="mt-3">Parking</p>

              </div>

            </div>

            {/* Description */}

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4">
                Description
              </h2>

              <p className="text-gray-600 leading-8">
                {room.description}
              </p>

            </div>

            {/* Amenities */}

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-5">
                Amenities
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                {[
                  "Air Conditioner",
                  "Power Backup",
                  "Lift",
                  "Security",
                  "Water Supply",
                  "Gym",
                  "Swimming Pool",
                  "Garden",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 bg-slate-100 rounded-xl p-4"
                  >

                    <FaSnowflake className="text-blue-600" />

                    {item}

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-24">

              <h1 className="text-5xl font-bold text-blue-600">

                ₹{room.price}

              </h1>

              <p className="text-gray-500 mb-8">
                Per Month
              </p>

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700">

                Book Now

              </button>

              <button className="w-full border mt-4 py-4 rounded-xl font-semibold">

                Contact Owner

              </button>

              <hr className="my-8" />

              <div className="flex items-center gap-4">

                <img
                  src={`${import.meta.env.BASE_URL}user3.png`}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    {room.owner}
                  </h3>

                  <p className="text-gray-500">
                    Property Owner
                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                  <FaPhone className="text-blue-600" />

                  {room.phone}

                </div>

                <div className="flex items-center gap-3">

                  <FaEnvelope className="text-blue-600" />

                  {room.email}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}