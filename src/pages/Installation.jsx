import React, { useState } from 'react';
import useData from '../hooks/useData';
import Card from '../component/Card';
import { Download, Star } from 'lucide-react';

const Installation = () => {
    const { data } = useData();

    const [ratingFilter, setRatingFilter] = useState('all');

    const formatNumber = (num) => {
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
        return num;
    };

    // Filtered Apps
    const filteredData = data.filter(d => {
        const matchesRating = ratingFilter === 'all' || d.ratingAvg >= parseFloat(ratingFilter);
        return matchesRating;
    });

    return (
        <section className='max-w-360 mx-auto mt-12'>
            {/* Header */}
            <div className='text-center my-10'>
                <h2 className='text-5xl font-semibold mb-6'>Your Installed Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">

                {/* Apps Found */}
                <p className="text-gray-700 font-medium text-sm sm:text-base">
                    {filteredData.length} Apps Found
                </p>


                {/* Rating Filter Dropdown */}
                <select
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value)}
                    className="mt-2 sm:mt-0 p-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                >
                    <option value="all">All Ratings</option>
                    <option value="5">5</option>
                    <option value="4">4 & up</option>
                    <option value="3">3 & up</option>
                    <option value="2">2 & up</option>
                    <option value="1">1 & up</option>
                </select>
            </div>

            {/* Apps Grid */}
            <div className='space-y-6'>
                {filteredData.length > 0 ? (
                    filteredData.map((d) => (
                        <div key={d.id} className="flex flex-col md:flex-row gap-3 bg-base-100 shadow-sm items-center">
                            <figure className='p-2 '>
                                <img
                                    className='rounded-xl h-24 w-24 bg-gray-200'
                                    src={d.image}
                                    alt={d.title} />
                            </figure>
                            <div className="flex-1">
                                <h2 className="mb-5 text-xl">{d.title}</h2>
                                <div className="">
                                    <div className="badge badge-outline border-none text-green-500">
                                        {formatNumber(d.downloads)} <Download size={12} />
                                    </div>
                                    <div className="badge badge-outline border-none  text-yellow-600">
                                        {d.ratingAvg} <Star size={12} />
                                    </div>
                                    <div className="badge badge-outline border-none  text-gray-600">
                                        {d.size} MB
                                    </div>
                                </div>
                            </div>
                            <div className="mr-10">
                                <button className='btn bg-[#00D390] text-white btn-lg'>Uninstall</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 mt-10">No apps found.</p>
                )}
            </div>
        </section>
    );
};

export default Installation;