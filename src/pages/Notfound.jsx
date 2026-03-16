import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../assets/error-404.png'
const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-360 mx-auto space-y-6'>
            <div className='flex items-center justify-center'>
                <img src={error} alt="Not Found Image" />
            </div>
            <div className='text-center space-y-6'>
                <h2 className='text-5xl font-semibold'>Oops, page not found!</h2>
                <p>The page you are looking for is not available.</p>
                <button onClick={()=>navigate(-1)} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none'>
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default Notfound;