import React from "react";
import { Outlet } from "react-router-dom";

import UserSidebar from "../components/UserDashboard/UserSidebar";
import UserTopNavbar from "../components/UserDashboard/UserTopNavbar";

export default function UserLayout() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      {/* Sidebar */}
      <UserSidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <UserTopNavbar />

        {/* Pages */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}