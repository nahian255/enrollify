const collection = [
    {
        id: "1",
        title: "Yoga",
        description: "Improve your flexibility and reduce stress through our yoga classes.",
        image: "/images/yoga.jpg"
    },
    {
        id: "2",
        title: "Fat Loss",
        description: "Join our fat loss program to achieve your weight loss goals effectively.",
        image: "/images/fat-loss.jpg"
    },
    {
        id: "3",
        title: "Strength Training",
        description: "Build muscle and strength with our specialized training programs.",
        image: "/images/strength-training.jpg"
    },
    {
        id: "4",
        title: "Strength Training",
        description: "Build muscle and strength with our specialized training programs.",
        image: "/images/strength-training.jpg"
    },
    {
        id: "5",
        title: "Strength Training",
        description: "Build muscle and strength with our specialized training programs.",
        image: "/images/strength-training.jpg"
    },
];

export async function GET(request) {
    return new Response(JSON.stringify(collection), {
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Cache-Control': 'no-store' // Disable caching
        // }
    });
}
