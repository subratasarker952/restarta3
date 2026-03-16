import React from 'react';

const Home = () => {
    return (
        <div className='max-w-360 mx-auto'>
            <section className="text-center my-12 p-10
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
                    <button className="btn btn-outline border-none">Google Play</button>
                    <button className="btn btn-outline border-none">App Store</button>
                </div>

            </section>
        </div>
    );
};

export default Home;