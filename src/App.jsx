import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import BrowseRooms from "./pages/BrowseRooms/BrowseRooms";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Routes, Route ,Link} from "react-router-dom";

import Dashboard from "./pages/OwnerDashboard/Dashboard";

import BasicDetails from "./pages/OwnerDashboard/PostRoom/BasicDetails";
import Photos from "./pages/OwnerDashboard/PostRoom/Photos";
import PriceAvailability from "./pages/OwnerDashboard/PostRoom/PriceAvailability";
import Amenities from "./pages/OwnerDashboard/PostRoom/Amenities";
import ReviewPublish from "./pages/OwnerDashboard/PostRoom/ReviewPublish";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/browseRooms" element={<BrowseRooms/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />


           <Route path="/dashboard" element={<Dashboard />} />

             <Route
        path="/dashboard/post-room/basic-details"
        element={<BasicDetails />}
      />
      <Route
        path="/dashboard/post-room/photos"
        element={<Photos />}
      />
      <Route
        path="/dashboard/post-room/price"
        element={<PriceAvailability />}
      />
      <Route
        path="/dashboard/post-room/amenities"
        element={<Amenities />}
      />
      <Route
        path="/dashboard/post-room/review"
        element={<ReviewPublish />}
      />

      </Routes>
    </>
  );
}

export default App;