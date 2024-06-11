// Import required modules
import mongoose from 'mongoose';


const connectDB = async () => {

    if( mongoose.connections[0].readyState){
        return true;
    }
    // console.log(process.env.MONGODB_URI);

    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('MongoDB connected  ');
        return true;
        } catch (error) {
            console.error('Error connecting to MongoDB:', error.message);
            }
        // console.log('abdul kdkjdfj');
}; 

// Export the function for external use
export default connectDB;
