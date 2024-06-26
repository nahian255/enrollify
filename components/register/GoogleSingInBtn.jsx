"use client"
import React from 'react';
import {  signIn,  } from 'next-auth/react';


const GoogleSingInBtn = () => {

    // const handleSignIn = () => {
    //     signIn('github', { callbackUrl: '/' });
    // };

    return (
        <div>
            <button 
                className="w-full p-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
            > Google </button>
        </div>
    );
};

export default GoogleSingInBtn;