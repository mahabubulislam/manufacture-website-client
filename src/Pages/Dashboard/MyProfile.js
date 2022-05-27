import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit , reset} = useForm();
    if (loading) {
        return <Loading />
    }
    const email = user?.email;
    const name = user?.displayName;

    const onSubmit = data => {
        const user = {
            email,
            board: data?.board,
            district: data?.district,
            division: data?.division,
            exam: data?.exam,
            institute: data?.institute,
            linkdin: data?.linkdin,
            phone: data?.phone,
            policeStation: data?.policeStation,
            result: data?.result,
            subject: data?.subject,
            village: data?.village,
            year: data?.year
        }
        fetch(`http://localhost:5000/my-profile/${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged===true){
                toast.success('Your Profile updated');
                reset()
            }
            else{
                toast.error('Something Went Wrong, Please try again later')
            }
        })
    };

    return (
        <div>
            <h1 className='text-4xl font-bold'>My Profile</h1>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='flex flex-col-reverse md:flex-row  justify-around items-center'>
                        <div>
                            <h2 class="card-title">{name}</h2>
                            <h4 className="text-xl">{email}</h4>
                        </div>
                        <div class="avatar">
                            <div class="w-40 mask mask-hexagon">
                                <img className='w-20 rounded-full' src={user?.photoURL || 'https://api.lorem.space/image/face?hash=92310'} alt={name} />
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div>
                        <h3 className='text-3xl font-bold'>Personal Information</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <div class="form-control w-full max-w-xs">
                                    <h4 className='text-xl font-semibold'>Education:</h4>
                                    <label class="label">
                                        <span class="label-text font-semibold">Exam/Degree Name</span>
                                    </label>
                                    <input type="text" {...register("exam", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-semibold">Board</span>
                                    </label>
                                    <input type="text" {...register("board", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-semibold">Subject/Group</span>
                                    </label>
                                    <input type="text" {...register("subject", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-semibold">Insititute</span>
                                    </label>
                                    <input type="text" {...register("institute", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-semibold">Year</span>
                                    </label>
                                    <input type="text" {...register("year", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-semibold">Result</span>
                                    </label>
                                    <input type="text" {...register("result", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                </div>


                                <div class="form-control w-full max-w-xs">
                                    <h4 className='text-xl font-semibold'>Contact:</h4>
                                    <label class="label">
                                        <span class="label-text font-semibold">Division</span>
                                    </label>
                                    <input type="text" {...register("division", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-semibold">District</span>
                                    </label>
                                    <input type="text" {...register("district", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-semibold">Police Station</span>
                                    </label>
                                    <input type="text" {...register("policeStation", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-semibold">Village</span>
                                    </label>
                                    <input type="text" {...register("village", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-semibold">Phone</span>
                                    </label>
                                    <input type="text" {...register("phone", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <label class="label">
                                        <span class="label-text font-semibold">Linkdin</span>
                                    </label>
                                    <input type="text" {...register("linkdin", { required: true })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <input className='btn btn-primary block mx-auto' type="submit" value="Update Profile" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;