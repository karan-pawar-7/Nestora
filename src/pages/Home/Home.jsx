import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import React from 'react'
import { useState } from "react";

import ScrollReveal from "../../components/ScrollReveal";

const faqs = [
    {
        question: "How do I book a room?",
        answer:
            "Browse rooms, contact the owner, visit the property, and finalize your booking.",
    },
    {
        question: "Are all rooms verified?",
        answer:
            "Yes. Every room is manually verified before it is published.",
    },
    {
        question: "Is there any booking fee?",
        answer:
            "No. Nestora does not charge tenants any booking fee.",
    },
    {
        question: "How can I contact the owner?",
        answer:
            "Open the room details page and click the Contact Owner button.",
    },
];


const Home = () => {

    const [openIndex, setOpenIndex] = useState(null);
    return (

        <>

            <section
                className="h-120 bg-cover bg-center  bg-black/35"


                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}h1.png)`,
                }}
            >

                {/* Content */}
                <div className="flex pt-15 justify-center max-w-7xl mx-auto min-h-screen">
                    <div className="max-w-3xl items-center flex flex-col">


                        <h1
                            data-aos="fade-down"
                            className="text-5xl lg:text-6xl font-bold text-white"
                        >                            Find Your Perfect Room
                        </h1>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="flex flex-col items-center justify-center text-2xl"
                        >                            <p className=" mt-6 text-white ">
                                Discover comfortable and affordable rooms
                            </p>
                            <p className=" text-white">near your favorite locations.</p>
                        </div>


                        {/* Search Box */}
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="400"
                            className="bg-white rounded-2xl shadow-xl p-4 mt-10 flex items-center justify-center"
                        >                            <div className="grid md:grid-cols-4 gap-4">

                                <div className="flex items-center border rounded-xl px-3">
                                    <FaMapMarkerAlt className="text-[#113270]" />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="w-full p-3 outline-none"
                                    />
                                </div>

                                <select className="border rounded-xl p-3">
                                    <option>Budget</option>
                                    <option>₹1000 - ₹3000</option>
                                    <option>₹3000 - ₹5000</option>
                                    <option>₹5000 - ₹8000</option>
                                    <option>₹8000+</option>
                                </select>

                                <select className="border rounded-xl p-3">
                                    <option>Room Type</option>
                                    <option>Single Room</option>
                                    <option>Double Sharing</option>
                                    <option>1 BHK</option>
                                    <option>2 BHK</option>
                                </select>

                                <button className="bg-[#002e82] hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2 font-semibold">
                                    <FaSearch />
                                    Search
                                </button>

                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="flex flex-wrap gap-8 mt-10 text-white"
                        >
                            <div>
                                <h2 className="text-3xl font-bold">10K+</h2>
                                <p>Rooms Listed</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">5K+</h2>
                                <p>Happy Tenants</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">50+</h2>
                                <p>Cities</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <div className=" flex flex-col mt-5">


                <div
                    data-aos="fade-up"
                    className="flex items-center justify-between mx-13 font-bold mt-3"
                >                        <h1>Featured Rooms</h1>
                    <h1 className="text-[#002e82]">View All</h1>
                </div>

                <div className="flex gap-8 py-5 items-center justify-center" >

                    <ScrollReveal direction="up" delay={0.3}>
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
                            <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} alt="" />
                            <div className="p-3">
                                <h1 className="font-bold">1 BHK</h1>
                                <h1>Hinjewadi, Pune</h1>
                                <div className="flex items-end gap-1">
                                    <h1 className="text-[20px] text-[#002e82] font-bold">₹9000 </h1>
                                    <h1> /month</h1>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.5} >
                        <div className="h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-100 group-hover:scale-110">
                            <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r2.png`} alt="" />
                            <div className="p-3">
                                <h1 className="font-bold">Single Room</h1>
                                <h1>Koregaon Park, Pune</h1>
                                <div className="flex items-end gap-1">
                                    <h1 className="text-[20px] text-[#002e82] font-bold">₹3000 </h1>
                                    <h1> /month</h1>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>


                    <ScrollReveal direction="up" delay={0.7}>
                        <div className="h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110" >
                            <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r3.png`} alt="" />
                            <div className="p-3">
                                <h1 className="font-bold">2 BHK Flat</h1>
                                <h1>Viman Nagar, Pune</h1>
                                <div className="flex items-end gap-1">
                                    <h1 className="text-[20px] text-[#002e82] font-bold">₹15000 </h1>
                                    <h1> /month</h1>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.9}>
                        <div className="h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
                            <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r4.png`} alt="" />
                            <div className="p-3">
                                <h1 className="font-bold">1 RK Studio</h1>
                                <h1>Wakad, Pune</h1>
                                <div className="flex items-end gap-1">
                                    <h1 className="text-[20px] text-[#002e82] font-bold">₹5500 </h1>
                                    <h1> /month</h1>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={1}>
                        <div
                            className="h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110" >
                            <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r5.png`} alt="" />
                            <div className="p-3">
                                <h1 className="font-bold">Shared Room</h1>
                                <h1>Baner, Pune</h1>
                                <div className="flex items-end gap-1">
                                    <h1 className="text-[20px] text-[#002e82] font-bold">₹2500 </h1>
                                    <h1> /month</h1>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>


                </div>


            </div >

            <section className="py-10 bg-white">
                <div className="h-full py-5 w-fit rounded-b-2xl " >
                    <div className="flex justify-between ml-150  items-center  mb-8">
                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl font-bold">Recently Added Rooms</h2>
                            <p className="text-gray-500">
                                Explore the latest verified room listings.
                            </p>
                        </div>

                        <button className="text-[#002e82] font-semibold hover:underline">
                            View All →
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mx-5">

                        {/* Room Card */}
                        <div className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 overflow-hidden" data-aos="fade-up"
                            data-aos-delay="200">
                            <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} />

                            <div className="p-5">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                                    NEW
                                </span>

                                <h3 className="text-xl font-bold mt-3">
                                    Modern Studio Room
                                </h3>

                                <p className="text-gray-500">
                                    Baner, Pune
                                </p>

                                <h4 className="text-[#002e82] text-2xl font-bold mt-3">
                                    ₹8,500
                                    <span className="text-gray-500 text-base">
                                        /month
                                    </span>
                                </h4>

                                <button className="w-full mt-5 bg-[#002e82] text-white py-3 rounded-xl hover:bg-blue-700">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div  data-aos="fade-up"
                            data-aos-delay="200" className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 overflow-hidden">
                            <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} />

                            <div className="p-5">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                                    NEW
                                </span>

                                <h3 className="text-xl font-bold mt-3">
                                    Modern Studio Room
                                </h3>

                                <p className="text-gray-500">
                                    Baner, Pune
                                </p>

                                <h4 className="text-[#002e82] text-2xl font-bold mt-3">
                                    ₹8,500
                                    <span className="text-gray-500 text-base">
                                        /month
                                    </span>
                                </h4>

                                <button className="w-full mt-5 bg-[#002e82] text-white py-3 rounded-xl hover:bg-blue-700">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div  data-aos="fade-up"
                            data-aos-delay="200" className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 overflow-hidden">
                            <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} />

                            <div className="p-5">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                                    NEW
                                </span>

                                <h3 className="text-xl font-bold mt-3">
                                    Modern Studio Room
                                </h3>

                                <p className="text-gray-500">
                                    Baner, Pune
                                </p>

                                <h4 className="text-[#002e82] text-2xl font-bold mt-3">
                                    ₹8,500
                                    <span className="text-gray-500 text-base">
                                        /month
                                    </span>
                                </h4>

                                <button className="w-full mt-5 bg-[#002e82] text-white py-3 rounded-xl hover:bg-blue-700">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div  data-aos="fade-up"
                            data-aos-delay="200" className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 overflow-hidden">
                            <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} />

                            <div className="p-5">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                                    NEW
                                </span>

                                <h3 className="text-xl font-bold mt-3">
                                    Modern Studio Room
                                </h3>

                                <p className="text-gray-500">
                                    Baner, Pune
                                </p>

                                <h4 className="text-[#002e82] text-2xl font-bold mt-3">
                                    ₹8,500
                                    <span className="text-gray-500 text-base">
                                        /month
                                    </span>
                                </h4>

                                <button className="w-full mt-5 bg-[#002e82] text-white py-3 rounded-xl hover:bg-blue-700">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div  data-aos="fade-up"
                            data-aos-delay="200" className="bg-white rounded-2xl shadow hover:shadow-xl duration-300 overflow-hidden">
                            <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r1.png`} />

                            <div className="p-5">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                                    NEW
                                </span>

                                <h3 className="text-xl font-bold mt-3">
                                    Modern Studio Room
                                </h3>

                                <p className="text-gray-500">
                                    Baner, Pune
                                </p>

                                <h4 className="text-[#002e82] text-2xl font-bold mt-3">
                                    ₹8,500
                                    <span className="text-gray-500 text-base">
                                        /month
                                    </span>
                                </h4>

                                <button className="w-full mt-5 bg-[#002e82] text-white py-3 rounded-xl hover:bg-blue-700">
                                    View Details
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-5 bg-gray-50">

                <div className="container mx-auto px-6">

                    <h2 className="text-3xl font-semibold text-center mb-10">
                        Top Amenities
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            📶
                            <p>Wi-Fi</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            ❄️
                            <p>AC</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            🚗
                            <p>Parking</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            🧺
                            <p>Laundry</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            🍽️
                            <p>Kitchen</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            ⚡
                            <p>Power Backup</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            📹
                            <p>CCTV</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            💧
                            <p>RO Water</p>
                        </div>

                    </div>

                </div>

            </section>

            <div>
                <div className="flex items-center justify-between mx-13 mt-8 font-bold">
                    <h1>Popular Cities</h1>
                    <h1 className="text-[#002e82]">View All</h1>
                </div>
                <div className="flex gap-6 py-5 px-12 justify-center">
                    <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
                        <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c1.png`} />
                        <div className="p-3">
                            <h1 className="font-bold">Pune</h1>
                            <h1>1200+ Rooms</h1>
                        </div>
                    </div>
                    <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
                        <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c2.png`} />
                        <div className="p-3">
                            <h1 className="font-bold">Mumbai</h1>
                            <h1>1500+ Rooms</h1>
                        </div>
                    </div>
                    <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
                        <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c3.png`} />
                        <div className="p-3">
                            <h1 className="font-bold">Nagpur</h1>
                            <h1>1000+ Rooms</h1>
                        </div>
                    </div>
                    <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
                        <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c4.png`} />
                        <div className="p-3">
                            <h1 className="font-bold">Nashik</h1>
                            <h1>850+ Rooms</h1>
                        </div>
                    </div>
                    <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
                        <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c5.png`} />
                        <div className="p-3">
                            <h1 className="font-bold">Agra</h1>
                            <h1>500+ Rooms</h1>
                        </div>
                    </div>
                    <div className=" h-full w-fit shadow-2xl rounded-b-2xl hover:-translate-y-2 hover:shadow-2xl duration-300 group-hover:scale-110">
                        <img className="h-36 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c6.png`} />
                        <div className="p-3">
                            <h1 className="font-bold">Kolhpura</h1>
                            <h1>400+ Rooms</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-10 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">

                    <h2 className="text-4xl font-semibold text-center mb-3">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-center text-gray-500 mb-10">
                        Everything you need to know about Nestora.
                    </p>

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="mb-4 bg-white rounded-xl shadow"
                        >
                            <button
                                className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                {faq.question}

                                <span className="text-2xl">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="px-5 pb-5 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </section>




        </>
    );
};

export default Home;