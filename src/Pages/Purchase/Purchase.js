import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery('product', () => fetch(`http://localhost:5000/parts/${id}`).then(res => res.json()));
    const [user, loading] = useAuthState(auth)
    const [orderQuantity, setOrderQuantity] = useState(0)
    const { register, handleSubmit } = useForm();


    if (isLoading || loading) {
        return <Loading />
    }
    const { name, description, img, price, quantity, minQuantity } = data;
    const onSubmit = data => {
        const phone = data?.phone;
        const address = data.address;
        const orders = {
            product: name,
            img:img,
            name: user?.displayName,
            email: user?.email,
            quantity: orderQuantity,
            price: orderQuantity * price,
            phone,
            address,
        }
        fetch('http://localhost:5000/orders/', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged===true){
                toast.success('Your order is placed. Please Pay within 30 minutes, Otherwise your order will be cancelled automatically. Thank You')
            }
            else{
                toast.error('Something went wrong, Please try gain later')
            }
        })

    };

    return (
        <section className='flex flex-col lg:flex-row justify-evenly'>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={img} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p title={`${description}`}>{description?.length > 60 ? `${description?.slice(0, 60)}...` : `${description}`}</p>
                    <h5 className='text-xl'>Price: ${price} </h5>
                    <h5 className='text-xl'>Stock: ${quantity} peices</h5>
                    <p>{`Minimum order: (${minQuantity} peices)`}</p>
                    <div >
                        <small className='text-red-700'>{orderQuantity < minQuantity ? `You have to order at least ${minQuantity}` : ''}</small>
                        <div>
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>
                            <input onChange={e => setOrderQuantity(e.target.value)} type="number" min={minQuantity} max={quantity} className="input input-bordered" required placeholder="0" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Shipping Address</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col'>
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" className="input input-bordered mb-2  cursor-not-allowed " value={user?.displayName} readOnly />
                            <input type="email" className="input input-bordered mb-2 cursor-not-allowed " value={user?.email} readOnly />
                            <input type="tel" {...register("phone")} className="input input-bordered mb-2" required placeholder="Phone" />
                            <textarea class="textarea textarea-bordered mb-2" {...register("address")} placeholder="Address" required></textarea>
                            <input type="submit" disabled={orderQuantity < minQuantity} class="btn btn-primary" value="Place Order" />
                        </div>
                    </form>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>
        </section >
    );
};

export default Purchase;