import React from 'react';
import useParts from '../../hooks/useParts';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const { parts, isLoading, refetch } = useParts();
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parts?.map((part, index) =>
                            <tr className='text-left' key={index}>
                                <th>{index + 1}</th>
                                <td>{part?.name}</td>
                                <td><img className='rounded-lg w-8' src={part?.img} alt={part.name} /></td>
                                <td title={part?.description}>{part?.description?.slice(0,20)}...</td>
                                <td>{part?.quantity}</td>
                                <td>{part?.price}</td>
                                <td><button className='btn btn-xs'>Remove</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;