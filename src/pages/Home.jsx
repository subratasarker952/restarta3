import React from 'react';
import hero from '../assets/hero.png'
import Card from '../component/Card';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';
import play from '../assets/play.png'
import app from '../assets/app.png'

const Home = () => {
    const { data } = useData();


    return (
        <div>
            <div className='max-w-360 mx-auto'>
                <section >

                    <div className="text-center my-12 p-10
bg-[linear-gradient(to_right,#FF000010_1px,transparent_1px),linear-gradient(to_bottom,#FF000010_1px,transparent_1px)]
bg-size-[10px_10px]">

                        <h1 className="text-7xl font-bold">
                            We Build <br />
                            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold">
                                Productive
                            </span> Apps
                        </h1>

                        <p className="max-w-4xl mx-auto text-lg mt-5">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler,
                            smarter, and more exciting.
                        </p>

                        <div className="flex gap-4 justify-center mt-5">
                            <a href='https://play.google.com/store/apps' target='_blank' className="btn btn-outline border-none"><img src={play} className='w-6 h-6'  alt="play store image" />  Google Play</a>
                            <a href='https://apps.apple.com/us/iphone/apps' target='_blank' className="btn btn-outline border-none"><img src={app} className='w-6 h-6'  alt="app store image" /> App Store</a>
                        </div>
                    </div>
                    <div className='h-[60vh] flex justify-center'>
                        <img src={hero} className='w-auto h-full' alt="Hero image" />
                    </div>
                </section>

            </div>
            <section className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none'>
                <div className='max-w-360 mx-auto py-12 text-center'>
                    <h2 className='text-5xl font-semibold'>Trusted by Millions, Built for You</h2>
                    <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                        <div>
                            <p>Total Downloads</p>
                            <p className='text-8xl'>29.6M</p>
                            <p>21% more than last month</p>
                        </div>
                        <div>
                            <p>Total Reviews</p>
                            <p className='text-8xl'>906K</p>
                            <p>46% more than last month</p>
                        </div>
                        <div>
                            <p>Active Apps</p>
                            <p className='text-8xl'>132+</p>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='max-w-360 mx-auto mt-12'>
                <div className='text-center my-10'>
                    <h2 className='text-5xl font-semibold mb-6'> Trending Apps</h2>
                    <p> Explore All Trending Apps on the Market developed by us </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                    {data.slice(-8).map((d) => <Card key={d.id} data={d} />)}

                </div>
                <Link to={'/apps'} className='flex mt-6 justify-self-center btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none'>
                    Show All
                </Link>
            </section>
        </div>
    );
};

export default Home;