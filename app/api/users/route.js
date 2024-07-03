import connectDB from '@/lib/bdconnect';
import User from '@/models/userModel';

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

export async function POST(req) {
    await connectDB();

    try {
        const body = await req.json();

        // Check if email already exists
        const existingUser = await User.findOne({ email: body.email });
        if (existingUser) {
            return new Response(JSON.stringify({ error: 'Email already in use' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store' // Disable caching
                }
            });
        }

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
