//  "use client"
 import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pic from '@/public/fitness.jpg'
// import yogaImage from '../public/yoga.jpg'; // Replace with actual image path
// import fatLossImage from '../public/fat-loss.jpg'; // Replace with actual image path

const CourseCard = ({ title, description, image , id}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 ease-in-out">
            <Image src={pic} alt={title} width={300} height={300} className="w-full h-48 object-cover"/>
            <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <Link href={`/course/${id}`}>
                    <button className='bg-purple-500 p-3'> Join Now</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
