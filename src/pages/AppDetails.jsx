import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import appError from '../assets/App-Error.png'
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';
import RatingBarChart from '../component/RatingBarChart';
import useAppsContext from '../context/AppContext';

const AppDetails = () => {
    const { data, addSavedApp, isSaved, removeSavedApp } = useAppsContext();
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
                <figure className='p-2'>
                    <img
                        className='h-64 w-64 object-cover'
                        src={app.image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {app.title}</h2>
                    <p>Developed by: <span className='text-primary'>{app.companyName}</span></p>
                    <div className='border-t flex gap-4'>
                        <div className='space-y-2 mt-4'>
                            <img src={download} alt={app.title} />
                            <p>Downloads</p>
                            <p className='text-4xl font-bold'>{formatNumber(app.downloads)}</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <img src={rating} alt={app.title} />
                            <p>Avareage Rateing</p>
                            <p className='text-4xl font-bold'>{app.ratingAvg}</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <img src={review} alt={app.title} />
                            <p>Total Reviews</p>
                            <p className='text-4xl font-bold'>{formatNumber(app.reviews)}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        {isSaved(app.id) ? (
                            <button
                                onClick={() => removeSavedApp(app.id)}
                                className="btn bg-[#00D390] text-white"
                            >
                                Uninstall now ({app.size} MB)
                            </button>
                        ) : (
                            <button
                                onClick={() => addSavedApp(app)}
                                className="btn bg-[#00D390] text-white"
                            >
                                Install now ({app.size} MB)
                            </button>
                        )}                    </div>
                </div>
            </section>
            <section className='mt-12'>
                <RatingBarChart ratings={app.ratings} />
            </section>
            <section className='my-12 space-y-6'>
                <h2 className='text-lg font-bold'>Description</h2>
                <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
                <p>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>
                <p>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
            </section>
        </div>
    );
};

export default AppDetails;