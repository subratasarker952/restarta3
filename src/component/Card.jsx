import { Download, Star } from 'lucide-react';
import React from 'react';

const Card = ({ data }) => {
    const { image, title, downloads, ratingAvg } = data;

    const formatNumber = (num) => {
      if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
      if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
      return num;
    };

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='p-2'>
                <img
                    className='rounded-xl min-h-48'
                    src={image}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline border-none bg-gray-100 text-green-500">
                        {formatNumber(downloads)} <Download size={12} />
                    </div>
                    <div className="badge badge-outline border-none bg-gray-100  text-yellow-600">
                        {ratingAvg} <Star size={12} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;