import React from 'react';

const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto text-center px-4 bg-gray-100 py-16">

            <h1 className="text-5xl font-bold text-[#1F2937] mb-4">
                Friends to keep close in your life
            </h1>

            <p className="text-[#64748B] max-w-2xl mx-auto mb-8">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
            </p>

            <button className="bg-[#244D3F] text-white px-6 py-3 rounded-sm mb-10 cursor-pointer font-bold hover:bg-green-800 transition">
                + Add a Friend
            </button>

            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl shadow p-8 hover:scale-105 transition">
                    <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
                    <p className="text-gray-500 mt-2">Total Friends</p>
                </div>

                <div className="bg-white rounded-xl shadow p-8 hover:scale-105 transition">
                    <h2 className="text-3xl font-bold text-[#244D3F]">4</h2>
                    <p className="text-gray-500 mt-2">On Track</p>
                </div>

                <div className="bg-white rounded-xl shadow p-8 hover:scale-105 transition">
                    <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
                    <p className="text-gray-500 mt-2">Need Attention</p>
                </div>

                <div className="bg-white rounded-xl shadow p-8 hover:scale-105 transition">
                    <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
                    <p className="text-gray-500 mt-2">Interactions This Month</p>
                </div>

            </div>

            <div className="border-t border-gray-300 my-10"></div>
            <div>
                <h2 className="inline-block text-center border-b-5 border-dotted border-green-600 text-3xl font-semibold text-[#1F2937]">
                    Your Friends
                </h2>
            </div>
        </div>
    );
};

export default Banner;