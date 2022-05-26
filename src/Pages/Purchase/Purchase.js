import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery('product', () => fetch(`http://localhost:5000/parts/${id}`).then(res => res.json()));

    const [orderQuantity, setOrderQuantity] = useState(1)
    if (isLoading) {
        return <Loading />
    }
    const { _id, name, description, img, price, quantity, minQuantity } = data;
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={img} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p title={`${description}`}>{description?.length > 60 ? `${description?.slice(0, 60)}...` : `${description}`}</p>
                    <h5 className='text-xl'>Price: ${price} </h5>
                    <h5 className='text-xl'>Available Quantity: ${quantity} peices</h5>
                    <p>{`Minimum order: (${minQuantity} peices)`}</p>
                    <div >
                        <div>
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>
                            <input onChange={e=>setOrderQuantity(e.target.value)}  type="number" min={minQuantity} max={quantity} className="input input-bordered" required placeholder="1" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section className="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
                    <div className="h-full">
                        {/* <!-- Pay component --> */}
                        <div>
                            {/* <!-- Card background --> */}
                            <div className="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                                <img className="rounded-t shadow-lg" src="https://preview.cruip.com/mosaic/images/pay-bg.jpg" width="460" height="180" alt="Pay background" />
                            </div>
                            {/* <!-- Card body --> */}
                            <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                                <div className="bg-white px-8 pb-6 rounded-b shadow-lg">

                                    <div x-show="card">
                                        <div className="space-y-4">
                                            {/* <!-- Card Number --> */}
                                            <div>
                                                <label className="block text-sm font-medium mb-1" for="card-nr">Card Number <span className="text-red-500">*</span></label>
                                                <input id="card-nr" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="1234 1234 1234 1234" />
                                            </div>
                                            {/* <!-- Expiry and CVC --> */}
                                            <div className="flex space-x-4">
                                                <div className="flex-1">
                                                    <label className="block text-sm font-medium mb-1" for="card-expiry">Expiry Date <span className="text-red-500">*</span></label>
                                                    <input id="card-expiry" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="MM/YY" />
                                                </div>
                                                <div className="flex-1">
                                                    <label className="block text-sm font-medium mb-1" for="card-cvc">CVC <span className="text-red-500">*</span></label>
                                                    <input id="card-cvc" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="CVC" />
                                                </div>
                                            </div>
                                            {/* <!-- Name on Card --> */}
                                            <div>
                                                <label className="block text-sm font-medium mb-1" htmlFor="card-name">Name on Card <span className="text-red-500">*</span></label>
                                                <input id="card-name" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="John Doe" />
                                            </div>
                                            {/* <!-- Email --> */}
                                            <div>
                                                <label className="block text-sm font-medium mb-1" htmlFor="card-email">Email <span className="text-red-500">*</span></label>
                                                <input id="card-email" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="email" placeholder="john@company.com" />
                                            </div>
                                        </div>
                                        {/* <!-- Form footer --> */}
                                        <div className="mt-6">
                                            <div className="mb-4">
                                                <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Pay ${price*orderQuantity}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
            </div >
        </section >
    );
};

export default Purchase;