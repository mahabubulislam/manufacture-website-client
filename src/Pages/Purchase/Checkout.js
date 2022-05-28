import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L47NyLil1o87ErwqRyYafwKbNfdmAu9SQbMLnptgt7fcQDn1d5lXLd0KLrQuPTbkkbkuPnU6tfbZHYZAE1wvi6z006pokqo2x');
const Checkout = ({price, user,_id}) => {
    
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} user={user} _id={_id}/>
            </Elements>
        </div>
    );
};

export default Checkout;