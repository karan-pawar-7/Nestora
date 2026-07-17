import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/UserDashboard/Sidebar";
import TopNavbar from "../components/UserDashboard/TopNavbar";

export default function UserLayout() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <TopNavbar />

        {/* Pages */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}