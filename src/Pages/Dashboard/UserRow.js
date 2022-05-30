import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { toast } from 'react-toastify';


const UserRow = ({ index, user, refetch }) => {
    const { name, email, img, role } = user;
    const ConfirmSwal = withReactContent(Swal);
    const DeleteSwal = withReactContent(Swal);

    const makeAdmin = () => {
        ConfirmSwal.fire({
            title: 'Do you want to make this user an admin ?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://murmuring-retreat-70420.herokuapp.com/users/admin/${email}`, {
                    method: 'PUT',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            toast('Successfully Make as Admin');
                            refetch()
                        }
                        else {
                            toast("Something went wrong, Please Try again later.")
                        }
                    })
            }
        })

    }
    const deleteUser = () => {
        DeleteSwal.fire({
            title: 'Do you want to delete this user ?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://murmuring-retreat-70420.herokuapp.com/users/${email}`, {
                    method: 'DELETE',
                    headers: {
                        'authorization': `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            toast('Successfully Delete User');
                            refetch()
                        }
                        else {
                            toast("Something went wrong, Please Try again later.")
                        }
                    })
            }
        })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td><img className='rounded-full w-10 mask mask-hexagon' src={img || 'https://api.lorem.space/image/face?hash=92310'} alt={user.product} /></td>
            <td>{role || 'Customer'}</td>
            <td>
                <button onClick={deleteUser} className='btn btn-xs btn-error mx-1'><RiDeleteBin6Line /> Delete</button>
                <button onClick={makeAdmin} className='btn btn-xs btn-success mx-1'>Make Admin</button>
            </td>
        </tr>


    );
};

export default UserRow;