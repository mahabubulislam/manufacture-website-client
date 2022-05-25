import React from 'react';
import {FaFacebook,FaGoogle} from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <div class="divider">OR</div>
            <button class="btn btn-outline flex justify-evenly items-center  hover:bg-accent w-full my-2 mx-auto">Continue with Google <FaGoogle></FaGoogle> </button>
            <button class="btn btn-outline flex justify-evenly items-center  hover:bg-accent w-full mt-2 mx-auto">Continue with Facebook <FaFacebook></FaFacebook></button>
        </div>
    );
};

export default SocialLogin;