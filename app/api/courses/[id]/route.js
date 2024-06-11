
// Assuming courses is an array of course objects

import { getCourse } from "@/action/courseAction";

// import courses from '@/data/course.json';

export async function GET(request, { params }) {
    const id = params?.id;
    
    const fata = await getCourse();
    console.log(fata)
    
    const  arr = fata.data

    // const res = await fetch('http://localhost:3000/api/courses',{
    //     cache: 'no-store'
    // });
    // const datas = await res.json();
    // console.log(datas)

    if (id) {
        const course = arr.find(course => course._id === parseInt(id));
        if (course) {
            return new Response(JSON.stringify(course), { headers: { 'Content-Type': 'application/json' } });
        }
        return new Response(JSON.stringify({ error: 'Course not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
    }
    return new Response(JSON.stringify(courses), { headers: { 'Content-Type': 'application/json' } });
}



