import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import auth from '../../firebase.init';
import LogoutModal from '../Login/LogoutModal';
import Loading from './Loading';
import { MdSpaceDashboard } from 'react-icons/md';
const Navbar = () => {
    const [user, loading] = useAuthState(auth)

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        {
            user && <li><Link className='sm:block lg:hidden' to='/dashboard'>Dashboard</Link></li>
        }
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>
    if (loading) {
        return <Loading />
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
                        user && <Link className='btn btn-primary mr-10 hidden lg:block p-4' to='/dashboard'>Dashboard</Link>
                    }
                    {
                        !user && <Link className='mr-3 lg:mr-10 btn btn-primary' to='/login'>Login</Link>
                    }
                    {
                        user && <label htmlFor="dashboard" className="text-4xl drawer-button lg:hidden"><MdSpaceDashboard /></label>
                    }
                </div>
            </div>
            <LogoutModal />
        </div >
    );
};

export default Navbar;