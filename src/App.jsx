import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import BrowseRooms from "./pages/BrowseRooms/BrowseRooms";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

import { Routes, Route, useLocation } from "react-router-dom";

// Dashboard Layout
import DashboardLayout from "./layouts/DashboardLayout";

// Dashboard Pages
import Dashboard from "./pages/OwnerDashboard/Dashboard";
import MyListings from "./pages/OwnerDashboard/MyListings";
import Bookings from "./pages/OwnerDashboard/Bookings";
import Inquiries from "./pages/OwnerDashboard/Inquiries";
import Messages from "./pages/OwnerDashboard/Messages";
import Earnings from "./pages/OwnerDashboard/Earnings";
import Profile from "./pages/OwnerDashboard/Profile";
import Settings from "./pages/OwnerDashboard/Settings";
import HelpSupport from "./pages/OwnerDashboard/HelpSupport";

// Post Room Pages
import BasicDetails from "./pages/OwnerDashboard/PostRoom/BasicDetails";
import Photos from "./pages/OwnerDashboard/PostRoom/Photos";
import PriceAvailability from "./pages/OwnerDashboard/PostRoom/PriceAvailability";
import Amenities from "./pages/OwnerDashboard/PostRoom/Amenities";
import ReviewPublish from "./pages/OwnerDashboard/PostRoom/ReviewPublish";

function App() {

  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Public Navbar */}
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/browseRooms" element={<BrowseRooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="my-listings" element={<MyListings />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="inquiries" element={<Inquiries />} />
          <Route path="messages" element={<Messages />} />
          <Route path="earnings" element={<Earnings />} />

          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />

          <Route path="help" element={<HelpSupport />} />


          {/* Post Room */}
          <Route
            path="post-room/basic-details"
            element={<BasicDetails />}
          />
          <Route
            path="post-room/photos"
            element={<Photos />}
          />
          <Route
            path="post-room/price"
            element={<PriceAvailability />}
          />
          <Route
            path="post-room/amenities"
            element={<Amenities />}
          />
          <Route
            path="post-room/review"
            element={<ReviewPublish />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;