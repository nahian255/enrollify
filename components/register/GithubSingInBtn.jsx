"use client"
import React from 'react';

const GithubSingInBtn = () => {
    return (
        <div>
            <button  type='submit' name='action' value={'google'}
            // onClick={() => signIn('github')}
                className="w-full p-3 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-200"  >
                 GitHub
            </button>
        </div>
    );
};

export default GithubSingInBtn;