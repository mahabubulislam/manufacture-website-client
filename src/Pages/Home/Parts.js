import React from 'react';
import { Link } from 'react-router-dom';
import useParts from '../../hooks/useParts';
import Loading from '../Shared/Loading';
import Part from './/../Shared/Part';

const Parts = () => {
    const { parts, isLoading, refetch } = useParts()
    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='w-4/5 mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    parts?.slice(-3).map(part => <Part part={part} key={part._id} refetch={refetch}></Part>)
                }
            </div>
            <Link to='/shop' className='btn btn-secondary block w-40 p-4 mx-auto mt-10'>Show More</Link>
        </section>
    );
};

export default Parts;