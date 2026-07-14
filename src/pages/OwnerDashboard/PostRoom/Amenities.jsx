import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaWifi,
    FaSnowflake,
    FaCar,
    FaUtensils,
    FaTv,
    FaBolt,
    FaVideo,
    FaPaw,
    FaSmoking,
    FaDumbbell,
    FaLeaf,
    FaShower,
} from "react-icons/fa";

const amenitiesData = [
    { id: 1, name: "WiFi", icon: <FaWifi /> },
    { id: 2, name: "Air Conditioner", icon: <FaSnowflake /> },
    { id: 3, name: "Parking", icon: <FaCar /> },
    { id: 4, name: "Kitchen", icon: <FaUtensils /> },
    { id: 5, name: "Television", icon: <FaTv /> },
    { id: 6, name: "Power Backup", icon: <FaBolt /> },
    { id: 7, name: "CCTV", icon: <FaVideo /> },
    { id: 8, name: "Pet Friendly", icon: <FaPaw /> },
    { id: 9, name: "Smoking Allowed", icon: <FaSmoking /> },
    { id: 10, name: "Gym", icon: <FaDumbbell /> },
    { id: 11, name: "Garden", icon: <FaLeaf /> },
    { id: 12, name: "Geyser", icon: <FaShower /> },
];

const Amenities = () => {
    const [selected, setSelected] = useState([]);

    const toggleAmenity = (name) => {
        if (selected.includes(name)) {
            setSelected(selected.filter((item) => item !== name));
        } else {
            setSelected([...selected, name]);
        }
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f5f8ff]">

            {/* Header */}

            <div className="bg-white shadow-sm px-10 py-8">

                <h1 className="text-4xl font-bold">
                    Amenities
                </h1>

                <p className="text-gray-500 mt-2">
                    Select the facilities available in your property.
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
                    ].map((step, index) => (

                        <div
                            key={index}
                            className="flex flex-col items-center flex-1"
                        >

                            <div
                                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold
                ${index === 3
                                        ? "bg-blue-600 text-white"
                                        : index < 3
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-300 text-gray-600"
                                    }`}
                            >
                                {index + 1}
                            </div>

                            <p className="mt-3">{step}</p>

                        </div>

                    ))}

                </div>

            </div>

            {/* Amenity Cards */}

            <div className="max-w-7xl mx-auto px-8 mt-12">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {amenitiesData.map((item) => (

                        <div
                            key={item.id}
                            onClick={() => toggleAmenity(item.name)}
                            className={`cursor-pointer rounded-3xl p-8 text-center shadow-lg duration-300 hover:-translate-y-2

              ${selected.includes(item.name)
                                    ? "bg-blue-600 text-white"
                                    : "bg-white"
                                }
              `}
                        >

                            <div className="text-5xl mb-5 flex justify-center">
                                {item.icon}
                            </div>

                            <h2 className="text-xl font-bold">
                                {item.name}
                            </h2>

                        </div>

                    ))}

                </div>

            </div>

            {/* Part 4B yahan se shuru hoga */}


            {/* ================= SELECTED SUMMARY ================= */}

            <div className="max-w-7xl mx-auto px-8 mt-12">

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Selected Amenities */}

                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                        <div className="flex justify-between items-center">

                            <h2 className="text-2xl font-bold">
                                Selected Amenities
                            </h2>

                            <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
                                {selected.length} Selected
                            </span>

                        </div>

                        {selected.length === 0 ? (

                            <div className="text-center py-12 text-gray-500">
                                No amenities selected yet.
                            </div>

                        ) : (

                            <div className="flex flex-wrap gap-4 mt-8">

                                {selected.map((item, index) => (

                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-semibold"
                                    >
                                        ✓ {item}
                                    </span>

                                ))}

                            </div>

                        )}

                    </div>

                    {/* Popular Amenities */}

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white p-8">

                        <h2 className="text-2xl font-bold">
                            ⭐ Popular Amenities
                        </h2>

                        <ul className="space-y-4 mt-8">

                            <li>✔ WiFi</li>
                            <li>✔ Parking</li>
                            <li>✔ CCTV</li>
                            <li>✔ Kitchen</li>
                            <li>✔ Geyser</li>
                            <li>✔ Power Backup</li>

                        </ul>

                    </div>

                </div>

            </div>

            {/* ================= SUGGESTIONS ================= */}

            <div className="max-w-7xl mx-auto px-8 mt-10">

                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold">
                        💡 Tips to Get More Tenants
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">

                        <div className="bg-blue-50 rounded-2xl p-6">
                            📶 Add WiFi to attract students and professionals.
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-6">
                            🚗 Parking increases property value.
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-6">
                            📹 CCTV improves trust and security.
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-6">
                            ❄️ AC & Geyser make listings more attractive.
                        </div>

                    </div>

                </div>

            </div>

            {/* ================= COMPLETION CARD ================= */}

            <div className="max-w-7xl mx-auto px-8 mt-10">

                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <div className="flex justify-between items-center">

                        <h2 className="text-2xl font-bold">
                            Listing Progress
                        </h2>

                        <span className="text-blue-600 font-bold">
                            80%
                        </span>

                    </div>

                    <div className="w-full h-4 bg-gray-200 rounded-full mt-6">

                        <div className="w-4/5 h-4 bg-blue-600 rounded-full"></div>

                    </div>

                    <p className="mt-4 text-gray-500">
                        You're almost done! Just review your listing before publishing.
                    </p>

                </div>

            </div>

            {/* ================= PROPERTY SCORE ================= */}

            <div className="max-w-7xl mx-auto px-8 mt-10">

                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white">

                    <h2 className="text-3xl font-bold">
                        🏆 Property Score
                    </h2>

                    <h1 className="text-6xl font-bold mt-5">
                        92%
                    </h1>

                    <p className="mt-5 text-green-100">
                        Great selection! Your property includes the most requested amenities.
                    </p>

                </div>

            </div>

            {/* ================= NAVIGATION ================= */}

            <div className="max-w-7xl mx-auto px-8 py-12">

                <div className="flex justify-between">

                    <button
                        onClick={() => navigate("/dashboard/post-room/price")}
                    >
                        Back
                    </button>

                    <div className="flex gap-4">

                        <button
                            className="px-8 py-4 rounded-xl bg-gray-200 hover:bg-gray-300 duration-300"
                        >
                            Save Draft
                        </button>

                        <button
                            onClick={() => navigate("/dashboard/post-room/review")}
                        >
                            Next
                        </button>

                    </div>

                </div>

            </div>

            {/* ================= SUCCESS MESSAGE ================= */}

            <div className="max-w-7xl mx-auto px-8 pb-14">

                <div className="bg-green-50 border border-green-300 rounded-2xl p-8">

                    <h2 className="text-2xl font-bold text-green-700">
                        ✅ Amenities Completed
                    </h2>

                    <p className="text-green-600 mt-3">
                        Excellent! You've added all the facilities available in your property.
                        Continue to the final review page before publishing your listing.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Amenities;