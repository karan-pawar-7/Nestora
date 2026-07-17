import React, { useState } from "react";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaStar,
  FaTrash,
  FaEye,
  FaSearch,
} from "react-icons/fa";

export default function Wishlist() {

  const [rooms, setRooms] = useState([
    {
      id: 1,
      title: "Luxury PG Room",
      location: "Pune, Maharashtra",
      price: "8000",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Mumbai, Maharashtra",
      price: "15000",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      id: 3,
      title: "Student Friendly Room",
      location: "Nagpur, Maharashtra",
      price: "6000",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
  ]);


  const [search, setSearch] = useState("");


  const removeRoom = (id) => {
    setRooms(
      rooms.filter((room) => room.id !== id)
    );
  };


  const filteredRooms = rooms.filter((room)=>
    room.title.toLowerCase()
    .includes(search.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-slate-100 py-10">


      {/* Header */}

      <div className="max-w-7xl mx-auto px-5">


        <div className="flex flex-col md:flex-row justify-between items-center gap-5">


          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <FaHeart className="text-red-500"/>
              My Wishlist
            </h1>

            <p className="text-gray-500 mt-2">
              Your saved rooms are here
            </p>
          </div>



          {/* Search */}

          <div className="relative">

            <FaSearch className="absolute top-3 left-3 text-gray-400"/>

            <input
              type="text"
              placeholder="Search rooms..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-xl border 
              focus:outline-none focus:ring-2 
              focus:ring-blue-500 w-72"
            />

          </div>


        </div>





        {/* Cards */}

        {
          filteredRooms.length === 0 ? (

            <div className="mt-20 text-center">

              <FaHeart 
              className="mx-auto text-6xl text-gray-300"
              />

              <h2 className="text-xl font-semibold mt-5">
                No Saved Rooms
              </h2>

              <p className="text-gray-500">
                Add rooms to your wishlist
              </p>

            </div>


          ):(


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">


          {
            filteredRooms.map((room)=>(


              <div
              key={room.id}
              className="
              bg-white rounded-2xl overflow-hidden
              shadow-md hover:shadow-xl
              transition duration-300
              "
              >


                {/* Image */}

                <div className="relative">

                  <img
                  src={room.image}
                  alt={room.title}
                  className="
                  h-52 w-full object-cover
                  "
                  />


                  <button
                  onClick={()=>removeRoom(room.id)}
                  className="
                  absolute top-4 right-4
                  bg-white p-3 rounded-full
                  text-red-500 shadow
                  hover:bg-red-500
                  hover:text-white
                  transition
                  "
                  >

                  <FaHeart/>

                  </button>


                </div>





                {/* Content */}

                <div className="p-5">


                  <h2 className="text-xl font-bold">
                    {room.title}
                  </h2>



                  <div className="flex items-center gap-2 text-gray-500 mt-2">

                    <FaMapMarkerAlt 
                    className="text-blue-500"
                    />

                    {room.location}

                  </div>



                  <div className="flex justify-between items-center mt-4">


                    <div className="flex items-center gap-1">

                      <FaStar className="text-yellow-400"/>

                      <span>
                        {room.rating}
                      </span>

                    </div>


                    <p className="font-bold text-blue-600">

                      ₹{room.price}/month

                    </p>


                  </div>






                  {/* Buttons */}

                  <div className="flex gap-3 mt-6">


                    <button
                    className="
                    flex-1
                    bg-blue-600
                    text-white
                    py-3
                    rounded-xl
                    flex items-center
                    justify-center gap-2
                    hover:bg-blue-700
                    "
                    >

                    <FaEye/>
                    View

                    </button>



                    <button
                    onClick={()=>removeRoom(room.id)}
                    className="
                    px-5
                    rounded-xl
                    border
                    text-red-500
                    hover:bg-red-50
                    "
                    >

                    <FaTrash/>

                    </button>


                  </div>



                </div>


              </div>


            ))
          }


          </div>


          )

        }


      </div>


    </div>
  );
}