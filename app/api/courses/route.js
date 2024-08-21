

import { getCourse } from '@/action/courseAction'
import connectDB from '@/lib/bdconnect'
import CourseModel from '@/models/courseModel';
// import courses from '@/data/course.json'


//  make all courses api
export async function GET(req) {
    await connectDB();
    const data = await CourseModel.find().lean();

    return new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store' // Disable caching
        }
    });
}

// save a courses in database 
export async function POST(req) {
    await connectDB();

    try {
        const body = await req.json(); // Parse the JSON body
        // console.log(body, 'body');
        
        const course = new CourseModel(body);
        await course.save();
        return new Response(JSON.stringify(course), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store' // Disable caching
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store' // Disable caching
            }
        });
    }
}