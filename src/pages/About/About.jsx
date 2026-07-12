import React from 'react'
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

import {
  faShieldHalved,
  faLock,
  faIndianRupeeSign,
}

  from "@fortawesome/free-solid-svg-icons";

import {
  faMagnifyingGlass,
  faScaleBalanced,
  faComments,
  faCalendarDays,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHouse,
  faUsers,
  faLocationDot,
  faUserCheck,
  faStar
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <section
        className="h-100 bg-cover bg-center overflow-hidden relative bg-black/35"


        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}h1.png)`,
        }}
      >
        <div className="absolute inset-0 h-118 bg-black/30"></div>

        {/* Content */}
        <div className="relative flex pt-15 justify-center max-w-7xl mx-auto min-h-screen">
          <div className="max-w-3xl items-center flex flex-col">


            <h1 className=" text-5xl lg:text-6xl font-bold text-white ">
              About Nestora
            </h1>
            <div className="flex flex-col items-center justify-center text-2xl">
              <p className=" mt-6 text-white ">
                Helping students, professionals, and families
              </p>
              <p className=" text-white">Find verified rooms across Maharashtra with ease</p>
            </div>

            <div className='flex gap-10 mt-6'>
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center gap-2 font-semibold h-10 p-3">
                <FaSearch />
                Browese Rooms
              </button>
              <button className="bg-white hover:bg-blue-700 text-black rounded-md flex items-center justify-center gap-2 font-semibold h-10 p-3">
                <FaSearch />
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className='flex justify-between items-center p-10 mt-8 mb-5'>
        <div className='w-1/2'>
          <img className="h-90 ml-10 w-160 rounded-2xl" src={`${import.meta.env.BASE_URL}a1.png`} />
        </div>
        <div className='w-1/2'>
          <p className='text-blue-500 font-bold mb-3 text-[20px]'>
            OUR STORY
          </p>
          <h1 className='text-4xl font-bold mb-3'>
            Find. Rent. Live.
          </h1>
          <p className='text-[20px] text-gray-700'>
            Finding the perfect room shouldn't be stressful. That's why <br /> Nestora was created—to make room searching simple, fast,<br /> and trustworthy.
            Whether you're a student, working professional,<br /> or a family, Nestora connects you with verified room listings across <br /> multiple cities. <br />
            Our platform focuses on transparency, affordability, and convenience,<br /> helping users compare rooms, explore amenities, and contact trusted <br /> owners with confidence.
          </p>
        </div>
      </section>


      <section className='flex flex-col items-center justify-center mb-8'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-blue-600 font-bold'>WHY CHOOSE NESTORA</p>
          <h1 className='text-4xl font-semibold'>Why Thousands Choose Nestora</h1>
        </div>

        <div className='grid grid-cols-4 p-10 mx-10 gap-5'>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-2 py-5'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <h1 className='text-[18px] font-semibold'>Verified Listings</h1>
            <p className='px-10 text-gray-700'>Every room is manually verified before being published.</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-2 py-5'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <h1 className='text-[18px] font-semibold'>Easy Search</h1>
            <p className='px-10 text-gray-700'>Filter by city, budget, room type and amenities.</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-2 py-5'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faLock} />
            </div>
            <h1 className='text-[18px] font-semibold'>Safe & Secure</h1>
            <p className='px-10 text-gray-700'>Verified owners and secure communication for peace of mind.</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-2 py-5'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faIndianRupeeSign} />
            </div>
            <h1 className='text-[18px] font-semibold'>Affordable Prices</h1>
            <p className='px-10 text-gray-700'>Rooms available for every budget and lifestyle.</p>
          </div>

        </div>
      </section>

      <div
        className="relative h-[200px]  rounded-2xl mb-13 mt-5 overflow-hidden bg-cover bg-center mx-20"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}a2.png)`,
        }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-12">
          <div className="max-w-xl text-white">
            <p className="uppercase text-sm font-semibold tracking-widest">
              OUR MISSION
            </p>

            <h2 className="text-[40px] font-bold">
              Our Mission
            </h2>

            <p className=" text-lg leading-8 text-blue-100">
              To become India's most trusted room rental platform by connecting
              tenants and owners through a secure, transparent, and user-friendly
              experience.
            </p>
          </div>
        </div>
      </div>

      <section className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-blue-600 font-semibold text-[20px]'>OUR IMPACT IN NUMBERS</p>
        </div>

        <div className='grid grid-cols-5 p-10 mx-10 gap-10 py-4'>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-1 px-10 py-3'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faHouse} />
            </div>
            <h1 className='text-[25px] font-semibold'>12,00+</h1>
            <p className='text-gray-700'>Rooms Listed</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-1 px-10 py-3'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faUsers} />
            </div>
            <h1 className='text-[25px] font-semibold'>8,500+</h1>
            <p className=' text-gray-700'>Happly Users</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-2 px-10 py-3'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h1 className='text-[25px] font-semibold'>20+</h1>
            <p className=' text-gray-700'>Cities Covered</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-2 px-10 py-3'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faUserCheck} />
            </div>
            <h1 className='text-[25px] font-semibold'>1,500+</h1>
            <p className=' text-gray-700'>Verified Owners</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-2 px-10 py-3'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faStar} />
            </div>
            <h1 className='text-[25px] font-semibold'>98%</h1>
            <p className=' text-gray-700'>Customer Satisfaction</p>
          </div>

        </div>
      </section>

      <section className='flex flex-col items-center justify-center mt-10'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-blue-600 font-semibold text-[20px]'>OUR PROCESS</p>
          <p className="text-3xl font-semibold">How Nestora Work</p>
        </div>

        <div className='grid grid-cols-5 p-10 mx-10 gap-10 py-4'>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-1 px-5 py-3'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <h1 className='text-[20px] font-semibold'>Search Room</h1>
            <p className='text-gray-700'>Find rooms based on your preferred location, budget, room type, and amenities.</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-1 px-5 py-3'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <h1 className='text-[20px] font-semibold'>Compare</h1>
            <p className=' text-gray-700'>Compare room prices, facilities, locations, and reviews to choose the best option.</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-1 px-5 py-3'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faComments} />

            </div>
            <h1 className='text-[20px] font-semibold'>Contact Owner</h1>
            <p className=' text-gray-700'>Connect directly with verified property owners to ask questions and schedule a visit.</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-2 px-5 py-3'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <h1 className='text-[20px] font-semibold'>Visit Room</h1>
            <p className=' text-gray-700'>Visit the property, inspect the room, and confirm that it meets your expectations.</p>
          </div>

          <div className='flex flex-col items-center justify-center shadow-2xl rounded-2xl text-center gap-2 px-5 py-3'>
            <div className='rounded-full bg-blue-100 p-2 text-blue-800 text-2xl'><FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <h1 className='text-[20px] font-semibold'>Move In</h1>
            <p className=' text-gray-700'>Complete the booking process and move into your new room with confidence.</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default About