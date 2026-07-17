import {
    FaUserCircle,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaHome,
    FaStar,
    FaWallet,
    FaEdit,
} from "react-icons/fa";

export default function Profile() {
    return (
        <div className="space-y-8">

            {/* ================= Header ================= */}

            <div className="flex flex-col lg:flex-row justify-between items-center">

                <div>
                    <h1 className="text-4xl font-bold">
                        My Profile
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your account information.
                    </p>
                </div>

                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl mt-5 lg:mt-0">
                    <FaEdit />
                    Edit Profile
                </button>

            </div>

            {/* ================= Profile Card ================= */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <div className="flex flex-col lg:flex-row items-center gap-8">

                    <img
                        src={`${import.meta.env.BASE_URL}user3.png`}
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
                    />

                    <div className="flex-1">

                        <h2 className="text-3xl font-bold">
                            Karan Pawar
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Property Owner
                        </p>

                        <div className="flex items-center gap-2 mt-3 text-yellow-500">

                            <FaStar />

                            <span className="font-semibold">
                                4.9 Rating
                            </span>

                        </div>

                        <div className="grid md:grid-cols-2 gap-5 mt-8">

                            <div className="flex items-center gap-4">

                                <FaEnvelope className="text-blue-600 text-xl" />

                                <span>
                                    karan@gmail.com
                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <FaPhoneAlt className="text-green-600 text-xl" />

                                <span>
                                    +91 9876543210
                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <FaMapMarkerAlt className="text-red-500 text-xl" />

                                <span>
                                    Pune, Maharashtra
                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <FaUserCircle className="text-purple-600 text-xl" />

                                <span>
                                    Verified Owner
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= Stats Cards ================= */}

            <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                Total Properties
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                12
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

                            <FaHome className="text-blue-600 text-3xl" />

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                Rating
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                4.9
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">

                            <FaStar className="text-yellow-500 text-3xl" />

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                Total Earnings
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                ₹4.8L
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

                            <FaWallet className="text-green-600 text-3xl" />

                        </div>

                    </div>

                </div>

            </div>

            {/* ===== Part 2 yaha se continue hoga ===== */}
            {/* ================= Account Overview ================= */}

            <div className="grid xl:grid-cols-3 gap-8">

                {/* Recent Activity */}

                <div className="xl:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                    <div className="flex justify-between items-center">

                        <h2 className="text-2xl font-bold">
                            Recent Activity
                        </h2>

                        <button className="text-blue-600 hover:underline">
                            View All
                        </button>

                    </div>

                    <div className="space-y-6 mt-8">

                        <div className="flex items-center gap-5 border rounded-2xl p-5 hover:shadow-lg duration-300">
                            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                                🏠
                            </div>

                            <div>
                                <h3 className="font-bold">New Room Published</h3>
                                <p className="text-gray-500">
                                    Luxury 1 BHK Apartment is now live.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 border rounded-2xl p-5 hover:shadow-lg duration-300">
                            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                                ✅
                            </div>

                            <div>
                                <h3 className="font-bold">Booking Confirmed</h3>
                                <p className="text-gray-500">
                                    Rahul Sharma booked your property.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 border rounded-2xl p-5 hover:shadow-lg duration-300">
                            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">
                                💰
                            </div>

                            <div>
                                <h3 className="font-bold">Payment Received</h3>
                                <p className="text-gray-500">
                                    ₹18,000 credited to your account.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 border rounded-2xl p-5 hover:shadow-lg duration-300">
                            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                                ⭐
                            </div>

                            <div>
                                <h3 className="font-bold">New 5★ Review</h3>
                                <p className="text-gray-500">
                                    A tenant gave your property a 5-star rating.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Account Overview */}

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-lg p-8 text-white">

                    <h2 className="text-2xl font-bold">
                        Account Overview
                    </h2>

                    <div className="space-y-6 mt-8">

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
                                <span>Response Rate</span>
                                <span>92%</span>
                            </div>

                            <div className="bg-white/20 rounded-full h-3 mt-2">
                                <div className="bg-green-300 h-3 rounded-full w-[92%]"></div>
                            </div>

                        </div>

                        <div>

                            <div className="flex justify-between">
                                <span>Listing Quality</span>
                                <span>90%</span>
                            </div>

                            <div className="bg-white/20 rounded-full h-3 mt-2">
                                <div className="bg-yellow-300 h-3 rounded-full w-[90%]"></div>
                            </div>

                        </div>

                    </div>

                    <button className="mt-10 w-full bg-white text-blue-700 py-4 rounded-xl font-bold hover:scale-105 duration-300">

                        Edit Profile

                    </button>

                </div>

            </div>

            {/* ================= Achievements ================= */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-8">
                    Achievements
                </h2>

                <div className="grid md:grid-cols-4 gap-6">

                    <div className="border rounded-2xl p-6 text-center hover:shadow-lg duration-300">
                        <div className="text-5xl">🏆</div>
                        <h3 className="font-bold mt-4">
                            Top Host
                        </h3>
                    </div>

                    <div className="border rounded-2xl p-6 text-center hover:shadow-lg duration-300">
                        <div className="text-5xl">⭐</div>
                        <h3 className="font-bold mt-4">
                            5 Star Owner
                        </h3>
                    </div>

                    <div className="border rounded-2xl p-6 text-center hover:shadow-lg duration-300">
                        <div className="text-5xl">💰</div>
                        <h3 className="font-bold mt-4">
                            ₹4.8L Earned
                        </h3>
                    </div>

                    <div className="border rounded-2xl p-6 text-center hover:shadow-lg duration-300">
                        <div className="text-5xl">🏠</div>
                        <h3 className="font-bold mt-4">
                            12 Properties
                        </h3>
                    </div>

                </div>

            </div>

            {/* ================= Footer ================= */}

            <div className="text-center text-gray-500 py-6">

                © 2026 Nestora • Profile Dashboard

            </div>


        </div>
    );
}