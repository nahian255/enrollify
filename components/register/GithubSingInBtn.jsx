"use client"
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const GithubSingInBtn = () => {
    const { data: session } = useSession();

    const handleSignIn = () => {
        signIn('github', { callbackUrl: '/' });
    };

    // if (session) {
    //     return (
    //         <>
    //             Signed in as {session.user.email} <br />
    //             <button onClick={() => signOut()}>Sign out</button>
    //         </>
    //     );
    // }

    return (
        <div>
            <button
                className="w-full p-3 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-200"
                onClick={handleSignIn}
            >
                GitHub
            </button>
        </div>
    );
};

export default GithubSingInBtn;
