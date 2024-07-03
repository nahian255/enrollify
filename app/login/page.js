import LoginForm from '@/components/login/LoginForm';
import React from 'react';

const loginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
                {/*  form input */}
                    <LoginForm></LoginForm>
                <p className="text-center text-gray-600 mt-4">
                   Don't have an account? <a href="/register" className="text-blue-500">Sing Up</a>
                </p>
                <div className="flex justify-center space-x-4 mt-6">
                    {/* <GoogleSingInBtn></GoogleSingInBtn> */}
                    {/* <GithubSingInBtn></GithubSingInBtn> */}
                </div>
            </div>
        </div>
    );
};

export default loginPage;