import connectDB from '@/lib/bdconnect';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs'; // For hashing passwords (if not already hashed)

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

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const user = new User({ ...body, password: hashedPassword });
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

export async function LOGIN(req) {
    await connectDB();

    try {
        const body = await req.json();

        // Find user by email
        const user = await User.findOne({ email: body.email });
        if (!user) {
            return new Response(JSON.stringify({ error: 'Invalid email or password' }), {
                status: 401,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store' // Disable caching
                }
            });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(body.password, user.password);
        if (!isMatch) {
            return new Response(JSON.stringify({ error: 'Invalid email or password' }), {
                status: 401,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store' // Disable caching
                }
            });
        }

        // Handle successful login (e.g., create a session or JWT)
        // For now, just returning the user data (without password)
        const { password, ...userWithoutPassword } = user.toObject();

        return new Response(JSON.stringify(userWithoutPassword), {
            status: 200,
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
