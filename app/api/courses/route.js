

import courses from '@/data/course.json'

export async function GET(request) {
    return new Response(JSON.stringify(courses))
}
