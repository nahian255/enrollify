import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
                <h1 className="text-xl font-semibold text-gray-700">Loading, please wait...</h1>
            </div>
        </div>
    );
};

export default Loading;
