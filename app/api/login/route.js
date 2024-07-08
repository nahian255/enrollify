import connectDB from "@/lib/bdconnect";
import User from "@/models/userModel";
import { NextResponse } from "next/server";


export async function POST(req) {
    await connectDB();

    const { email, password } = await req.json();

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Simple password comparison (for real-world use, compare hashed passwords)
        if (user.password !== password) {
            return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
        }

        // If authentication is successful, return user information
        const { _id, username, email: userEmail } = user; // Destructure the required user fields

        return NextResponse.json({
            message: 'Login successful',
            user: {
                id: _id,
                username,
                email: userEmail
            }
        }, { status: 200 });

    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }

}