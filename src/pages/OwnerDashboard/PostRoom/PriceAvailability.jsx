import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaRupeeSign,
    FaCalendarAlt,
    FaUserFriends,
    FaFileContract,
} from "react-icons/fa";

const PriceAvailability = () => {

    const [rent, setRent] = useState("");
    const [deposit, setDeposit] = useState("");
    const [maintenance, setMaintenance] = useState("");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f5f8ff]">

            {/* Header */}

            <div className="bg-white shadow-sm px-10 py-8">

                <h1 className="text-4xl font-bold">
                    Price & Availability
                </h1>

                <p className="text-gray-500 mt-2">
                    Set rent details and availability.
                </p>

            </div>

            {/* Stepper */}

            <div className="max-w-7xl mx-auto px-8 mt-10">

                <div className="flex justify-between">

                    {[
                        "Basic",
                        "Photos",
                        "Pricing",
                        "Amenities",
                        "Review",
                    ].map((item, index) => (

                        <div key={index} className="flex flex-col items-center flex-1">

                            <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold
              ${index == 2
                                    ? "bg-blue-600 text-white"
                                    : index < 2
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-300 text-gray-600"
                                }`}>

                                {index + 1}

                            </div>

                            <p className="mt-3">{item}</p>

                        </div>

                    ))}

                </div>

            </div>

            {/* Form */}

            <div className="max-w-7xl mx-auto px-8 mt-12 grid lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-3xl font-bold mb-8">
                        Pricing Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Rent */}

                        <div>

                            <label className="font-semibold">
                                Monthly Rent
                            </label>

                            <div className="flex mt-2">

                                <span className="bg-blue-600 text-white px-5 rounded-l-xl flex items-center">

                                    <FaRupeeSign />

                                </span>

                                <input
                                    value={rent}
                                    onChange={(e) => setRent(e.target.value)}
                                    type="number"
                                    placeholder="7500"
                                    className="w-full border rounded-r-xl p-4 outline-none" />

                            </div>

                        </div>

                        {/* Deposit */}

                        <div>

                            <label className="font-semibold">
                                Security Deposit
                            </label>

                            <div className="flex mt-2">

                                <span className="bg-blue-600 text-white px-5 rounded-l-xl flex items-center">

                                    <FaRupeeSign />

                                </span>

                                <input
                                    value={deposit}
                                    onChange={(e) => setDeposit(e.target.value)}
                                    type="number"
                                    placeholder="15000"
                                    className="w-full border rounded-r-xl p-4 outline-none" />

                            </div>

                        </div>

                        {/* Maintenance */}

                        <div>

                            <label className="font-semibold">
                                Maintenance Charges
                            </label>

                            <div className="flex mt-2">

                                <span className="bg-blue-600 text-white px-5 rounded-l-xl flex items-center">

                                    <FaRupeeSign />

                                </span>

                                <input
                                    value={maintenance}
                                    onChange={(e) => setMaintenance(e.target.value)}
                                    type="number"
                                    placeholder="1000"
                                    className="w-full border rounded-r-xl p-4 outline-none" />

                            </div>

                        </div>

                        {/* Available */}

                        <div>

                            <label className="font-semibold">
                                Available From
                            </label>

                            <div className="flex mt-2">

                                <span className="bg-blue-600 text-white px-5 rounded-l-xl flex items-center">

                                    <FaCalendarAlt />

                                </span>

                                <input
                                    type="date"
                                    className="w-full border rounded-r-xl p-4" />

                            </div>

                        </div>

                        {/* Tenant */}

                        <div>

                            <label className="font-semibold">
                                Preferred Tenant
                            </label>

                            <div className="flex mt-2">

                                <span className="bg-blue-600 text-white px-5 rounded-l-xl flex items-center">

                                    <FaUserFriends />

                                </span>

                                <select className="w-full border rounded-r-xl p-4">

                                    <option>Anyone</option>
                                    <option>Students</option>
                                    <option>Family</option>
                                    <option>Bachelors</option>
                                    <option>Female</option>
                                    <option>Male</option>

                                </select>

                            </div>

                        </div>

                        {/* Agreement */}

                        <div>

                            <label className="font-semibold">
                                Agreement
                            </label>

                            <div className="flex mt-2">

                                <span className="bg-blue-600 text-white px-5 rounded-l-xl flex items-center">

                                    <FaFileContract />

                                </span>

                                <select className="w-full border rounded-r-xl p-4">

                                    <option>6 Months</option>
                                    <option>11 Months</option>
                                    <option>1 Year</option>

                                </select>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Side Preview */}

                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold">
                        Pricing Summary
                    </h2>

                    <div className="space-y-5 mt-8">

                        <div className="flex justify-between">
                            <span>Monthly Rent</span>
                            <span className="font-bold">₹ {rent || 0}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Deposit</span>
                            <span className="font-bold">₹ {deposit || 0}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Maintenance</span>
                            <span className="font-bold">₹ {maintenance || 0}</span>
                        </div>

                    </div>

                </div>

                {/* ================= EXTRA OPTIONS ================= */}

                <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold">
                        Additional Options
                    </h2>

                    {/* Minimum Stay */}

                    <div className="mt-6">

                        <label className="font-semibold">
                            Minimum Stay
                        </label>

                        <select className="w-full mt-2 border rounded-xl p-4">
                            <option>1 Month</option>
                            <option>3 Months</option>
                            <option>6 Months</option>
                            <option>1 Year</option>
                        </select>

                    </div>

                    {/* Rent Negotiable */}

                    <div className="flex justify-between items-center mt-8">

                        <div>
                            <h3 className="font-semibold">
                                Rent Negotiable
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Allow tenants to negotiate the rent.
                            </p>
                        </div>

                        <label className="relative inline-flex items-center cursor-pointer">

                            <input
                                type="checkbox"
                                className="sr-only peer"
                            />

                            <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 duration-300"></div>

                            <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all peer-checked:translate-x-6"></div>

                        </label>

                    </div>

                    {/* Utility Bills */}

                    <div className="flex justify-between items-center mt-8">

                        <div>

                            <h3 className="font-semibold">
                                Utilities Included
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Water & Electricity included in rent.
                            </p>

                        </div>

                        <label className="relative inline-flex items-center cursor-pointer">

                            <input
                                type="checkbox"
                                className="sr-only peer"
                            />

                            <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-green-600 duration-300"></div>

                            <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all peer-checked:translate-x-6"></div>

                        </label>

                    </div>

                </div>

                {/* ================= AI PRICE CARD ================= */}

                <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">

                    <h2 className="text-2xl font-bold">
                        🤖 AI Rent Suggestion
                    </h2>

                    <p className="mt-4 opacity-90">
                        Based on your location and room size,
                        the recommended monthly rent is:
                    </p>

                    <h1 className="text-5xl font-bold mt-6">
                        ₹ 8,000
                    </h1>

                    <p className="mt-4 text-blue-100">
                        Similar properties in your area are rented
                        between ₹7,500 - ₹8,500.
                    </p>

                    <button
                        className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:scale-105 duration-300"
                    >
                        Apply Suggested Price
                    </button>

                </div>

                {/* ================= MARKET INSIGHTS ================= */}

                <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold">
                        📊 Market Insights
                    </h2>

                    <div className="mt-8 space-y-5">

                        <div className="flex justify-between">
                            <span>Average Rent</span>
                            <span className="font-bold text-green-600">
                                ₹ 7,800
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Demand</span>
                            <span className="font-bold text-blue-600">
                                High
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Expected Views</span>
                            <span className="font-bold">
                                150+ / week
                            </span>
                        </div>

                    </div>

                </div>

                {/* ================= PRICE BREAKDOWN ================= */}

                <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold">
                        💰 Estimated Monthly Cost
                    </h2>

                    <div className="mt-8 space-y-4">

                        <div className="flex justify-between">
                            <span>Monthly Rent</span>
                            <span className="font-semibold">
                                ₹ {rent || 0}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Maintenance</span>
                            <span className="font-semibold">
                                ₹ {maintenance || 0}
                            </span>
                        </div>

                        <hr />

                        <div className="flex justify-between text-xl font-bold text-blue-600">

                            <span>Total / Month</span>

                            <span>
                                ₹ {(Number(rent) || 0) + (Number(maintenance) || 0)}
                            </span>

                        </div>

                    </div>

                </div>

                {/* ================= TIPS ================= */}

                <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-8">

                    <h2 className="text-2xl font-bold">
                        💡 Pricing Tips
                    </h2>

                    <ul className="mt-6 space-y-4">

                        <li>✔ Competitive pricing gets more tenant inquiries.</li>

                        <li>✔ Mention if maintenance is included.</li>

                        <li>✔ Round figures like ₹8,000 look cleaner.</li>

                        <li>✔ Keep deposit reasonable.</li>

                    </ul>

                </div>

                {/* ================= NAVIGATION ================= */}

                <div className="mt-10 flex justify-between">

                    <button
                        onClick={() => navigate("/dashboard/post-room/photos")}
                    >
                        Back
                    </button>

                    <div className="flex gap-4">

                        <button
                            className="px-8 py-4 rounded-xl bg-gray-200 hover:bg-gray-300 font-semibold duration-300"
                        >
                            Save Draft
                        </button>

                        <button
                            onClick={() => navigate("/dashboard/post-room/amenities")}
                        >
                            Next
                        </button>

                    </div>

                </div>

                {/* ================= COMPLETION ================= */}

                <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6">

                    <h3 className="text-xl font-bold text-green-700">
                        ✅ Pricing Completed
                    </h3>

                    <p className="text-green-600 mt-2">
                        Great! Your pricing details have been added.
                        Continue to the Amenities section.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default PriceAvailability;