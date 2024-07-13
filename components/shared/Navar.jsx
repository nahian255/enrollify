"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
        const handleUserLoggedIn = (event) => {
            setCurrentUser(event.detail);
        };

        window.addEventListener('userLoggedIn', handleUserLoggedIn);
        return () => {
            window.removeEventListener('userLoggedIn', handleUserLoggedIn);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
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
                        <div className="relative inline-block">
                            <button onClick={toggleDropdown} className="hover:text-purple-400">
                                {currentUser?.user?.username}
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                                    <Link onClick={toggleDropdown} href="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link className="hover:text-purple-400" href="/register">Sign Up</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
