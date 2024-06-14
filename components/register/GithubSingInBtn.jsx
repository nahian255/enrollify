"use client"
import React from 'react';

const GithubSingInBtn = () => {
    return (
        <div>
            <button
                onClick={() => signIn('github')}
                className="w-full py-3 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-200"
            >
                Sign in with GitHub
            </button>
        </div>
    );
};

export default GithubSingInBtn;