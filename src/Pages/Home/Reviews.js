import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('https://boiling-mountain-76234.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);

    return (
        <div>
            <h1 className='text-4xl text-center mt-36 text-primary'>Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    reviews.map(review => <SingleReview key={review._id} rv={review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;