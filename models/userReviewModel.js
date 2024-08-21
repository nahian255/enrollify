import { model, models, Schema } from 'mongoose' ;

const userReviewSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    review:{
        type: String,
        required: true
    }
})

const UserReviewModel = models.reviewes || model('reviewes', userReviewSchema);

export default UserReviewModel; 
