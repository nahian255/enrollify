// const courses = [
//     {
//         title: 'Yoga',
//         description: 'Improve your flexibility and reduce stress through our yoga classes.',
//         // image: { image }, // Replace with actual image path
//     },
//     {
//         title: 'Fat Loss',
//         description: 'Join our fat loss program to achieve your weight loss goals effectively.',
//         // image: { image },
//     },
//     {
//         title: 'Strength Training',
//         description: 'Build muscle and strength with our specialized training programs.',
//         // image: { image },
//     },
//     {
//         title: 'Strength Training',
//         description: 'Build muscle and strength with our specialized training programs.',
//         // image: { image },
//     },
//     {
//         title: 'Strength Training',
//         description: 'Build muscle and strength with our specialized training programs.',
//         // image: { image },
//     },
//     // Add more courses as needed
// ];

import courses from '@/data/course.json'

export async function GET(request) {
    return new Response(JSON.stringify(courses))
}


