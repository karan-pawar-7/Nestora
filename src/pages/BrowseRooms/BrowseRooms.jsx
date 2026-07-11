import React from 'react'
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const BrowseRooms = () => {
  return (
    <>
      <div>
        <header className='flex items-center justify-center gap-5 p-5 bg-white/50'>
          <div>
            <h1 className='text-4xl font-bold leading-15'>Browse Rooms</h1>
            <p className='leading-5'>Find Verified rooms that match your lifestyle and budget.</p>
            <p className='leading-10'>Home - Browse Rooms</p>
          </div>
          <div className=''>
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center">
              <div className="grid md:grid-cols-4 gap-4 p-2">

                <div className="flex items-center border border-gray-300 rounded-xl px-3">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full p-3 outline-none"
                  />
                </div>

                <select className="border border-gray-300 rounded-xl p-3">
                  
                  <option>₹ Budget</option>
                  <option>₹3000 - ₹5000</option>
                  <option>₹5000 - ₹8000</option>
                  <option>₹8000+</option>
                </select>

                <select className="border border-gray-300 rounded-xl p-3">
                  <option>Room Type</option>
                  <option>Single Room</option>
                  <option>Double Sharing</option>
                  <option>1 BHK</option>
                </select>

                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2 font-semibold">
                  <FaSearch />
                  Search
                </button>

              </div>
            </div>
          </div>
        </header>

         <section className='shadow-2xl p-5 pr-0 flex'>
          <div className='w-fit p-5 pb-0 shadow-2xl rounded-2xl'>
            <div className='flex justify-between mb-3 border-b pb-2 border-mist-300'>
              <h1 className='text-[20px] font-semibold'>Filters</h1>
              <p className='text-blue-600'>Reset</p>
            </div>

            <div>
              <h1 className='font-bold mb-2'>Location</h1>
              <div className="flex items-center border border-gray-400 rounded-xl px-3 mb-4">
                <FaMapMarkerAlt className="text-black" />
                <input
                  type="text"
                  placeholder="Search Location"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>
            <div className='flex flex-col gap-3 border-b border-mist-400'>
              <div className='flex '>
                <input type="checkbox" />
                  <h1 className='ml-2 mr-37'>Pune</h1>
                  <p>1200+</p>
              </div>
              <div className='flex '>
                <input type="checkbox" />
                  <h1 className='ml-2 mr-32'>Mumbai</h1>
                  <p>1500+</p>
              </div>
              <div className='flex'>
                <input type="checkbox" />
                  <h1 className='ml-2 mr-35'>Nagpur</h1>
                  <p>800+</p>
              </div>
              <div className='flex'>
                <input type="checkbox" />
                  <h1 className='ml-2 mr-36'>Nashik</h1>
                  <p>700+</p>
              </div>
              <div className='flex'>
                <input type="checkbox" />
                  <h1 className='ml-2 mr-30'>Kolhapur</h1>
                  <p>1200+</p>
              </div>
              <h1 className='mb-5 text-blue-500'>Show More</h1>
            </div>
            <div>
              <div className="mt-3 border-b border-mist-300">
                <h3 className="text-lg font-semibold mb-3">
                  Budget (per month)
                </h3>

                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="500"
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹0</span>
                  <span className='mb-3'>₹10,000+</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-3 border-b pb-5 border-gray-300'>
              <h1 className='text-lg font-semibold'>Room Type</h1>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Single Room</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Shared Room</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>1 BHK</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>2 BHK</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Studio</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>PG/Hostel</h1>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-3'>
              <h1 className='text-lg font-semibold'>Amenities</h1>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Wi-Fi</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>AC</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Fan</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Parking</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Power Backup</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Laundry</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Security Guard</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Park</h1>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <h1>Club house</h1>
              </div>

            </div>
          </div>

          <div >
            <div className="flex items-center justify-between mx-13 font-bold mt-3">
              <h1>Showing 120 Rooms</h1>
              <h1 className="text-blue-400">View All</h1>
            </div>
            <div className="grid grid-cols-3 gap-8 py-5 items-center justify-center mx-8">

              <div className="w-fit rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300">

                {/* Image Container */}
                <div className="relative">

                  <img
                    className="h-49 w-auto"
                    src={`${import.meta.env.BASE_URL}r1.png`}
                    alt=""
                  />

                  {/* Verified Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <span className="text-blue-600">✔</span>
                    <span className="text-xs font-semibold text-blue-600">Verified</span>
                  </div>

                  {/* Saved Icon - Top Right */}
                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                    🤍
                  </button>

                  {/* More Images Count - Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                    📷 14
                  </div>

                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col gap-2">

                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Fully Furnished 1 BHK</h1>

                    <button className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </button>
                  </div>

                  <p>Hinjewadi Phase 2, Pune</p>

                  <div className="flex items-end gap-1">
                    <h1 className="text-[28px] text-blue-500 font-bold">₹9,000</h1>
                    <span className="mb-1">/month</span>
                  </div>

                  <div className="flex gap-8 border-b py-2 text-gray-700">
                    <p>Wi-Fi</p>
                    <p>AC</p>
                    <p>Parking</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Owner: Ajay Pawar</p>

                    <button className="text-blue-600 font-semibold hover:underline">
                      View Details
                    </button>
                  </div>

                </div>

              </div>
              <div className="w-fit rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300">

                {/* Image Container */}
                <div className="relative">

                  <img
                    className="h-49 w-auto"
                    src={`${import.meta.env.BASE_URL}r2.png`}
                    alt=""
                  />

                  {/* Verified Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <span className="text-blue-600">✔</span>
                    <span className="text-xs font-semibold text-blue-600">Verified</span>
                  </div>

                  {/* Saved Icon - Top Right */}
                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                    🤍
                  </button>

                  {/* More Images Count - Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                    📷 12
                  </div>

                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col gap-2">

                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Single Room For Boys</h1>

                    <button className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </button>
                  </div>

                  <p>Viman Nagar, Pune</p>

                  <div className="flex items-end gap-1">
                    <h1 className="text-[28px] text-blue-500 font-bold">₹4,000</h1>
                    <span className="mb-1">/month</span>
                  </div>

                  <div className="flex gap-8 border-b py-2 text-gray-700">
                    <p>Wi-Fi</p>
                    <p>AC</p>
                    <p>Power Backup</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Owner: Rahul Pawar</p>

                    <button className="text-blue-600 font-semibold hover:underline">
                      View Details
                    </button>
                  </div>

                </div>

              </div>
              <div className="w-fit rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300">

                {/* Image Container */}
                <div className="relative">

                  <img
                    className="h-49 w-auto"
                    src={`${import.meta.env.BASE_URL}r3.png`}
                    alt=""
                  />

                  {/* Verified Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <span className="text-blue-600">✔</span>
                    <span className="text-xs font-semibold text-blue-600">Verified</span>
                  </div>

                  {/* Saved Icon - Top Right */}
                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                    🤍
                  </button>

                  {/* More Images Count - Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                    📷 8
                  </div>

                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col gap-2">

                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Shared Room</h1>

                    <button className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </button>
                  </div>

                  <p>Baner, Pune</p>

                  <div className="flex items-end gap-1">
                    <h1 className="text-[28px] text-blue-500 font-bold">₹3,000</h1>
                    <span className="mb-1">/month</span>
                  </div>

                  <div className="flex gap-8 border-b py-2 text-gray-700">
                    <p>Wi-Fi</p>
                    <p>AC</p>
                    <p>Laundry</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Owner: Amit Sharma</p>

                    <button className="text-blue-600 font-semibold hover:underline">
                      View Details
                    </button>
                  </div>

                </div>

              </div>
              <div className="w-fit rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300">

                {/* Image Container */}
                <div className="relative">

                  <img
                    className="h-49 w-auto"
                    src={`${import.meta.env.BASE_URL}r4.png`}
                    alt=""
                  />

                  {/* Verified Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <span className="text-blue-600">✔</span>
                    <span className="text-xs font-semibold text-blue-600">Verified</span>
                  </div>

                  {/* Saved Icon - Top Right */}
                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                    🤍
                  </button>

                  {/* More Images Count - Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                    📷 13
                  </div>

                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col gap-2">

                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Studio Apartment</h1>

                    <button className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </button>
                  </div>

                  <p>Kothrud, Pune</p>

                  <div className="flex items-end gap-1">
                    <h1 className="text-[28px] text-blue-500 font-bold">₹7,000</h1>
                    <span className="mb-1">/month</span>
                  </div>

                  <div className="flex gap-8 border-b py-2 text-gray-700">
                    <p>Wi-Fi</p>
                    <p>AC</p>
                    <p>Power Backup</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Owner: Sanket Pawar</p>

                    <button className="text-blue-600 font-semibold hover:underline">
                      View Details
                    </button>
                  </div>

                </div>

              </div>
              <div className="w-fit rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300">

                {/* Image Container */}
                <div className="relative">

                  <img
                    className="h-49 w-auto"
                    src={`${import.meta.env.BASE_URL}r5.png`}
                    alt=""
                  />

                  {/* Verified Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <span className="text-blue-600">✔</span>
                    <span className="text-xs font-semibold text-blue-600">Verified</span>
                  </div>

                  {/* Saved Icon - Top Right */}
                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                    🤍
                  </button>

                  {/* More Images Count - Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                    📷 8
                  </div>

                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col gap-2">

                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">2 BHK Flat</h1>

                    <button className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </button>
                  </div>

                  <p>Wakad, Pune</p>

                  <div className="flex items-end gap-1">
                    <h1 className="text-[28px] text-blue-500 font-bold">₹12,000</h1>
                    <span className="mb-1">/month</span>
                  </div>

                  <div className="flex gap-8 border-b py-2 text-gray-700">
                    <p>Wi-Fi</p>
                    <p>AC</p>
                    <p>Parking</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Owner: Sneha Verma</p>

                    <button className="text-blue-600 font-semibold hover:underline">
                      View Details
                    </button>
                  </div>

                </div>

              </div>
              <div className="w-fit rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300">

                {/* Image Container */}
                <div className="relative">

                  <img
                    className="h-49 w-fit"
                    src={`${import.meta.env.BASE_URL}r6.png`}
                    alt=""
                  />

                  {/* Verified Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <span className="text-blue-600">✔</span>
                    <span className="text-xs font-semibold text-blue-600">Verified</span>
                  </div>

                  {/* Saved Icon - Top Right */}
                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                    🤍
                  </button>

                  {/* More Images Count - Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                    📷 7
                  </div>

                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col gap-2">

                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Single Room Near Campus</h1>

                    <button className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </button>
                  </div>

                  <p>Pune University, Pune</p>

                  <div className="flex items-end gap-1">
                    <h1 className="text-[28px] text-blue-500 font-bold">₹4,500</h1>
                    <span className="mb-1">/month</span>
                  </div>

                  <div className="flex gap-8 border-b py-2 text-gray-700">
                    <p>Wi-Fi</p>
                    <p>AC</p>
                    <p>Power Backup</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Owner: Vijay Patil</p>

                    <button className="text-blue-600 font-semibold hover:underline">
                      View Details
                    </button>
                  </div>

                </div>

              </div>
              <div className="w-fit rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300">

                {/* Image Container */}
                <div className="relative">

                  <img
                    className="h-49 w-fit"
                    src={`${import.meta.env.BASE_URL}r7.png`}
                    alt=""
                  />

                  {/* Verified Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <span className="text-blue-600">✔</span>
                    <span className="text-xs font-semibold text-blue-600">Verified</span>
                  </div>

                  {/* Saved Icon - Top Right */}
                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                    🤍
                  </button>

                  {/* More Images Count - Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                    📷 10
                  </div>

                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col gap-2">

                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">3 BHK Flat</h1>

                    <button className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </button>
                  </div>

                  <p>Koregaon Park, Pune</p>

                  <div className="flex items-end gap-1">
                    <h1 className="text-[28px] text-blue-500 font-bold">₹18,000</h1>
                    <span className="mb-1">/month</span>
                  </div>

                  <div className="flex gap-8 border-b py-2 text-gray-700">
                    <p>Wi-Fi</p>
                    <p>AC</p>
                    <p>Parking</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Owner: Santos Chavan</p>

                    <button className="text-blue-600 font-semibold hover:underline">
                      View Details
                    </button>
                  </div>

                </div>

              </div>
              <div className="w-fit rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300">

                {/* Image Container */}
                <div className="relative">

                  <img
                    className="h-48 w-auto"
                    src={`${import.meta.env.BASE_URL}r8.png`}
                    alt=""
                  />

                  {/* Verified Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <span className="text-blue-600">✔</span>
                    <span className="text-xs font-semibold text-blue-600">Verified</span>
                  </div>

                  {/* Saved Icon - Top Right */}
                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                    🤍
                  </button>

                  {/* More Images Count - Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                    📷 9
                  </div>

                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col gap-2">

                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">1 BHK Flat</h1>

                    <button className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </button>
                  </div>

                  <p>Koregaon Park, Pune</p>

                  <div className="flex items-end gap-1">
                    <h1 className="text-[28px] text-blue-500 font-bold">₹8,000</h1>
                    <span className="mb-1">/month</span>
                  </div>

                  <div className="flex gap-8 border-b py-2 text-gray-700">
                    <p>Wi-Fi</p>
                    <p>AC</p>
                    <p>Park</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Owner: Sachin Kadam</p>

                    <button className="text-blue-600 font-semibold hover:underline">
                      View Details
                    </button>
                  </div>

                </div>

              </div>
              <div className="w-fit rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300">

                {/* Image Container */}
                <div className="relative">

                  <img
                    className="h-49 w-auto"
                    src={`${import.meta.env.BASE_URL}r9.png`}
                    alt=""
                  />

                  {/* Verified Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <span className="text-blue-600">✔</span>
                    <span className="text-xs font-semibold text-blue-600">Verified</span>
                  </div>

                  {/* Saved Icon - Top Right */}
                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                    🤍
                  </button>

                  {/* More Images Count - Bottom Left */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                    📷 15
                  </div>

                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col gap-2">

                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Family Flat</h1>

                    <button className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </button>
                  </div>

                  <p>Koregaon Park, Pune</p>

                  <div className="flex items-end gap-1">
                    <h1 className="text-[28px] text-blue-500 font-bold">₹15,000</h1>
                    <span className="mb-1">/month</span>
                  </div>

                  <div className="flex gap-8 border-b py-2 text-gray-700">
                    <p>Wi-Fi</p>
                    <p>AC</p>
                    <p>Parking</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Owner: Mahesh Jadhav</p>

                    <button className="text-blue-600 font-semibold hover:underline">
                      View Details
                    </button>
                  </div>

                </div>

              </div>
              
            </div>
          </div>
        </section>
      </div>
    </>

  )
}

export default BrowseRooms