import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLanding from "./Components/MainLanding";
import SelectTemplate from "./Components/SelectTemplate";
import Loader from "./Components/Loader"; 
import GenerateStory from "./Components/GenerateStory";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> // Show the loader during loading
      ) : (
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/start" element={<SelectTemplate />} />
          <Route path="/story" element={<GenerateStory />} />
        </Routes>
      )}
    </>
  );
}
