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
        <div className='p-6 bg-red-300'>
            <div>
                <h1>Information</h1>
                {currentUser ? (
                    <div>
                        <p><strong>Username:</strong> {currentUser.user.username}</p>
                        <p><strong>Email:</strong> {currentUser.user.email}</p>
                    </div>
                ) : (
                    <p>Loading user information...</p>
                )}
            </div>
            <div>
                <h1>Content</h1>
                {/* Add your content here */}
            </div>
        </div>
    );
};

export default Dashboard;
