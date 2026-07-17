import {
    FaWallet,
    FaMoneyBillWave,
    FaChartLine,
    FaUniversity,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function Earnings() {
        const navigate = useNavigate();

    return (
        <div className="space-y-8">

            {/* ================= Header ================= */}

            <div className="flex flex-col lg:flex-row justify-between items-center">

                <div>

                    <h1 className="text-4xl font-bold">
                        Earnings
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Track your income and payment history.
                    </p>

                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl mt-5 lg:mt-0">

                    Withdraw Money

                </button>

            </div>

            {/* ================= Stats ================= */}

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                {/* Card */}

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                Total Earnings
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                ₹4.8L
                            </h2>

                            <p className="text-green-600 mt-2">
                                +18%
                            </p>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">

                            <FaWallet className="text-green-600" />

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                This Month
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                ₹45K
                            </h2>

                            <p className="text-blue-600 mt-2">
                                July Income
                            </p>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">

                            <FaMoneyBillWave className="text-blue-600" />

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                Pending
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                ₹12K
                            </h2>

                            <p className="text-orange-500 mt-2">
                                Awaiting Payment
                            </p>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">

                            <FaChartLine className="text-orange-600" />

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500">
                                Withdrawn
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                ₹3.5L
                            </h2>

                            <p className="text-purple-600 mt-2">
                                Bank Transfer
                            </p>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">

                            <FaUniversity className="text-purple-600" />

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= Fake Chart ================= */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <div className="flex justify-between items-center">

                    <div>

                        <h2 className="text-2xl font-bold">
                            Monthly Revenue
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Last 6 Months
                        </p>

                    </div>

                </div>

                <div className="h-80 mt-10 flex items-end gap-4">

                    {[40, 55, 75, 60, 90, 100].map((h, i) => (

                        <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-blue-600 to-blue-300 rounded-t-xl hover:scale-105 duration-300"
                            style={{ height: `${h}%` }}
                        />

                    ))}

                </div>

                <div className="flex justify-between mt-4 text-gray-500">

                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>

                </div>

            </div>

            {/* ===== Part 2 yaha se continue hoga ===== */}

            {/* ================= Payments + Withdraw ================= */}

            <div className="grid xl:grid-cols-3 gap-8">

                {/* Recent Payments */}

                <div className="xl:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                    <div className="flex justify-between items-center mb-6">

                        <h2 className="text-2xl font-bold">
                            Recent Payments
                        </h2>

                        <button className="text-blue-600 hover:underline">
                            View All
                        </button>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead>

                                <tr className="border-b">

                                    <th className="text-left py-4">Tenant</th>
                                    <th className="text-left">Room</th>
                                    <th className="text-left">Amount</th>
                                    <th className="text-left">Status</th>

                                </tr>

                            </thead>

                            <tbody>

                                {[
                                    ["Rahul Sharma", "Luxury 1 BHK", "₹18,000", "Paid"],
                                    ["Aman Verma", "Studio Room", "₹12,000", "Paid"],
                                    ["Priya Singh", "PG Room", "₹8,500", "Pending"],
                                    ["Rohit Patil", "2 BHK Flat", "₹22,000", "Paid"],
                                ].map((item, index) => (

                                    <tr
                                        key={index}
                                        className="border-b hover:bg-slate-50"
                                    >

                                        <td className="py-5">{item[0]}</td>

                                        <td>{item[1]}</td>

                                        <td className="font-semibold">
                                            {item[2]}
                                        </td>

                                        <td>

                                            <span
                                                className={`px-4 py-2 rounded-full text-sm ${item[3] === "Paid"
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-yellow-100 text-yellow-600"
                                                    }`}
                                            >

                                                {item[3]}

                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Withdraw Card */}

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg">

                    <h2 className="text-2xl font-bold">
                        Available Balance
                    </h2>

                    <h1 className="text-5xl font-bold mt-6">
                        ₹1,28,500
                    </h1>

                    <p className="mt-4 text-blue-100">
                        Ready to transfer into your bank account.
                    </p>

                    <button className="mt-10 w-full bg-white text-blue-700 py-4 rounded-xl font-bold hover:scale-105 duration-300">

                        Withdraw Now

                    </button>

                </div>

            </div>

            {/* ================= Transaction History ================= */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <div className="flex justify-between items-center">

                    <h2 className="text-2xl font-bold">
                        Transaction History
                    </h2>

                    <button className="text-blue-600 hover:underline">
                        Download Report
                    </button>

                </div>

                <div className="space-y-5 mt-8">

                    {[
                        ["₹18,000", "Luxury 1 BHK", "Today", "Completed"],
                        ["₹22,000", "2 BHK Flat", "Yesterday", "Completed"],
                        ["₹8,500", "PG Room", "2 Days Ago", "Pending"],
                        ["₹12,000", "Studio Apartment", "3 Days Ago", "Completed"],
                    ].map((item, index) => (

                        <div
                            key={index}
                            className="flex justify-between items-center border rounded-2xl p-5 hover:shadow-lg duration-300"
                        >

                            <div>

                                <h3 className="font-bold text-lg">
                                    {item[1]}
                                </h3>

                                <p className="text-gray-500">
                                    {item[2]}
                                </p>

                            </div>

                            <div className="text-right">

                                <h2 className="text-2xl font-bold">
                                    {item[0]}
                                </h2>

                                <span
                                    className={`text-sm ${item[3] === "Completed"
                                            ? "text-green-600"
                                            : "text-orange-500"
                                        }`}
                                >

                                    {item[3]}

                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* ================= Footer ================= */}

            <div className="text-center text-gray-500 py-6">

                © 2026 Nestora • Earnings Dashboard

            </div>

        </div>
    );
}