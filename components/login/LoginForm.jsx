"use client";
import React, { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New state for loading

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear any previous error messages
        setIsLoading(true); // Start loading

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const currentUser = await response.json();
            if (response.ok) {
                // Save user information in local storage
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                console.log('frontend coming ', currentUser);
                alert('Login successfully');
                setFormData({
                    email: '',
                    password: ''
                });
            } else {
                setErrorMessage(currentUser.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div>
            {errorMessage && (
                <div className="mb-4 text-red-600">
                    {errorMessage}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l1.707-1.707C7.52 15.779 6.28 14.72 5.02 13.707L2.93 15.79c1.708 1.292 3.877 2.064 6.15 2.125V19a8 8 0 01-2-.292z"
                                ></path>
                            </svg>
                            Logging in...
                        </div>
                    ) : (
                        'LogIn'
                    )}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
