import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Checkout from './Checkout';

const Purchase = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery('product', () => fetch(`https://murmuring-retreat-70420.herokuapp.com/parts/${id}`).then(res => res.json()));
    const [user, loading] = useAuthState(auth)
    const [orderQuantity, setOrderQuantity] = useState(0)
    const { register, handleSubmit } = useForm();
    const [ordered, setOrdered] = useState(false);
    const [open, setOpen] = useState(false)

    if (isLoading || loading) {
        return <Loading />
    }
    const { _id, name, description, img, price, quantity, minQuantity } = data;
    const totalPrice = price * orderQuantity
    const onSubmit = data => {
        const phone = data?.phone;
        const address = data.address;
        const orders = {
            id: _id,
            product: name,
            img: img,
            name: user?.displayName,
            email: user?.email,
            quantity: orderQuantity,
            price: orderQuantity * price,
            phone,
            address,
        }
        fetch('https://murmuring-retreat-70420.herokuapp.com/orders/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Your order is placed. Please Pay now. Thank You');
                    setOrdered(true);
                }
                else {
                    toast.error('Something went wrong, Please try gain later')
                }
            })

    };

    return (
        <section>
            <div className='flex flex-col lg:flex-row justify-evenly'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt={name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p title={`${description}`}>{description?.length > 60 ? `${description?.slice(0, 60)}...` : `${description}`}</p>
                        <h5 className='text-xl'>Price: ${price} </h5>
                        <h5 className='text-xl'>Stock: ${quantity} peices</h5>
                        <p>{`Minimum order: (${minQuantity} peices)`}</p>
                        <div >
                            {orderQuantity < minQuantity && <small className='text-red-700'>You have to order at least ${minQuantity}</small>}
                            {orderQuantity > quantity && <small className='text-red-700'>Sorry, Only ${quantity} in stock</small>}
                            <div>
                                <label className="label">
                                    <span className="label-text">Order Quantity</span>
                                </label>
                                <input onChange={e => setOrderQuantity(e.target.value)} type="number" min={minQuantity} max={quantity} className="input input-bordered" required placeholder="0" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shipping Address</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col'>
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" className="input input-bordered mb-2  cursor-not-allowed " value={user?.displayName} readOnly />
                                <input type="email" className="input input-bordered mb-2 cursor-not-allowed " value={user?.email} readOnly />
                                <input type="tel" {...register("phone")} className="input input-bordered mb-2" required placeholder="Phone" />
                                <textarea className="textarea textarea-bordered mb-2" {...register("address")} placeholder="Address" required></textarea>
                                <input type="submit" disabled={orderQuantity < minQuantity || orderQuantity > quantity || ordered === true} className="btn btn-primary" value="Place Order" />
                            </div>
                        </form>
                        {ordered && <button onClick={() => setOpen(true)} disabled={open} className='btn btn-primary my-2'> Proceed to Pay</button>}

                    </div>
                </div>
                {open &&
                    <div className="card w-96 h-96 bg-amber-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-primary-focus">Checkout</h2>
                            <p>Total Price: $ {totalPrice} </p>
                            <Checkout price={totalPrice} user={user} _id={id} />
                        </div>
                    </div>
                }
            </div>

            <div>

            </div>
        </section>
    );
};

export default Purchase;