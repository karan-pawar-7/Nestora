import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
    return (

        <>
            <section
                className="h-120 bg-cover bg-center"

                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}h1.png)`,
                }}
            >


                {/* Content */}
                <div className="flex pt-15 justify-center max-w-7xl mx-auto min-h-screen">
                    <div className="max-w-3xl items-center flex flex-col">


                        <h1 className=" text-5xl lg:text-6xl font-bold text-white ">
                            Find Your Perfect Room
                        </h1>
                        <div className="flex flex-col items-center justify-center text-2xl">
                            <p className=" mt-6 text-white ">
                                Discover comfortable and affordable rooms
                            </p>
                            <p className=" text-white">near your favorite locations.</p>
                        </div>


                        {/* Search Box */}
                        <div className="bg-white rounded-2xl shadow-xl p-4 mt-10 flex items-center justify-center">
                            <div className="grid md:grid-cols-4 gap-4">

                                <div className="flex items-center border rounded-xl px-3">
                                    <FaMapMarkerAlt className="text-blue-600" />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="w-full p-3 outline-none"
                                    />
                                </div>

                                <select className="border rounded-xl p-3">
                                    <option>Budget</option>
                                    <option>₹3000 - ₹5000</option>
                                    <option>₹5000 - ₹8000</option>
                                    <option>₹8000+</option>
                                </select>

                                <select className="border rounded-xl p-3">
                                    <option>Room Type</option>
                                    <option>Single Room</option>
                                    <option>Double Sharing</option>
                                    <option>1 BHK</option>
                                </select>

                                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2 font-semibold">
                                    <FaSearch />
                                    Search
                                </button>

                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 mt-10 text-white">

                            <div>
                                <h2 className="text-3xl font-bold">10K+</h2>
                                <p>Rooms Listed</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">5K+</h2>
                                <p>Happy Tenants</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">50+</h2>
                                <p>Cities</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <div className="mt-5">

                <div>
                    <div className="flex items-center justify-between mx-13 mt-8 font-bold">
                        <h1>Popular Cities</h1>
                        <h1 className="text-blue-400">View All</h1>
                    </div>
                    <div className="flex gap-6 py-5 px-12 justify-center">
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <img className="h-35 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c1.png`} />
                            <div className="p-3">
                                <h1 className="font-bold">Pune</h1>
                                <h1>1200+ Rooms</h1>
                            </div>
                        </div>
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <img className="h-35 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c2.png`} />
                            <div className="p-3">
                                <h1 className="font-bold">Mumbai</h1>
                                <h1>1500+ Rooms</h1>
                            </div>
                        </div>
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <img className="h-35 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c3.png`} />
                            <div className="p-3">
                                <h1 className="font-bold">Nagpur</h1>
                                <h1>1000+ Rooms</h1>
                            </div>
                        </div>
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <img className="h-35 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c4.png`} />
                            <div className="p-3">
                                <h1 className="font-bold">Nashik</h1>
                                <h1>850+ Rooms</h1>
                            </div>
                        </div>
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <img className="h-35 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c5.png`} />
                            <div className="p-3">
                                <h1 className="font-bold">Agra</h1>
                                <h1>500+ Rooms</h1>
                            </div>
                        </div>
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <img className="h-35 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}c6.png`} />
                            <div className="p-3">
                                <h1 className="font-bold">Kolhpura</h1>
                                <h1>400+ Rooms</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mx-13 font-bold mt-3">
                        <h1>Featured Rooms</h1>
                        <h1 className="text-blue-400">View All</h1>
                    </div>
                    <div className="flex gap-8 py-5 items-center justify-center">
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <div className="relative  h-35 w-auto">
                                <img className="w-full h-full object-cover rounded-t-2xl relative bg-cover" src={`${import.meta.env.BASE_URL}r1.png`} alt="" />

                            </div>
                            <div className="p-3">
                                <h1 className="font-bold">1 BHK Flat</h1>
                                <h1>Hinjewadi, Pune</h1>
                                <div className="flex items-end gap-1">
                                    <h1 className="text-[20px] text-blue-400 font-bold">7500 </h1>
                                    <h1> /month</h1>
                                </div>
                            </div>
                        </div>
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <img className="h-35 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r2.png`} alt="" />
                            <div className="p-3">
                                <h1 className="font-bold">Single Room</h1>
                                <h1>Koregaon Park, Pune</h1>
                                <div className="flex items-end gap-1">
                                    <h1 className="text-[20px] text-blue-400 font-bold">3000 </h1>
                                    <h1> /month</h1>
                                </div>
                            </div>
                        </div>
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <img className="h-35 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r3.png`} alt="" />
                            <div className="p-3">
                                <h1 className="font-bold">2 BHK Flat</h1>
                                <h1>Viman Nagar, Pune</h1>
                                <div className="flex items-end gap-1">
                                    <h1 className="text-[20px] text-blue-400 font-bold">15000 </h1>
                                    <h1> /month</h1>
                                </div>
                            </div>
                        </div>
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <img className="h-35 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r4.png`} alt="" />
                            <div className="p-3">
                                <h1 className="font-bold">1 RK Studio</h1>
                                <h1>Wakad, Pune</h1>
                                <div className="flex items-end gap-1">
                                    <h1 className="text-[20px] text-blue-400 font-bold">5500 </h1>
                                    <h1> /month</h1>
                                </div>
                            </div>
                        </div>
                        <div className=" h-full w-fit shadow-2xl rounded-b-2xl">
                            <img className="h-35 w-auto rounded-t-2xl" src={`${import.meta.env.BASE_URL}r5.png`} alt="" />
                            <div className="p-3">
                                <h1 className="font-bold">Shared Room</h1>
                                <h1>Baner, Pune</h1>
                                <div className="flex items-end gap-1">
                                    <h1 className="text-[20px] text-blue-400 font-bold">2500 </h1>
                                    <h1> /month</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;