import React from 'react';

const SingleProducts = ({ product }) => {
    const { availabelQuantity, img, minOrderQuantity, name, price, shortDescription, _id } = product;
    return (
        <div>
            <div className="card card-compact shadow-xl bg-[#e5e5e5]">
                <figure><img src={img} alt="Shoes" className='w-4/5 rounded-lg mt-3' /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>{shortDescription}</p>
                    <div className="flex justify-between">
                        <h2>Available: <span className='font-semibold'>{availabelQuantity}</span></h2>
                        <h2>Min-order: <span className='font-semibold text-neutral'>{minOrderQuantity}</span></h2>
                    </div>
                    <h2>Price: $ <span className='text-xl font-bold text-neutral'>{price}</span> </h2>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;