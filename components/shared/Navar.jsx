"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState(null);
    console.log(currentUser)
    useEffect(() => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
    };

    return (
        <nav className="bg-gray-800 text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">Enrolify</Link>
                </div>
                <div className="space-x-4">
                    <Link className="hover:text-purple-400" href="/">Home</Link>
                    <Link className="hover:text-purple-400" href="/course">Course</Link>
                    <Link className="hover:text-purple-400" href="/add-class">Add Class</Link>
                    <Link className="hover:text-purple-400" href="/blog">Blog</Link>
                    <Link className="hover:text-purple-400" href="/pricing">Pricing</Link>
                    {currentUser ? (
                        <button onClick={handleLogout} className="hover:text-purple-400">{currentUser.name} / LogOut</button>
                    ) : (
                        <Link className="hover:text-purple-400" href="/register">Sign Up</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
