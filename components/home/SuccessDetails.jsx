export default function SuccessDetails({ name, review }) {
    return (
        <div className="md:flex justify-center items-center gap-2">
            {/* Story */}
            <div className="shadow-lg bg-white rounded-xl hover:shadow-2xl transition-shadow duration-300 max-w-sm p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center text-purple-600">{name}</h2>
                <p className="text-sm text-gray-700 mb-4 text-center italic">
                    <i className="fas fa-quote-left mr-2 text-purple-500"></i>
                    {review}
                    <i className="fas fa-quote-right ml-2 text-purple-500"></i>
                </p>
                <p className="text-sm text-purple-500 text-center font-semibold">- Lost 20 lbs in 3 months</p>
            </div>
        </div>
    );
}
