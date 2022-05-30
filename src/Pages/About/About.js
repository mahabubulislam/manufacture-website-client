import React from 'react';
import banner from '../../assets/banner-bottom.png'
import Footer from '../Shared/Footer';
const About = () => {
    return (
        <>
            <section className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='Bicycle' />
                    <div>
                        <h3 className='text-3xl'>About US</h3>
                        <p>As a general manufacturer of industrial fittings, Elite Mnufacture  has a lineup of approximately 8,000 products, one of the largest in UAE, that allows us to meet the needs of the manufacturing industry in every field.
                            During our history of more than 30 years since our company was founded in 1988, Elite Mnufacture  has developed dependable technologies, wide-ranging creativity, and most importantly human advancement recognizing and advancing the abilities of our people.
                            The fundamental business philosophy of our company is gratitude and in order to give shape to this philosophy, we will continue to produce dependable products for our customers as we look forward to the next 100 years.</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default About;