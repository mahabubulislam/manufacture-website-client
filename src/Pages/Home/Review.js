import React from 'react';
import { FaStar } from 'react-icons/fa'
import Rating from 'react-rating';
const Review = () => {
    return (
        <div class="py-8 px-8 my-7 flex-col justify-center items w-1/3 mx-auto">
            <img class=" mx-auto h-16 w-16 rounded-full  " src='https://api.lorem.space/image/face?hash=92310' alt="Customer" />
            <div class="text-center">
                <div>
                    <p class="text-lg text-black font-semibold my-2">
                        <h1>Mahbub</h1>
                    </p>
                    <div className='flex justify-between my-3'>
                        <p>Rating: <small>{5}</small></p>
                        <Rating
                            initialRating={5}
                            emptySymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar style={{ color: '#facc15' }} />}
                            readonly
                        ></Rating>
                    </div>
                    <p class="text-slate-500 font-medium ">
                        You can’t turn the AirPods Max off. You can only turn them to low power mode, either by setting them down for five minutes or by returning them to the case.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;