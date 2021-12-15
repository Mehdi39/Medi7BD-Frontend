import React, { useState, useEffect } from 'react';
import ReviewModel from './ReviewModel';

const Review = () => {
    const [ reviews, setReviews ] = useState([])

    useEffect( () => {
        const uri = 'http://localhost:5000/reviews'
        fetch(uri)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h2 className="text-green-500 text-5xl text-center font-bold">{"< Our Satisfied Customers >"}</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 my-6">
                {
                    reviews.map( review => <ReviewModel key={review._id} review={review}></ReviewModel>)
                }

                <figure className="md:flex bg-blue-50 rounded-xl p-8 md:p-0">
                    <img className=" w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzAyMDMwMjQzNTA1NTA0/donald_trump_photo_michael_stewartwireimage_gettyimages-169093538jpg.jpg" alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-semibold">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams.It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                Donald Trump
                            </div>
                            <div className="text-gray-500">
                                45th U.S. President
                            </div>
                        </figcaption>
                    </div>
                </figure>
                <figure className="md:flex bg-blue-50 rounded-xl p-8 md:p-0">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://cdn.britannica.com/78/73178-050-00309E51/George-W-Bush.jpg" alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-semibold">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams.It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                George Walker Bush
                            </div>
                            <div className="text-gray-500">
                                43rd president of the United States
                            </div>
                        </figcaption>
                    </div>
                </figure>
                <figure className="md:flex bg-blue-50 rounded-xl p-8 md:p-0">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Hillary_Clinton_by_Gage_Skidmore_4_%28cropped%29.jpg" alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-semibold">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams.It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                Hillary Diane Rodham Clinton
                            </div>
                            <div className="text-gray-500">
                                67th United States secretary of state
                            </div>
                        </figcaption>
                    </div>
                </figure>
                <figure className="md:flex bg-blue-50 rounded-xl p-8 md:p-0">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/president-barack-obama-gives-remarks-on-the-supreme-court-news-photo-1610028835." alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-semibold">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams.It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                Barack Obama
                            </div>
                            <div className="text-gray-500">
                            44th president of the United States
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </div>

    );
};

export default Review;