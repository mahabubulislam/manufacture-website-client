import React from 'react';
import useParts from '../../hooks/useParts';
import Loading from '../Shared/Loading';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ManageProducts = () => {
    const { parts, isLoading, refetch } = useParts();
    if (isLoading) {
        return <Loading />
    }
    const RemoveSwal = withReactContent(Swal);
    const removeProduct = id => {
    
        RemoveSwal.fire({
            title: 'Do you want to delete the parts?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://murmuring-retreat-70420.herokuapp.com/parts/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch()
                            Swal.fire('Deleted!', '', 'success');
                        }
                    })
            }
        })
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
                                <td title={part?.description}>{part?.description?.slice(0, 20)}...</td>
                                <td>{part?.quantity}</td>
                                <td>{part?.price}</td>
                                <td><button onClick={() => removeProduct(part?._id)} className='btn btn-xs'>Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;