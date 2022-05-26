import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        signInWithEmailAndPassword(data?.email, data?.password)
    };
    return (

        <div className="card flex-shrink-0 w-full mx-auto  max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" {...register("email")} className="input input-bordered" required />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" {...register("password")} className="input input-bordered" required />
                        <label className="label">
                            <p className="label-text-alt cursor-pointer text-blue-600">Forgot password?</p>
                        </label>
                        <label className="label">
                            <small>New user? <Link to='/signup' className="label-text-alt text-blue-600"> Register</Link></small>
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

export default Login;