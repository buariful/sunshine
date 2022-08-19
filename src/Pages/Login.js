import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handlesubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
        navigate('/home')
    }

    return (
        <div>
            <h1 className='text-primary text-2xl font-bold text-center my-5'>Login</h1>
            <form className='md:w-1/2 mx-auto' onSubmit={handlesubmit}>

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




                <input type="submit" value="Login" className="block bg-primary text-white w-full p-3 rounded mb-4" />

                <div className="text-center text-sm text-grey-dark mt-4">
                    <p>Do you need an account? <Link to='/signup' className='font-semibold text-Primary text-xl'>Signup</Link></p>
                </div>
            </form>

            <button className="btn btn-outline mt-8" onClick={() => signInWithGoogle()}>Continue with Google</button>
        </div>
    );
};

export default Login;