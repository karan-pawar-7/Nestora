import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaCalendarCheck,
  FaHeart,
  FaComments,
  FaUser,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";


export default function UserSidebar() {


  const menu = [
    {
      name: "Dashboard",
      path: "/userdashboard",
      icon: <FaHome />
    },
    {
      name: "My Bookings",
      path: "/userdashboard/mybookings",
      icon: <FaCalendarCheck />
    },
    {
      name: "Messages",
      path: "/userdashboard/usermessages",
      icon: <FaComments />
    },
    {
      name: "Wishlist",
      path: "/userdashboard/userwishlist",
      icon: <FaHeart />
    },
    {
      name: "Profile",
      path: "/userdashboard/userprofile",
      icon: <FaUser />
    },
    {
      name: "Settings",
      path: "/userdashboard/usersettings",
      icon: <FaCog />
    }
  ];

  return (

    <aside
      className="
    w-72
    min-h-screen
    bg-white
    shadow-xl
    p-6
    "
    >


      {/* Logo */}

      <div className="mb-8">


        <h1 className="
        text-2xl
        font-bold
        text-blue-600
        ">
          Nestora
        </h1>


        <p className="text-gray-500 text-sm">
          User Panel
        </p>


      </div>





      {/* User Card */}

      <div
        className="
      bg-blue-50
      rounded-2xl
      p-4
      mb-8
      text-center
      "
      >


        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="
        w-20
        h-20
        rounded-full
        mx-auto
        border-4
        border-blue-500
        "
        />


        <h2 className="
        font-bold
        mt-3
        ">
          Karan Pawar
        </h2>


        <p className="text-sm text-gray-500">
          Tenant
        </p>


      </div>







      {/* Menu */}


      <nav className="space-y-2">


        {
          menu.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}

              className={({ isActive }) =>

                `
          flex
          items-center
          gap-4
          px-4
          py-3
          rounded-xl
          transition

          ${isActive
                  ?
                  "bg-blue-600 text-white shadow-lg"
                  :
                  "text-gray-600 hover:bg-blue-50"
                }

          `
              }

            >

              <span className="text-lg">
                {item.icon}
              </span>


              <span>
                {item.name}
              </span>


            </NavLink>

          ))
        }


      </nav>





      {/* Logout */}

      <button
        className="
      mt-10
      w-full
      flex
      items-center
      justify-center
      gap-3
      bg-red-500
      text-white
      py-3
      rounded-xl
      hover:bg-red-600
      transition
      "
      >

        <FaSignOutAlt />

        Logout

      </button>



    </aside>

  );
}