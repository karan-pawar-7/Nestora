import React, { useState } from "react";
import {
  faHouse,
  faShieldHalved,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGoogle,
  faFacebookF,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex">

      {/* LEFT SIDE */}

      <div
        className="hidden lg:flex w-1/2 relative overflow-hidden px-14 py-12"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}login-house.png)`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="relative z-10 flex flex-col justify-between w-full">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">

                <FontAwesomeIcon
                  icon={faHouse}
                  className="text-white text-3xl"
                />

              </div>

              <div>

                <h1 className="text-4xl font-bold text-blue-700">
                  Nestora
                </h1>

                <p className="text-gray-600">
                  Find. Rent. Live.
                </p>

              </div>

            </div>

            {/* Heading */}

            <div className="mt-15">

              <h1 className="text-[50px] font-bold leading-tight text-slate-900">

                Find your perfect room
                <br />
                <span className="text-blue-600 ">
                  Rent with confidence.
                </span>

              </h1>

              <p className="mt-8 text-xl text-gray-700 leading-9 max-w-xl">

                Explore verified rooms, connect directly with
                trusted owners and enjoy a smooth rental experience.

              </p>

            </div>

            {/* Features */}

            <div className="mt-5 grid grid-cols-3 gap-8">

              <div className="text-center">

                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex justify-center items-center mx-auto">

                  <FontAwesomeIcon
                    icon={faHouse}
                    className="text-blue-600 text-3xl"
                  />

                </div>

                <h3 className="mt-4 font-semibold text-[20px]">
                  Verified
                  <br />
                  Rooms
                </h3>

              </div>

              <div className="text-center">

                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex justify-center items-center mx-auto">

                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    className="text-blue-600 text-3xl"
                  />

                </div>

                <h3 className="mt-4 font-semibold">
                  Secure
                  <br />
                  Booking
                </h3>

              </div>

              <div className="text-center">

                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex justify-center items-center mx-auto">

                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="text-blue-500 text-3xl"
                  />

                </div>

                <h3 className="mt-4 font-semibold">
                  24/7
                  <br />
                  Support
                </h3>

              </div>

            </div>

          </div>

          {/* Bottom Card */}

          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl max-w-md">

            <div className="flex items-center gap-4">

              <img className="w-14 h-14 rounded-full border-2 border-white" src={`${import.meta.env.BASE_URL}user3.png`} alt="" />

              <img className="w-14 h-14 rounded-full border-2 border-white" src={`${import.meta.env.BASE_URL}user1.png`} alt="" />

              <img className="w-14 h-14 rounded-full border-2 border-white" src={`${import.meta.env.BASE_URL}user2.png`} alt="" />

              <span className="ml-3 text-gray-700 font-semibold">
                Trusted by 10,000+ users
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE - Part 2 yaha se start hoga */}


      <div className="w-full lg:w-1/2 flex items-center justify-center p-10">

        <div className="w-full max-w-2xl bg-white rounded-[35px] shadow-xl p-10">

          {/* Part 2 */}
          <div className="flex justify-end">

            <p className="text-gray-500">
              Don't have an account?{" "}
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                Sign Up
              </span>
            </p>

          </div>

          <h1 className="text-5xl font-bold mt-8">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Login to continue your Nestora journey.
          </p>

          {/* Email */}

          <div className="mt-10">

            <label className="font-semibold text-gray-700">
              Email Address
            </label>

            <div className="mt-3 flex items-center border rounded-2xl h-16 px-5">

              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-400 text-xl"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 ml-4 outline-none text-lg"
              />

            </div>

          </div>

          {/* Password */}

          <div className="mt-6">

            <label className="font-semibold text-gray-700">
              Password
            </label>

            <div className="mt-3 flex items-center border rounded-2xl h-16 px-5">

              <FontAwesomeIcon
                icon={faLock}
                className="text-gray-400 text-xl"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="flex-1 ml-4 outline-none text-lg"
              />

              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-gray-400 text-xl hover:text-blue-600"
              />

            </div>

          </div>

          {/* Remember */}

          <div className="flex justify-between items-center mt-6">

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                className="accent-blue-600 w-5 h-5"
              />

              <span className="text-gray-600">
                Remember me
              </span>

            </label>

            <button className="text-blue-600 hover:underline">
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}

          <button className="mt-8 w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold flex justify-center items-center gap-3 transition">

            <FontAwesomeIcon icon={faRightToBracket} />

            Login

          </button>

          {/* Divider */}

          <div className="flex items-center my-8">

            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="px-4 text-gray-400">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>

          </div>

          {/* Part 3 yaha se start hoga */}
          {/* Social Login */}

          <div className="grid grid-cols-3 gap-4">

            {/* Google */}

            <button className="h-14 rounded-2xl border hover:border-blue-500 hover:bg-blue-50 duration-300 flex items-center justify-center gap-3">

              <FontAwesomeIcon
                icon={faGoogle}
                className="text-red-500 text-xl"
              />

              <span className="font-medium">
                Google
              </span>

            </button>

            {/* Facebook */}

            <button className="h-14 rounded-2xl border hover:border-blue-500 hover:bg-blue-50 duration-300 flex items-center justify-center gap-3">

              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-blue-600 text-xl"
              />

              <span className="font-medium">
                Facebook
              </span>

            </button>

            {/* Apple */}

            <button className="h-14 rounded-2xl border hover:border-blue-500 hover:bg-blue-50 duration-300 flex items-center justify-center gap-3">

              <FontAwesomeIcon
                icon={faApple}
                className="text-black text-xl"
              />

              <span className="font-medium">
                Apple
              </span>

            </button>

          </div>

          {/* Security Card */}

          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-center gap-4">

            <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">

              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-white text-2xl"
              />

            </div>

            <div>

              <h3 className="font-semibold text-lg text-gray-800">
                Secure Login
              </h3>

              <p className="text-gray-500 text-sm">
                Your personal information is protected with
                industry-standard encryption and secure authentication.
              </p>

            </div>

          </div>

          {/* Footer */}

          <p className="text-center text-gray-500 mt-8">

            By logging in, you agree to our{" "}

            <span className="text-blue-600 cursor-pointer hover:underline">
              Terms
            </span>

            {" "}and{" "}

            <span className="text-blue-600 cursor-pointer hover:underline">
              Privacy Policy
            </span>

          </p>


        </div>

      </div>

    </div>
  );
};

export default Login;