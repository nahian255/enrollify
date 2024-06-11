import CourseCard from '@/components/courses/CourseCard';
import React from 'react';
import image from "@/public/fitness.jpg"
import { getCourse } from '@/action/courseAction';



const page = async () => {

    const res = await fetch('http://localhost:3000/api/courses',{
        cache: 'no-store'
    });
    const datas = await res.json();
    // console.log(datas)

    // const fata = await getCourse();
    // console.log(fata.data[0].name)

    return (
        <div className='py-12'>

            {/*  course headline  */}
            <h1 className="text-center text-4xl font-serif font-semibold">
                All <span className="text-purple-500">Courses</span> Here
            </h1>
            {/* <h1 className="text-center text-4xl font-serif font-semibold">
                All <span className="text-purple-500">23{fata.data[0].name}</span> Here
            </h1> */}
            <div className="flex justify-center">
                <p className="text-center text-sm py-5 w-1/2">
                    Choose the membership plan that fits your needs. Whether you're looking for basic access or comprehensive training and support, we have a plan for you.
                </p>
            </div>

            {/*  All Courses  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-5 md:px-10">
                {datas.map((data, index) => (
                    // console.log(data.name)
                    <CourseCard
                        key={index}
                        title={data.title}
                        description={data.description}
                        image={data.image}
                        id={data.id}
                        // image={course.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default page;