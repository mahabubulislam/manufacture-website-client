import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Navbar = () => {
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
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
                    <div className="avatar">
                        <div className="w-10 rounded-full mr-10">
                            <img src="https://api.lorem.space/image/face?hash=77703" alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;