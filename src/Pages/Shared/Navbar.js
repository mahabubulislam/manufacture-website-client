import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import auth from '../../firebase.init';
import LogoutModal from '../Login/LogoutModal';
import Loading from './Loading';
const Navbar = () => {
    const [user, loading] = useAuthState(auth)
    
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>
    if(loading){
        return <Loading/>
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="text-sm md:text-xl flex justify-center items-center font-bold"><img className='w-9 md:w-20' src={logo} alt="website-logo" /><h3>Elite Manufacturer</h3></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? 
                        <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar mr-3 lg:mr-10">
                            <div className="w-10 rounded-full ">
                                <img src={user.photoURL || 'https://api.lorem.space/image/face?hash=33791'} alt='' />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                            <li>
                                <Link to='my-profile' className="justify-between">
                                    My Profile
                                </Link>
                            </li>
                            <li><Link to='Dashboard'>Dashboard</Link></li>
                            <li><label htmlFor="logout-modal" className="hover:bg-base-300 modal-button bg-base-200">Logout</label></li>
                        </ul>
                    </div>
                    :
                    <Link className='mr-3 lg:mr-10 btn btn-primary' to='/login'>Login</Link>
                    }
                </div>
            </div>
            <LogoutModal/>
        </div >
    );
};

export default Navbar;