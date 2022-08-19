import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch('https://serene-stream-39702.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='font-bold text-4xl my-10 text-primary'>Our Services</h1>
            <div className='w-11/12 grid md:grid-cols-4 grid-cols-1 mx-auto gap-8'>

                {products?.map(product => <SingleService product={product} key={product._id}></SingleService>)}
            </div>
        </div>
    );
};

export default Services;