

import { getCourse } from '@/action/courseAction'
import connectDB from '@/lib/bdconnect'
import CourseModel from '@/models/courseModel';
// import courses from '@/data/course.json'

export async function GET(request) {

    await connectDB();
    const data = await CourseModel.find().lean();



    // const fata = await getCourse();
    // // console.log(fata)
    // const  arr = fata.data    

    return new Response(JSON.stringify(data))
}
