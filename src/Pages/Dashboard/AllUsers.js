import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading , refetch} = useQuery('admin', () => fetch("http://localhost:5000/users").then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

    return (
        <section>
            <h1 className='text-3xl text-center text-primary font-bold uppercase'>Total users: {users?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Photo</th>
                            <th>Role</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) =>
                                <UserRow  key={user._id} user={user} index={index} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </section >
    );
};

export default AllUsers;