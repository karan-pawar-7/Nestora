import React, { useState } from "react";
import {
    FaSearch,
    FaPaperPlane,
    FaPhone,
    FaVideo,
    FaEllipsisV
} from "react-icons/fa";


export default function userMessages() {


    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([

        {
            id: 1,
            sender: "Owner",
            name: "Rahul Sharma",
            text: "Hello, your room booking is confirmed.",
            time: "10:30 AM"
        },

        {
            id: 2,
            sender: "You",
            name: "Karan",
            text: "Thank you. When can I visit the room?",
            time: "10:35 AM"
        },

        {
            id: 3,
            sender: "Owner",
            name: "Rahul Sharma",
            text: "You can visit tomorrow at 5 PM.",
            time: "10:40 AM"
        }

    ]);



    const sendMessage = () => {

        if (message.trim() === "") return;


        setMessages([
            ...messages,
            {
                id: Date.now(),
                sender: "You",
                name: "Karan",
                text: message,
                time: "Now"
            }
        ]);


        setMessage("");

    };



    return (

        <div className="max-w-7xl mx-auto">


            {/* Header */}

            <div className="mb-8">

                <h1 className="text-3xl font-bold text-slate-800">
                    Messages
                </h1>

                <p className="text-gray-500 mt-2">
                    Chat with room owners
                </p>

            </div>





            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex h-[650px]">





                {/* Contacts */}

                <div className="w-80 border-r hidden md:block">


                    <div className="p-5 border-b">


                        <div className="flex items-center bg-gray-100 rounded-xl px-3">

                            <FaSearch className="text-gray-400" />


                            <input

                                placeholder="Search chats"

                                className="p-3 bg-transparent outline-none w-full"

                            />


                        </div>


                    </div>





                    <div className="p-4">


                        <div className="bg-indigo-100 rounded-2xl p-4 cursor-pointer">


                            <div className="flex gap-3 items-center">


                                <img

                                    src="https://i.pravatar.cc/100?img=12"

                                    className="w-12 h-12 rounded-full"

                                />


                                <div>

                                    <h3 className="font-bold">
                                        Rahul Sharma
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        Room Owner
                                    </p>

                                </div>


                            </div>


                        </div>


                    </div>


                </div>







                {/* Chat Area */}


                <div className="flex-1 flex flex-col">





                    {/* Chat Header */}


                    <div className="p-5 border-b flex justify-between items-center">


                        <div className="flex gap-3 items-center">


                            <img

                                src="https://i.pravatar.cc/100?img=12"

                                className="w-12 h-12 rounded-full"

                            />


                            <div>

                                <h2 className="font-bold text-lg">
                                    Rahul Sharma
                                </h2>


                                <p className="text-green-600 text-sm">
                                    Online
                                </p>


                            </div>


                        </div>





                        <div className="flex gap-5 text-gray-500">


                            <FaPhone className="cursor-pointer" />

                            <FaVideo className="cursor-pointer" />

                            <FaEllipsisV className="cursor-pointer" />


                        </div>


                    </div>







                    {/* Messages */}


                    <div className="flex-1 p-6 overflow-y-auto bg-slate-50 space-y-4">



                        {

                            messages.map((msg) => (


                                <div

                                    key={msg.id}

                                    className={

                                        `
flex

${msg.sender === "You"
                                            ?
                                            "justify-end"
                                            :
                                            "justify-start"
                                        }

`

                                    }


                                >


                                    <div

                                        className={

                                            `
max-w-xs md:max-w-md
p-4
rounded-2xl

${msg.sender === "You"

                                                ?

                                                "bg-indigo-600 text-white rounded-br-none"

                                                :

                                                "bg-white shadow rounded-bl-none"

                                            }

`

                                        }

                                    >


                                        <p>

                                            {msg.text}

                                        </p>


                                        <span className="text-xs opacity-70 block mt-2">

                                            {msg.time}

                                        </span>


                                    </div>


                                </div>


                            ))


                        }



                    </div>







                    {/* Input */}


                    <div className="p-5 border-t bg-white">


                        <div className="flex gap-3">


                            <input

                                value={message}

                                onChange={(e) => setMessage(e.target.value)}

                                onKeyDown={(e) => {

                                    if (e.key === "Enter")
                                        sendMessage();

                                }}

                                placeholder="Type your message..."

                                className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"

                            />



                            <button

                                onClick={sendMessage}

                                className="bg-indigo-600 text-white px-5 rounded-xl hover:bg-indigo-700"

                            >

                                <FaPaperPlane />

                            </button>


                        </div>


                    </div>

                </div>

            </div>
        </div>

    );


}