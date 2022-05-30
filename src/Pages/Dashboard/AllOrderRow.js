import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { toast } from 'react-toastify';


const AllOrderRow = ({ order, index, refetch }) => {
    const { _id, product, img, quantity, price, name, email, paid } = order;
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
            <td>{name}</td>
            <td>{email}</td>
            <td>{paid ?
                <span className='bg-primary uppercase font-semibold rounded-md text-center  px-5'>Paid</span>
                :
                <button onClick={cancelOrder} className='btn btn-xs btn-error'>Cancel</button>}</td>
        </tr>
    );
};

export default AllOrderRow;