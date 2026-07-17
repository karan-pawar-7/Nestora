import { FaPlus, FaSearch, FaEdit, FaTrash, FaEye, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const listings = [
    {
        id: 1,
        image: `${import.meta.env.BASE_URL}r4.png`,
        title: "Luxury 1 BHK Apartment",
        location: "Baner, Pune",
        price: "₹18,000",
        status: "Active",
        views: 245,
        rating: 4.8,
    },
    {
        id: 2,
        image: `${import.meta.env.BASE_URL}r6.png`,
        title: "Modern Studio Room",
        location: "Hinjewadi, Pune",
        price: "₹12,000",
        status: "Pending",
        views: 180,
        rating: 4.6,
    },
    {
        id: 3,
        image: `${import.meta.env.BASE_URL}r5.png`,
        title: "Girls PG",
        location: "Kothrud, Pune",
        price: "₹8,500",
        status: "Rented",
        views: 320,
        rating: 4.9,
    },
    {
        id: 4,
        image: `${import.meta.env.BASE_URL}r2.png`,
        title: "2 BHK Family Flat",
        location: "Wakad, Pune",
        price: "₹25,000",
        status: "Active",
        views: 410,
        rating: 4.7,
    },
];

export default function MyListings() {
    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div>
                    <h1 className="text-4xl font-bold">My Listings</h1>
                    <p className="text-gray-500 mt-2">
                        Manage all your room listings from one place.
                    </p>
                </div>

                <button
                    onClick={() => navigate("/dashboard/post-room/basic-details")}
                    className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
                >
                    Post Room
                </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">

                <div className="bg-white rounded-3xl p-6 shadow">
                    <p className="text-gray-500">Total Listings</p>
                    <h2 className="text-4xl font-bold mt-3">12</h2>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow">
                    <p className="text-gray-500">Active</p>
                    <h2 className="text-4xl font-bold mt-3 text-green-600">8</h2>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow">
                    <p className="text-gray-500">Pending</p>
                    <h2 className="text-4xl font-bold mt-3 text-yellow-500">2</h2>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow">
                    <p className="text-gray-500">Rented</p>
                    <h2 className="text-4xl font-bold mt-3 text-blue-600">2</h2>
                </div>

            </div>

            {/* Search */}

            <div className="bg-white rounded-3xl shadow p-6 flex flex-col lg:flex-row gap-5">

                <div className="relative flex-1">

                    <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search Listings..."
                        className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <select className="border rounded-xl px-5 py-3">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Pending</option>
                    <option>Rented</option>
                </select>

            </div>

            {/* Listings */}

            <div className="grid lg:grid-cols-2 gap-8">

                {listings.map((room) => (

                    <div
                        key={room.id}
                        className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-1 duration-300"
                    >

                        <img
                            src={room.image}
                            className="w-full h-60 object-cover"
                            alt={room.title}
                        />

                        <div className="p-6">

                            <div className="flex justify-between items-start">

                                <div>

                                    <h2 className="text-2xl font-bold">
                                        {room.title}
                                    </h2>

                                    <p className="flex items-center gap-2 text-gray-500 mt-2">
                                        <FaMapMarkerAlt />
                                        {room.location}
                                    </p>

                                </div>

                                <span
                                    className={`px-4 py-2 rounded-full text-sm font-semibold ${room.status === "Active"
                                            ? "bg-green-100 text-green-600"
                                            : room.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : "bg-blue-100 text-blue-600"
                                        }`}
                                >
                                    {room.status}
                                </span>

                            </div>

                            <div className="flex justify-between mt-6">

                                <div>
                                    <p className="text-gray-500">Monthly Rent</p>
                                    <h3 className="text-3xl font-bold">
                                        {room.price}
                                    </h3>
                                </div>

                                <div className="text-right">

                                    <div className="flex items-center gap-2 justify-end">

                                        <FaStar className="text-yellow-400" />

                                        <span>{room.rating}</span>

                                    </div>

                                    <p className="text-gray-500 mt-2">
                                        <FaEye className="inline mr-1" />
                                        {room.views} Views
                                    </p>

                                </div>

                            </div>

                            <div className="grid grid-cols-3 gap-3 mt-8">

                                <button className="bg-blue-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-blue-700">
                                    <FaEdit />
                                    Edit
                                </button>

                                <button className="bg-red-500 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-red-600">
                                    <FaTrash />
                                    Delete
                                </button>

                                <button className="bg-gray-900 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-black">
                                    <FaEye />
                                    View
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            {/* Pagination */}

            <div className="flex justify-center gap-3">

                <button className="w-11 h-11 rounded-xl bg-gray-200">1</button>

                <button className="w-11 h-11 rounded-xl bg-blue-600 text-white">
                    2
                </button>

                <button className="w-11 h-11 rounded-xl bg-gray-200">3</button>

                <button className="px-6 rounded-xl bg-gray-200">
                    Next →
                </button>

            </div>

        </div>
    );
}