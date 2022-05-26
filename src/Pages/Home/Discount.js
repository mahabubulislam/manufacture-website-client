import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner-center.png'
const Discount = () => {
   
    return (
        <section className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='Bicycle' />
                <div>
                    <h3 className="text-3xl text-accent">Promotional</h3>
                    <h4 className='text-4xl text-primary'>Discount</h4>
                    <h1 className='text-5xl text-secondary font-bold'>UP TO 35%</h1>
                    <p className="py-6">Up to 35% discount in this summer. Hurry up. Limited stock.</p>
                    <Link to='/shop' className="btn btn-primary">Shop Now</Link>
                </div>
            </div>
        </section>
    );
};

export default Discount;