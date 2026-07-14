import React from "react";
import { useNavigate } from "react-router-dom";

import {
    FaCheckCircle,
    FaMapMarkerAlt,
    FaBed,
    FaBath,
    FaRulerCombined,
    FaWifi,
    FaCar,
    FaSnowflake,
    FaRupeeSign,
} from "react-icons/fa";

const ReviewPublish = () => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f5f8ff]">

            {/* Header */}

            <div className="bg-white shadow-sm px-10 py-8">

                <h1 className="text-4xl font-bold">
                    Review & Publish
                </h1>

                <p className="text-gray-500 mt-2">
                    Review all information before publishing your property.
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
                ${index === 4
                                        ? "bg-blue-600 text-white"
                                        : "bg-green-500 text-white"
                                    }`}
                            >
                                ✓
                            </div>

                            <p className="mt-3">{step}</p>

                        </div>

                    ))}

                </div>

            </div>

            {/* Property Card */}

            <div className="max-w-7xl mx-auto px-8 mt-12">

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                    <img
                        src="/room-preview.jpg"
                        alt=""
                        className="w-full h-96 object-cover"
                    />

                    <div className="p-8">

                        <div className="flex justify-between items-center">

                            <div>

                                <h2 className="text-4xl font-bold">
                                    Luxury 1 BHK Apartment
                                </h2>

                                <p className="text-gray-500 mt-3 flex items-center gap-2">
                                    <FaMapMarkerAlt />
                                    Hinjewadi, Pune
                                </p>

                            </div>

                            <div className="text-right">

                                <h1 className="text-4xl font-bold text-blue-600">
                                    ₹7,500
                                </h1>

                                <p className="text-gray-500">
                                    per month
                                </p>

                            </div>

                        </div>

                        {/* Property Details */}

                        <div className="grid md:grid-cols-4 gap-6 mt-10">

                            <div className="bg-blue-50 rounded-2xl p-6 text-center">

                                <FaBed className="text-3xl mx-auto text-blue-600" />

                                <h3 className="font-bold mt-4">
                                    2 Bedrooms
                                </h3>

                            </div>

                            <div className="bg-blue-50 rounded-2xl p-6 text-center">

                                <FaBath className="text-3xl mx-auto text-blue-600" />

                                <h3 className="font-bold mt-4">
                                    2 Bathrooms
                                </h3>

                            </div>

                            <div className="bg-blue-50 rounded-2xl p-6 text-center">

                                <FaRulerCombined className="text-3xl mx-auto text-blue-600" />

                                <h3 className="font-bold mt-4">
                                    650 Sq.ft
                                </h3>

                            </div>

                            <div className="bg-blue-50 rounded-2xl p-6 text-center">

                                <FaRupeeSign className="text-3xl mx-auto text-blue-600" />

                                <h3 className="font-bold mt-4">
                                    Deposit ₹15,000
                                </h3>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Part 5B */}

            {/* ================= PROPERTY DESCRIPTION ================= */}

            <div className="max-w-7xl mx-auto px-8 mt-10">

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left */}

                    <div className="lg:col-span-2 space-y-8">

                        {/* Description */}

                        <div className="bg-white rounded-3xl shadow-lg p-8">

                            <h2 className="text-2xl font-bold mb-6">
                                Property Description
                            </h2>

                            <p className="text-gray-600 leading-8">
                                Spacious and fully furnished 1 BHK apartment located in
                                Hinjewadi, Pune. Ideal for students and working
                                professionals. The property includes modern interiors,
                                excellent ventilation, attached bathroom, modular kitchen,
                                high-speed WiFi, parking, CCTV security, and 24×7 water
                                supply.
                            </p>

                        </div>

                        {/* Amenities */}

                        <div className="bg-white rounded-3xl shadow-lg p-8">

                            <h2 className="text-2xl font-bold mb-8">
                                Amenities
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                                <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
                                    <FaWifi className="text-blue-600" />
                                    WiFi
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
                                    <FaCar className="text-blue-600" />
                                    Parking
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
                                    <FaSnowflake className="text-blue-600" />
                                    Air Conditioner
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4">
                                    CCTV Security
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4">
                                    Modular Kitchen
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4">
                                    Power Backup
                                </div>

                            </div>

                        </div>

                        {/* Gallery */}

                        <div className="bg-white rounded-3xl shadow-lg p-8">

                            <h2 className="text-2xl font-bold mb-8">
                                Property Gallery
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                                <img
                                    src="/room1.jpg"
                                    className="rounded-2xl h-44 w-full object-cover"
                                    alt=""
                                />

                                <img
                                    src="/room2.jpg"
                                    className="rounded-2xl h-44 w-full object-cover"
                                    alt=""
                                />

                                <img
                                    src="/room3.jpg"
                                    className="rounded-2xl h-44 w-full object-cover"
                                    alt=""
                                />

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="space-y-8">

                        {/* Owner */}

                        <div className="bg-white rounded-3xl shadow-lg p-8">

                            <h2 className="text-2xl font-bold">
                                Owner Details
                            </h2>

                            <div className="mt-6">

                                <img
                                    src="/owner.jpg"
                                    alt=""
                                    className="w-24 h-24 rounded-full mx-auto"
                                />

                                <h3 className="text-xl font-bold text-center mt-5">
                                    Karan Pawar
                                </h3>

                                <p className="text-center text-gray-500">
                                    Property Owner
                                </p>

                            </div>

                        </div>

                        {/* Listing Score */}

                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white">

                            <h2 className="text-2xl font-bold">
                                Listing Score
                            </h2>

                            <h1 className="text-6xl font-bold mt-5">
                                95%
                            </h1>

                            <p className="mt-4">
                                Excellent! Your listing is ready for publishing.
                            </p>

                        </div>

                        {/* Checklist */}

                        <div className="bg-white rounded-3xl shadow-lg p-8">

                            <h2 className="text-2xl font-bold mb-6">
                                Checklist
                            </h2>

                            <div className="space-y-4">

                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-green-500" />
                                    Basic Details Completed
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-green-500" />
                                    Photos Uploaded
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-green-500" />
                                    Pricing Added
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-green-500" />
                                    Amenities Selected
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Part 5C */}
            {/* ================= TERMS & CONDITIONS ================= */}

            <div className="max-w-7xl mx-auto px-8 mt-10">

                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <label className="flex items-start gap-4 cursor-pointer">

                        <input
                            type="checkbox"
                            className="mt-1 w-5 h-5 accent-blue-600"
                        />

                        <span className="text-gray-600 leading-7">

                            I confirm that all the information provided is correct and I
                            agree to Nestora's Terms & Conditions and Privacy Policy.

                        </span>

                    </label>

                </div>

            </div>

            {/* ================= ACTION BUTTONS ================= */}

            <div className="max-w-7xl mx-auto px-8 mt-10">

                <div className="flex justify-between flex-wrap gap-5">

                    <button
                        className="px-8 py-4 rounded-xl border border-gray-300 hover:bg-gray-100 duration-300 font-semibold"
                    >
                        ← Previous
                    </button>

                    <div className="flex gap-4 flex-wrap">

                        <button
                            className="px-8 py-4 rounded-xl bg-gray-200 hover:bg-gray-300 font-semibold duration-300"
                        >
                            Save Draft
                        </button>

                        <button
                            onClick={() => navigate("/dashboard/post-room/amenities")}
                        >
                            Back
                        </button>

                        <button
                            onClick={() => navigate("/dashboard")}
                        >
                            Publish Property
                        </button>

                    </div>

                </div>

            </div>

            {/* ================= SUCCESS CARD ================= */}

            <div className="max-w-7xl mx-auto px-8 py-12">

                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-10 text-center text-white shadow-xl">

                    <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center">

                        <FaCheckCircle className="text-green-600 text-5xl" />

                    </div>

                    <h2 className="text-4xl font-bold mt-8">
                        Ready to Publish!
                    </h2>

                    <p className="mt-5 text-lg text-green-100 max-w-2xl mx-auto">
                        Your property listing is complete. Click the
                        <strong> Publish Property </strong>
                        button to make your room live on Nestora and start receiving
                        inquiries from potential tenants.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-10">

                        <div className="bg-white/10 rounded-2xl p-6">
                            <h3 className="text-3xl font-bold">5/5</h3>
                            <p className="mt-2">Steps Completed</p>
                        </div>

                        <div className="bg-white/10 rounded-2xl p-6">
                            <h3 className="text-3xl font-bold">95%</h3>
                            <p className="mt-2">Listing Quality</p>
                        </div>

                        <div className="bg-white/10 rounded-2xl p-6">
                            <h3 className="text-3xl font-bold">Ready</h3>
                            <p className="mt-2">For Publishing</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ReviewPublish;