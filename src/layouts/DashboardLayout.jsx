import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import TopNavbar from "../components/dashboard/TopNavbar";

export default function DashboardLayout() {
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