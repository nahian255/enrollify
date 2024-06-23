"use client"
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const GithubSingInBtn = () => {

    const { data: session } = useSession()
    if(session) {
      return <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    }
    return <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>




    // return (
    //     <div>
    //         <button  type='submit' name='action' value={'google'}
    //         // onClick={() => signIn('github')}
    //             className="w-full p-3 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-200"  >
    //              GitHub
    //         </button>
    //     </div>
    // );
};

export default GithubSingInBtn;