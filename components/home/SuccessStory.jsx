'use client'
import { useState, useEffect } from 'react';
import SuccessDetails from './SuccessDetails';

const SuccessStory = () => {
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    // Fetch reviews data on component mount
    useEffect(() => {
        const fetchReviews = async () => {
            const res = await fetch('http://localhost:3000/api/reviews', {
                cache: 'no-store'
            });
            const data = await res.json();
            setReviews(data);
        };

        fetchReviews();
    }, []);

    // Calculate the index range for the current page
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentReviews = reviews.slice(startIndex, endIndex);

    // Function to go to the next page
    const handleNextPage = () => {
        if (endIndex < reviews.length) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    // Function to go to the previous page
    const handlePrevPage = () => {
        if (startIndex > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className="text-center">
            <div className="flex justify-center gap-4">
                {currentReviews.map((review, index) => (
                    <SuccessDetails
                        key={index}
                        name={review?.name}
                        review={review?.review}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4 gap-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className={`px-4 py-2 text-white rounded hover:bg-purple-700 ${currentPage === 0 ? 'bg-red-500 cursor-not-allowed hover:bg-red-700' : 'bg-purple-500'
                        }`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={endIndex >= reviews.length}
                    className={`px-4 py-2 text-white rounded hover:bg-purple-700 ${endIndex >= reviews.length? 'bg-red-500 cursor-not-allowed hover:bg-red-700' : 'bg-purple-500'
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SuccessStory;
