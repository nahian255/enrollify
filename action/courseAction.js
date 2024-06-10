'use server'

import CourseModel from "@/models/courseModel"
import connectDB from "@/lib/bdconnect" 

export async function getCourse(){
    try{
        await connectDB();
        return {msg : 'GET'}
    } catch(error){
        return{errMsg : error.message}
    }
};