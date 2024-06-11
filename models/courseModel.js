

import { Schema, model, models } from 'mongoose';

const courseSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const CourseModel = models.courses || model('courses', courseSchema);

export default CourseModel;

















// import { Schema, model, models } from 'mongoose'


// const courseSchema = new Schema ({
//     msg:{ 
//         type : String,
//         required : true
//     }
// }, {timestamps:true})

// const CourseModel = models.courses || model('courses',courseSchema)

// export default CourseModel;



