import React from 'react';
import Image from 'next/image';
import { useMoralis } from "react-moralis";
import fox from "../public/planet-logo.jpg";
import cover from "../public/mask-cover.jpg";

function Login() { //Authentication method
    const { authenticate } = useMoralis();

    return (
        <div className="flex bg-black relative h-screen">
            <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-8">
                
                {/* Login Logo img container and styling*/}
                <Image className="object-cover rounded-full" src={fox} height={200} width={200} />

                {/* Login Button container and styling*/}
                <button onClick={authenticate}
                    className="bg-purple-800 rounded-xl font-bold p-5 animate-pulse text-white" >
                    Login using a Wallet!
                </button>
            </div>  

            <div className="w-fill h-fill opacity-40" >
                {/* Remember to add the required next.config.js 
                file in root  to allow the domains to be accessed
                & Restart the server!! */}                
                <Image src={cover} layout="fill" objectFit="cover" />
            </div>            
        </div>
    )
}

export default Login
