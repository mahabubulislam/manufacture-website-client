import React from 'react';
import { FaPeopleCarry } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import { AiFillAccountBook } from "react-icons/ai";
const BussinessSummary = () => {
    return (
        <section className='p-10 mt-10'>
            <h1 className='text-4xl text-center text-secondary font-bold mb-10'>Business Summary</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-lg">
                <div className='h-40 hover:bg-accent hover:text-white duration-300 ease-in-out border-l-2 p-5 rounded-md text-center font-bold'>
                    <FaPeopleCarry className='block text-6xl mx-auto text-primary'></FaPeopleCarry>
                    <h3 className='text-3xl'>50K+</h3>
                    <p>Total Customers</p>
                </div>
                <div className='h-40 hover:bg-accent hover:text-white duration-300 ease-in-out border-l-2 p-5 rounded-md text-center font-bold'>
                    <AiFillShopping className='block text-6xl mx-auto text-primary'></AiFillShopping>
                    <h3 className='text-3xl'>1M+</h3>
                    <p>Total Parts</p>
                </div>
                <div className='h-40 hover:bg-accent hover:text-white duration-300 ease-in-out border-l-2 p-5 rounded-md text-center font-bold'>
                    <FaCoins className='block text-6xl mx-auto text-primary'></FaCoins>
                    <h3 className='text-3xl'>10M</h3>
                    <p>Yearly Revenue</p>
                </div>
                <div className='h-40 hover:bg-accent hover:text-white duration-300 ease-in-out border-l-2 p-5 rounded-md text-center font-bold'>
                    <AiFillAccountBook className='block text-6xl mx-auto text-primary'></AiFillAccountBook>
                    <h3 className='text-3xl'>5K+</h3>
                    <p>Daily Sells</p>
                </div>
            </div>
        </section>
    );
};

export default BussinessSummary;