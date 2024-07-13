'use client';

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
            <div className=' w-1/3'>
                <h1 className="text-4xl font-serif font-semibold text-center"> Informa<span className="text-purple-500">tion</span> </h1>
                {currentUser ? (
                    <div className='py-6'>
                        <p><strong>Username:</strong> {currentUser.user.username}</p>
                        <p><strong>Email:</strong> {currentUser.user.email}</p>
                        <hr className='my-4 border-2 border-purple-500 rounded' />
                        <div>
                            
                        </div>
                    </div>
                ) : (
                    <div className='p-6'>
                        <p>Loading user information...</p>
                    </div>

                )}
            </div>
            <div className='bg-slate-300 w-2/3'>
                <h1>Content</h1>
                {/* Add your content here */}
            </div>
        </div>
    );
};

export default Dashboard;
