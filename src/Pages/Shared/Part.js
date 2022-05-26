import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, description, img, price, quantity, minQuantity } = part
    const navigate = useNavigate()
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='h-28' src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p title={`${description}`}>{description?.length>60? `${description?.slice(0,60)}...`: `${description}`}</p>
                <h5 className='text-xl'>Price: ${price} </h5>
                <h5 className='text-xl'>Available Quantity: ${quantity} peices</h5>
                <p>{`Minimum order: (${minQuantity} peices)`}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>navigate(`purchase/${_id}`)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;