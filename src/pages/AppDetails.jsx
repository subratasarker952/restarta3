import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useData from '../hooks/useData';
import appError from '../assets/App-Error.png'
import { Download, Star } from 'lucide-react';

const AppDetails = () => {
    const { data } = useData();
    const { id } = useParams();
    const navigate = useNavigate();
    const app = data.find(d => d.id === Number(id));

    const formatNumber = (num) => {
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
        return num;
    };

    if (data.length === 0) {
        return <p className="text-center mt-10">Loading...</p>
    }

    if (!app) {
        return (
            <div className='max-w-360 mx-auto space-y-6 my-12'>
                <div className='flex items-center justify-center pt-12'>
                    <img src={appError} alt="Not Found Image" />
                </div>
                <div className='text-center space-y-6'>
                    <h2 className='text-5xl font-semibold'>OPPS!! APP NOT FOUND</h2>
                    <p>The App you are requesting is not found on our system.  please try another apps.</p>
                    <button onClick={() => navigate(-1)} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none'>
                        Go Back!
                    </button>
                </div>
            </div>
        )
    }


    return (
        <div className='max-w-360 mx-auto my-12 p-1'>
            <section className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {app.title}</h2>
                    <p>Developed by: <span className='text-primary'>{app.companyName}</span></p>
                    <div className='border-t flex gap-2'>
                        <div className='space-y-2 mt-4'>
                            <Download size={28} className='text-[#00D390]' />
                            <p>Downloads</p>
                            <p className='text-4xl font-bold'>{formatNumber(app.downloads)}</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <Star size={28} className='text-[#d35f00]' />
                            <p>Avareage Rateing</p>
                            <p className='text-4xl font-bold'>{app.ratingAvg}</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <Star size={28} className='text-[#d35f00]' />
                            <p>Total Reviews</p>
                            <p className='text-4xl font-bold'>{formatNumber(app.reviews)}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn bg-[#00D390] text-white">Install now ( {app.size} MB)</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppDetails;