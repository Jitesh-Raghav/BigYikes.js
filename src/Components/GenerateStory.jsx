import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GrainIcon from '@mui/icons-material/Grain';
import DarkModeIcon from '@mui/icons-material/ModeNight'; 

const GenerateStory = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [generatedStories, setGeneratedStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [videoWithCaptions, setVideoWithCaptions] = useState("");
  const [captions, setCaptions] = useState("");

 
  const selectedVideo = localStorage.getItem("selectedTemplate");

  const handleGenerateStory = async () => {
    if (!prompt) {
      alert("Please enter a prompt.");
      return;
    }

    try {
      
      const apiKey = "YOUR_OPENAI_API_KEY"; 
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003", // or "gpt-4"
          prompt: `Write a short story based on this prompt: "${prompt}". The story must fit a 1-minute video template (~150 words). Provide 3 different story options.`,
          max_tokens: 400,
        }),
      });
      const data = await response.json();

      
      const mockStories = [
        "Story 1: A thrilling car chase through the bustling city streets.",
        "Story 2: A Minecraft builder discovers a hidden treasure underground.",
        "Story 3: A soap-cutting ASMR video becomes unexpectedly satisfying.",
      ];
      setGeneratedStories(data.choices?.map((choice) => choice.text.trim()) || mockStories);
    } catch (error) {
      console.error("Error generating story:", error);
      alert("Failed to generate stories. Please try again.");
    }
  };

  const generateWebVTT = (story) => {
    const duration = 60; // 1-minute video
    const storyLines = story.split(". ").map((line) => line.trim());
    const interval = Math.floor(duration / storyLines.length);

    let vttContent = "WEBVTT\n\n";
    storyLines.forEach((line, index) => {
      const start = index * interval;
      const end = (index + 1) * interval;
      vttContent += `${formatTime(start)} --> ${formatTime(end)}\n${line}.\n\n`;
    });

    return vttContent;
  };

  const formatTime = (seconds) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8) + ".000";
  };

  const handleAddCaptions = (story) => {
    setSelectedStory(story);
    setIsProcessing(true);

    // Generate WebVTT captions
    const vttCaptions = generateWebVTT(story);
    setCaptions(vttCaptions);

    // Simulate processing with a loader
    setTimeout(() => {
      setIsProcessing(false);
      setVideoWithCaptions(selectedVideo); // Keeping the same video for simplicity
      alert("Captions added successfully!");
    }, 3000);
  };

  const handleNavigateToVoice = () => {
    if (!videoWithCaptions) {
      alert("Please add captions to the video first.");
      return;
    }
    localStorage.setItem("processedVideo", videoWithCaptions);
    navigate("/voice");
  };

  useEffect(() => {
    if (captions) {
      const blob = new Blob([captions], { type: "text/vtt" });
      const url = URL.createObjectURL(blob);
      setVideoWithCaptions(url);
    }
  }, [captions]);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-700 flex flex-col items-center p-6">

<aside className="lg:w-24 hidden sm:w-12 lg:block sm:block md:block bg-purple-50 h-screen p-4 shadow-md flex-col items-center fixed left-0 top-0">
                {/* <h2 className="text-lg font-semibold text-gray-800 mb-6">Menu</h2> */}

                <img src="/icoon.png" alt="" className='size-18 cursor-pointer' onClick={()=>{navigate("/")}}/>

                <nav className="flex flex-col items-center gap-6 flex-1 mt-8">
                    <SidebarLink icon={<HomeIcon sx={{ fontSize: 24 }} />} label="Home" onClick={()=>{navigate("/")}}/>
                    <SidebarLink icon={<GrainIcon sx={{ fontSize: 24 }} />} label="Get Started" onClick={()=>{navigate("/start")}}/>
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
      {/* Video Player Section */}
      <div className="flex w-full max-w-6xl mb-6 gap-6">
        {/* Original Video Player */}
        <div className="flex-1">
          <h3 className="text-lg text-center mb-2">Original Video</h3>
          <ReactPlayer
            url={selectedVideo}
            playing
            controls
            width="100%"
            height="300px"
            className="rounded-lg border-4 border-pink-300"
          />
        </div>

        {/* Video with Captions Player */}
        <div className="flex-1">
          <h3 className="text-lg text-center mb-2">Video with Captions</h3>
          <ReactPlayer
            url={videoWithCaptions || selectedVideo}
            playing
            controls
            width="100%"
            height="300px"
            className="rounded-lg border-4 border-pink-300"
          >
            {captions && (
              <track
                kind="subtitles"
                src={URL.createObjectURL(new Blob([captions], { type: "text/vtt" }))}
                srcLang="en"
                default
              />
            )}
          </ReactPlayer>
        </div>
      </div>

      {/* Prompt Input */}
      <div className="w-full max-w-lg mb-6">
        <input
          type="text"
          placeholder="Enter a prompt to generate a story..."
          className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={handleGenerateStory}
          className="bg-pink-400 text-white px-6 py-2 mt-3 rounded-lg hover:bg-pink-500"
        >
          Generate Story
        </button>
      </div>

      {/* Generated Stories */}
      {generatedStories.length > 0 && (
        <div className="w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Generated Stories</h2>
          <div className="flex flex-col gap-4">
            {generatedStories.map((story, index) => (
              <div
                key={index}
                className="p-4 border border-pink-300 rounded-lg bg-white shadow-md flex items-start justify-between"
              >
                <p>{story}</p>
                <button
                  onClick={() => handleAddCaptions(story)}
                  className="ml-4 bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-500"
                >
                  Add Captions
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Processing Loader */}
      {isProcessing && (
        <div className="w-full max-w-lg mt-6 text-center">
          <p className="text-lg text-gray-700">Processing video...</p>
        </div>
      )}

      {/* Navigate to Voice */}
      {!isProcessing && videoWithCaptions && (
        <button
          onClick={handleNavigateToVoice}
          className="mt-6 bg-pink-400 text-white px-6 py-3 rounded-lg hover:bg-pink-500"
        >
          Add Voice
        </button>
      )}
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

export default GenerateStory;








//Captions in react player..
// import React, { useState, useEffect, useRef } from "react";
// import ReactPlayer from "react-player";
// import { useNavigate } from "react-router-dom";
// import "tailwindcss/tailwind.css";
// import HomeIcon from "@mui/icons-material/Home";
// import PersonIcon from "@mui/icons-material/Person";
// import SettingsIcon from "@mui/icons-material/Settings";
// import LogoutIcon from "@mui/icons-material/Logout";
// import GrainIcon from "@mui/icons-material/Grain";
// import DarkModeIcon from "@mui/icons-material/ModeNight";

// const GenerateStory = () => {
//   const navigate = useNavigate();
//   const [prompt, setPrompt] = useState("");
//   const [generatedStories, setGeneratedStories] = useState([]);
//   const [selectedStory, setSelectedStory] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [videoWithCaptions, setVideoWithCaptions] = useState("");
//   const [captions, setCaptions] = useState("");

//   const playerRef = useRef(null); // Ref to access the video element inside ReactPlayer
//   const selectedVideo = localStorage.getItem("selectedTemplate");

//   const handleGenerateStory = async () => {
//     if (!prompt) {
//       alert("Please enter a prompt.");
//       return;
//     }

//     try {
//       const apiKey = "YOUR_OPENAI_API_KEY";
//       const response = await fetch("https://api.openai.com/v1/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify({
//           model: "text-davinci-003",
//           prompt: `Write a short story based on this prompt: "${prompt}". The story must fit a 1-minute video template (~150 words). Provide 3 different story options.`,
//           max_tokens: 400,
//         }),
//       });
//       const data = await response.json();

//       const mockStories = [
//         "A thrilling car chase through the bustling city streets.",
//         "A Minecraft builder discovers a hidden treasure underground.",
//         "A soap-cutting ASMR video becomes unexpectedly satisfying.",
//       ];
//       setGeneratedStories(data.choices?.map((choice) => choice.text.trim()) || mockStories);
//     } catch (error) {
//       console.error("Error generating story:", error);
//       alert("Failed to generate stories. Please try again.");
//     }
//   };

//   const generateWebVTT = (story) => {
//     const duration = 60; // 1-minute video
//     const storyLines = story.split(". ").map((line) => line.trim());
//     const interval = Math.floor(duration / storyLines.length);

//     let vttContent = "WEBVTT\n\n";
//     storyLines.forEach((line, index) => {
//       const start = index * interval;
//       const end = (index + 1) * interval;
//       vttContent += `${formatTime(start)} --> ${formatTime(end)}\n${line}.\n\n`;
//     });

//     return vttContent;
//   };

//   const formatTime = (seconds) => {
//     const date = new Date(0);
//     date.setSeconds(seconds);
//     return date.toISOString().substr(11, 8) + ".000";
//   };

//   const handleAddCaptions = (story) => {
//     setSelectedStory(story);
//     setIsProcessing(true);

//     const vttCaptions = generateWebVTT(story);
//     setCaptions(vttCaptions);

//     setTimeout(() => {
//       setIsProcessing(false);
//       setVideoWithCaptions(selectedVideo); // Keeping the same video for simplicity
//       alert("Captions added successfully!");
//     }, 3000);
//   };

//   const handleNavigateToVoice = () => {
//     if (!videoWithCaptions) {
//       alert("Please add captions to the video first.");
//       return;
//     }
//     localStorage.setItem("processedVideo", videoWithCaptions);
//     navigate("/voice");
//   };

//   useEffect(() => {
//     if (captions && playerRef.current) {
//       const videoElement = playerRef.current.getInternalPlayer();
//       const track = document.createElement("track");
//       const blob = new Blob([captions], { type: "text/vtt" });
//       const url = URL.createObjectURL(blob);
//       track.src = url;
//       track.kind = "subtitles";
//       track.label = "English";
//       track.srclang = "en";
//       track.default = true;
//       videoElement.appendChild(track);
//     }
//   }, [captions]);

//   return (
//     <div className="min-h-screen bg-pink-50 text-gray-700 flex flex-col items-center p-6">
//       <aside className="lg:w-24 hidden sm:w-12 lg:block sm:block md:block bg-purple-50 h-screen p-4 shadow-md flex-col items-center fixed left-0 top-0">
//         <img
//           src="/icoon.png"
//           alt=""
//           className="size-18 cursor-pointer"
//           onClick={() => {
//             navigate("/");
//           }}
//         />
//         <nav className="flex flex-col items-center gap-6 flex-1 mt-8">
//           <SidebarLink
//             icon={<HomeIcon sx={{ fontSize: 24 }} />}
//             label="Home"
//             onClick={() => {
//               navigate("/");
//             }}
//           />
//           <SidebarLink
//             icon={<GrainIcon sx={{ fontSize: 24 }} />}
//             label="Get Started"
//             onClick={() => {
//               navigate("/start");
//             }}
//           />
//           <SidebarLink icon={<PersonIcon sx={{ fontSize: 24 }} />} label="Profile" />
//           <SidebarLink icon={<SettingsIcon sx={{ fontSize: 24 }} />} label="Settings" />
//           <SidebarLink icon={<LogoutIcon sx={{ fontSize: 24 }} />} label="Sign Up" />
//         </nav>
//         <DarkModeIcon
//           sx={{ fontSize: 38 }}
//           className="absolute bottom-4 border-1 border-gray-600 hover:text-blue-500 rounded-full ml-1 p-2 cursor-pointer hover:bg-gray-200 transition-colors"
//         />
//       </aside>

//       <div className="flex w-full max-w-6xl mb-6 gap-6">
//         <div className="flex-1">
//           <h3 className="text-lg text-center mb-2">Original Video</h3>
//           <ReactPlayer
//             url={selectedVideo}
//             playing
//             controls
//             width="100%"
//             height="300px"
//             className="rounded-lg border-4 border-pink-300"
//           />
//         </div>

//         <div className="flex-1">
//           <h3 className="text-lg text-center mb-2">Video with Captions</h3>
//           <ReactPlayer
//             ref={playerRef}
//             url={videoWithCaptions || selectedVideo}
//             playing
//             controls
//             width="100%"
//             height="300px"
//             className="rounded-lg border-4 border-pink-300"
//           />
//         </div>
//       </div>

//       <div className="w-full max-w-lg mb-6">
//         <input
//           type="text"
//           placeholder="Enter a prompt to generate a story..."
//           className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//         />
//         <button
//           onClick={handleGenerateStory}
//           className="bg-pink-400 text-white px-6 py-2 mt-3 rounded-lg hover:bg-pink-500"
//         >
//           Generate Story
//         </button>
//       </div>

//       {generatedStories.length > 0 && (
//         <div className="w-full max-w-3xl">
//           <h2 className="text-xl font-semibold mb-4">Generated Stories</h2>
//           <div className="flex flex-col gap-4">
//             {generatedStories.map((story, index) => (
//               <div
//                 key={index}
//                 className="p-4 border border-pink-300 rounded-lg bg-white shadow-md flex items-start justify-between"
//               >
//                 <p>{story}</p>
//                 <button
//                   onClick={() => handleAddCaptions(story)}
//                   className="ml-4 bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-500"
//                 >
//                   Add Captions
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {isProcessing && (
//         <div className="w-full max-w-lg mt-6 text-center">
//           <p className="text-lg text-gray-700">Processing video...</p>
//         </div>
//       )}

      

//         {!isProcessing && videoWithCaptions && (
//           <button
//             onClick={handleNavigateToVoice}
//             className="mt-6 bg-pink-400 text-white px-6 py-3 rounded-lg hover:bg-pink-500"
//           >
//             Add Voice
//           </button>
//         )}
//       </div>
   
//   );
// };

// const SidebarLink = ({ icon, label, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="flex flex-col items-center gap-1 text-center p-2 hover:bg-purple-100 rounded-xl text-gray-600 hover:text-blue-500 transition-colors cursor-pointer"
//     >
//       <span className="text-gray-700 hover:text-blue-500">{icon}</span>
//       <span className="text-xs font-medium">{label}</span>
//     </div>
//   );
// };

// export default GenerateStory;






