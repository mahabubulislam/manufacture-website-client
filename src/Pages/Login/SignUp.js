import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    return (
        <div className="card flex-shrink-0 w-full mx-auto  max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form >
                    <div >
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="tel" placeholder="Phone number" className="input input-bordered" required />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <small>Already have an account? <Link to='/login' className="label-text-alt text-blue-600"> Login</Link></small>
                        </label>
                    </div>
                    <div className="mt-2">
                        <input type="submit" className="btn btn-primary block mx-auto" value="Login" />
                    </div>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignUp;