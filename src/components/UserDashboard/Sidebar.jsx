import React from "react";
import {
  FaHome,
  FaCalendarCheck,
  FaHeart,
  FaComments,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "/user",
  },
  {
    title: "My Bookings",
    icon: <FaCalendarCheck />,
    path: "/user/bookings",
  },
  {
    title: "Saved Rooms",
    icon: <FaHeart />,
    path: "/user/saved",
  },
  {
    title: "Messages",
    icon: <FaComments />,
    path: "/user/messages",
  },
  {
    title: "Profile",
    icon: <FaUser />,
    path: "/user/profile",
  },
  {
    title: "Settings",
    icon: <FaCog />,
    path: "/user/settings",
  },
];

export default function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-white shadow-xl flex flex-col">

      {/* Logo */}

      <div className="h-20 flex items-center justify-center border-b">

        <h1 className="text-3xl font-bold text-blue-600">
          Nestora
        </h1>

      </div>

      {/* User */}

      <div className="flex flex-col items-center py-8 border-b">

        <img
          src={`${import.meta.env.BASE_URL}user1.png`}
          alt=""
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
        />

        <h2 className="mt-4 font-bold text-xl">
          Rahul Sharma
        </h2>

        <p className="text-gray-500">
          Tenant
        </p>

      </div>

      {/* Menu */}

      <div className="flex-1 py-6">

        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            end={item.path === "/user"}
            className={({ isActive }) =>
              `flex items-center gap-4 px-8 py-4 mx-4 rounded-xl mb-3 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-100"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span className="font-semibold">
              {item.title}
            </span>
          </NavLink>
        ))}

      </div>

      {/* Logout */}

      <div className="p-5 border-t">

        <button className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>
  );
}