import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, refetch }) => {
    const { _id, product, quantity, price, paid } = order;
    const CancelSwal = withReactContent(Swal);

    const cancelOrder = () => {

        CancelSwal.fire({
            icon: 'error',
            title: 'Do you sure want to cancel this order?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`https://murmuring-retreat-70420.herokuapp.com/orders/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount > 0) {
                            toast('Your order is cancelled');
                            refetch()
                        }
                        else {
                            toast('Something went wrong. Please try again later')
                        }
                    })
            }
        })
    }


    return (
        <tr className='text-left' key={index}>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td><img className='rounded-lg w-8' src={order?.img} alt={order.product} /></td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{paid ? <span className='bg-primary uppercase font-semibold rounded-md text-center p-1'>Paid</span> : <Link to={`/purchase`} className='btn btn-xs btn-warning'>Pay</Link>}</td>
            <td>{!paid && <button onClick={cancelOrder} className='btn btn-xs btn-error'>Cancel</button>}</td>
        </tr>
    );
};

export default OrderRow;