import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import TopNavbar from "../components/dashboard/TopNavbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <TopNavbar />

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}