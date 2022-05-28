import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { RiDeleteBin6Line } from 'react-icons/ri'

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email;

    const { data: orders, isLoading } = useQuery('orders', () => fetch(`http://localhost:5000/myorders/?email=${email}`,{
        method:'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (loading || isLoading) {
        return <Loading />
    }

    return (
        <section>
            <h1 className='text-3xl text-center text-primary font-bold uppercase'>My Orders: {orders?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) =>
                                <tr className='text-left' key={index}>
                                    <th>{index + 1}</th>
                                    <td>{order?.product}</td>
                                    <td><img className='rounded-lg w-8' src={order?.img} alt={order.product} /></td>
                                    <td>{order?.quantity}</td>
                                    <td>{order?.price}</td>
                                    <td><button className='btn btn-xs btn-error text-center'><RiDeleteBin6Line className='mx-1'/>Cancel</button></td>
                                    <td>Paid</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section >
    );
};

export default MyOrders;