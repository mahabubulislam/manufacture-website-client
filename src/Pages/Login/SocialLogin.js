import React from 'react';
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={()=>signInWithGoogle()} className="btn btn-outline flex justify-evenly items-center  hover:bg-accent w-full my-2 mx-auto">Continue with Google <FaGoogle></FaGoogle> </button>
            <button onClick={()=>signInWithFacebook()} className="btn btn-outline flex justify-evenly items-center  hover:bg-accent w-full mt-2 mx-auto">Continue with Facebook <FaFacebook></FaFacebook></button>
        </div>
    );
};

export default SocialLogin;