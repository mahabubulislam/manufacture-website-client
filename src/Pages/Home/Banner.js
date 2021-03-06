import React from 'react';
import banner from '../../assets/banner.png'
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 text-5xl text-white font-bold">Bicycle Manufacturer</h1>
                    <h3 className="mb-5 text-2xl">Bicycle Sports OEM & ODM</h3>
                    <div className='flex flex-col md:flex-row justify-center items-center '>
                        <Link to='/shop' className="btn btn-primary  mx-2 mb-2">Shop now < HiArrowSmRight className='text-xl mx-2'></HiArrowSmRight></Link>
                        <Link to='/contact' className="btn btn-secondary mx-2 mb-2">Contact us < HiArrowSmRight className='text-xl mx-2'></HiArrowSmRight> </Link>
                    </div>
                    <p className='mb-5 mt-2'>Original Since 1998</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;