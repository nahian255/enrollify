
// Assuming courses is an array of course objects

import courses from '@/data/course.json';

export async function GET(request, { params }) {
    const id = params?.id;
    
    if (id) {
        const course = courses.find(course => course.id === parseInt(id));
        if (course) {
            return new Response(JSON.stringify(course), { headers: { 'Content-Type': 'application/json' } });
        }
        return new Response(JSON.stringify({ error: 'Course not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
    }
    return new Response(JSON.stringify(courses), { headers: { 'Content-Type': 'application/json' } });
}



