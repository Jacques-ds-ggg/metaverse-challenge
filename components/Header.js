import React from 'react';
import {useMoralis} from "react-moralis";
import Image from 'next/image';
import fox from "../public/planet-logo.jpg";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
    const { user } = useMoralis();
    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm
        text-pink-500 border-b-2 border-pink-700">
            <div classname="grid grid-cols-5 lg:grid-cols-6 items-end
            lg:inline-center">
                <div className="relative h-24 w-24
                                mx-auto hidden lg:inline-grid"
                >
                    <Image className="object-cover rounded-full" 
                        src={fox} 
                        layout="fill"
                    />
                </div>

                <div className="text-left lg:text-center">
                    <div className="relative h-48 w-48 lg:mx-auto
                    border-pink-500 border-8 rounded-full hover:opacity-75"
                    >
                        {/* Avatar */}
                        <Avatar logoutOnPress />
                    </div>

                    <h1 className="text-3xl">
                        Welcome to the PapaFam Metaverse
                    </h1>
                    <h2 className="text-5xl font-bold truncate">
                        {user.getUsername()}
                    </h2>                                                                                                                 
                </div>
                <ChangeUserName /> 
            </div>
        </div>
    )
}

export default Header
