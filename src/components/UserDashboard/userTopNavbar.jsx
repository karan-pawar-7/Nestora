import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";


export default function userTopNavbar() {
  return (
    <div className="bg-white h-20 shadow-sm px-8 flex items-center justify-between">

      {/* Search */}

      <div className="relative w-[420px]">

        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search Rooms..."
          className="w-full bg-slate-100 rounded-xl py-3 pl-14 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="relative bg-slate-100 p-3 rounded-xl hover:bg-blue-100 transition">

          <FaBell className="text-xl text-gray-700" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
            2
          </span>

        </button>

        <div className="flex items-center gap-3">

          <img
            src={`${import.meta.env.BASE_URL}user1.png`}
            alt="User"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>

            <h3 className="font-bold">
              Rahul Sharma
            </h3>

            <p className="text-sm text-gray-500">
              Tenant
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}