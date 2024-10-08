
import connectDB from "@/lib/bdconnect";
import UserReviewModel from "@/models/userReviewModel";

// make all reviewes api 

export async function GET (req){
   await connectDB();
   const review = await UserReviewModel.find().lean();

   return new Response(JSON.stringify(review), {
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store' // Disable caching
    }
});

}


// save a review in the database 

export async function POST(req){
    await connectDB();

    try {
        const body = await req.json();
        console.log(body,'server - 21321')

        const review = new UserReviewModel(body);
        await review.save()
        return new Response(JSON.stringify(review), {
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
};