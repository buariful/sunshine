import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <div className="navbar bg-primary md:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/service'>Service</Link></li>
                            <li>{user ? <button className="btn my-6 bg-gray-700 text-white ml-3 md:ml-5 font-semibold" onClick={logout}>Sign Out</button> : <Link to='/login' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Login</Link>}</li>
                            <li>{user && <span className='font-semibold text-orange-300'>{user.displayName}</span>}</li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/service'>Service</Link></li>
                        <li>{user ? <button className="btn my-6 bg-gray-700 text-white ml-3 md:ml-5 font-semibold" onClick={logout}>Sign Out</button> : <Link to='/login' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Login</Link>}</li>
                        <li>{user && <span className='font-semibold text-orange-300'>{user.displayName}</span>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;