import SuccessDetails from "./SuccessDetails";

const SuccessStory = async () => {

    const res = await fetch('http://localhost:3000/api/reviews', {
        cache: 'no-store'
    });
    const reviewes = await res.json()
    console.log(reviewes)

    return (
        <div>
            <div className="flex justify-around">
                {reviewes.map((review, index) =>
                    // console.log(review)
                    <SuccessDetails
                        key={index}
                        name={review.name}
                        review={review.review}
                    >
                    </SuccessDetails>
                )}
            </div>
        </div>
    )
};

export default SuccessStory;


//


