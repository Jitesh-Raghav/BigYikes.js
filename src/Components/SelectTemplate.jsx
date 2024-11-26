import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import 'tailwindcss/tailwind.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GrainIcon from '@mui/icons-material/Grain';
import DarkModeIcon from '@mui/icons-material/ModeNight';
import { useNavigate } from 'react-router-dom';

const SelectTemplate = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const navigate = useNavigate();

  // Video Categories and Data
  const videoData = {
    Gaming: [
      { name: "GTA", src: "/templates/gaming/gta.mp4", thumbnail: "/thumbnails/gaming/gta.jpg" },
      { name: "Minecraft", src: "/templates/gaming/minecraft.mp4", thumbnail: "/thumbnails/gaming/minecraft.jpg" },
    ],
    Satisfying: [
      { name: "ASMR", src: "/templates/satisfying/asmr.mp4", thumbnail: "/thumbnails/satisfying/asmr.jpg" },
      { name: "Soap Cutting", src: "/templates/satisfying/soapcutting.mp4", thumbnail: "/thumbnails/satisfying/soapcutting.jpg" },
    ],
   AI: [
      { name: "AI Based", src: "/templates/ai-custom/aichatbot.mp4", thumbnail: "/thumbnails/ai-custom/aichatbot.jpg" },
      { name: "Generative Art", src: "/templates/ai-custom/generative.mp4", thumbnail: "/thumbnails/ai-custom/generative.jpg" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-600 flex flex-col items-center p-6">
      <aside className="lg:w-24 hidden sm:w-12 lg:block sm:block md:block bg-purple-50 h-screen p-4 shadow-md flex-col items-center fixed left-0 top-0">
                {/* <h2 className="text-lg font-semibold text-gray-800 mb-6">Menu</h2> */}

                <img src="/icoon.png" alt="" className='size-18 cursor-pointer' onClick={()=>{navigate("/")}}/>

                <nav className="flex flex-col items-center gap-6 flex-1 mt-8">
                    <SidebarLink icon={<HomeIcon sx={{ fontSize: 24 }} />} label="Home" onClick={()=>{navigate("/")}}/>
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
      <p className='items-center py-2 text-gray-700 text-lg'>Click on templates to preview</p>
      <div className="w-full max-w-4xl mb-8 flex items-center justify-center">
        <ReactPlayer
          url={selectedVideo}
          playing={true}
          controls
          width="50%"
          height="480px"
          className="rounded-lg border-4 border-pink-400 shadow-lg items-center justify-center flex"
        />
      </div>

      {/* Categories */}
      <div className="w-[60%] flex justify-between items-start gap-4">
        {Object.entries(videoData).map(([category, videos]) => (
          <div key={category} className="flex-1 text-center">
            <h2 className="text-xl font-semibold mb-4">{category} Templates</h2>
            <div className="flex flex-col gap-4">
              {videos.map((video) => (
                <button
                  key={video.name}
                  onClick={() => setSelectedVideo(video.src)}
                  className="relative w-full h-32 rounded-lg overflow-hidden border-2 border-pink-200 hover:border-pink-400 shadow-md"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="object-cover w-full h-full"
                  />
                  <span className="absolute bottom-0 left-0 w-full text-center text-sm bg-pink-600 text-white bg-opacity-70 py-1">
                    {video.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const SidebarLink = ({ icon, label, onClick }) => {
  return (
      <div onClick={onClick} className="flex flex-col items-center gap-1 text-center p-2 hover:bg-purple-100 rounded-xl text-gray-600 hover:text-blue-500 transition-colors cursor-pointer">
          {/* Icon */}
          <span className="text-gray-700 hover:text-blue-500">{icon}</span>

          {/* Label Below Icon */}
          <span className="text-xs font-medium font-Sanso">{label}</span>
      </div>
  );
};

export default SelectTemplate;
