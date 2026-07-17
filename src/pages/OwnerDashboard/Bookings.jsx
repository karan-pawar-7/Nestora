import {
    Search,
    CalendarCheck,
    Clock3,
    CheckCircle2,
    XCircle,
    Filter,
} from "lucide-react";

import { useMemo, useState } from "react";



export default function Bookings() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    const bookings = [
        {
            id: 1,
            room: "Fully Furnished 1 BHK",
            location: "Hinjewadi, Pune",
            tenant: "Rahul Sharma",
            phone: "+91 9876543210",
            rent: "₹8,500",
            bookingDate: "20 July 2026",
            moveIn: "25 July 2026",
            status: "Pending",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
        },
        {
            id: 2,
            room: "Single Room For Boys",
            location: "Viman Nagar",
            tenant: "Amit Patil",
            phone: "+91 9988776655",
            rent: "₹5,000",
            bookingDate: "18 July 2026",
            moveIn: "22 July 2026",
            status: "Approved",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
        },
        {
            id: 3,
            room: "2 BHK Flat",
            location: "Baner",
            tenant: "Sneha Kulkarni",
            phone: "+91 9123456789",
            rent: "₹12,000",
            bookingDate: "15 July 2026",
            moveIn: "30 July 2026",
            status: "Rejected",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
        },
    ];

    const [selectedBooking, setSelectedBooking] = useState(null);

    const [bookingList, setBookingList] = useState(bookings);


    const approveBooking = (id) => {
        setBookingList((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, status: "Approved" }
                    : item
            )
        );
    };

    const rejectBooking = (id) => {
        setBookingList((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, status: "Rejected" }
                    : item
            )
        );
    };

    const filteredBookings = useMemo(() => {
        return bookingList.filter((item) => {

            const matchSearch =
                item.tenant
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                item.room
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchStatus =
                status === "All" ||
                item.status === status;

            return matchSearch && matchStatus;

        });
    }, [bookingList, search, status]);


    const totalBookings = bookingList.length;

    const pendingBookings = bookingList.filter(
        (item) => item.status === "Pending"
    ).length;

    const approvedBookings = bookingList.filter(
        (item) => item.status === "Approved"
    ).length;

    const rejectedBookings = bookingList.filter(
        (item) => item.status === "Rejected"
    ).length;

    return (
        <div className="min-h-screen bg-slate-50 p-8">

            {/* Header */}

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">

                <div>
                    <h1 className="text-4xl font-bold text-slate-800">
                        Bookings
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Manage all room booking requests.
                    </p>
                </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                {/* Total */}

                <div className="bg-white rounded-2xl shadow-sm p-6 border">

                    <div className="flex justify-between">

                        <div>

                            <p className="text-slate-500">
                                Total Bookings
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                28
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">

                            <CalendarCheck
                                size={32}
                                className="text-blue-600"
                            />

                        </div>

                    </div>

                </div>

                {/* Pending */}

                <div className="bg-white rounded-2xl shadow-sm p-6 border">

                    <div className="flex justify-between">

                        <div>

                            <p className="text-slate-500">
                                Pending
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                8
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center">

                            <Clock3
                                size={30}
                                className="text-yellow-600"
                            />

                        </div>

                    </div>

                </div>

                {/* Approved */}

                <div className="bg-white rounded-2xl shadow-sm p-6 border">

                    <div className="flex justify-between">

                        <div>

                            <p className="text-slate-500">
                                Approved
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                15
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center">

                            <CheckCircle2
                                size={30}
                                className="text-green-600"
                            />

                        </div>

                    </div>

                </div>

                {/* Rejected */}

                <div className="bg-white rounded-2xl shadow-sm p-6 border">

                    <div className="flex justify-between">

                        <div>

                            <p className="text-slate-500">
                                Rejected
                            </p>

                            <h2 className="text-4xl font-bold mt-3">
                                5
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-xl bg-red-100 flex items-center justify-center">

                            <XCircle
                                size={30}
                                className="text-red-600"
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Search */}

            <div className="bg-white rounded-2xl shadow-sm border p-6 mt-8">

                <div className="grid lg:grid-cols-3 gap-5">

                    {/* Search */}

                    <div className="relative">

                        <Search
                            size={18}
                            className="absolute left-4 top-4 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search tenant..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="w-full h-12 rounded-xl border pl-11 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    {/* Status */}

                    <select
                        value={status}
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                        className="h-12 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option>All</option>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                    </select>

                    {/* Sort */}

                    <button className="h-12 rounded-xl bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition">

                        <Filter size={18} />

                        Filter Bookings

                    </button>

                </div>

            </div>

            {/* Booking Cards */}
            {/* Part 2 me yaha cards aayenge */}


            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-8">

                {filteredBookings.map((booking) => (

                    <div
                        key={booking.id}
                        className="bg-white rounded-3xl overflow-hidden shadow-sm border hover:shadow-xl duration-300"
                    >

                        {/* Image */}

                        <div className="relative">

                            <img
                                src={booking.image}
                                className="h-60 w-full object-cover"
                                alt=""
                            />

                            <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">

                                Verified

                            </span>

                            <span
                                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold

          ${booking.status === "Approved"
                                        ? "bg-green-100 text-green-700"
                                        : booking.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-red-100 text-red-700"
                                    }

          `}
                            >

                                {booking.status}

                            </span>

                        </div>

                        {/* Body */}

                        <div className="p-6">

                            <h2 className="text-xl font-bold">

                                {booking.room}

                            </h2>

                            <p className="text-gray-500 mt-2">

                                📍 {booking.location}

                            </p>

                            <div className="mt-4 space-y-2 text-gray-600">

                                <p>

                                    👤 {booking.tenant}

                                </p>

                                <p>

                                    📞 {booking.phone}

                                </p>

                                <p>

                                    📅 {booking.bookingDate}

                                </p>

                                <p>

                                    🚚 Move In : {booking.moveIn}

                                </p>

                            </div>

                            <div className="mt-5 flex justify-between items-center">

                                <h2 className="text-3xl font-bold text-blue-600">

                                    {booking.rent}

                                </h2>

                                <span className="text-gray-500">

                                    /month

                                </span>

                            </div>

                            {/* Buttons */}

                            <div className="grid grid-cols-3 gap-3 mt-6">

                                <button
                                    onClick={() => setSelectedBooking(booking)}
                                    className="bg-slate-100 rounded-xl py-3 font-semibold hover:bg-slate-200"
                                >
                                    View
                                </button>

                                <button
                                    onClick={() => approveBooking(booking.id)}
                                    className="bg-green-600 text-white rounded-xl py-3 hover:bg-green-700"
                                >
                                    Approve
                                </button>

                                <button
                                    onClick={() => rejectBooking(booking.id)}
                                    className="bg-red-600 text-white rounded-xl py-3 hover:bg-red-700"
                                >
                                    Reject
                                </button>

                            </div>

                        </div>

                    </div>

                ))}
                {
                    selectedBooking && (

                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                            <div className="bg-white rounded-3xl w-[650px] overflow-hidden">

                                <img
                                    src={selectedBooking.image}
                                    className="w-full h-72 object-cover"
                                />

                                <div className="p-8">

                                    <h2 className="text-3xl font-bold">

                                        {selectedBooking.room}

                                    </h2>

                                    <p className="text-gray-500 mt-2">

                                        📍 {selectedBooking.location}

                                    </p>

                                    <div className="mt-6 space-y-3">

                                        <p>

                                            <b>Tenant :</b> {selectedBooking.tenant}

                                        </p>

                                        <p>

                                            <b>Phone :</b> {selectedBooking.phone}

                                        </p>

                                        <p>

                                            <b>Booking Date :</b> {selectedBooking.bookingDate}

                                        </p>

                                        <p>

                                            <b>Move In :</b> {selectedBooking.moveIn}

                                        </p>

                                        <p>

                                            <b>Rent :</b> {selectedBooking.rent}

                                        </p>

                                        <p>

                                            <b>Status :</b> {selectedBooking.status}

                                        </p>

                                    </div>

                                    <div className="mt-8 flex justify-end">

                                        <button
                                            onClick={() => setSelectedBooking(null)}
                                            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
                                        >

                                            Close

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    )
                }

            </div>

        </div>

    );
}