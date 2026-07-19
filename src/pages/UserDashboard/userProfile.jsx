import React from "react";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaEdit,
    FaHome,
    FaHeart,
    FaCalendarCheck
} from "react-icons/fa";


export default function userProfile() {

    return (

        <div className="min-h-screen bg-slate-100 py-10">


            <div className="max-w-5xl mx-auto px-5">


                {/* Profile Card */}

                <div className="
        bg-white rounded-3xl shadow-lg
        p-8
        ">


                    <div className="
          flex flex-col md:flex-row
          items-center gap-8
          ">


                        {/* Image */}

                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            className="
            w-32 h-32 rounded-full
            border-4 border-blue-500
            "
                        />


                        <div>


                            <h1 className="text-3xl font-bold">
                                Karan Pawar
                            </h1>


                            <p className="text-gray-500 mt-2">
                                Room Finder User
                            </p>



                            <button
                                className="
              mt-5
              bg-blue-600
              text-white
              px-6 py-3
              rounded-xl
              flex items-center gap-2
              "
                            >

                                <FaEdit />
                                Edit Profile

                            </button>


                        </div>


                    </div>





                    {/* Information */}


                    <div className="
          grid md:grid-cols-2
          gap-5 mt-10
          ">


                        <Info
                            icon={<FaEnvelope />}
                            title="Email"
                            value="karan@gmail.com"
                        />


                        <Info
                            icon={<FaPhone />}
                            title="Phone"
                            value="+91 9876543210"
                        />


                        <Info
                            icon={<FaMapMarkerAlt />}
                            title="Location"
                            value="Maharashtra, India"
                        />


                        <Info
                            icon={<FaUser />}
                            title="Account"
                            value="Tenant"
                        />



                    </div>



                </div>





                {/* Stats */}


                <div className="
        grid md:grid-cols-3
        gap-6 mt-8
        ">


                    <Stat
                        icon={<FaHome />}
                        title="Rooms Viewed"
                        number="24"
                    />


                    <Stat
                        icon={<FaHeart />}
                        title="Wishlist"
                        number="12"
                    />


                    <Stat
                        icon={<FaCalendarCheck />}
                        title="Bookings"
                        number="5"
                    />


                </div>



            </div>


        </div>

    );
}





function Info({ icon, title, value }) {

    return (

        <div className="
bg-slate-50
p-5
rounded-xl
flex gap-4
items-center
">

            <div className="text-blue-600 text-xl">
                {icon}
            </div>


            <div>

                <p className="text-gray-500">
                    {title}
                </p>

                <h3 className="font-semibold">
                    {value}
                </h3>

            </div>


        </div>

    )

}




function Stat({ icon, title, number }) {

    return (

        <div className="
bg-white
rounded-2xl
shadow
p-6
flex items-center
gap-5
">


            <div className="
bg-blue-100
p-4 rounded-full
text-blue-600
">

                {icon}

            </div>


            <div>

                <h2 className="text-2xl font-bold">
                    {number}
                </h2>

                <p className="text-gray-500">
                    {title}
                </p>

            </div>


        </div>

    )

}