'use server'

import CourseModel from "@/models/courseModel"
import connectDB from "@/lib/bdconnect" 

export async function getCourse(){
    try{
        await connectDB();
        const data = JSON.parse(JSON.stringify(await CourseModel.find())) ;

        return {data}
    } catch(error){
        return{errMsg : error.message}
    }
};