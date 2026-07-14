import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FaCloudUploadAlt,
    FaArrowLeft,
    FaArrowRight,
    FaImage,
} from "react-icons/fa";

const Photos = () => {
    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);

    const handleFiles = (files) => {
        const selected = Array.from(files);

        const previewImages = selected.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));

        setImages((prev) => [...prev, ...previewImages]);
    };

    const handleChange = (e) => {
        handleFiles(e.target.files);
    };
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f4f8ff]">

            {/* ================= HEADER ================= */}

            <div className="bg-white shadow-sm px-10 py-8">

                <h1 className="text-4xl font-bold text-gray-800">
                    Upload Room Photos
                </h1>

                <p className="text-gray-500 mt-2">
                    Upload high-quality images to attract more tenants.
                </p>

            </div>

            {/* ================= STEPPER ================= */}

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

                ${index === 1
                                        ? "bg-blue-600 text-white"
                                        : index < 1
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-300 text-gray-600"
                                    }

                `}
                            >
                                {index + 1}
                            </div>

                            <p className="mt-3 font-medium">
                                {step}
                            </p>

                        </div>
                    ))}
                </div>

            </div>

            {/* ================= UPLOAD BOX ================= */}

            <div className="max-w-6xl mx-auto px-8 mt-14">

                <div
                    className="border-4 border-dashed border-blue-300 rounded-3xl bg-white p-16 text-center hover:border-blue-500 duration-300"
                >

                    <FaCloudUploadAlt
                        className="text-7xl text-blue-600 mx-auto"
                    />

                    <h2 className="text-3xl font-bold mt-6">
                        Drag & Drop Photos Here
                    </h2>

                    <p className="text-gray-500 mt-4">
                        Upload JPG, PNG or WEBP images
                    </p>

                    <button
                        onClick={() => fileInputRef.current.click()}
                        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
                    >
                        Browse Files
                    </button>

                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        hidden
                        accept="image/*"
                        onChange={handleChange}
                    />

                    <div className="mt-8 text-gray-500">

                        Maximum 10 Images

                    </div>

                </div>

            </div>

            {/* ================= IMAGE COUNT ================= */}

            <div className="max-w-6xl mx-auto px-8 mt-10">

                <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">

                    <div className="flex items-center gap-3">

                        <FaImage className="text-blue-600 text-2xl" />

                        <h2 className="text-2xl font-bold">

                            Uploaded Images

                        </h2>

                    </div>

                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">

                        {images.length} Photos

                    </span>

                </div>

            </div>

            {/* Part 2B yahan se shuru hoga */}

            {/* ================= IMAGE PREVIEW ================= */}

            <div className="max-w-6xl mx-auto px-8 mt-8">

                {images.length === 0 ? (

                    <div className="bg-white rounded-2xl shadow-lg p-16 text-center">

                        <FaImage className="text-6xl text-gray-300 mx-auto" />

                        <h3 className="text-2xl font-bold mt-5 text-gray-600">
                            No Images Uploaded
                        </h3>

                        <p className="text-gray-500 mt-3">
                            Upload room images to preview them here.
                        </p>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {images.map((image, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 group"
                            >

                                <div className="relative">

                                    <img
                                        src={image.url}
                                        alt=""
                                        className="w-full h-64 object-cover group-hover:scale-105 duration-500"
                                    />

                                    {/* Cover Badge */}

                                    {index === 0 && (

                                        <span
                                            className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                                        >
                                            ⭐ Cover Photo
                                        </span>

                                    )}

                                    {/* Delete */}

                                    <button
                                        onClick={() =>
                                            setImages(images.filter((_, i) => i !== index))
                                        }
                                        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full"
                                    >
                                        ✕
                                    </button>

                                </div>

                                <div className="p-5">

                                    <h3 className="font-bold text-lg">
                                        Room Photo {index + 1}
                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        High Quality Image
                                    </p>

                                    <button
                                        className="mt-5 w-full bg-gray-100 hover:bg-blue-600 hover:text-white duration-300 py-3 rounded-xl font-semibold"
                                    >
                                        {index === 0
                                            ? "Primary Image"
                                            : "Set as Cover"}
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

            {/* ================= UPLOAD PROGRESS ================= */}

            <div className="max-w-6xl mx-auto px-8 mt-10">

                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <div className="flex justify-between items-center">

                        <h2 className="text-2xl font-bold">
                            Upload Progress
                        </h2>

                        <span className="text-blue-600 font-bold">
                            {Math.min(images.length * 10, 100)}%
                        </span>

                    </div>

                    <div className="w-full h-4 bg-gray-200 rounded-full mt-6">

                        <div
                            className="h-4 rounded-full bg-blue-600 duration-500"
                            style={{
                                width: `${Math.min(images.length * 10, 100)}%`,
                            }}
                        ></div>

                    </div>

                    <p className="text-gray-500 mt-4">
                        Upload at least 5 high-quality images for better visibility.
                    </p>

                </div>

            </div>

            {/* ================= PHOTO TIPS ================= */}

            <div className="max-w-6xl mx-auto px-8 mt-10">

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-8">

                    <h2 className="text-3xl font-bold">
                        📸 Photo Tips
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">

                        <div className="bg-white/10 rounded-2xl p-5">
                            ✅ Use daylight for brighter photos.
                        </div>

                        <div className="bg-white/10 rounded-2xl p-5">
                            ✅ Show every room clearly.
                        </div>

                        <div className="bg-white/10 rounded-2xl p-5">
                            ✅ Keep images clean and blur-free.
                        </div>

                        <div className="bg-white/10 rounded-2xl p-5">
                            ✅ Upload at least 5–8 photos.
                        </div>

                    </div>

                </div>

            </div>

            {/* ================= BUTTONS ================= */}

            <div className="max-w-6xl mx-auto px-8 py-12">

                <div className="flex justify-between">

                    <button
                        onClick={() => navigate("/dashboard/post-room/basic-details")}
                    >
                        Back
                    </button>

                    <button
                        onClick={() => navigate("/dashboard/post-room/price")}
                    >
                        Next
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Photos;