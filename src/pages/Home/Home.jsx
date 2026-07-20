// import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
// import React from 'react'
// import { useState } from "react";

// import ScrollReveal from "../../components/ScrollReveal";

// const faqs = [
//     {
//         question: "How do I book a room?",
//         answer:
//             "Browse rooms, contact the owner, visit the property, and finalize your booking.",
//     },
//     {
//         question: "Are all rooms verified?",
//         answer:
//             "Yes. Every room is manually verified before it is published.",
//     },
//     {
//         question: "Is there any booking fee?",
//         answer:
//             "No. Nestora does not charge tenants any booking fee.",
//     },
//     {
//         question: "How can I contact the owner?",
//         answer:
//             "Open the room details page and click the Contact Owner button.",
//     },
// ];


// const Home = () => {

//     const [openIndex, setOpenIndex] = useState(null);
//     return (

//         <>

//             <section
//                 className="h-120 bg-cover bg-center  bg-black/35"


//                 style={{
//                     backgroundImage: `url(${import.meta.env.BASE_URL}h1.png)`,
//                 }}
//             >

//                 {/* Content */}
//                 <div className="flex pt-15 justify-center max-w-7xl mx-auto min-h-screen">
//                     <div className="max-w-3xl items-center flex flex-col">


//                         <h1
//                             data-aos="fade-down"
//                             className="text-5xl lg:text-6xl font-bold text-white"
//                         >                            Find Your Perfect Room
//                         </h1>
//                         <div
//                             data-aos="fade-up"
//                             data-aos-delay="200"
//                             className="flex flex-col items-center justify-center text-2xl"
//                         >                            <p className=" mt-6 text-white ">
//                                 Discover comfortable and affordable rooms
//                             </p>
//                             <p className=" text-white">near your favorite locations.</p>
//                         </div>


//                         {/* Search Box */}
//                         <div
//                             data-aos="zoom-in"
//                             data-aos-delay="400"
//                             className="bg-white rounded-2xl shadow-xl p-4 mt-10 flex items-center justify-center"
//                         >                            <div className="grid md:grid-cols-4 gap-4">

//                                 <div className="flex items-center border rounded-xl px-3">
//                                     <FaMapMarkerAlt className="text-[#113270]" />
//                                     <input
//                                         type="text"
//                                         placeholder="City"
//                                         className="w-full p-3 outline-none"
//                                     />
//                                 </div>

//                                 <select className="border rounded-xl p-3">
//                                     <option>Budget</option>
//                                     <option>₹1000 - ₹3000</option>
//                                     <option>₹3000 - ₹5000</option>
//                                     <option>₹5000 - ₹8000</option>
//                                     <option>₹8000+</option>
//                                 </select>

//                                 <select className="border rounded-xl p-3">
//                                     <option>Room Type</option>
//                                     <option>Single Room</option>
//                                     <option>Double Sharing</option>
//                                     <option>1 BHK</option>
//                                     <option>2 BHK</option>
//                                 </select>

//                                 <button className="bg-[#002e82] hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2 font-semibold">
//                                     <FaSearch />
//                                     Search
//                                 </button>

//                             </div>
//                         </div>

//                         {/* Stats */}
//                         <div
//                             data-aos="fade-up"
//                             data-aos-delay="600"
//                             className="flex flex-wrap gap-8 mt-10 text-white"
//                         >
//                             <div>
//                                 <h2 className="text-3xl font-bold">10K+</h2>
//                                 <p>Rooms Listed</p>
//                             </div>

//                             <div>
//                                 <h2 className="text-3xl font-bold">5K+</h2>
//                                 <p>Happy Tenants</p>
//                             </div>

//                             <div>
//                                 <h2 className="text-3xl font-bold">50+</h2>
//                                 <p>Cities</p>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </section>

//             <div className=" flex flex-col mt-5">


//                 <div
//                     data-aos="fade-up"
//                     className="flex items-center justify-between mx-13 font-bold mt-3"
//                 >                        <h1>Featured Rooms</h1>
//                     <h1 className="text-[#002e82]">View All</h1>
//                 </div>

//                 <div className="flex gap-8 py-5 items-center justify-center" >

//                     <ScrollReveal direction="up" delay={0.3}>
//                         <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
//                             <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} alt="" />
//                             <div className="p-3">
//                                 <h1 className="font-bold">1 BHK</h1>
//                                 <h1>Hinjewadi, Pune</h1>
//                                 <div className="flex items-end gap-1">
//                                     <h1 className="text-[20px] text-[#002e82] font-bold">₹9000 </h1>
//                                     <h1> /month</h1>
//                                 </div>
//                             </div>
//                         </div>
//                     </ScrollReveal>

//                     <ScrollReveal direction="up" delay={0.5} >
//                         <div className="h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-100 group-hover:scale-110">
//                             <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r2.png`} alt="" />
//                             <div className="p-3">
//                                 <h1 className="font-bold">Single Room</h1>
//                                 <h1>Koregaon Park, Pune</h1>
//                                 <div className="flex items-end gap-1">
//                                     <h1 className="text-[20px] text-[#002e82] font-bold">₹3000 </h1>
//                                     <h1> /month</h1>
//                                 </div>
//                             </div>
//                         </div>
//                     </ScrollReveal>


//                     <ScrollReveal direction="up" delay={0.7}>
//                         <div className="h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110" >
//                             <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r3.png`} alt="" />
//                             <div className="p-3">
//                                 <h1 className="font-bold">2 BHK Flat</h1>
//                                 <h1>Viman Nagar, Pune</h1>
//                                 <div className="flex items-end gap-1">
//                                     <h1 className="text-[20px] text-[#002e82] font-bold">₹15000 </h1>
//                                     <h1> /month</h1>
//                                 </div>
//                             </div>
//                         </div>
//                     </ScrollReveal>
//                     <ScrollReveal direction="up" delay={0.9}>
//                         <div className="h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
//                             <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r4.png`} alt="" />
//                             <div className="p-3">
//                                 <h1 className="font-bold">1 RK Studio</h1>
//                                 <h1>Wakad, Pune</h1>
//                                 <div className="flex items-end gap-1">
//                                     <h1 className="text-[20px] text-[#002e82] font-bold">₹5500 </h1>
//                                     <h1> /month</h1>
//                                 </div>
//                             </div>
//                         </div>
//                     </ScrollReveal>

//                     <ScrollReveal direction="up" delay={1}>
//                         <div
//                             className="h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110" >
//                             <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r5.png`} alt="" />
//                             <div className="p-3">
//                                 <h1 className="font-bold">Shared Room</h1>
//                                 <h1>Baner, Pune</h1>
//                                 <div className="flex items-end gap-1">
//                                     <h1 className="text-[20px] text-[#002e82] font-bold">₹2500 </h1>
//                                     <h1> /month</h1>
//                                 </div>
//                             </div>
//                         </div>
//                     </ScrollReveal>


//                 </div>


//             </div >

//             <section className="py-10 bg-white">
//                 <div className="h-full py-5 w-fit rounded-b-2xl " >
//                     <div className="flex justify-between ml-150  items-center  mb-8">
//                         <div className="flex flex-col items-center">
//                             <h2 className="text-3xl font-bold">Recently Added Rooms</h2>
//                             <p className="text-gray-500">
//                                 Explore the latest verified room listings.
//                             </p>
//                         </div>

//                         <button className="text-[#002e82] font-semibold hover:underline">
//                             View All →
//                         </button>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mx-5">

//                         {/* Room Card */}
//                         <div className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 overflow-hidden" data-aos="fade-up"
//                             data-aos-delay="200">
//                             <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} />

//                             <div className="p-5">
//                                 <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
//                                     NEW
//                                 </span>

//                                 <h3 className="text-xl font-bold mt-3">
//                                     Modern Studio Room
//                                 </h3>

//                                 <p className="text-gray-500">
//                                     Baner, Pune
//                                 </p>

//                                 <h4 className="text-[#002e82] text-2xl font-bold mt-3">
//                                     ₹8,500
//                                     <span className="text-gray-500 text-base">
//                                         /month
//                                     </span>
//                                 </h4>

//                                 <button className="w-full mt-5 bg-[#002e82] text-white py-3 rounded-xl hover:bg-blue-700">
//                                     View Details
//                                 </button>
//                             </div>
//                         </div>

//                         <div  data-aos="fade-up"
//                             data-aos-delay="200" className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 overflow-hidden">
//                             <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} />

//                             <div className="p-5">
//                                 <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
//                                     NEW
//                                 </span>

//                                 <h3 className="text-xl font-bold mt-3">
//                                     Modern Studio Room
//                                 </h3>

//                                 <p className="text-gray-500">
//                                     Baner, Pune
//                                 </p>

//                                 <h4 className="text-[#002e82] text-2xl font-bold mt-3">
//                                     ₹8,500
//                                     <span className="text-gray-500 text-base">
//                                         /month
//                                     </span>
//                                 </h4>

//                                 <button className="w-full mt-5 bg-[#002e82] text-white py-3 rounded-xl hover:bg-blue-700">
//                                     View Details
//                                 </button>
//                             </div>
//                         </div>

//                         <div  data-aos="fade-up"
//                             data-aos-delay="200" className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 overflow-hidden">
//                             <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} />

//                             <div className="p-5">
//                                 <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
//                                     NEW
//                                 </span>

//                                 <h3 className="text-xl font-bold mt-3">
//                                     Modern Studio Room
//                                 </h3>

//                                 <p className="text-gray-500">
//                                     Baner, Pune
//                                 </p>

//                                 <h4 className="text-[#002e82] text-2xl font-bold mt-3">
//                                     ₹8,500
//                                     <span className="text-gray-500 text-base">
//                                         /month
//                                     </span>
//                                 </h4>

//                                 <button className="w-full mt-5 bg-[#002e82] text-white py-3 rounded-xl hover:bg-blue-700">
//                                     View Details
//                                 </button>
//                             </div>
//                         </div>

//                         <div  data-aos="fade-up"
//                             data-aos-delay="200" className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 overflow-hidden">
//                             <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} />

//                             <div className="p-5">
//                                 <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
//                                     NEW
//                                 </span>

//                                 <h3 className="text-xl font-bold mt-3">
//                                     Modern Studio Room
//                                 </h3>

//                                 <p className="text-gray-500">
//                                     Baner, Pune
//                                 </p>

//                                 <h4 className="text-[#002e82] text-2xl font-bold mt-3">
//                                     ₹8,500
//                                     <span className="text-gray-500 text-base">
//                                         /month
//                                     </span>
//                                 </h4>

//                                 <button className="w-full mt-5 bg-[#002e82] text-white py-3 rounded-xl hover:bg-blue-700">
//                                     View Details
//                                 </button>
//                             </div>
//                         </div>

//                         <div  data-aos="fade-up"
//                             data-aos-delay="200" className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 overflow-hidden">
//                             <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} />

//                             <div className="p-5">
//                                 <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
//                                     NEW
//                                 </span>

//                                 <h3 className="text-xl font-bold mt-3">
//                                     Modern Studio Room
//                                 </h3>

//                                 <p className="text-gray-500">
//                                     Baner, Pune
//                                 </p>

//                                 <h4 className="text-[#002e82] text-2xl font-bold mt-3">
//                                     ₹8,500
//                                     <span className="text-gray-500 text-base">
//                                         /month
//                                     </span>
//                                 </h4>

//                                 <button className="w-full mt-5 bg-[#002e82] text-white py-3 rounded-xl hover:bg-blue-700">
//                                     View Details
//                                 </button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//             <section className="py-5 bg-gray-50">

//                 <div className="container mx-auto px-6">

//                     <h2 className="text-3xl font-semibold text-center mb-10">
//                         Top Amenities
//                     </h2>

//                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

//                         <div className="bg-white rounded-xl shadow p-5 text-center">
//                             📶
//                             <p>Wi-Fi</p>
//                         </div>

//                         <div className="bg-white rounded-xl shadow p-5 text-center">
//                             ❄️
//                             <p>AC</p>
//                         </div>

//                         <div className="bg-white rounded-xl shadow p-5 text-center">
//                             🚗
//                             <p>Parking</p>
//                         </div>

//                         <div className="bg-white rounded-xl shadow p-5 text-center">
//                             🧺
//                             <p>Laundry</p>
//                         </div>

//                         <div className="bg-white rounded-xl shadow p-5 text-center">
//                             🍽️
//                             <p>Kitchen</p>
//                         </div>

//                         <div className="bg-white rounded-xl shadow p-5 text-center">
//                             ⚡
//                             <p>Power Backup</p>
//                         </div>

//                         <div className="bg-white rounded-xl shadow p-5 text-center">
//                             📹
//                             <p>CCTV</p>
//                         </div>

//                         <div className="bg-white rounded-xl shadow p-5 text-center">
//                             💧
//                             <p>RO Water</p>
//                         </div>

//                     </div>

//                 </div>

//             </section>

//             <div>
//                 <div className="flex items-center justify-between mx-13 mt-8 font-bold">
//                     <h1>Popular Cities</h1>
//                     <h1 className="text-[#002e82]">View All</h1>
//                 </div>
//                 <div className="flex gap-6 py-5 px-12 justify-center">
//                     <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
//                         <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c1.png`} />
//                         <div className="p-3">
//                             <h1 className="font-bold">Pune</h1>
//                             <h1>1200+ Rooms</h1>
//                         </div>
//                     </div>
//                     <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
//                         <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c2.png`} />
//                         <div className="p-3">
//                             <h1 className="font-bold">Mumbai</h1>
//                             <h1>1500+ Rooms</h1>
//                         </div>
//                     </div>
//                     <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
//                         <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c3.png`} />
//                         <div className="p-3">
//                             <h1 className="font-bold">Nagpur</h1>
//                             <h1>1000+ Rooms</h1>
//                         </div>
//                     </div>
//                     <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
//                         <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c4.png`} />
//                         <div className="p-3">
//                             <h1 className="font-bold">Nashik</h1>
//                             <h1>850+ Rooms</h1>
//                         </div>
//                     </div>
//                     <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
//                         <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c5.png`} />
//                         <div className="p-3">
//                             <h1 className="font-bold">Agra</h1>
//                             <h1>500+ Rooms</h1>
//                         </div>
//                     </div>
//                     <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
//                         <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c6.png`} />
//                         <div className="p-3">
//                             <h1 className="font-bold">Kolhpura</h1>
//                             <h1>400+ Rooms</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section className="py-10 bg-gray-50">
//                 <div className="max-w-4xl mx-auto px-6">

//                     <h2 className="text-4xl font-semibold text-center mb-3">
//                         Frequently Asked Questions
//                     </h2>

//                     <p className="text-center text-gray-500 mb-10">
//                         Everything you need to know about Nestora.
//                     </p>

//                     {faqs.map((faq, index) => (
//                         <div
//                             key={index}
//                             className="mb-4 bg-white rounded-xl shadow"
//                         >
//                             <button
//                                 className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg"
//                                 onClick={() =>
//                                     setOpenIndex(openIndex === index ? null : index)
//                                 }
//                             >
//                                 {faq.question}

//                                 <span className="text-2xl">
//                                     {openIndex === index ? "−" : "+"}
//                                 </span>
//                             </button>

//                             {openIndex === index && (
//                                 <div className="px-5 pb-5 text-gray-600">
//                                     {faq.answer}
//                                 </div>
//                             )}
//                         </div>
//                     ))}

//                 </div>
//             </section>




//         </>
//     );
// };

// export default Home;





import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaHeart, FaRegHeart, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Animation Variants for Staggered Children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const faqs = [
  {
    question: "How do I book a room?",
    answer: "Browse rooms, contact the owner directly via phone or WhatsApp, visit the property, and finalize your booking without extra hassle.",
  },
  {
    question: "Are all rooms verified?",
    answer: "Yes. Every room listing goes through a manual verification process before it is published on Nestora.",
  },
  {
    question: "Is there any booking fee?",
    answer: "No. Nestora is completely free for tenants and does not charge any hidden booking fees or commission.",
  },
  {
    question: "How can I contact the owner?",
    answer: "Simply open any room details page and click the 'Contact Owner' button to get their direct contact details.",
  },
];

const featuredRooms = [
  { id: 1, title: "1 BHK Flat", location: "Hinjewadi, Pune", price: "9,000", image: "r1.png" },
  { id: 2, title: "Single Room", location: "Koregaon Park, Pune", price: "3,000", image: "r2.png" },
  { id: 3, title: "2 BHK Flat", location: "Viman Nagar, Pune", price: "15,000", image: "r3.png" },
  { id: 4, title: "1 RK Studio", location: "Wakad, Pune", price: "5,500", image: "r4.png" },
  { id: 5, title: "Shared Room", location: "Baner, Pune", price: "2,500", image: "r5.png" },
];

const Home = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Search Filter State
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const [roomType, setRoomType] = useState("");

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (city) queryParams.append("city", city);
    if (budget) queryParams.append("budget", budget);
    if (roomType) queryParams.append("type", roomType);

    navigate(`/browse?${queryParams.toString()}`);
  };

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* 🟢 Hero Section */}
      <section
        className="relative min-h-[580px] lg:min-h-[640px] bg-cover bg-center bg-black/50 flex items-center justify-center py-12 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${import.meta.env.BASE_URL}h1.png)`,
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Find Your Perfect Room
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-gray-200 max-w-xl font-normal"
          >
            Discover comfortable and affordable rooms near your preferred locations with zero hassle.
          </motion.p>

          {/* Search Box */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSearch}
            className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-4 mt-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 focus-within:bg-white focus-within:border-blue-500 transition">
                <FaMapMarkerAlt className="text-[#113270] text-lg shrink-0 mr-2" />
                <input
                  type="text"
                  placeholder="Enter City or Area"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-transparent outline-none text-gray-700 text-sm placeholder-gray-400"
                />
              </div>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50 text-gray-700 text-sm outline-none focus:border-blue-500 transition cursor-pointer"
              >
                <option value="">Select Budget</option>
                <option value="1000-3000">₹1000 - ₹3000</option>
                <option value="3000-5000">₹3000 - ₹5000</option>
                <option value="5000-8000">₹5000 - ₹8000</option>
                <option value="8000+">₹8000+</option>
              </select>

              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="border border-gray-200 rounded-xl px-3 py-2.5 bg-gray-50 text-gray-700 text-sm outline-none focus:border-blue-500 transition cursor-pointer"
              >
                <option value="">Room Type</option>
                <option value="Single Room">Single Room</option>
                <option value="Double Sharing">Double Sharing</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
              </select>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-[#002e82] hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition duration-200 shadow-md"
              >
                <FaSearch />
                Search
              </motion.button>
            </div>
          </motion.form>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mt-10 text-white"
          >
            {[
              { val: "10K+", label: "Rooms Listed" },
              { val: "5K+", label: "Happy Tenants" },
              { val: "50+", label: "Cities Covered" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold">{stat.val}</h2>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🟢 Featured Rooms Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Rooms</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Handpicked top rated properties for you</p>
          </div>
          <button
            onClick={() => navigate("/browserooms")}
            className="text-[#002e82] hover:underline font-semibold text-sm sm:text-base shrink-0"
          >
            View All →
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {featuredRooms.map((room) => {
            const isFav = favorites.includes(room.id);
            return (
              <motion.div
                key={room.id}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => navigate(`/room/${room.id}`)}
                className="group cursor-pointer h-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative overflow-hidden">
                  <img
                    className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={`${import.meta.env.BASE_URL}${room.image}`}
                    alt={room.title}
                  />
                  <motion.button
                    whileTap={{ scale: 0.7 }}
                    onClick={(e) => toggleFavorite(e, room.id)}
                    className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition"
                  >
                    {isFav ? (
                      <FaHeart className="text-red-500 text-xs" />
                    ) : (
                      <FaRegHeart className="text-gray-600 text-xs hover:text-red-500" />
                    )}
                  </motion.button>
                </div>

                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-bold text-base text-gray-800 group-hover:text-blue-600 transition line-clamp-1">
                      {room.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{room.location}</p>
                  </div>

                  <div className="flex items-baseline gap-1 mt-3">
                    <span className="text-lg text-[#002e82] font-bold">₹{room.price}</span>
                    <span className="text-xs text-gray-500">/month</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 🟢 Recently Added Rooms */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Recently Added Rooms</h2>
              <p className="text-gray-500 text-sm mt-1">
                Explore the latest verified room listings across top locations.
              </p>
            </div>

            <button
              onClick={() => navigate("/browserooms")}
              className="text-[#002e82] font-semibold hover:underline text-sm sm:text-base shrink-0"
            >
              View All &rarr;
            </button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[1, 2, 3, 4, 5].map((itemIndex) => (
              <motion.div
                key={itemIndex}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => navigate(`/room/${itemIndex}`)}
                className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between border border-gray-100"
              >
                <div>
                  <div className="relative overflow-hidden">
                    <img
                      className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={`${import.meta.env.BASE_URL}r1.png`}
                      alt="Room"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-emerald-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide shadow-sm">
                      NEW
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition line-clamp-1">
                      Modern Studio Room
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">Baner, Pune</p>

                    <h4 className="text-[#002e82] text-lg font-bold mt-2 flex items-baseline gap-1">
                      ₹8,500
                      <span className="text-gray-400 text-xs font-normal">/month</span>
                    </h4>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#002e82] text-white py-2 rounded-xl text-xs font-semibold hover:bg-blue-700 transition"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🟢 Top Amenities */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Top Amenities Offered</h2>
            <p className="text-gray-500 text-sm mt-1">Get essential facilities for a comfortable stay</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {[
              { icon: "📶", name: "Wi-Fi" },
              { icon: "❄️", name: "AC" },
              { icon: "🚗", name: "Parking" },
              { icon: "🧺", name: "Laundry" },
              { icon: "🍽️", name: "Kitchen" },
              { icon: "⚡", name: "Power Backup" },
              { icon: "📹", name: "CCTV" },
              { icon: "💧", name: "RO Water" },
            ].map((amenity, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 hover:bg-blue-50/50 rounded-2xl shadow-sm hover:shadow-md p-4 text-center border border-gray-100 transition duration-200 flex flex-col items-center justify-center gap-2 cursor-default"
              >
                <span className="text-3xl">{amenity.icon}</span>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">{amenity.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🟢 Popular Cities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Popular Cities</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Explore listings in high-demand cities</p>
          </div>
          <button
            onClick={() => navigate("/browserooms")}
            className="text-[#002e82] hover:underline font-semibold text-sm sm:text-base shrink-0"
          >
            View All →
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {[
            { name: "Pune", count: "1200+ Rooms", img: "c1.png" },
            { name: "Mumbai", count: "1500+ Rooms", img: "c2.png" },
            { name: "Nagpur", count: "1000+ Rooms", img: "c3.png" },
            { name: "Nashik", count: "850+ Rooms", img: "c4.png" },
            { name: "Agra", count: "500+ Rooms", img: "c5.png" },
            { name: "Kolhapur", count: "400+ Rooms", img: "c6.png" },
          ].map((city, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/browse?city=${city.name}`)}
              className="group cursor-pointer bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={`${import.meta.env.BASE_URL}${city.img}`}
                  alt={city.name}
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm sm:text-base text-gray-800 group-hover:text-blue-600 transition">
                  {city.name}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{city.count}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🟢 FAQs (Smooth Accordion Animation) */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-2 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-500 text-sm sm:text-base mb-8">
            Everything you need to know about finding rooms on Nestora.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-blue-200 shadow-md" : "border-gray-200 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-gray-800"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="pr-2">{faq.question}</span>
                    <span className="text-[#002e82] shrink-0">
                      {isOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;