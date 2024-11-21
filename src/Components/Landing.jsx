// Landing.jsx
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GrainIcon from '@mui/icons-material/Grain';
import DarkModeIcon from '@mui/icons-material/ModeNight'; // Dark Mode Icon import
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useNavigate } from 'react-router-dom';


const Landing = () => {
    const words = [
        {
            text: "Generate",
        },
        {
            text: "Rots ",
        },
        {
            text: "With ",
        },
        {
            text: "BigYikes!",
            className: "text-pink-700 dark:text-pink-700",
        },
    ];

    const navigate = useNavigate();
  

    return (
       
        <div className="flex min-h-screen bg-gray-100 w-full">
            {/* Sidebar */}
            <aside className="w-24 hidden lg:block bg-purple-50 h-screen p-4 shadow-md flex-col items-center fixed left-0 top-0">
                {/* <h2 className="text-lg font-semibold text-gray-800 mb-6">Menu</h2> */}

                <img src="/icoon.png" alt="" className='size-18 cursor-pointer' />

                <nav className="flex flex-col items-center gap-6 flex-1 mt-8">
                    <SidebarLink icon={<HomeIcon sx={{ fontSize: 24 }} />} label="Home" />
                    <SidebarLink icon={<GrainIcon sx={{ fontSize: 24 }} />} label="Get Started" />
                    <SidebarLink icon={<PersonIcon sx={{ fontSize: 24 }} />} label="Profile" />
                    <SidebarLink icon={<SettingsIcon sx={{ fontSize: 24 }} />} label="Settings" />
                    <SidebarLink icon={<LogoutIcon sx={{ fontSize: 24 }} />} label="Sign Up" />
                </nav>

                {/* Dark Mode Icon at the Bottom */}
                <DarkModeIcon
                    sx={{ fontSize: 38 }}
                    className="absolute bottom-4 border-1 border-gray-600 hover:text-blue-500 rounded-full ml-1 p-2 cursor-pointer hover:bg-gray-200 transition-colors"
                />
            </aside>

            {/* Main Content */}
            <main className="flex p-4 gap-3 w-full ml-28">
                {/* <h1 className="text-3xl font-bold text-gray-800 font-Sanso">Welcome to the Landing Page</h1>
        <p className="mt-4 text-gray-600 font-Sanso">This is where your main content will go.</p> */}

                <div className='flex flex-col w-1/2 gap-4 p-0'>
                    <div className='h-[400px] bg-pink-100 rounded-xl '>
                        <p className='text-8xl font-Sanso p-10 font-extrabold text-gray-800'>Big Yikes </p>
                        <p className='mt-3 px-10 font-medium font-Sanso text-gray-800 text-xl'> Big Yikes is an open-source tool that lets you generate <br /> stunning AI short form content for your social media <br /> platforms, reach a wider audience and grow. </p>
                        <button onClick={() => { navigate("/start") }} className='py-5 px-8 text-2xl bg-pink-500 rounded-full mt-8 ml-10 text-white font-Sanso hover:bg-pink-600'>Get started</button>
                    </div>
                    <div className='h-[290px] bg-pink-100 rounded-xl'>

                        <div className='flex p-8 gap-2 mt-3 flex-wrap'>
                            <img src="/mine.webp" alt="Templates" className='w-36 h-40 rounded-xl cursor-pointer hover:border-2 hover:border-pink-400' />
                            {/* <img src="/car.jpg" alt="Characters" className='w-36 h-40' /> */}
                            <img src="/musk.webp" alt="Themes" className='w-36 h-40 rounded-xl cursor-pointer hover:border-2 hover:border-pink-400' />
                            <img src="/surfer.jpg" alt="Themes" className='w-36 h-40 rounded-xl cursor-pointer hover:border-2 hover:border-pink-400' />
                            <img src="/trump.jpg" alt="Themes" className='w-36 h-40 rounded-xl cursor-pointer hover:border-2 hover:border-pink-400' />
                        </div>
                        <p className='-mt-6 px-10 font-medium font-Sanso text-gray-800 text-xl'>Choose from variety of templates, characters and voices.</p>

                    </div>
                </div>


                <div className='h-22rem w-1/2 bg-pink-300 rounded-xl'>
                    <div className='p-4 flex gap-3 w-full'>
                        <video src="/Example1.mp4" muted loop autoPlay className="h-22rem w-80 object-contain rounded-xl" />
                        <video src="/Example.mp4" muted loop autoPlay className="h-22rem w-80 object-contain rounded-xl" />
                    </div>
                    {/* <p className='p-3 text-3xl font-Sanso text-white text-center font-extrabold'>CREATE YOUR ROTS WITH STORIES</p> */}
                    <TypewriterEffectSmooth words={words} className="text-center ml-2 top-0" />
                    {/* <p className='text-center ml-2 top-0'>Generate Rots with <span className='text-pink-700'>BikeYikes.js</span></p> */}
                </div>
            </main>
            
        </div>
       
        
    );
};

// SidebarLink Component with Label Below Icon
const SidebarLink = ({ icon, label }) => {
    return (
        <div className="flex flex-col items-center gap-1 text-center p-2 hover:bg-purple-100 rounded-xl text-gray-600 hover:text-blue-500 transition-colors cursor-pointer">
            {/* Icon */}
            <span className="text-gray-700 hover:text-blue-500">{icon}</span>

            {/* Label Below Icon */}
            <span className="text-xs font-medium font-Sanso">{label}</span>
        </div>
    );
};

export default Landing;
