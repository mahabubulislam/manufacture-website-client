import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';



const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email;

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://murmuring-retreat-70420.herokuapp.com/myorders/?email=${email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (loading || isLoading) {
        return <Loading />
    }
  
    return (
        <section>
            <h1 className='text-3xl text-center text-primary font-bold uppercase'>My Orders: {orders?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           orders?.map((order,index)=><OrderRow key={order._id} order={order} index={index} refetch={refetch}></OrderRow>)    
                        }
                    </tbody>
                </table>
            </div>
        </section >
    );
};

export default MyOrders;