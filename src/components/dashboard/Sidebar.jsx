import {
  FaHome,
  FaList,
  FaPlusCircle,
  FaEnvelope,
  FaCalendarCheck,
  FaComments,
  FaWallet,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    icon: <FaHome />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <FaList />,
    title: "My Listings",
    path: "/dashboard/my-listings",
  },
  {
    icon: <FaPlusCircle />,
    title: "Post Room",
    path: "/dashboard/post-room/basic-details",
  },
  {
    icon: <FaEnvelope />,
    title: "Inquiries",
    path: "/dashboard/inquiries",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Bookings",
    path: "/dashboard/bookings",
  },
  {
    icon: <FaComments />,
    title: "Messages",
    path: "/dashboard/messages",
  },
  {
    icon: <FaWallet />,
    title: "Earnings",
    path: "/dashboard/earnings",
  },
  {
    icon: <FaUser />,
    title: "Profile",
    path: "/dashboard/profile",
  },
  {
    icon: <FaCog />,
    title: "Settings",
    path: "/dashboard/settings",
  },
  {
    icon: <FaQuestionCircle />,
    title: "Help & Support",
    path: "/dashboard/help",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white shadow-xl flex flex-col">

      <div className="h-20 flex items-center justify-center border-b">

        <h1 className="text-3xl font-bold text-blue-600">
          Nestora
        </h1>

      </div>

      <div className="flex-1 p-5 space-y-2">

        {menuItems.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center gap-4 px-5 py-4 rounded-xl duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-blue-50 text-gray-700"
              }`
            }
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="font-semibold">
              {item.title}
            </span>

          </NavLink>

        ))}

      </div>

      <div className="p-5 border-t">

        <button className="w-full flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-red-50 text-red-600">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}