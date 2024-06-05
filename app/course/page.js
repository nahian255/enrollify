import CourseCard from '@/components/courses/CourseCard';
import React from 'react';
import image from "@/public/fitness.jpg"

// const courses = [
//     {
//         title: 'Yoga',
//         description: 'Improve your flexibility and reduce stress through our yoga classes.',
//         image: {image}, // Replace with actual image path
//     },
//     {
//         title: 'Fat Loss',
//         description: 'Join our fat loss program to achieve your weight loss goals effectively.',
//         image: {image},    },
//     {
//         title: 'Strength Training',
//         description: 'Build muscle and strength with our specialized training programs.',
//         image: {image},    },
//     {
//         title: 'Strength Training',
//         description: 'Build muscle and strength with our specialized training programs.',
//         image: {image},    },
//     {
//         title: 'Strength Training',
//         description: 'Build muscle and strength with our specialized training programs.',
//         image: {image},    },
//         // Add more courses as needed
// ];

const page = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const datas = await res.json();
    // console.log(datas)

    return (
        <div className='py-12'>
            {/*  course headline  */}
            <h1 className="text-center text-4xl font-serif font-semibold">
                All <span className="text-purple-500">Courses</span> Here
            </h1>
            <div className="flex justify-center">
                <p className="text-center text-sm py-5 w-1/2">
                    Choose the membership plan that fits your needs. Whether you're looking for basic access or comprehensive training and support, we have a plan for you.
                </p>
            </div>

            {/*  All Courses  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10">
                {datas.map((data, index) => (
                    // console.log(data.name)
                    <CourseCard
                        key={index}
                        title={data.name}
                        description={data.email}
                        // image={course.image}
                    />
                ))}
            </div>

        </div>
    );
};

export default page;