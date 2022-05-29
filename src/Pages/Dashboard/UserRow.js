import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const UserRow = ({ index, user, refetch }) => {
    const { name, email, img, role } = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Successfully Make Admin');
                    refetch()
                }
                else {
                    toast("Something went wrong, Please Try again later.")
                }
            })
    }
    const deleteUser = () => {
        fetch(`http://localhost:5000/users/${email}`, {
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
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td><img className='rounded-full w-10 mask mask-hexagon' src={user?.img || 'https://api.lorem.space/image/face?hash=92310'} alt={user.product} /></td>
            <td>{user?.role || 'Customer'}</td>
            <td className='text-center'>
                <button onClick={deleteUser} className='btn btn-xm'>Delete</button>
                <button onClick={makeAdmin} className='btn btn-xm'>Make Admin</button>

                {/* <label htmlFor="admin-modal" className="btn btn-xs btn-success mr-2">Make Admin</label> */}
                {/* <label htmlFor="delete-modal" className="btn btn-xs btn-error ml-2"><RiDeleteBin6Line className='text-sm mx-2' /> Delete User</label> */}
            </td>
            {/* <td>
                <input type="checkbox" id="admin-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="text-xl py-5">Are you sure want to make this user as admin?</h3>
                        <div className="modal-action flex justify-evenly">
                            <label onClick={confirmAdmin} htmlFor="admin-modal" className="btn">Yes</label>
                            <label htmlFor="admin-modal" className="btn">Cancel</label>
                        </div>
                    </div>
                </div>
            </ td>
            <td>
                <input type="checkbox" id="delete-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="text-xl py-5">Are you sure want to delete this user?</h3>
                        <div className="modal-action flex justify-evenly">
                        <label onClick={deleteUser} htmlFor="delete-modal" className="btn">Yes</label>
                            <label htmlFor="delete-modal" className="btn btn-primary">Cancel</label>
                        </div>
                    </div>
                </div>
            </td> */}
        </tr>


    );
};

export default UserRow;