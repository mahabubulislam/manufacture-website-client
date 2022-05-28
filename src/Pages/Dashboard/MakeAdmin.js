import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MakeAdmin = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch("http://localhost:5000/users").then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

    return (
        <section>
            <h1 className='text-3xl text-center text-primary font-bold uppercase'>Total users: {users?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
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
                            users?.map((user, index) =>
                                <tr className='text-left' key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user?.product}</td>
                                    <td><img className='rounded-lg w-8' src={user?.img} alt={user.product} /></td>
                                    <td><button className='btn btn-xs btn-error text-center'><RiDeleteBin6Line className='mx-1' />Remove</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section >
    );
};

export default MakeAdmin;