import React from 'react';

const Part = ({ part }) => {
    const { name, description, img, price, quantity, minQuantity } = part
    console.log(part);
    return (
        <div class="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='h-28' src={img} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p title={`${description}`}>{description?.length>60? `${description?.slice(0,60)}...`: `${description}`}</p>
                <h4 className='text-2xl'>Price: <span className='font-bold'>${price}</span></h4>
                <h5 className='text-xl'>Available Quantity: <span className='font-bold'>${quantity}</span> peices</h5>
                <p>{`Minimum order: (${minQuantity} peices)`}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;