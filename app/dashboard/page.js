'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(null);

    // get user from local store
    useEffect(() => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
    }, []);

    return (
        <div className='p-10 flex'>

            {/*  Information  */}
            <div className=' w-1/3 bg-purple-10 rounded-2xl'>
                <h1 className="text-4xl font-serif font-semibold text-center"> Informa<span className="text-purple-500">tion</span> </h1>
                {currentUser ? (
                    <div className='p-8'>
                        <p><strong>Username:</strong> {currentUser.user.username}</p>
                        <p><strong>Email:</strong> {currentUser.user.email}</p>
                        <hr className='my-4 border-2 border-purple-500 rounded' />

                        <div className='flex flex-col gap-2'>
                            <Link href="/profile">
                                <button className='bg-purple-500 text-white py-4 w-full rounded hover:bg-purple-600 transition-colors'>
                                    My Profile
                                </button>
                            </Link>
                            <Link href="/payment">
                                <button className='bg-green-500 text-white py-4 w-full rounded hover:bg-green-600 transition-colors'>
                                    Payment History
                                </button>
                            </Link>
                            <Link href="/profile">
                                <button className='bg-purple-500 text-white py-4 w-full rounded hover:bg-purple-600 transition-colors'>
                                    All Classes
                                </button>
                            </Link>
                            <Link href="/payment">
                                <button className='bg-green-500 text-white py-4 w-full rounded hover:bg-green-600 transition-colors'>
                                  My Wishlist
                                </button>
                            </Link>
                        </div>

                    </div>
                ) : (
                    <div className='p-6'>
                        <p>Loading user information...</p>
                    </div>

                )}
            </div>

            {/* contenet here */}
            <div className='bg-slate-300 w-2/3'>
                <h1>Content</h1>
                {/* Add your content here */}
            </div>
        </div>
    );
};

export default Dashboard;
