
import GithubSingInBtn from '@/components/register/GithubSingInBtn';
import GoogleSingInBtn from '@/components/register/GoogleSingInBtn';
import SingUpForm from '@/components/register/SingUpForm';
import React from 'react';

const RegisterPage = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                {/*  form input */}
                {/* <SingUpForm></SingUpForm> */}
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <a href="/login" className="text-blue-500">Sign in</a>
                </p>
                <div className="flex justify-center space-x-4 mt-6">
                    {/* <GoogleSingInBtn></GoogleSingInBtn> */}
                    <GithubSingInBtn></GithubSingInBtn>
                </div>
            </div>
        </div>
    );
};


export default RegisterPage;
