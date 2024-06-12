'use client';
import React from 'react';

const CourseDetails = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`http://localhost:3000/api/courses/${id}`);
    const data = await res.json();

    return (
        <div className="flex flex-col items-center bg-gray-50 py-10">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Course Details</h1>
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0"
                    />
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">{data.title}</h2>
                        <p className="text-gray-700 mb-4"><strong>Description:</strong> {data.description}</p>
                        <p className="text-gray-700 mb-2"><strong>Instructor:</strong> {data.instructor}</p>
                        <p className="text-gray-700 mb-2"><strong>Duration:</strong> {data.duration}</p>
                        <p className="text-gray-700 mb-2"><strong>Difficulty:</strong> {data.difficulty}</p>
                        <p className="text-gray-700 mb-4"><strong>Price:</strong> ${data.price}</p>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default CourseDetails;
