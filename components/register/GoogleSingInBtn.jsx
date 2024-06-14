"use client"
import React from 'react';

const GoogleSingInBtn = () => {
    return (
        <div>
             <button
                        onClick={() => signIn('google')}
                        className="w-full py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
                    >
                        Sign in with Google
                    </button>
        </div>
    );
};

export default GoogleSingInBtn;