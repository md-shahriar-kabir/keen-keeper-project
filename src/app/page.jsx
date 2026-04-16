import Friends from "./friends/page";
import { Circles } from "react-spinners";

const HomePage = () => {

    const loading = false;
    console.log(loading)

    return (
        <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
            <div className="max-w-7xl mx-auto m">

                {/* Banner Section */}
                <div className="text-center mb-10 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        Friends to keep close in your life
                    </h1>

                    <p className="text-gray-500 max-w-xl mx-auto mb-5 text-sm sm:text-base">
                        Your personal shelf of meaningful connections. Browse, tend, and
                        nurture the relationships that matter most.
                    </p>

                    <button className="bg-[#1e4d3a] font-semibold text-white px-5 py-2 rounded-md hover:opacity-90 transition text-sm sm:text-base cursor-pointer">
                        + Add a Friend
                    </button>
                </div>

                {/* Static Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">

                    {/* Card 1:*/}
                    <div className="group bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center relative overflow-hidden">
                        <h2 className="text-4xl font-extrabold text-[#244d3f] mb-1">10</h2>
                        <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">Total Friends</p>
                    </div>
                    {/* Card 2:*/}
                    <div className="group bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center relative overflow-hidden">

                        <h2 className="text-4xl font-extrabold text-[#244d3f] mb-1">3</h2>
                        <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">On Track</p>
                    </div>
                    {/* Card 3:*/}
                    <div className="group bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center relative overflow-hidden">
                        <h2 className="text-4xl font-extrabold text-[#244d3f] mb-1">6</h2>
                        <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">Need Attention</p>
                    </div>
                    {/* Card 4:*/}
                    <div className="group bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center relative overflow-hidden">
                        <h2 className="text-4xl font-extrabold text-[#244d3f] mb-1">12</h2>
                        <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">Interactions This Month</p>
                    </div>
                </div>
                
                {/* Border  */}
                <hr className="mb-6 sm:mb-8 border-[#E9E9E9]" />

                {/* Friends */}
                <h2 className="text-lg text-center sm:text-2xl font-bold text-gray-700 mb-8 sm:mb-5 lg:mb-10">
                    Your Friends
                </h2>
                
                 {
                    loading ? (
                        <div className="flex justify-center items-center py-20">
                            <Circles height={60} width={60} color="#1e4d3a" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                            <Friends />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomePage;