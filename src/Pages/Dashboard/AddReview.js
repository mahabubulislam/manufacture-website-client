import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import feedback from '../../assets/feedback.jpg'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }

    const onSubmit = data => {
        const review = data?.reviewText;
        const rating = currentValue;
        const name = user?.displayName;
        const img = user?.photoURL;
        const customerReview = {
            name,
            img,
            review,
            rating
        }
        fetch('https://murmuring-retreat-70420.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customerReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    reset()
                    toast.success('Your reviews added succesfully')
                }
                else {
                    toast.error("Something went wrong, Please try again")
                }
            })

    };


    return (
        <section className="hero min-h-screen" style={{ backgroundImage: `url(${feedback})` }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='flex flex-col items-center'>

                    <h2>Ratings </h2>
                    <div className='flex'>
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={24}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    className='cursor-pointer mr-2'
                                />
                            )
                        })}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea  {...register("reviewText")} className="textarea textarea-primary mt-5" placeholder="Please share your review." required></textarea>
                        <input className='btn btn-primary block' type="submit" value="Review" />
                    </form>

                </div>
            </div>
        </section>

    );
};






export default AddReview;