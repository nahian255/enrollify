import CourseCard from '@/components/courses/CourseCard';
import React from 'react';

const extraPage = async () => {

    const res = await fetch('http://localhost:3000/api/data', {
        cache: 'no-store' // Disable caching
    });
    const datas = await res.json()
    console.log(datas)
    return (
        <div>
            <h1> this is extra page</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-5 md:px-10">
                {datas.map((data, index) => (
                    // console.log(data.name)
                    <div key={data.id}>
                        <h1 className='text-2xl p-3'> Name {data.title}</h1>
                    </div>

                ))}
            </div>


        </div>
    );
};

export default extraPage;