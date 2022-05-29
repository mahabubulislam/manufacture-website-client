import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {

    const { data: orders, isLoading } = useQuery('orders', () => fetch("http://localhost:5000/orders").then(res => res.json()));
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
                            <th>Action</th>
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
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td><button className='btn btn-xs btn-error text-center'><RiDeleteBin6Line className='mx-1' />Cancel</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section >
    )
};

export default ManageAllOrders;