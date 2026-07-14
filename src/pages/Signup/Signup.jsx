import {
  faHouse,
  faShieldHalved,
  faChartLine,
  faHeadset,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Signup() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* ================= LEFT SIDE ================= */}

      <div
        className="relative flex flex-col justify-between p-12 bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}signin.png)`,
        }}
      >
        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-[#0b2f75]/10"></div>

        {/* Content */}

        <div className="relative z-10">

          {/* Logo */}

          <div className="flex items-center gap-3 mb-16">

            <FontAwesomeIcon
              icon={faHouse}
              className="text-5xl text-white"
            />

            <div>
              <h1 className="text-5xl font-bold text-white">
                Nestora
              </h1>

              <p className="text-white/80">
                Find. Rent. Live.
              </p>
            </div>

          </div>

          {/* Heading */}

          <h1 className="text-6xl leading-tight font-bold text-white">

            Join Nestora and
            <br />

            start your journey
            <br />

            as a

            <span className="text-blue-400">
              {" "}
              property owner
            </span>

          </h1>

          <p className="text-white/90 text-xl mt-8 max-w-xl">
            List your property, connect with verified tenants,
            and grow your rental business with ease.
          </p>

          {/* Features */}

          <div className="space-y-8 mt-14">

            {/* 1 */}

            <div className="flex items-center gap-5">

              <div className="h-16 w-16 rounded-2xl bg-blue-500 flex justify-center items-center">

                <FontAwesomeIcon
                  icon={faHouse}
                  className="text-white text-2xl"
                />

              </div>

              <div>

                <h3 className="text-2xl font-semibold text-white">
                  List Your Property
                </h3>

                <p className="text-white/70">
                  Reach thousands of potential tenants.
                </p>

              </div>

            </div>

            {/* 2 */}

            <div className="flex items-center gap-5">

              <div className="h-16 w-16 rounded-2xl bg-green-500 flex justify-center items-center">

                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-white text-2xl"
                />

              </div>

              <div>

                <h3 className="text-2xl font-semibold text-white">
                  Verified Tenants
                </h3>

                <p className="text-white/70">
                  We verify every tenant for your safety.
                </p>

              </div>

            </div>

            {/* 3 */}

            <div className="flex items-center gap-5">

              <div className="h-16 w-16 rounded-2xl bg-purple-500 flex justify-center items-center">

                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-white text-2xl"
                />

              </div>

              <div>

                <h3 className="text-2xl font-semibold text-white">
                  Secure Payments
                </h3>

                <p className="text-white/70">
                  Get paid securely and on time.
                </p>

              </div>

            </div>

            {/* 4 */}

            <div className="flex items-center gap-5">

              <div className="h-16 w-16 rounded-2xl bg-yellow-500 flex justify-center items-center">

                <FontAwesomeIcon
                  icon={faHeadset}
                  className="text-white text-2xl"
                />

              </div>

              <div>

                <h3 className="text-2xl font-semibold text-white">
                  24/7 Support
                </h3>

                <p className="text-white/70">
                  Our team is here to help anytime.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Card */}

        <div className="relative z-10 mt-16">

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-md">

            {/* Fake Avatars */}

            <div className="flex items-center -space-x-3 mb-6">

              <img className="w-14 h-14 rounded-full border-2 border-white" src={`${import.meta.env.BASE_URL}user1.png`} alt="" />

              <img className="w-14 h-14 rounded-full border-2 border-white" src={`${import.meta.env.BASE_URL}user2.png`} alt="" />

              <img className="w-14 h-14 rounded-full border-2 border-white" src={`${import.meta.env.BASE_URL}user3.png`} alt="" />

              <div className="w-14 h-14 rounded-full bg-gray-700 text-white flex justify-center items-center border-2 border-white">
                +2K
              </div>

            </div>

            <div className="flex gap-1 text-yellow-400 mb-4">

              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />

            </div>

            <p className="text-white text-lg leading-8">
              Trusted by <b>12,000+</b> property owners
              across India.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE PART-2 yaha aayega */}
      {/* ================= RIGHT SIDE ================= */}

      <div className="bg-gray-50 flex items-center justify-center p-8">

        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-10">

          {/* Top */}

          <div className="flex justify-end text-gray-600 mb-8">
            Already have an account?
            <a href="/login" className="ml-2 text-blue-600 font-semibold">
              Login
            </a>
          </div>

          {/* Heading */}

          <h1 className="text-5xl font-bold text-gray-900">
            Create your account
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Get started with Nestora in just a few steps
          </p>

          {/* Form */}

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {/* Full Name */}

            <div>
              <label className="font-semibold block mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-14 border rounded-xl px-5 outline-none focus:border-blue-600"
              />
            </div>

            {/* Email */}

            <div>
              <label className="font-semibold block mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 border rounded-xl px-5 outline-none focus:border-blue-600"
              />
            </div>

            {/* Phone */}

            <div className="md:col-span-2">

              <label className="font-semibold block mb-2">
                Phone Number
              </label>

              <div className="flex">

                <select className="border rounded-l-xl px-4 outline-none">
                  <option>🇮🇳 +91</option>
                  <option>🇺🇸 +1</option>
                </select>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="flex-1 h-14 border border-l-0 rounded-r-xl px-5 outline-none focus:border-blue-600"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="font-semibold block mb-2">
                Create Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full h-14 border rounded-xl px-5 outline-none focus:border-blue-600"
              />

            </div>

            {/* Confirm */}

            <div>

              <label className="font-semibold block mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full h-14 border rounded-xl px-5 outline-none focus:border-blue-600"
              />

            </div>

          </div>

          {/* Password Rules */}

          <div className="grid md:grid-cols-2 gap-4 mt-6 text-green-600">

            <div>✔ At least 8 characters</div>
            <div>✔ One number</div>

            <div>✔ One uppercase letter</div>
            <div>✔ One special character</div>

          </div>

          {/* Checkbox */}

          <div className="flex items-center gap-3 mt-8">

            <input type="checkbox" className="w-5 h-5" />

            <p className="text-gray-600">
              I agree to the
              <span className="text-blue-600">
                {" "}Terms of Service{" "}
              </span>
              and
              <span className="text-blue-600">
                {" "}Privacy Policy
              </span>
            </p>

          </div>

          {/* Button */}

          <button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl mt-8 text-xl font-semibold duration-300">
            Create Account
          </button>
          {/* Divider */}

          <div className="flex items-center my-8">

            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="px-4 text-gray-500">
              or continue with
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>

          </div>

          {/* Social Login */}

          <div className="grid grid-cols-3 gap-4">

            {/* Google */}

            <button className="h-14 border rounded-xl flex items-center justify-center hover:bg-gray-100 duration-300">

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                className="w-7"
                alt=""
              />

            </button>

            {/* Facebook */}

            <button className="h-14 border rounded-xl flex items-center justify-center hover:bg-gray-100 duration-300">

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                className="w-7"
                alt=""
              />

            </button>

            {/* Apple */}

            <button className="h-14 border rounded-xl flex items-center justify-center hover:bg-gray-100 duration-300">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M318.7 268.1c-.2-47.6 38.8-70.4 40.5-71.5-22.1-32.3-56.5-36.8-68.7-37.3-29.3-3-57.2 17.3-72.1 17.3-14.9 0-37.9-16.9-62.3-16.5-32 .5-61.6 18.6-78.1 47.4-33.4 57.9-8.5 143.7 24 190.7 15.9 22.9 34.9 48.7 59.8 47.8 24-.9 33-15.5 61.9-15.5 28.9 0 37 15.5 62.3 15 25.8-.4 42.1-23.3 57.9-46.3 18.2-26.6 25.7-52.3 26.1-53.6-.6-.2-50-19.2-50.3-76.5zM271.2 110.1c13.2-16 22.1-38.3 19.7-60.6-19 1-42.1 12.7-55.7 28.7-12.2 14-22.9 36.5-20 58 21.2 1.6 42.8-10.8 56-26.1z" />
              </svg>

            </button>

          </div>

          {/* Bottom Card */}

          <div className="mt-10 bg-blue-50 rounded-2xl p-6">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-blue-600 flex justify-center items-center text-white text-2xl">

                🔒

              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Your data is safe
                </h3>

                <p className="text-gray-600">
                  We use bank-level encryption to keep your information secure.
                </p>

              </div>

            </div>

          </div>

          {/* Footer */}

          <p className="text-center text-gray-500 mt-8">

            © 2026 Nestora. All rights reserved.

          </p>

        </div>

      </div>

      <div className="bg-gray-50"></div>

    </div>
  );
}