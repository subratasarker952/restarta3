import React from 'react';

const Card = () => {
    return (
        <div className="card bg-base-100 shadow-sm">
        <figure className='p-2'>
          <img
          className='rounded-xl'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
          </h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default Card;