import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            There is nothing to show go back to <Link to='/home' className='font-bold cursor-pointer'>Home</Link>
        </div>
    );
};

export default NotFound;