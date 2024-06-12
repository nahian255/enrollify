
// import { getCourse } from "@/action/courseAction";

// export async function GET(request, { params }) {
//     const id = params?.id;
//     console.log(id)

//     const res = await fetch('http://localhost:3000/api/courses',{
//         cache: 'no-store'
//     });
//     const datas = await res.json();
//     // console.log(datas)

//     if (id) {
//         const course = datas.find(course => course._id === parseInt(id));
//         console.log(course)

//         if (course) {
//             return new Response(JSON.stringify(course), { headers: { 'Content-Type': 'application/json' } });
//         }
//         return new Response(JSON.stringify({ error: 'Course not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
//     }
//     return new Response(JSON.stringify(courses), { headers: { 'Content-Type': 'application/json' } });
// }

// -----------------------

import connectDB from '@/lib/bdconnect';
import CourseModel from '@/models/courseModel';

export async function GET(request, { params }) {
    // Connect to the database
    await connectDB();

    const id = params?.id;

    try {
        if (id) {
            // Find the specific course by ID
            const course = await CourseModel.findById(id).lean();

            if (course) {
                return new Response(JSON.stringify(course), {
                    headers: { 'Content-Type': 'application/json' }
                });
            } else {
                return new Response(JSON.stringify({ error: 'Course not found' }), {
                    status: 404,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        } else {
            // Find all courses if no ID is provided
            const courses = await CourseModel.find().lean();
            return new Response(JSON.stringify(courses), {
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

