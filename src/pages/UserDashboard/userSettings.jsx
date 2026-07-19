import React, { useState } from "react";

import {
    FaBell,
    FaLock,
    FaMoon,
    FaSignOutAlt,
    FaUserCog
} from "react-icons/fa";


export default function userSettings() {


    const [notify, setNotify] = useState(true);
    const [dark, setDark] = useState(false);



    return (

        <div className="min-h-screen bg-slate-100 py-10">


            <div className="max-w-4xl mx-auto px-5">


                <h1 className="text-3xl font-bold mb-8 flex gap-3 items-center">

                    <FaUserCog />
                    Settings

                </h1>



                <div className="space-y-5">



                    <SettingCard
                        icon={<FaBell />}
                        title="Notifications"
                    >

                        <input
                            type="checkbox"
                            checked={notify}
                            onChange={() => setNotify(!notify)}
                            className="w-5 h-5"
                        />

                    </SettingCard>





                    <SettingCard
                        icon={<FaMoon />}
                        title="Dark Mode"
                    >

                        <input
                            type="checkbox"
                            checked={dark}
                            onChange={() => setDark(!dark)}
                            className="w-5 h-5"
                        />

                    </SettingCard>





                    <SettingCard
                        icon={<FaLock />}
                        title="Privacy & Security"
                    >

                        <button className="
bg-blue-600
text-white
px-5 py-2
rounded-lg
">

                            Manage

                        </button>

                    </SettingCard>






                    <SettingCard
                        icon={<FaSignOutAlt />}
                        title="Logout"
                    >

                        <button
                            className="
bg-red-500
text-white
px-5 py-2
rounded-lg
">

                            Logout

                        </button>

                    </SettingCard>




                </div>


            </div>


        </div>

    )

}



function SettingCard({ icon, title, children }) {


    return (

        <div className="
bg-white
p-6
rounded-2xl
shadow
flex justify-between
items-center
">


            <div className="flex gap-4 items-center">


                <div className="text-blue-600 text-xl">
                    {icon}
                </div>


                <h2 className="font-semibold text-lg">
                    {title}
                </h2>


            </div>


            {children}


        </div>

    )

}