import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function Dashboard() {

    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>


            {/* Welcome Section */}
            <div className="p-8">

                <div className="flex items-center justify-between">

                    <div>

                        <h1 className="text-4xl font-bold">
                            Welcome Back 👋
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage your properties and monitor your business.
                        </p>

                    </div>

                    <button
                        onClick={() => navigate("/dashboard/post-room/basic-details")}
                        className="bg-blue-600 text-white px-8 py-4 rounded-xl"
                    >
                        + Post New Room
                    </button>

                </div>

                {/* Stats Cards yahan Part 1B me add honge */}

                {/* ====================== STATS CARDS ====================== */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mt-10">

                    {/* Card 1 */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">Total Listings</p>

                                <h2 className="text-4xl font-bold mt-3">
                                    12
                                </h2>

                                <p className="text-green-600 mt-3 text-sm">
                                    +3 this month
                                </p>

                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
                                🏠
                            </div>

                        </div>

                    </div>

                    {/* Card 2 */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">
                                    Active Listings
                                </p>

                                <h2 className="text-4xl font-bold mt-3">
                                    8
                                </h2>

                                <p className="text-green-600 mt-3 text-sm">
                                    67% Active
                                </p>

                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                                ✅
                            </div>

                        </div>

                    </div>

                    {/* Card 3 */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">
                                    Total Views
                                </p>

                                <h2 className="text-4xl font-bold mt-3">
                                    2.4K
                                </h2>

                                <p className="text-blue-600 mt-3 text-sm">
                                    +15%
                                </p>

                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
                                👀
                            </div>

                        </div>

                    </div>

                    {/* Card 4 */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">
                                    Inquiries
                                </p>

                                <h2 className="text-4xl font-bold mt-3">
                                    84
                                </h2>

                                <p className="text-orange-500 mt-3 text-sm">
                                    18 New
                                </p>

                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
                                📩
                            </div>

                        </div>

                    </div>

                    {/* Card 5 */}

                    <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 duration-300">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">
                                    Earnings
                                </p>

                                <h2 className="text-4xl font-bold mt-3">
                                    ₹45K
                                </h2>

                                <p className="text-green-600 mt-3 text-sm">
                                    This Month
                                </p>

                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl">
                                💰
                            </div>

                        </div>

                    </div>

                </div>

                {/* ====================== DASHBOARD OVERVIEW ====================== */}

                <div className="mt-12">

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white">

                        <h2 className="text-3xl font-bold">
                            Dashboard Overview
                        </h2>

                        <p className="mt-4 text-blue-100 max-w-2xl">

                            Welcome to your Nestora Owner Dashboard.
                            Manage your listings, monitor inquiries,
                            track earnings and publish new rooms
                            all from one place.

                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-10">

                            <div className="bg-white/10 rounded-2xl p-6">

                                <h3 className="text-4xl font-bold">
                                    12
                                </h3>

                                <p className="mt-3">
                                    Properties
                                </p>

                            </div>

                            <div className="bg-white/10 rounded-2xl p-6">

                                <h3 className="text-4xl font-bold">
                                    84
                                </h3>

                                <p className="mt-3">
                                    New Inquiries
                                </p>

                            </div>

                            <div className="bg-white/10 rounded-2xl p-6">

                                <h3 className="text-4xl font-bold">
                                    ₹45K
                                </h3>

                                <p className="mt-3">
                                    Monthly Revenue
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ====================== ANALYTICS + RECENT ACTIVITY ====================== */}

                <div className="grid xl:grid-cols-3 gap-8 mt-10">

                    {/* Analytics */}

                    <div className="xl:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                        <div className="flex justify-between items-center">

                            <div>

                                <h2 className="text-2xl font-bold">
                                    Analytics
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Last 7 Days Performance
                                </p>

                            </div>

                            <select className="border rounded-xl px-4 py-2">

                                <option>This Week</option>
                                <option>This Month</option>
                                <option>This Year</option>

                            </select>

                        </div>

                        {/* Fake Chart */}

                        <div className="mt-10 h-72 flex items-end justify-between gap-3">

                            {[45, 70, 35, 90, 60, 85, 100].map((height, index) => (

                                <div
                                    key={index}
                                    className="flex-1 bg-gradient-to-t from-blue-600 to-blue-300 rounded-t-xl hover:scale-105 duration-300"
                                    style={{ height: `${height}%` }}
                                ></div>

                            ))}

                        </div>

                        <div className="flex justify-between mt-4 text-gray-500">

                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>

                        </div>

                    </div>

                    {/* Recent Activity */}

                    <div className="bg-white rounded-3xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold">
                            Recent Activity
                        </h2>

                        <div className="space-y-6 mt-8">

                            <div className="flex gap-4">

                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                                    📩
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        New Inquiry
                                    </h3>

                                    <p className="text-gray-500 text-sm">
                                        Rahul is interested in your 1 BHK.
                                    </p>

                                    <span className="text-xs text-gray-400">
                                        10 min ago
                                    </span>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
                                    ✅
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        Booking Confirmed
                                    </h3>

                                    <p className="text-gray-500 text-sm">
                                        Room booked successfully.
                                    </p>

                                    <span className="text-xs text-gray-400">
                                        1 hour ago
                                    </span>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                                    💰
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        Payment Received
                                    </h3>

                                    <p className="text-gray-500 text-sm">
                                        ₹18,000 rent credited.
                                    </p>

                                    <span className="text-xs text-gray-400">
                                        Today
                                    </span>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                                    🏠
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        New Listing Published
                                    </h3>

                                    <p className="text-gray-500 text-sm">
                                        Your listing is now live.
                                    </p>

                                    <span className="text-xs text-gray-400">
                                        Yesterday
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                {/* ====================== RECENT LISTINGS + QUICK ACTIONS ====================== */}

                <div className="grid xl:grid-cols-3 gap-8 mt-10 ">

                    {/* ================= Recent Listings ================= */}

                    <div className="xl:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                        <div className="flex items-center justify-between mb-8">

                            <h2 className="text-2xl font-bold">
                                Recent Listings
                            </h2>

                            <button className="text-blue-600 font-semibold hover:underline">
                                View All
                            </button>

                        </div>

                        <div className="space-y-6">

                            {/* Card 1 */}

                            <div className="flex items-center justify-between p-5 border rounded-2xl hover:shadow-xl duration-300">

                                <div className="flex gap-5">

                                    <img className="w-32 h-24 rounded-xl object-cover" src={`${import.meta.env.BASE_URL}r4.png`} />


                                    <div>

                                        <h3 className="text-xl font-bold">
                                            Luxury 1 BHK Apartment
                                        </h3>

                                        <p className="text-gray-500 mt-2">
                                            Baner, Pune
                                        </p>

                                        <span className="inline-block mt-3 bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm">
                                            Active
                                        </span>

                                    </div>

                                </div>

                                <div className="text-right">

                                    <h2 className="text-2xl font-bold">
                                        ₹18,000
                                    </h2>

                                    <p className="text-gray-500">
                                        per month
                                    </p>

                                    <button className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                                        Edit
                                    </button>

                                </div>

                            </div>

                            {/* Card 2 */}

                            <div className="flex items-center justify-between p-5 border rounded-2xl hover:shadow-xl duration-300">

                                <div className="flex gap-5">

                                    <img className="w-32 h-24 rounded-xl object-cover" src={`${import.meta.env.BASE_URL}r6.png`} />


                                    <div>

                                        <h3 className="text-xl font-bold">
                                            Modern Studio Room
                                        </h3>

                                        <p className="text-gray-500 mt-2">
                                            Hinjewadi, Pune
                                        </p>

                                        <span className="inline-block mt-3 bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-sm">
                                            Pending
                                        </span>

                                    </div>

                                </div>

                                <div className="text-right">

                                    <h2 className="text-2xl font-bold">
                                        ₹12,000
                                    </h2>

                                    <p className="text-gray-500">
                                        per month
                                    </p>

                                    <button className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                                        Edit
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ================= Quick Actions ================= */}

                    <div className="bg-white rounded-3xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-8">
                            Quick Actions
                        </h2>

                        <div className="grid gap-5">

                            <button className="bg-blue-600 text-white p-5 rounded-2xl hover:scale-105 duration-300 shadow-lg">
                                ➕ Post New Room
                            </button>

                            <button className="bg-green-600 text-white p-5 rounded-2xl hover:scale-105 duration-300 shadow-lg">
                                📋 My Listings
                            </button>

                            <button className="bg-orange-500 text-white p-5 rounded-2xl hover:scale-105 duration-300 shadow-lg">
                                📩 View Inquiries
                            </button>

                            <button className="bg-purple-600 text-white p-5 rounded-2xl hover:scale-105 duration-300 shadow-lg">
                                💰 Earnings
                            </button>

                        </div>

                    </div>



                </div>
                {/* ====================== UPCOMING VISITS + PERFORMANCE ====================== */}

                <div className="grid xl:grid-cols-3 gap-8 mt-10 w-fit">

                    {/* Upcoming Visits */}

                    <div className="xl:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                        <div className="flex justify-between items-center mb-8">

                            <h2 className="text-2xl font-bold">
                                Upcoming Visits
                            </h2>

                            <button className="text-blue-600 hover:underline">
                                View Schedule
                            </button>

                        </div>

                        <div className="space-y-5 w-full">

                            {/* Visit */}

                            <div className="flex items-center justify-between border rounded-2xl p-5 hover:shadow-lg duration-300 ">

                                <div className="flex items-center gap-5">


                                    <img className="w-16 h-16 rounded-full object-cover" src={`${import.meta.env.BASE_URL}user3.png`} />


                                    <div>

                                        <h3 className="text-lg font-bold">
                                            Rahul Sharma
                                        </h3>

                                        <p className="text-gray-500">
                                            Visiting Luxury 1 BHK
                                        </p>

                                    </div>

                                </div>

                                <div className="text-right">

                                    <p className="font-semibold">
                                        Today
                                    </p>

                                    <span className="text-gray-500">
                                        5:00 PM
                                    </span>

                                </div>

                            </div>

                            <div className="flex items-center justify-between border rounded-2xl p-5 hover:shadow-lg duration-300">

                                <div className="flex items-center gap-5">

                                    <img className="w-16 h-16 rounded-full object-cover" src={`${import.meta.env.BASE_URL}user2.png`} />


                                    <div>

                                        <h3 className="text-lg font-bold">
                                            Aman Verma
                                        </h3>

                                        <p className="text-gray-500">
                                            Studio Apartment Visit
                                        </p>

                                    </div>

                                </div>

                                <div className="text-right">

                                    <p className="font-semibold">
                                        Tomorrow
                                    </p>

                                    <span className="text-gray-500">
                                        11:30 AM
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Performance */}

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl w-full">

                        <h2 className="text-2xl font-bold">
                            Listing Performance
                        </h2>

                        <div className="mt-8 space-y-6">

                            <div>

                                <div className="flex justify-between">

                                    <span>Profile Completion</span>

                                    <span>95%</span>

                                </div>

                                <div className="bg-white/20 rounded-full h-3 mt-2">

                                    <div className="bg-white h-3 rounded-full w-[95%]"></div>

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between">

                                    <span>Listing Quality</span>

                                    <span>90%</span>

                                </div>

                                <div className="bg-white/20 rounded-full h-3 mt-2">

                                    <div className="bg-green-300 h-3 rounded-full w-[90%]"></div>

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between">

                                    <span>Response Rate</span>

                                    <span>88%</span>

                                </div>

                                <div className="bg-white/20 rounded-full h-3 mt-2">

                                    <div className="bg-yellow-300 h-3 rounded-full w-[88%]"></div>

                                </div>

                            </div>

                        </div>

                        <button className="mt-10 w-full bg-white text-blue-700 py-4 rounded-xl font-bold hover:scale-105 duration-300">

                            Improve Performance

                        </button>

                    </div>

                </div>

                {/* ====================== FOOTER ====================== */}

                <div className="mt-12 text-center text-gray-500 pb-10">

                    © 2026 Nestora. All Rights Reserved.

                </div>

            </div>

        </>
    );
}

