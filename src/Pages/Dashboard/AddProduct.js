import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const imgAPI = '8f21070c4811c4727e348454a4530dbf'
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgAPI}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const part = {
                        name:data.name,
                        description:data.description,
                        price:parseFloat(data.price),
                        img:img,
                        quantity:parseFloat(data.quantity),
                        minQuantity:parseFloat(data.minQuantity)
                    }
                    // send to your database 
                fetch('https://murmuring-retreat-70420.herokuapp.com/parts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(part)
                })
                .then(res=>res.json())
                .then(inserted=>{
                    if(inserted.insertedId){
                        toast.success('Product added successfully')
                        reset();
                    }
                    else{
                        toast.error('Something went wrong, Please try again later');
                    }
                })
            }
            })

    }
    return (
        <section>
            <h1 className='text-3xl text-center text-primary'>Add Products</h1>
            <div className='my-10 w-1/2 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                    <input className='input input-bordered mb-2' {...register("name", { required: true })} placeholder='Products name' required />
                    <textarea className='textarea textarea-bordered mb-2' {...register("description", { required: true })} placeholder='Description' required />
                    <input className=' border-2 rounded-md mb-2' {...register("image", { required: true })} type="file" />
                    <input min='1' className='input input-bordered mb-2'{...register("price", { required: true })} type="number" placeholder='Price' required />
                    <input min='1' className='input input-bordered mb-2' {...register("quantity", { required: true })} type="number" placeholder='Quantity' required />
                    <input min='1' className='input input-bordered mb-2' {...register("minQuantity", { required: true })} type="number" placeholder='Minimum Quantity' required />
                    <input className='btn btn-primary w-1/2 mx-auto' type="submit" value="Add Item" />
                </form>
            </div>
        </section>
    );
};

export default AddProduct;