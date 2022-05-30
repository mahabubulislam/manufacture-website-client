import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HiOutlineHome, HiOutlineShoppingBag } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { MdOutlineReviews } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { AiFillSetting } from 'react-icons/ai'
import { IoPersonAddSharp, IoAddCircle } from 'react-icons/io5'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <section>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-10">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay "></label>
                    <ul className="menu p-4 overflow-y-auto w-80 text-base-content  bg-primary">
                        <div className="avatar mx-auto mb-2">
                            <div className="w-24 rounded-full">
                                <img src={user.photoURL || 'https://api.lorem.space/image/face?hash=92310'} alt='user' />
                            </div>
                        </div>
                        <div className='mx-auto text-center'>
                            <h4 className='text-xl font-bold'>{user?.displayName}</h4>
                            <p>{user?.email}</p>
                        </div>
                        <div className="divider"></div>
                        <li className='rounded-md hover:bg-base-300'><p><HiOutlineHome></HiOutlineHome> <Link to='/dashboard'>Dashboard</Link></p></li>
                        {
                            !admin && <>
                                <li className='hover:bg-base-300 rounded-md'><Link to='my-orders'><HiOutlineShoppingBag></HiOutlineShoppingBag>My Orders</Link></li>
                                <li className='hover:bg-base-300 rounded-md'><Link to='add-review'><MdOutlineReviews></MdOutlineReviews>Add Reviews</Link></li>
                            </>
                        }
                        <li className='hover:bg-base-300 rounded-md'><Link to='my-profile'><FaUser></FaUser>My Profile</Link></li>
                        {
                            admin && <>
                                <li className='hover:bg-base-300 rounded-md'><Link to='add-products'><IoAddCircle></IoAddCircle>Add Products</Link></li>
                                <li className='hover:bg-base-300 rounded-md'><Link to='manage-products'><HiOutlineShoppingBag></HiOutlineShoppingBag>Manage Products</Link></li>
                                <li className='hover:bg-base-300 rounded-md'><Link to='manage-orders'><HiOutlineShoppingBag></HiOutlineShoppingBag>Manage Orders</Link></li>
                                <li className='hover:bg-base-300 rounded-md'><Link to='all-users'><IoPersonAddSharp></IoPersonAddSharp>All Users</Link></li>
                            </>
                        }
                        <li><label htmlFor="logout-modal" className="hover:bg-base-300 modal-button"><FiLogOut></FiLogOut>Logout</label></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;