import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
  
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile({displayName:data?.name})
    };

    if (loading || updating) {
        return <Loading />
    }
    if (user) {
        return <Navigate to='/shop'></Navigate>
    }
    return (
        <div className="card flex-shrink-0 w-full mx-auto  max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" {...register("name", { required: true, pattern: /^[A-Za-z ' ']+$/i })} className="input input-bordered" required />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" {...register("email")} className="input input-bordered" required />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="tel" placeholder="Phone number" {...register("phone")} className="input input-bordered" required />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" {...register("password")} className="input input-bordered" required />
                        <label className="label">
                            <small>Already have an account? <Link to='/login' className="label-text-alt text-blue-600"> Login</Link></small>
                        </label>
                        <label className="label">
                            {error && <small>{error?.message?.slice(10)}</small>}
                        </label>
                    </div>
                    <div className="mt-2">
                        <input type="submit" className="btn btn-primary block mx-auto" value="Register" />
                    </div>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignUp;