import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllOrderRow from './AllOrderRow';

const ManageAllOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch("https://murmuring-retreat-70420.herokuapp.com/orders").then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

    return (
        <section>
            <h1 className='text-3xl text-center text-primary font-bold uppercase'>Total Orders: {orders?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) =><AllOrderRow order={order} key={order._id} index={index} refetch={refetch}/>)
                        }
                    </tbody>
                </table>
            </div>
        </section >
    )
};

export default ManageAllOrders;