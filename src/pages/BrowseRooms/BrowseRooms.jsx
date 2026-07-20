import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import rooms from "../../data/rooms";
const BrowseRooms = () => {
  const navigate = useNavigate();


  return (
    <>
      <div>
        <header className="flex items-center justify-center gap-5 p-5 bg-white/50">
          <div>
            <h1 className="text-4xl font-bold leading-15">
              Browse Rooms
            </h1>

            <p>
              Find Verified rooms that match your lifestyle and budget.
            </p>

            <p className="leading-10">
              Home - Browse Rooms
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="grid md:grid-cols-4 gap-4 p-2">

              <div className="flex items-center border rounded-xl px-3">
                <FaMapMarkerAlt className="text-blue-600" />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 outline-none"
                />
              </div>

              <select className="border rounded-xl p-3">
                <option>₹ Budget</option>
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

              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2">
                <FaSearch />
                Search
              </button>

            </div>
          </div>
        </header>

        {/* Filter + Cards */}
        <section className="shadow-2xl p-5 pr-0 flex">

          {/* Left Filter */}

          {/* Left Filter */}
          <div className="w-72 bg-white rounded-2xl shadow-md p-5 h-fit sticky top-5">

            <h2 className="text-2xl font-bold mb-5">
              Filters
            </h2>

            {/* Gender */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Gender
              </h3>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Boys
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Girls
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Family
                </label>
              </div>
            </div>

            {/* Room Type */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Room Type
              </h3>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Single Room
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Double Sharing
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Triple Sharing
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  1 BHK
                </label>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Monthly Budget
              </h3>

              <input
                type="range"
                min="3000"
                max="20000"
                defaultValue="8000"
                className="w-full"
              />

              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹3000</span>
                <span>₹20000</span>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Amenities
              </h3>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  WiFi
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  AC
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Parking
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Food
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Laundry
                </label>
              </div>
            </div>

            {/* Availability */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Availability
              </h3>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Available Now
              </label>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                Apply Filters
              </button>

              <button className="w-full border border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-semibold">
                Reset
              </button>
            </div>

          </div>

          {/* yaha tum apna purana filter code same paste kar dena */}



          {/* Right Cards */}
          <div className="flex-1">

            <div className="flex justify-between items-center mx-8 mt-3">
              <h1 className="font-bold">
                Showing {rooms.length} Rooms
              </h1>

              <h1 className="text-blue-600 font-bold">
                View All
              </h1>
            </div>

            <div className="grid grid-cols-3 gap-8 p-8">

              {rooms.map((room) => (
                <div
                  key={room.id}
                  onClick={() => navigate(`/room/${room.id}`)}
                  className="cursor-pointer rounded-2xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300 bg-white"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      className="h-52 w-full object-cover"
                      src={`${import.meta.env.BASE_URL}${room.image}`}
                      alt={room.title}
                    />

                    {/* Verified */}
                    <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1">
                      <span className="text-blue-600">✔</span>
                      <span className="text-xs font-semibold text-blue-600">
                        Verified
                      </span>
                    </div>

                    {/* Favourite */}
                    <button
                      className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🤍
                    </button>

                    {/* Photos */}
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
                      📷 {10}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">

                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg">
                        {room.title}
                      </h2>

                      <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                        Available
                      </span>
                    </div>

                    <p className="text-gray-500 mt-2">
                      {room.location}
                    </p>

                    <div className="flex items-end gap-1 mt-3">
                      <h1 className="text-3xl text-blue-600 font-bold">
                        ₹{room.price}
                      </h1>

                      <span className="mb-1 text-gray-500">
                        /month
                      </span>
                    </div>

                    <div className="flex gap-3 flex-wrap border-y py-4 my-4">
                      {room.amenities.map((item) => (
                        <span
                          key={item}
                          className="bg-slate-100 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="font-semibold">
                        Owner: {room.owner}
                      </p>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/room/${room.id}`);
                        }}
                        className="text-blue-600 font-semibold"
                      >
                        View Details →
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrowseRooms;











// import React, { useState, useMemo } from "react";
// import { FaSearch, FaMapMarkerAlt, FaFilter, FaTimes, FaHeart, FaRegHeart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import rooms from "../../data/rooms";

// const BrowseRooms = () => {
//   const navigate = useNavigate();

//   // Mobile Filter Drawer Toggle State
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   // Favorites State
//   const [favorites, setFavorites] = useState([]);

//   // Search Bar Header State
//   const [searchCity, setSearchCity] = useState("");
//   const [searchBudget, setSearchBudget] = useState("");
//   const [searchRoomType, setSearchRoomType] = useState("");

//   // Sidebar Filter State
//   const [selectedGenders, setSelectedGenders] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [maxPrice, setMaxPrice] = useState(20000);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);
//   const [availableOnly, setAvailableOnly] = useState(false);

//   // Active Filter Applied State (Triggers filtering when "Apply Filters" is clicked or Search bar submits)
//   const [appliedFilters, setAppliedFilters] = useState({
//     city: "",
//     maxPrice: 20000,
//     genders: [],
//     types: [],
//     amenities: [],
//     availableOnly: false,
//   });

//   // Toggle Handlers for Checkboxes
//   const toggleSelection = (item, currentList, setList) => {
//     if (currentList.includes(item)) {
//       setList(currentList.filter((i) => i !== item));
//     } else {
//       setList([...currentList, item]);
//     }
//   };

//   // Favorite Toggle
//   const toggleFavorite = (e, roomId) => {
//     e.stopPropagation();
//     setFavorites((prev) =>
//       prev.includes(roomId) ? prev.filter((id) => id !== roomId) : [...prev, roomId]
//     );
//   };

//   // Handle Search Bar Submit
//   const handleQuickSearch = (e) => {
//     e.preventDefault();
//     let computedMaxPrice = maxPrice;

//     if (searchBudget === "3000-5000") computedMaxPrice = 5000;
//     else if (searchBudget === "5000-8000") computedMaxPrice = 8000;
//     else if (searchBudget === "8000+") computedMaxPrice = 20000;

//     const newTypes = searchRoomType ? [searchRoomType] : selectedTypes;

//     setAppliedFilters({
//       city: searchCity,
//       maxPrice: computedMaxPrice,
//       genders: selectedGenders,
//       types: newTypes,
//       amenities: selectedAmenities,
//       availableOnly,
//     });
//   };

//   // Handle Sidebar "Apply Filters"
//   const handleApplyFilters = () => {
//     setAppliedFilters({
//       city: searchCity,
//       maxPrice: Number(maxPrice),
//       genders: selectedGenders,
//       types: selectedTypes,
//       amenities: selectedAmenities,
//       availableOnly,
//     });
//     setIsFilterOpen(false); // Close mobile drawer if open
//   };

//   // Handle Filter Reset
//   const handleResetFilters = () => {
//     setSearchCity("");
//     setSearchBudget("");
//     setSearchRoomType("");
//     setSelectedGenders([]);
//     setSelectedTypes([]);
//     setMaxPrice(20000);
//     setSelectedAmenities([]);
//     setAvailableOnly(false);

//     setAppliedFilters({
//       city: "",
//       maxPrice: 20000,
//       genders: [],
//       types: [],
//       amenities: [],
//       availableOnly: false,
//     });
//   };

//   // Filtered Rooms Output
//   const filteredRooms = useMemo(() => {
//     return rooms.filter((room) => {
//       // 1. City Filter
//       if (
//         appliedFilters.city &&
//         !room.location.toLowerCase().includes(appliedFilters.city.toLowerCase())
//       ) {
//         return false;
//       }

//       // 2. Max Price / Budget Filter
//       if (room.price > appliedFilters.maxPrice) {
//         return false;
//       }

//       // 3. Gender Filter (Assuming room object contains gender tag or category)
//       if (
//         appliedFilters.genders.length > 0 &&
//         !appliedFilters.genders.some((g) =>
//           room.gender ? room.gender.toLowerCase() === g.toLowerCase() : true
//         )
//       ) {
//         return false;
//       }

//       // 4. Room Type Filter
//       if (
//         appliedFilters.types.length > 0 &&
//         !appliedFilters.types.some((t) =>
//           room.title.toLowerCase().includes(t.toLowerCase()) ||
//           (room.type && room.type.toLowerCase() === t.toLowerCase())
//         )
//       ) {
//         return false;
//       }

//       // 5. Amenities Filter
//       if (
//         appliedFilters.amenities.length > 0 &&
//         !appliedFilters.amenities.every((a) =>
//           room.amenities.some((item) => item.toLowerCase() === a.toLowerCase())
//         )
//       ) {
//         return false;
//       }

//       // 6. Availability Filter
//       if (appliedFilters.availableOnly && room.isAvailable === false) {
//         return false;
//       }

//       return true;
//     });
//   }, [appliedFilters]);

//   return (
//     <div className="w-full bg-gray-50 min-h-screen">
//       {/* Header Section */}
//       <header className="bg-white border-b border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//           <div>
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
//               Browse Rooms
//             </h1>
//             <p className="text-gray-500 text-sm sm:text-base mt-1">
//               Find verified rooms that match your lifestyle and budget.
//             </p>
//             <p className="text-xs text-gray-400 mt-2 font-medium">
//               Home <span className="mx-1">/</span> Browse Rooms
//             </p>
//           </div>

//           {/* Quick Search Header Bar */}
//           <form
//             onSubmit={handleQuickSearch}
//             className="bg-white rounded-2xl shadow-md border border-gray-100 p-3 sm:p-4 w-full lg:w-auto"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//               <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 focus-within:bg-white focus-within:border-blue-500 transition">
//                 <FaMapMarkerAlt className="text-blue-600 text-base shrink-0 mr-2" />
//                 <input
//                   type="text"
//                   placeholder="City"
//                   value={searchCity}
//                   onChange={(e) => setSearchCity(e.target.value)}
//                   className="w-full bg-transparent outline-none text-gray-700 text-sm"
//                 />
//               </div>

//               <select
//                 value={searchBudget}
//                 onChange={(e) => setSearchBudget(e.target.value)}
//                 className="border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 text-gray-700 text-sm outline-none focus:border-blue-500 transition cursor-pointer"
//               >
//                 <option value="">₹ Budget</option>
//                 <option value="3000-5000">₹3,000 - ₹5,000</option>
//                 <option value="5000-8000">₹5,000 - ₹8,000</option>
//                 <option value="8000+">₹8,000+</option>
//               </select>

//               <select
//                 value={searchRoomType}
//                 onChange={(e) => setSearchRoomType(e.target.value)}
//                 className="border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 text-gray-700 text-sm outline-none focus:border-blue-500 transition cursor-pointer"
//               >
//                 <option value="">Room Type</option>
//                 <option value="Single Room">Single Room</option>
//                 <option value="Double Sharing">Double Sharing</option>
//                 <option value="1 BHK">1 BHK</option>
//               </select>

//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-200 text-sm cursor-pointer"
//               >
//                 <FaSearch />
//                 Search
//               </button>
//             </div>
//           </form>
//         </div>
//       </header>

//       {/* Main Content Area */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Mobile Filter Toggle Button */}
//         <div className="flex lg:hidden justify-between items-center mb-6">
//           <button
//             onClick={() => setIsFilterOpen(!isFilterOpen)}
//             className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 shadow-sm active:scale-95 transition"
//           >
//             <FaFilter className="text-blue-600" />
//             {isFilterOpen ? "Hide Filters" : "Show Filters"}
//           </button>
//           <span className="text-sm font-semibold text-gray-600">
//             {filteredRooms.length} Rooms Found
//           </span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Left Filter Sidebar */}
//           <aside
//             className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit lg:sticky lg:top-6 ${
//               isFilterOpen ? "block" : "hidden lg:block"
//             }`}
//           >
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-bold text-gray-900">Filters</h2>
//               <button
//                 onClick={() => setIsFilterOpen(false)}
//                 className="lg:hidden text-gray-400 hover:text-gray-600"
//               >
//                 <FaTimes />
//               </button>
//             </div>

//             {/* Gender Filter */}
//             <div className="mb-6 border-b border-gray-100 pb-5">
//               <h3 className="font-semibold text-sm text-gray-800 mb-3">Gender</h3>
//               <div className="space-y-2.5 text-sm text-gray-600">
//                 {["Boys", "Girls", "Family"].map((gender) => (
//                   <label key={gender} className="flex items-center gap-2.5 cursor-pointer select-none">
//                     <input
//                       type="checkbox"
//                       checked={selectedGenders.includes(gender)}
//                       onChange={() => toggleSelection(gender, selectedGenders, setSelectedGenders)}
//                       className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
//                     />
//                     {gender}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Room Type Filter */}
//             <div className="mb-6 border-b border-gray-100 pb-5">
//               <h3 className="font-semibold text-sm text-gray-800 mb-3">Room Type</h3>
//               <div className="space-y-2.5 text-sm text-gray-600">
//                 {["Single Room", "Double Sharing", "Triple Sharing", "1 BHK"].map((type) => (
//                   <label key={type} className="flex items-center gap-2.5 cursor-pointer select-none">
//                     <input
//                       type="checkbox"
//                       checked={selectedTypes.includes(type)}
//                       onChange={() => toggleSelection(type, selectedTypes, setSelectedTypes)}
//                       className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
//                     />
//                     {type}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Monthly Budget Filter */}
//             <div className="mb-6 border-b border-gray-100 pb-5">
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="font-semibold text-sm text-gray-800">Max Budget</h3>
//                 <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
//                   ₹{Number(maxPrice).toLocaleString("en-IN")}
//                 </span>
//               </div>
//               <input
//                 type="range"
//                 min="3000"
//                 max="20000"
//                 step="500"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(e.target.value)}
//                 className="w-full accent-blue-600 cursor-pointer"
//               />
//               <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
//                 <span>₹3,000</span>
//                 <span>₹20,000</span>
//               </div>
//             </div>

//             {/* Amenities Filter */}
//             <div className="mb-6 border-b border-gray-100 pb-5">
//               <h3 className="font-semibold text-sm text-gray-800 mb-3">Amenities</h3>
//               <div className="space-y-2.5 text-sm text-gray-600">
//                 {["WiFi", "AC", "Parking", "Food", "Laundry"].map((amenity) => (
//                   <label key={amenity} className="flex items-center gap-2.5 cursor-pointer select-none">
//                     <input
//                       type="checkbox"
//                       checked={selectedAmenities.includes(amenity)}
//                       onChange={() => toggleSelection(amenity, selectedAmenities, setSelectedAmenities)}
//                       className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
//                     />
//                     {amenity}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Availability Filter */}
//             <div className="mb-6">
//               <h3 className="font-semibold text-sm text-gray-800 mb-3">Availability</h3>
//               <label className="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none">
//                 <input
//                   type="checkbox"
//                   checked={availableOnly}
//                   onChange={(e) => setAvailableOnly(e.target.checked)}
//                   className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
//                 />
//                 Available Now
//               </label>
//             </div>

//             {/* Filter Action Buttons */}
//             <div className="space-y-2.5 pt-2">
//               <button
//                 onClick={handleApplyFilters}
//                 className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white py-2.5 rounded-xl font-semibold text-sm transition duration-200 cursor-pointer"
//               >
//                 Apply Filters
//               </button>
//               <button
//                 onClick={handleResetFilters}
//                 className="w-full border border-gray-300 hover:bg-gray-50 active:scale-95 text-gray-700 py-2.5 rounded-xl font-semibold text-sm transition duration-200 cursor-pointer"
//               >
//                 Reset
//               </button>
//             </div>
//           </aside>

//           {/* Right Cards List */}
//           <div className="lg:col-span-3">
//             <div className="hidden lg:flex justify-between items-center mb-6">
//               <h2 className="font-bold text-gray-800 text-lg">
//                 Showing {filteredRooms.length} Rooms
//               </h2>
//               <button
//                 onClick={handleResetFilters}
//                 className="text-blue-600 hover:underline font-semibold text-sm cursor-pointer"
//               >
//                 View All
//               </button>
//             </div>

//             {/* Empty State */}
//             {filteredRooms.length === 0 ? (
//               <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
//                 <p className="text-gray-500 text-lg font-medium">No rooms found matching your criteria.</p>
//                 <button
//                   onClick={handleResetFilters}
//                   className="mt-4 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition cursor-pointer"
//                 >
//                   Clear Filters
//                 </button>
//               </div>
//             ) : (
//               /* Room Cards Grid */
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredRooms.map((room) => {
//                   const isFav = favorites.includes(room.id);
//                   return (
//                     <div
//                       key={room.id}
//                       onClick={() => navigate(`/room/${room.id}`)}
//                       className="cursor-pointer rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
//                     >
//                       <div>
//                         {/* Image Container */}
//                         <div className="relative">
//                           <img
//                             className="h-48 w-full object-cover"
//                             src={`${import.meta.env.BASE_URL}${room.image}`}
//                             alt={room.title}
//                           />

//                           {/* Verified Badge */}
//                           <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
//                             <span className="text-blue-600 text-xs">✔</span>
//                             <span className="text-[11px] font-bold text-blue-600">
//                               Verified
//                             </span>
//                           </div>

//                           {/* Favourite Button */}
//                           <button
//                             type="button"
//                             className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full shadow-sm flex items-center justify-center hover:bg-red-50 transition cursor-pointer"
//                             onClick={(e) => toggleFavorite(e, room.id)}
//                             aria-label="Save to favorites"
//                           >
//                             {isFav ? (
//                               <FaHeart className="text-red-500 text-xs" />
//                             ) : (
//                               <FaRegHeart className="text-gray-600 text-xs" />
//                             )}
//                           </button>

//                           {/* Photos Count */}
//                           <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-[11px] font-medium">
//                             📷 {room.photosCount || 10}
//                           </div>
//                         </div>

//                         {/* Room Info */}
//                         <div className="p-4">
//                           <div className="flex justify-between items-start gap-2">
//                             <h3 className="font-bold text-base text-gray-900 leading-snug line-clamp-1">
//                               {room.title}
//                             </h3>
//                             <span className="bg-green-100 text-green-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full shrink-0">
//                               Available
//                             </span>
//                           </div>

//                           <p className="text-xs text-gray-500 mt-1 line-clamp-1">
//                             {room.location}
//                           </p>

//                           <div className="flex items-baseline gap-1 mt-3">
//                             <span className="text-2xl text-blue-600 font-bold">
//                               ₹{Number(room.price).toLocaleString("en-IN")}
//                             </span>
//                             <span className="text-xs text-gray-500">/month</span>
//                           </div>

//                           {/* Amenities Pills */}
//                           <div className="flex gap-1.5 flex-wrap border-y border-gray-100 py-3 my-3">
//                             {room.amenities.map((item) => (
//                               <span
//                                 key={item}
//                                 className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md text-xs font-medium"
//                               >
//                                 {item}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Card Footer */}
//                       <div className="px-4 pb-4 pt-0 flex justify-between items-center text-xs border-t border-transparent">
//                         <p className="font-medium text-gray-700 truncate max-w-[120px]">
//                           Owner: {room.owner}
//                         </p>
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             navigate(`/room/${room.id}`);
//                           }}
//                           className="text-blue-600 hover:text-blue-700 font-semibold transition shrink-0 cursor-pointer"
//                         >
//                           View Details →
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BrowseRooms;