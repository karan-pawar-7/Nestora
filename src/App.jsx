import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import BrowseRooms from "./pages/BrowseRooms/BrowseRooms";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Routes, Route ,Link} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/browseRooms" element={<BrowseRooms/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<login/>} />
        <Route path="/signup" element={<signup/>} />
      </Routes>
    </>
  );
}

export default App;