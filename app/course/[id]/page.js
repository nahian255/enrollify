
import Link from 'next/link';
import React from 'react';

const CourseDetails = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`http://localhost:3000/api/courses/${id}`);
    const data = await res.json();

    return (
        <div className="flex flex-col items-center bg-gray-100 ">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-full w-full">
                {/* <h1>new </h1> */}
                <div className="relative">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-4 p-4 text-white">
                        <h1 className="text-5xl font-bold py-4">{data.title}</h1>
                        <p className="text-lg">{data.duration}</p>
                    </div>

                </div>

                <div className="p-6">
                    <h1 className="text-center text-4xl font-serif font-semibold pb-4">
                        Course <span className="text-purple-500">Overview</span>
                    </h1>
                    <p className="text-gray-700 mb-4">{data.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600"><strong>Instructor:</strong> {data.instructor}</p>
                            <p className="text-gray-600"><strong>Difficulty:</strong> {data.difficulty}</p>
                        </div>
                        <div>
                            <p className="text-gray-600"><strong>Price:</strong> ${data.price}</p>
                        </div>
                    </div>
                    <Link href={'/pricing'}>
                        <button className="bg-purple-500 text-white py-2 px-4 rounded mt-4 hover:bg-purple-600">
                            Join Now
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CourseDetails;
