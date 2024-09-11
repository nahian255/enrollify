"use client";
import { useState } from "react";

const AddReview = () => {
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    // console.log(name,review)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare the data to send
        const reviewData = {
            name: name,
            review: review,
        };
        // console.log(reviewData,'addreview page')

        // Send the data to the server

        try {
            const response = await fetch("/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reviewData),
            });

            if (response.ok) {
                console.log("Review submitted successfully");
                setName("");  // Clear the form after submission
                setReview("");
            } else {
                console.error("Failed to submit the review");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-16 bg-white shadow-2xl rounded-lg">
           
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="review">
                        Review
                    </label>
                    <textarea
                        id="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Write your review"
                        rows="4"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
}
export default AddReview;