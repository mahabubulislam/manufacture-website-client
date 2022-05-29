import React from 'react';
import { useQuery } from 'react-query';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useParts from '../../hooks/useParts';
import Loading from '../Shared/Loading';

const AdminPanel = () => {
    const { parts } = useParts()
    const { data, isLoading } = useQuery('orders', () => fetch("https://murmuring-retreat-70420.herokuapp.com/orders").then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='flex flex-col justify-between items-center'>
            <h2 className="text-4xl text-primary text-center">Welcome to Admin Panel</h2>
            <div className='mt-10'>
                <div>
                    <h3 className='text-2xl text-secondary mb-5'>Daily Products Price</h3>
                    <AreaChart
                        width={384}
                        height={300}
                        data={parts}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
                <div className='my-10'>
                <h3 className='text-2xl text-secondary mb-5'>Daily Orders Summary</h3>
                    <LineChart width={384} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="product" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="quantity" stroke="#8884d8" />
                        <Line type="monotone" dataKey="price" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;