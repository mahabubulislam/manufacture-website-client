import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { toast } from 'react-toastify';



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
    const CancelSwal = withReactContent(Swal);

    const cancelOrder = (id) => {

        CancelSwal.fire({
            icon: 'error',
            title: 'Do you sure want to cancel this order?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`https://murmuring-retreat-70420.herokuapp.com/orders/${id}`, {
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
                                    <td><button onClick={() => cancelOrder(order?._id)} className='btn btn-xs btn-error text-center'><RiDeleteBin6Line className='mx-1' />Cancel</button></td>
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