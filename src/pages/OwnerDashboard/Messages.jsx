import {
    FaSearch,
    FaCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const conversations = [
    {
        id: 1,
        name: "Rahul Sharma",
        image: `${import.meta.env.BASE_URL}user1.png`,
        lastMessage: "Is the room still available?",
        time: "2 min",
        online: true,
        unread: 2,
    },
    {
        id: 2,
        name: "Priya Patel",
        image: `${import.meta.env.BASE_URL}user2.png`,
        lastMessage: "Thank you 😊",
        time: "10 min",
        online: false,
        unread: 0,
    },
    {
        id: 3,
        name: "Aman Verma",
        image: `${import.meta.env.BASE_URL}user3.png`,
        lastMessage: "Can I visit tomorrow?",
        time: "30 min",
        online: true,
        unread: 1,
    },
    {
        id: 4,
        name: "Sneha Joshi",
        image: `${import.meta.env.BASE_URL}user4.png`,
        lastMessage: "Please send location.",
        time: "1 hr",
        online: false,
        unread: 0,
    },
];

export default function Messages() {

    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-[85vh]">

            <div className="grid lg:grid-cols-3 h-full">

                {/* ================= LEFT PANEL ================= */}

                <div className="border-r flex flex-col">

                    {/* Header */}

                    <div className="p-6 border-b">

                        <h1 className="text-3xl font-bold">
                            Messages
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Chat with your tenants
                        </p>

                        {/* Search */}

                        <div className="relative mt-6">

                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Search conversation..."
                                className="w-full bg-slate-100 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                    </div>

                    {/* Conversation List */}

                    <div className="flex-1 overflow-y-auto">

                        {conversations.map((user) => (

                            <div
                                key={user.id}
                                className="flex items-center gap-4 p-5 hover:bg-blue-50 cursor-pointer border-b duration-300"
                            >

                                <div className="relative">

                                    <img
                                        src={user.image}
                                        className="w-14 h-14 rounded-full object-cover"
                                        alt={user.name}
                                    />

                                    {user.online && (
                                        <FaCircle className="absolute bottom-0 right-0 text-green-500 text-xs bg-white rounded-full" />
                                    )}

                                </div>

                                <div className="flex-1">

                                    <div className="flex justify-between">

                                        <h3 className="font-bold">
                                            {user.name}
                                        </h3>

                                        <span className="text-xs text-gray-400">
                                            {user.time}
                                        </span>

                                    </div>

                                    <p className="text-gray-500 text-sm mt-1 truncate">
                                        {user.lastMessage}
                                    </p>

                                </div>

                                {user.unread > 0 && (

                                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                                        {user.unread}
                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                </div>

                {/* ================= RIGHT CHAT PANEL ================= */}

                <div className="lg:col-span-2 flex items-center justify-center bg-slate-50">

                    {/* Part 2 me yaha Chat UI aayega */}

                    {/* ================= CHAT AREA ================= */}

                    <div className="flex flex-col h-full w-full">

                        {/* Chat Header */}

                        <div className="bg-white border-b p-5 flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <div className="relative">

                                    <img
                                        src={`${import.meta.env.BASE_URL}user1.png`}
                                        className="w-14 h-14 rounded-full object-cover"
                                        alt=""
                                    />

                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>

                                </div>

                                <div>

                                    <h2 className="text-xl font-bold">
                                        Rahul Sharma
                                    </h2>

                                    <p className="text-green-600 text-sm">
                                        ● Online
                                    </p>

                                </div>

                            </div>

                            <button
                                onClick={() => navigate("/dashboard/profile")}
                                className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
                            >
                                View Profile
                            </button>

                        </div>

                        {/* Messages */}

                        <div className="flex-1 overflow-y-auto p-8 bg-slate-100 space-y-5">

                            {/* Receiver */}

                            <div className="flex">

                                <div className="bg-white rounded-2xl px-5 py-4 shadow max-w-md">

                                    <p>
                                        Hello 👋 Is the room still available?
                                    </p>

                                    <span className="text-xs text-gray-400 mt-2 block">
                                        09:30 AM
                                    </span>

                                </div>

                            </div>

                            {/* Sender */}

                            <div className="flex justify-end">

                                <div className="bg-blue-600 text-white rounded-2xl px-5 py-4 shadow max-w-md">

                                    <p>
                                        Yes, it is available.
                                    </p>

                                    <span className="text-xs text-blue-100 mt-2 block">
                                        09:32 AM
                                    </span>

                                </div>

                            </div>

                            <div className="flex">

                                <div className="bg-white rounded-2xl px-5 py-4 shadow max-w-md">

                                    <p>
                                        Great! Can I visit tomorrow around 5 PM?
                                    </p>

                                    <span className="text-xs text-gray-400 mt-2 block">
                                        09:35 AM
                                    </span>

                                </div>

                            </div>

                            <div className="flex justify-end">

                                <div className="bg-blue-600 text-white rounded-2xl px-5 py-4 shadow max-w-md">

                                    <p>
                                        Sure 👍 You're welcome.
                                    </p>

                                    <span className="text-xs text-blue-100 mt-2 block">
                                        09:36 AM
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Bottom Input - Part 3 me add hoga */}

                        {/* ================= MESSAGE INPUT ================= */}

                        <div className="bg-white border-t p-5">

                            <div className="flex items-center gap-4">

                                {/* Emoji */}

                                <button className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-blue-100 text-2xl duration-300">
                                    😊
                                </button>

                                {/* Attachment */}

                                <button className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-blue-100 text-xl duration-300">
                                    📎
                                </button>

                                {/* Input */}

                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="flex-1 bg-slate-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                {/* Send */}

                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold duration-300">
                                    Send
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}