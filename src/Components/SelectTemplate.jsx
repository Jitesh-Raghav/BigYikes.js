import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import 'tailwindcss/tailwind.css';

const SelectTemplate = () => {
  const [selectedVideo, setSelectedVideo] = useState("");

  // Video Categories and Data
  const videoData = {
    gaming: [
      { name: "GTA", src: "/templates/gaming/gta.mp4", thumbnail: "/thumbnails/gaming/gta.jpg" },
      { name: "Minecraft", src: "/templates/gaming/minecraft.mp4", thumbnail: "/thumbnails/gaming/minecraft.jpg" },
    ],
    satisfying: [
      { name: "ASMR", src: "/templates/satisfying/asmr.mp4", thumbnail: "/thumbnails/satisfying/asmr.jpg" },
      { name: "Soap Cutting", src: "/templates/satisfying/soapcutting.mp4", thumbnail: "/thumbnails/satisfying/soapcutting.jpg" },
    ],
    aiCustom: [
      { name: "AI Chatbot", src: "/templates/ai-custom/aichatbot.mp4", thumbnail: "/thumbnails/ai-custom/aichatbot.jpg" },
      { name: "Generative Art", src: "/templates/ai-custom/generative.mp4", thumbnail: "/thumbnails/ai-custom/generative.jpg" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-600 flex flex-col items-center p-6">
      {/* Video Player */}
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
      <div className="w-full flex justify-between items-start gap-4">
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

export default SelectTemplate;
