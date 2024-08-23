
const SuccessStory = async () => {

    const res = await fetch('http://localhost:3000/api/reviews', {
        cache: 'no-store'
    });
    const reviews = await res.json()
    console.log(reviews)

    return (
        <div>
            <h1> success page</h1>
        </div>
    )
};

export default SuccessStory;


// 
// {/* <div className="md:flex justify-center gap-10">
//     {/* Story 1 */}
//     <div className="md:w-1/3 p-8 shadow-lg bg-white rounded-xl hover:shadow-xl transition-shadow duration-300">
//         <h2 className="text-2xl font-semibold mb-4">John Doe</h2>
//         <p className="text-sm text-gray-700 mb-4">
//             <i className="fas fa-quote-left mr-2 text-purple-500"></i>
//             "Joining Enrolify has transformed my life. The personalized training plans and supportive community have helped me achieve my fitness goals beyond my expectations."
//         </p>
//         <p className="text-sm text-purple-500">- Lost 20 lbs in 3 months</p>
//     </div>

//     {/* Story 2 */}
//     <div className="md:w-1/3 p-8 shadow-lg bg-white rounded-xl mt-6 md:mt-0 hover:shadow-xl transition-shadow duration-300">
//         <h2 className="text-2xl font-semibold mb-4">Jane Smith</h2>
//         <p className="text-sm text-gray-700 mb-4">
//             <i className="fas fa-quote-left mr-2 text-purple-500"></i>
//             "The trainers at Enrolify are top-notch. They provide the motivation and expertise I needed to push myself and achieve results I never thought possible."
//         </p>
//         <p className="text-sm text-purple-500">- Improved muscle tone and strength</p>
//     </div>

//     {/* Story 3 */}
//     <div className="md:w-1/3 p-8 shadow-lg bg-white rounded-xl mt-6 md:mt-0 hover:shadow-xl transition-shadow duration-300">
//         <h2 className="text-2xl font-semibold mb-4">Sam Wilson</h2>
//         <p className="text-sm text-gray-700 mb-4">
//             <i className="fas fa-quote-left mr-2 text-purple-500"></i>
//             "Thanks to Enrolify, I have a newfound confidence and energy. The community is incredibly supportive, and the facilities are top-of-the-line."
//         </p>
//         <p className="text-sm text-purple-500">- Increased endurance and vitality</p>
//     </div>
// </div> */}
// 