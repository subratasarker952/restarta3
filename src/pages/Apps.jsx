import React, { useState } from 'react';
import useData from '../hooks/useData';
import Card from '../component/Card';
import { Search } from 'lucide-react';

const Apps = () => {
    const { data } = useData();

    const [searchTerm, setSearchTerm] = useState('');

    // Filtered Apps
    const filteredData = data.filter(d => {
        const matchesSearch = d.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    return (
        <section className='max-w-7xl mx-auto mt-12 px-4'>
            {/* Header */}
            <div className='text-center my-10'>
                <h2 className='text-5xl font-semibold mb-6'>Our All Applications</h2>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">

                {/* Apps Found */}
                <p className="text-gray-700 font-medium text-sm sm:text-base">
                    {filteredData.length} Apps Found
                </p>

                {/* Search Box */}
                <div className="relative w-full sm:w-64">
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <Search size={18} />
                    </span>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search apps"
                        className="w-full p-2 pl-10 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
                    />
                </div>
            </div>

            {/* Apps Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {filteredData.length > 0 ? (
                    filteredData.map((d) => <Card key={d.id} data={d} />)
                ) : (
                    <p className="col-span-full text-center text-gray-500 mt-10">No apps found.</p>
                )}
            </div>
        </section>
    );
};

export default Apps;