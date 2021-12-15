import React, { useState, useEffect } from 'react';

const ReviewModel = (props) => {
    const [reviews, setReviews] = useState([])
    const { userName, img, description } = props.review

    useEffect(() => {
        const uri = 'https://floating-peak-99575.herokuapp.com/reviews'
        fetch(uri)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <figure className="md:flex bg-blue-50 rounded-xl p-8 md:p-0">
                <img className=" w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-semibold">
                            “{description}”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-cyan-600">
                            {userName}
                        </div>
                        <div className="text-gray-500">
                            Honest Reviewer
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
};

export default ReviewModel;