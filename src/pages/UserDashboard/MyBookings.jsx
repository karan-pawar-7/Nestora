import React, { useState } from "react";
import {
    FaSearch,
    FaFilter,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaPhone,
    FaEye,
    FaTimes,
    FaCheckCircle,
    FaClock,
    FaHome,
} from "react-icons/fa";

export default function MyBookings() {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [selectedBooking, setSelectedBooking] = useState(null);

    const [bookings, setBookings] = useState([
        {
            id: 1,
            room: "Luxury PG Room",
            location: "Pune, Maharashtra",
            owner: "Rahul Sharma",
            price: 8500,
            date: "20 July 2026",
            status: "Upcoming",
            image:
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            phone: "9876543210",
        },
        {
            id: 2,
            room: "Modern Single Room",
            location: "Mumbai",
            owner: "Amit Patil",
            price: 12000,
            date: "10 June 2026",
            status: "Completed",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            phone: "9123456780",
        },
        {
            id: 3,
            room: "Student Friendly Room",
            location: "Nashik",
            owner: "Sagar More",
            price: 6000,
            date: "25 August 2026",
            status: "Upcoming",
            image:
                "https://images.unsplash.com/photo-1560185008-b033106af5c3",
            phone: "9988776655",
        },
    ]);


    const cancelBooking = (id) => {

        setBookings(
            bookings.map((item) =>
                item.id === id
                    ? { ...item, status: "Cancelled" }
                    : item
            )
        );

    };


    const filteredBookings = bookings.filter((item) => {

        const matchSearch =
            item.room.toLowerCase()
                .includes(search.toLowerCase());

        const matchFilter =
            filter === "All" ||
            item.status === filter;

        return matchSearch && matchFilter;

    });


    const totalBookings = bookings.length;

    const upcoming =
        bookings.filter(
            item => item.status === "Upcoming"
        ).length;


    const completed =
        bookings.filter(
            item => item.status === "Completed"
        ).length;



    return (

        <div className="min-h-screen bg-slate-100 p-6">


            {/* Header */}

            <div className="max-w-7xl mx-auto mb-8">

                <h1 className="text-4xl font-bold text-slate-800">
                    My Bookings
                </h1>

                <p className="text-gray-500 mt-2">
                    Manage your room bookings easily
                </p>

            </div>



            {/* Stats Cards */}

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-8">


                <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">

                    <div className="bg-blue-100 p-4 rounded-full">
                        <FaHome className="text-blue-600 text-2xl" />
                    </div>

                    <div>
                        <h3 className="text-gray-500">
                            Total Bookings
                        </h3>

                        <p className="text-3xl font-bold">
                            {totalBookings}
                        </p>

                    </div>

                </div>




                <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">

                    <div className="bg-green-100 p-4 rounded-full">
                        <FaClock className="text-green-600 text-2xl" />
                    </div>

                    <div>

                        <h3 className="text-gray-500">
                            Upcoming
                        </h3>

                        <p className="text-3xl font-bold">
                            {upcoming}
                        </p>

                    </div>

                </div>




                <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">

                    <div className="bg-purple-100 p-4 rounded-full">
                        <FaCheckCircle className="text-purple-600 text-2xl" />
                    </div>

                    <div>

                        <h3 className="text-gray-500">
                            Completed
                        </h3>

                        <p className="text-3xl font-bold">
                            {completed}
                        </p>

                    </div>

                </div>


            </div>



            {/* Search Filter */}

            <div className="max-w-7xl mx-auto bg-white p-5 rounded-2xl shadow mb-8">


                <div className="flex flex-col md:flex-row gap-4">


                    <div className="flex items-center bg-gray-100 px-4 rounded-xl flex-1">

                        <FaSearch className="text-gray-500" />

                        <input

                            value={search}

                            onChange={(e) => setSearch(e.target.value)}

                            placeholder="Search room..."

                            className="w-full bg-transparent p-3 outline-none"

                        />

                    </div>



                    <div className="flex items-center gap-2">

                        <FaFilter />

                        <select

                            value={filter}

                            onChange={(e) => setFilter(e.target.value)}

                            className="border p-3 rounded-xl"

                        >

                            <option>All</option>
                            <option>Upcoming</option>
                            <option>Completed</option>
                            <option>Cancelled</option>

                        </select>

                    </div>


                </div>


            </div>
            {/* Booking Cards */}

            <div className="max-w-7xl mx-auto">

                <h2 className="text-2xl font-bold mb-5 text-slate-800">
                    Booking History
                </h2>


                <div className="grid lg:grid-cols-2 gap-6">


                    {
                        filteredBookings.length > 0 ?

                            filteredBookings.map((item) => (


                                <div
                                    key={item.id}
                                    className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"
                                >


                                    <div className="md:flex">


                                        {/* Image */}

                                        <img

                                            src={item.image}

                                            alt={item.room}

                                            className="w-full md:w-52 h-52 object-cover"

                                        />



                                        {/* Content */}

                                        <div className="p-5 flex-1">


                                            <div className="flex justify-between items-start">


                                                <div>

                                                    <h3 className="text-xl font-bold text-slate-800">

                                                        {item.room}

                                                    </h3>


                                                    <div className="flex items-center gap-2 text-gray-500 mt-2">

                                                        <FaMapMarkerAlt />

                                                        {item.location}

                                                    </div>


                                                </div>




                                                <span

                                                    className={`px-3 py-1 rounded-full text-sm font-semibold

${item.status === "Upcoming"
                                                            ?
                                                            "bg-green-100 text-green-700"

                                                            :

                                                            item.status === "Completed"

                                                                ?
                                                                "bg-blue-100 text-blue-700"

                                                                :

                                                                "bg-red-100 text-red-700"

                                                        }

`}

                                                >

                                                    {item.status}

                                                </span>



                                            </div>



                                            <div className="mt-4 space-y-2 text-gray-600">


                                                <p className="flex items-center gap-2">

                                                    <FaCalendarAlt />

                                                    {item.date}

                                                </p>



                                                <p>
                                                    Owner : <b>{item.owner}</b>
                                                </p>


                                                <p className="text-xl font-bold text-indigo-600">

                                                    ₹ {item.price}/month

                                                </p>


                                            </div>




                                            {/* Buttons */}

                                            <div className="flex flex-wrap gap-3 mt-5">


                                                <button

                                                    onClick={() => setSelectedBooking(item)}

                                                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700"

                                                >

                                                    <FaEye />

                                                    View Details

                                                </button>




                                                <a

                                                    href={`tel:${item.phone}`}

                                                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"

                                                >

                                                    <FaPhone />

                                                    Contact

                                                </a>




                                                {
                                                    item.status === "Upcoming" &&

                                                    <button

                                                        onClick={() => cancelBooking(item.id)}

                                                        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"

                                                    >

                                                        <FaTimes />

                                                        Cancel

                                                    </button>

                                                }



                                            </div>



                                        </div>


                                    </div>


                                </div>


                            ))


                            :


                            <div className="bg-white rounded-2xl p-10 text-center">

                                <h3 className="text-xl font-bold text-gray-600">

                                    No bookings found

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    Try changing your search or filter

                                </p>

                            </div>


                    }



                </div>

            </div>





            {/* Details Modal */}


            {
                selectedBooking &&

                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-5 z-50">


                    <div className="bg-white max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl">


                        <img

                            src={selectedBooking.image}

                            alt="room"

                            className="w-full h-56 object-cover"

                        />


                        <div className="p-6">


                            <div className="flex justify-between">


                                <h2 className="text-2xl font-bold">

                                    {selectedBooking.room}

                                </h2>



                                <button

                                    onClick={() => setSelectedBooking(null)}

                                    className="text-red-500 text-xl"

                                >

                                    ✕

                                </button>


                            </div>




                            <div className="mt-5 space-y-3 text-gray-600">


                                <p className="flex gap-2 items-center">

                                    <FaMapMarkerAlt />

                                    {selectedBooking.location}

                                </p>


                                <p>

                                    Owner :
                                    <b>
                                        {selectedBooking.owner}
                                    </b>

                                </p>


                                <p>

                                    Booking Date :
                                    <b>
                                        {selectedBooking.date}
                                    </b>

                                </p>



                                <p>

                                    Monthly Rent :
                                    <b className="text-indigo-600">

                                        ₹{selectedBooking.price}

                                    </b>

                                </p>



                                <p>

                                    Status :
                                    <b>
                                        {selectedBooking.status}
                                    </b>

                                </p>


                            </div>




                            <a

                                href={`tel:${selectedBooking.phone}`}

                                className="mt-6 block text-center bg-green-600 text-white py-3 rounded-xl font-semibold"

                            >

                                Call Owner

                            </a>


                        </div>


                    </div>


                </div>


            }



        </div>


    );

}

