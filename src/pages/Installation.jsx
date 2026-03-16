import React, { useState } from 'react';
import useData from '../hooks/useData';
import Card from '../component/Card';

const Installation = () => {
    const { data } = useData();

    const [ratingFilter, setRatingFilter] = useState('all'); 

    // Filtered Apps
    const filteredData = data.filter(d => {
        const matchesRating = ratingFilter === 'all' || d.ratingAvg >= parseFloat(ratingFilter);
        return matchesRating;
    });

    return (
        <section className='max-w-7xl mx-auto mt-12 px-4'>
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {filteredData.length > 0 ? (
                    filteredData.slice(-8).map((d) => <Card key={d.id} data={d} />)
                ) : (
                    <p className="col-span-full text-center text-gray-500 mt-10">No apps found.</p>
                )}
            </div>
        </section>
    );
};

export default Installation;