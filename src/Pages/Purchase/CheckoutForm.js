import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';


const CheckoutForm = ({ price, user, _id }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('https://murmuring-retreat-70420.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret);
                }
            });
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);


        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats! Your payment is completed.')
            setProcessing(false)
            //store payment on database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/orders/payment/${_id}`,{
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount>0){
                    toast("Your Order is Confirmed")
                }
            })
        }

    };
    return (<>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />
            <button className='btn btn-sm btn-primary mt-4' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
        {processing && <small className='text-primary'>Please wait...</small>}
        {
            cardError && <p className='text-red-500'>{cardError}</p>
        }
        {
            success && <div className='text-green-500'>
                <p>{success}  </p>
                <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
            </div>
        }
    </>
    );
};

export default CheckoutForm;