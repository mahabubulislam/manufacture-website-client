import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from "../../assets/NotFound.jpg";
const NotFound = () => {
    return (
        <div className='flex flex-col'>
            <img className='w-1/2 mx-auto' src={NotFoundImg} alt="" />
            <Link to='/' className='btn btn-primary mx-auto '>Back to Home</Link>
        </div>
    );
};

export default NotFound;