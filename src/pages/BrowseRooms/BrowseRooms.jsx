import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import rooms from "../../data/rooms";
const BrowseRooms = () => {
  const navigate = useNavigate();


  return (
    <>
      <div>
        <header className="flex items-center justify-center gap-5 p-5 bg-white/50">
          <div>
            <h1 className="text-4xl font-bold leading-15">
              Browse Rooms
            </h1>

            <p>
              Find Verified rooms that match your lifestyle and budget.
            </p>

            <p className="leading-10">
              Home - Browse Rooms
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="grid md:grid-cols-4 gap-4 p-2">

              <div className="flex items-center border rounded-xl px-3">
                <FaMapMarkerAlt className="text-blue-600" />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 outline-none"
                />
              </div>

              <select className="border rounded-xl p-3">
                <option>₹ Budget</option>
                <option>₹3000 - ₹5000</option>
                <option>₹5000 - ₹8000</option>
                <option>₹8000+</option>
              </select>

              <select className="border rounded-xl p-3">
                <option>Room Type</option>
                <option>Single Room</option>
                <option>Double Sharing</option>
                <option>1 BHK</option>
              </select>

              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2">
                <FaSearch />
                Search
              </button>

            </div>
          </div>
        </header>

        {/* Filter + Cards */}
        <section className="shadow-2xl p-5 pr-0 flex">

          {/* Left Filter */}
          <div className="w-72 bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-2xl font-bold">
              Filters
            </h2>

            {/* yaha tum apna purana filter code same paste kar dena */}
          </div>

          {/* Right Cards */}
          <div className="flex-1">

            <div className="flex justify-between items-center mx-8 mt-3">
              <h1 className="font-bold">
                Showing {rooms.length} Rooms
              </h1>

              <h1 className="text-blue-600 font-bold">
                View All
              </h1>
            </div>

            <div className="grid grid-cols-3 gap-8 p-8">

              {rooms.map((room) => (
                <div
                  key={room.id}
                  onClick={() => navigate(`/room/${room.id}`)}
                  className="cursor-pointer rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300 bg-white"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      className="h-52 w-full object-cover"
                      src={`${import.meta.env.BASE_URL}${room.image}`}
                      alt={room.title}
                    />

                    {/* Verified */}
                    <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                      <span className="text-blue-600">✔</span>
                      <span className="text-xs font-semibold text-blue-600">
                        Verified
                      </span>
                    </div>

                    {/* Favourite */}
                    <button
                      className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🤍
                    </button>

                    {/* Photos */}
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
                      📷 {10}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">

                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg">
                        {room.title}
                      </h2>

                      <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                        Available
                      </span>
                    </div>

                    <p className="text-gray-500 mt-2">
                      {room.location}
                    </p>

                    <div className="flex items-end gap-1 mt-3">
                      <h1 className="text-3xl text-blue-600 font-bold">
                        ₹{room.price}
                      </h1>

                      <span className="mb-1 text-gray-500">
                        /month
                      </span>
                    </div>

                    <div className="flex gap-3 flex-wrap border-y py-4 my-4">
                      {room.amenities.map((item) => (
                        <span
                          key={item}
                          className="bg-slate-100 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="font-semibold">
                        Owner: {room.owner}
                      </p>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/room/${room.id}`);
                        }}
                        className="text-blue-600 font-semibold"
                      >
                        View Details →
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrowseRooms;