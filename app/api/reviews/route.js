


// save the review in the database 

import connectDB from "@/lib/bdconnect";

export async function POST(req){
    await connectDB();

    try {
        const body = await req.json();
        console.log(body,'server')
        
    } catch (error) {
        
    }
}