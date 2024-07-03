import connectDB from '@/lib/bdconnect'
import User from '@/models/userModel';

// make all user api 
export async function GET(req) {
    await connectDB();
    const data = await User.find().lean();
     
    return new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store' // Disable caching
        }
    });
}


// save a user in db ....
export async function POST(req) {
    await connectDB();

    try {
        const body = await req.json();
        // console.log(body, 'body');

        const user = new User(body);
        await user.save();

        return new Response(JSON.stringify(user), {
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
