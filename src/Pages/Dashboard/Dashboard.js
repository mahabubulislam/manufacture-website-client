import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HiOutlineHome, HiOutlineShoppingBag } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { MdOutlineReviews } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    return (
        <section>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label htmlFor="dashboard" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay "></label>
                    <ul className="menu p-4 overflow-y-auto w-80 text-base-content  bg-primary">
                        <div class="avatar mx-auto mb-2">
                            <div class="w-24 rounded-full">
                                <img src={user.photoURL || 'https://api.lorem.space/image/face?hash=92310'} alt='user' />
                            </div>
                        </div>
                        <div className='mx-auto text-center'>
                            <h4 className='text-xl font-bold'>{user?.displayName}</h4>
                            <p>{user?.email}</p>
                        </div>
                        <div className="divider"></div>
                        <li className='rounded-md'><p><HiOutlineHome></HiOutlineHome> Dashboard</p></li>
                        <li className='hover:bg-base-300 rounded-md'><Link to='my-orders'><HiOutlineShoppingBag></HiOutlineShoppingBag>My Orders</Link></li>
                        <li className='hover:bg-base-300 rounded-md'><Link to='my-profile'><FaUser></FaUser>My Profile</Link></li>
                        <li className='hover:bg-base-300 rounded-md'><Link to='add-review'><MdOutlineReviews></MdOutlineReviews>Add Reviews</Link></li>
                        <li><label htmlFor="logout-modal" className="hover:bg-base-300 modal-button"><FiLogOut></FiLogOut>Logout</label></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;