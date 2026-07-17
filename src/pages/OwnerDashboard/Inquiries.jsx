import React from "react";
import {
    FaSearch,
    FaFilter,
    FaEnvelope,
    FaCheckCircle,
    FaClock,
    FaTimesCircle,
} from "react-icons/fa";

export default function Inquiries() {
    return (
        <div className="min-h-screen bg-slate-100">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

                <div>
                    <h1 className="text-4xl font-bold text-gray-800">
                        Inquiries
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage all student inquiries from one place.
                    </p>
                </div>

                <div className="flex gap-4">

                    {/* Search */}

                    <div className="relative">

                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            type="text"
                            placeholder="Search inquiry..."
                            className="pl-11 pr-5 py-3 rounded-xl border bg-white w-72 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    {/* Filter */}

                    <button className="flex items-center gap-2 px-5 py-3 bg-white border rounded-xl hover:bg-blue-50">

                        <FaFilter />

                        Filter

                    </button>

                </div>

            </div>

            {/* Stats Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {/* Card */}

                <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                Total Inquiries
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                120
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

                            <FaEnvelope className="text-3xl text-blue-600" />

                        </div>

                    </div>

                </div>

                {/* Card */}

                <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                New Today
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                18
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

                            <FaClock className="text-3xl text-green-600" />

                        </div>

                    </div>

                </div>

                {/* Card */}

                <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                Contacted
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                84
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">

                            <FaCheckCircle className="text-3xl text-yellow-600" />

                        </div>

                    </div>

                </div>

                {/* Card */}

                <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                Closed
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                21
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">

                            <FaTimesCircle className="text-3xl text-red-600" />

                        </div>

                    </div>

                </div>

            </div>

            {/* Inquiry Cards Part-2 */}
            {/* ================= Inquiry Cards ================= */}

            <div className="mt-10 space-y-6">

                {/* Card 1 */}

                <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl duration-300">

                    <div className="flex flex-col lg:flex-row justify-between gap-6">

                        {/* Left */}

                        <div className="flex gap-5">

                            <img
                                src={`${import.meta.env.BASE_URL}user1.png`}
                                alt=""
                                className="w-24 h-24 rounded-2xl object-cover"
                            />

                            <div>

                                <div className="flex items-center gap-3">

                                    <h2 className="text-2xl font-bold">
                                        Rahul Sharma
                                    </h2>

                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        New
                                    </span>

                                </div>

                                <p className="text-gray-500 mt-2">
                                    Interested in:
                                    <span className="font-semibold text-gray-700">
                                        {" "}Luxury 1 BHK Apartment
                                    </span>
                                </p>

                                <p className="text-gray-500 mt-1">
                                    📍 Baner, Pune
                                </p>

                                <p className="text-gray-500 mt-1">
                                    📞 +91 9876543210
                                </p>

                                <p className="text-gray-500 mt-1">
                                    📧 rahul@gmail.com
                                </p>

                                <p className="mt-4 text-gray-600">
                                    "Hello, I am interested in this property.
                                    Can I schedule a visit tomorrow evening?"
                                </p>

                            </div>

                        </div>

                        {/* Right */}

                        <div className="flex flex-col justify-between items-end">

                            <div className="text-right">

                                <p className="text-gray-500">
                                    Inquiry Date
                                </p>

                                <h3 className="font-bold">
                                    16 July 2026
                                </h3>

                            </div>

                            <div className="flex gap-3 mt-6">

                                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
                                    View
                                </button>

                                <button className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700">
                                    Contact
                                </button>

                                <button className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600">
                                    Reject
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Card 2 */}

                <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl duration-300">

                    <div className="flex flex-col lg:flex-row justify-between gap-6">

                        <div className="flex gap-5">

                            <img
                                src={`${import.meta.env.BASE_URL}user2.png`}
                                alt=""
                                className="w-24 h-24 rounded-2xl object-cover"
                            />

                            <div>

                                <div className="flex items-center gap-3">

                                    <h2 className="text-2xl font-bold">
                                        Priya Patel
                                    </h2>

                                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                                        Contacted
                                    </span>

                                </div>

                                <p className="text-gray-500 mt-2">
                                    Interested in:
                                    <span className="font-semibold text-gray-700">
                                        {" "}Girls PG
                                    </span>
                                </p>

                                <p className="text-gray-500 mt-1">
                                    📍 Wakad, Pune
                                </p>

                                <p className="text-gray-500 mt-1">
                                    📞 +91 9988776655
                                </p>

                                <p className="text-gray-500 mt-1">
                                    📧 priya@gmail.com
                                </p>

                                <p className="mt-4 text-gray-600">
                                    "I would like to know whether food and
                                    Wi-Fi are included in the rent."
                                </p>

                            </div>

                        </div>

                        <div className="flex flex-col justify-between items-end">

                            <div className="text-right">

                                <p className="text-gray-500">
                                    Inquiry Date
                                </p>

                                <h3 className="font-bold">
                                    15 July 2026
                                </h3>

                            </div>

                            <div className="flex gap-3 mt-6">

                                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
                                    View
                                </button>

                                <button className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700">
                                    Contact
                                </button>

                                <button className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600">
                                    Reject
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= Bottom Section ================= */}

            <div className="grid lg:grid-cols-3 gap-8 mt-10">

                {/* Recent Activity */}

                <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                    <div className="flex items-center justify-between mb-8">

                        <h2 className="text-2xl font-bold">
                            Recent Inquiry Activity
                        </h2>

                        <button className="text-blue-600 font-semibold hover:underline">
                            View All
                        </button>

                    </div>

                    <div className="space-y-6">

                        <div className="flex gap-4 items-start">

                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                                📩
                            </div>

                            <div>

                                <h3 className="font-bold">
                                    Rahul Sharma sent an inquiry
                                </h3>

                                <p className="text-gray-500">
                                    Luxury 1 BHK Apartment
                                </p>

                                <span className="text-sm text-gray-400">
                                    10 minutes ago
                                </span>

                            </div>

                        </div>

                        <div className="flex gap-4 items-start">

                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
                                📞
                            </div>

                            <div>

                                <h3 className="font-bold">
                                    You contacted Priya Patel
                                </h3>

                                <p className="text-gray-500">
                                    Girls PG
                                </p>

                                <span className="text-sm text-gray-400">
                                    Today
                                </span>

                            </div>

                        </div>

                        <div className="flex gap-4 items-start">

                            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                                👀
                            </div>

                            <div>

                                <h3 className="font-bold">
                                    Listing viewed 128 times
                                </h3>

                                <p className="text-gray-500">
                                    Last 24 Hours
                                </p>

                                <span className="text-sm text-gray-400">
                                    Analytics
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Summary */}

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-lg p-8 text-white">

                    <h2 className="text-2xl font-bold">
                        Inquiry Summary
                    </h2>

                    <div className="mt-8 space-y-6">

                        <div className="flex justify-between">
                            <span>Total</span>
                            <span className="font-bold">84</span>
                        </div>

                        <div className="flex justify-between">
                            <span>New</span>
                            <span className="font-bold">18</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Contacted</span>
                            <span className="font-bold">46</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Closed</span>
                            <span className="font-bold">20</span>
                        </div>

                    </div>

                    <button className="mt-10 w-full bg-white text-blue-700 py-4 rounded-xl font-bold hover:scale-105 duration-300">
                        Export Report
                    </button>

                </div>

            </div>

            {/* ================= Pagination ================= */}

            <div className="flex justify-center mt-10 gap-3">

                <button className="w-11 h-11 rounded-xl bg-gray-200 hover:bg-gray-300">
                    1
                </button>

                <button className="w-11 h-11 rounded-xl bg-blue-600 text-white">
                    2
                </button>

                <button className="w-11 h-11 rounded-xl bg-gray-200 hover:bg-gray-300">
                    3
                </button>

                <button className="px-5 rounded-xl bg-gray-200 hover:bg-gray-300">
                    Next →
                </button>

            </div>

        </div>
    );
}