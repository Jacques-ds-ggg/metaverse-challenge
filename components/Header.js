import React from 'react';
import {useMoralis} from "react-moralis";
import Image from 'next/image';
import fox from "../public/planet-logo.jpg";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
    // Obtain the User-info from the moralis database
    const { user } = useMoralis();

    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
            <div classname="grid grid-cols-5 lg:grid-cols-6 items-end lg:inline-center">

                {/* userLogo */}
                <div className="absolute h-24 w-24 mx-auto hidden lg:inline-grid" >
                    <Image className="object-cover rounded-full" src={fox} layout="fill"/>
                </div>

                        {/* Generated Avatar */}
                <div className="text-left lg:text-center">
                    <div className="relative h-28 w-28 lg:h-40 lg:w-40 lg:mx-auto border-pink-500 border-4 lg:border-8 rounded-full hover:opacity-75" >                        
                        <Avatar logoutOnPress />
                    </div>

                        {/* Welcome message under Avatar */}
                    <h1 className="text-lg lg:text-3xl">
                        Welcome to the PapaFam Metaverse
                    </h1>

                        {/* Showcase username */}
                    <h2 className="text-2xl lg:text-5xl font-bold truncate">
                        {user.getUsername()}
                    </h2>                                                                                                                 
                </div>

                    {/* ChangeUsername button */}
                <ChangeUserName /> 
            </div>
        </div>
    )
}

export default Header
