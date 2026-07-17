import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaBars,
    FaBell,
    FaComments,
    FaUserCircle,
    FaHome,
    FaList,
    FaPlusCircle,
    FaEnvelope,
    FaCalendarAlt,
    FaRupeeSign,
    FaCog,
    FaQuestionCircle,
    FaSignOutAlt,
    FaCrown,
    FaCheckCircle,
} from "react-icons/fa";

const BasicDetails = () => {

    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen bg-[#f5f8ff]">

            {/* ================= Sidebar ================= */}

               

            

            {/* ================= Main ================= */}

            <main className="flex-1">

                {/* Navbar */}

                <div className="bg-white h-24 shadow-sm flex justify-between items-center px-10">

                    <div className="flex items-center gap-6">

                        <FaBars className="text-2xl cursor-pointer" />

                        <div>

                            <h1 className="text-4xl font-bold">
                                Post Your Room
                            </h1>

                            <p className="text-gray-500 mt-1">
                                List your room and find the perfect tenant.
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-8">

                        <button className="border rounded-xl px-6 py-3 hover:bg-gray-100">
                            Save Draft
                        </button>

                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                            <FaCheckCircle />
                            Draft Saved
                        </div>

                        <FaBell className="text-2xl cursor-pointer" />

                        <FaComments className="text-2xl cursor-pointer" />

                        <FaUserCircle className="text-5xl text-blue-600" />

                    </div>

                </div>

                {/* Progress */}

                <div className="px-10 py-10">

                    <div className="flex justify-between items-center">

                        {[
                            "Basic Details",
                            "Photos",
                            "Pricing",
                            "Amenities",
                            "Review",
                        ].map((step, index) => (

                            <div
                                key={index}
                                className="flex-1 flex flex-col items-center relative"
                            >

                                <div
                                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg
                  ${index === 0
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {index + 1}
                                </div>

                                <p
                                    className={`mt-3 font-medium ${index === 0
                                        ? "text-blue-600"
                                        : "text-gray-500"
                                        }`}
                                >
                                    {step}
                                </p>

                            </div>

                        ))}

                    </div>
                </div>

                {/* ================= BASIC DETAILS ================= */}

                <div className="px-10 pb-10">

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* LEFT FORM */}

                        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                            <h2 className="text-3xl font-bold mb-8">
                                Basic Property Details
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div>
                                    <label className="font-semibold">Property Title</label>
                                    <input
                                        type="text"
                                        placeholder="Luxury 1 BHK Apartment"
                                        className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="font-semibold">Property Type</label>

                                    <select className="w-full mt-2 border rounded-xl p-4">
                                        <option>Apartment</option>
                                        <option>PG</option>
                                        <option>Hostel</option>
                                        <option>Villa</option>
                                    </select>

                                </div>

                                <div>
                                    <label className="font-semibold">Room Type</label>

                                    <select className="w-full mt-2 border rounded-xl p-4">
                                        <option>1 RK</option>
                                        <option>1 BHK</option>
                                        <option>2 BHK</option>
                                        <option>Studio</option>
                                    </select>

                                </div>

                                <div>
                                    <label className="font-semibold">Furnishing</label>

                                    <select className="w-full mt-2 border rounded-xl p-4">
                                        <option>Fully Furnished</option>
                                        <option>Semi Furnished</option>
                                        <option>Unfurnished</option>
                                    </select>

                                </div>

                                <div className="md:col-span-2">

                                    <label className="font-semibold">
                                        Property Address
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter complete address"
                                        className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                </div>

                                <div>
                                    <label className="font-semibold">
                                        City
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Pune"
                                        className="w-full mt-2 border rounded-xl p-4"
                                    />

                                </div>

                                <div>
                                    <label className="font-semibold">
                                        Area
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Hinjewadi"
                                        className="w-full mt-2 border rounded-xl p-4"
                                    />

                                </div>

                                <div>
                                    <label className="font-semibold">
                                        Carpet Area
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="650 sq.ft"
                                        className="w-full mt-2 border rounded-xl p-4"
                                    />

                                </div>

                                <div>
                                    <label className="font-semibold">
                                        Floor
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="3rd Floor"
                                        className="w-full mt-2 border rounded-xl p-4"
                                    />

                                </div>

                                <div>
                                    <label className="font-semibold">
                                        Bedrooms
                                    </label>

                                    <input
                                        type="number"
                                        placeholder="2"
                                        className="w-full mt-2 border rounded-xl p-4"
                                    />

                                </div>

                                <div>
                                    <label className="font-semibold">
                                        Bathrooms
                                    </label>

                                    <input
                                        type="number"
                                        placeholder="2"
                                        className="w-full mt-2 border rounded-xl p-4"
                                    />

                                </div>

                            </div>

                            <div className="mt-8">

                                <label className="font-semibold">
                                    Property Description
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Describe your room..."
                                    className="w-full mt-2 border rounded-xl p-4 resize-none"
                                ></textarea>

                            </div>

                            <div className="flex justify-between mt-10">

                                <button className="px-8 py-4 rounded-xl border hover:bg-gray-100">
                                    Save Draft
                                </button>

                                <button
                                    onClick={() => navigate("/dashboard/post-room/photos")}
                                >
                                    Next
                                </button>

                            </div>

                        </div>
                        {/* ================= RIGHT LIVE PREVIEW ================= */}

                        <div className="space-y-6">

                            {/* Preview Card */}
                            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                                <img
                                    src="/room-preview.jpg"
                                    alt="Room Preview"
                                    className="w-full h-60 object-cover"
                                />

                                <div className="p-6">

                                    <div className="flex justify-between items-center">

                                        <h2 className="text-2xl font-bold">
                                            Luxury 1 BHK
                                        </h2>

                                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                                            Available
                                        </span>

                                    </div>

                                    <p className="text-gray-500 mt-3">
                                        📍 Hinjewadi Phase 2, Pune
                                    </p>

                                    <h3 className="text-3xl font-bold text-blue-600 mt-5">
                                        ₹7,500
                                        <span className="text-lg text-gray-500 font-normal">
                                            /month
                                        </span>
                                    </h3>

                                    {/* Features */}

                                    <div className="grid grid-cols-2 gap-4 mt-6">

                                        <div className="bg-blue-50 rounded-xl p-4 text-center">
                                            🛏
                                            <p className="font-semibold mt-2">2 Bedrooms</p>
                                        </div>

                                        <div className="bg-blue-50 rounded-xl p-4 text-center">
                                            🚿
                                            <p className="font-semibold mt-2">2 Bathrooms</p>
                                        </div>

                                        <div className="bg-blue-50 rounded-xl p-4 text-center">
                                            📐
                                            <p className="font-semibold mt-2">650 sqft</p>
                                        </div>

                                        <div className="bg-blue-50 rounded-xl p-4 text-center">
                                            🚗
                                            <p className="font-semibold mt-2">Parking</p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Completion */}

                            <div className="bg-white rounded-3xl shadow-lg p-6">

                                <div className="flex justify-between">

                                    <h3 className="font-bold text-xl">
                                        Listing Completion
                                    </h3>

                                    <span className="text-blue-600 font-bold">
                                        25%
                                    </span>

                                </div>

                                <div className="h-3 bg-gray-200 rounded-full mt-5">

                                    <div className="w-1/4 h-3 rounded-full bg-blue-600"></div>

                                </div>

                                <p className="text-gray-500 mt-5">
                                    Complete all steps to publish your room.
                                </p>

                            </div>

                            {/* Tips */}

                            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-6">

                                <h2 className="text-2xl font-bold">
                                    💡 Tips
                                </h2>

                                <ul className="mt-5 space-y-3">

                                    <li>✔ Use a clear property title.</li>

                                    <li>✔ Upload high-quality photos.</li>

                                    <li>✔ Mention nearby colleges or offices.</li>

                                    <li>✔ Set a competitive rent price.</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>



            </main>


        </div>

    );
}

export default BasicDetails;