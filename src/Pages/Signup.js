import React, { useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Signup = () => {

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,


    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [updateProfile] = useUpdateProfile(auth);


    const handlesubmit = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });

        navigate('/home')

    }

    return (
        <div>
            <h1 className='text-primary text-2xl font-bold text-center my-5'>Sign Up</h1>
            <form className='md:w-1/2 mx-auto' onSubmit={handlesubmit}>

                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="name"
                    placeholder="Name" required />
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" required />


                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" required />




                <input type="submit" value="Signup" className="cursor-pointer block bg-primary text-white w-full p-3 rounded mb-4" />

                <div className="text-center text-sm text-grey-dark mt-4">
                    <p>Do have already an account? <Link to='/login' className='font-semibold text-Primary text-xl'>Login</Link></p>
                </div>
            </form>

            <button className="btn btn-outline mt-8" onClick={() => signInWithGoogle()}>Continue with Google</button>
        </div>
    );
};

export default Signup;