import {
    FaUserCog,
    FaBell,
    FaLock,
    FaMoon,
    FaGlobe,
    FaSave,
} from "react-icons/fa";

export default function Settings() {
    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-4xl font-bold">
                        Settings
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your account preferences.
                    </p>

                </div>

                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">

                    <FaSave />

                    Save Changes

                </button>

            </div>

            {/* Account Settings */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <div className="flex items-center gap-3 mb-8">

                    <FaUserCog className="text-2xl text-blue-600" />

                    <h2 className="text-2xl font-bold">
                        Account Settings
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <input
                        className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Full Name"
                        defaultValue="Karan Pawar"
                    />

                    <input
                        className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                        defaultValue="karan@gmail.com"
                    />

                    <input
                        className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Phone"
                        defaultValue="+91 9876543210"
                    />

                    <input
                        className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="City"
                        defaultValue="Pune"
                    />

                </div>

            </div>

            {/* Notification Settings */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <div className="flex items-center gap-3 mb-8">

                    <FaBell className="text-2xl text-yellow-500" />

                    <h2 className="text-2xl font-bold">
                        Notifications
                    </h2>

                </div>

                <div className="space-y-5">

                    {[
                        "Email Notifications",
                        "SMS Notifications",
                        "Booking Alerts",
                        "Promotional Emails",
                    ].map((item, index) => (
                        <label
                            key={index}
                            className="flex items-center gap-4"
                        >
                            <input type="checkbox" defaultChecked />
                            <span>{item}</span>
                        </label>
                    ))}

                </div>

            </div>

            {/* Continue Part 2 */}
            {/* ================= Security Settings ================= */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <div className="flex items-center gap-3 mb-8">

                    <FaLock className="text-2xl text-red-500" />

                    <h2 className="text-2xl font-bold">
                        Security
                    </h2>

                </div>

                <div className="space-y-6">

                    <div className="flex items-center justify-between border rounded-2xl p-5">

                        <div>

                            <h3 className="font-semibold">
                                Change Password
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Update your account password.
                            </p>

                        </div>

                        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                            Change
                        </button>

                    </div>

                    <div className="flex items-center justify-between border rounded-2xl p-5">

                        <div>

                            <h3 className="font-semibold">
                                Two Factor Authentication
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Add extra security to your account.
                            </p>

                        </div>

                        <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                            Enable
                        </button>

                    </div>

                    <div className="flex items-center justify-between border rounded-2xl p-5">

                        <div>

                            <h3 className="font-semibold">
                                Login Activity
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Check recent login sessions.
                            </p>

                        </div>

                        <button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700">
                            View
                        </button>

                    </div>

                </div>

            </div>

            {/* ================= Appearance ================= */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <div className="flex items-center gap-3 mb-8">

                    <FaMoon className="text-2xl text-indigo-600" />

                    <h2 className="text-2xl font-bold">
                        Appearance
                    </h2>

                </div>

                <div className="flex items-center justify-between border rounded-2xl p-5">

                    <div>

                        <h3 className="font-semibold">
                            Dark Mode
                        </h3>

                        <p className="text-gray-500 text-sm">
                            Switch between light and dark theme.
                        </p>

                    </div>

                    <input
                        type="checkbox"
                        className="w-6 h-6 accent-blue-600"
                    />

                </div>

            </div>

            {/* ================= Language ================= */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

                <div className="flex items-center gap-3 mb-8">

                    <FaGlobe className="text-2xl text-green-600" />

                    <h2 className="text-2xl font-bold">
                        Language
                    </h2>

                </div>

                <select className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500">

                    <option>English</option>
                    <option>Hindi</option>
                    <option>Marathi</option>

                </select>

            </div>

            {/* ================= Save Button ================= */}

            <div className="flex justify-end">

                <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg">

                    <FaSave />

                    Save Settings

                </button>

            </div>

            {/* ================= Footer ================= */}

            <div className="text-center text-gray-500 py-6">

                © 2026 Nestora • Settings

            </div>

        </div>
    );
}