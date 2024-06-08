
const data = [
    {
        name:'ali',
        id : 'mia'
    },
    {
        name:'ali',
        id : 'mia'
    },

]

export async function GET(request) {
    return new Response(JSON.stringify(data))
}
