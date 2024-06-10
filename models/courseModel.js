import { Schema, model, models } from 'mongoose'


const courseSchema = new Schema ({
    msg:{
        type : String,
        required : true
    }
}, {timestamps:true})

const CourseModel = models.courses || model('courses',courseSchema)

export default CourseModel;
