import React from 'react';
import Image from 'next/image';
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative ">
            <h1>I am the login screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">

                {/* PapaFam Logo */}
                <Image className="object-cover rounded-full" src="https://links.papareact.com/3pi" height={200} width={200}/>

                {/* Login Button */}
                <button 
                    onClick={authenticate}
                    className="bg-yellow-500 rounded-lg font-bold p-5 animate-pulse"
                >
                    Login to the Metaverse
                </button>
            </div>
            <div className="w-fill h-screen" >
                {/* Remember to add the required next.config.js 
                file in root  to allow the domains to be accessed
                & Restart the server!! */}                
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default Login
