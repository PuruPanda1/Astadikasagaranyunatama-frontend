import React from "react";
import HeroText from "./HeroText";
import EarthView from "./EarthView";
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div
      id="home"
      className="bg-black grid md:grid-cols-2 grid-cols-1 w-full mx-auto h-auto md:h-screen"
    >
      {/* Left Section (HeroText) */}
      <div className="md:ml-40 sm:px-4 flex flex-col justify-center items-start p-4 leading-normal w-auto">
        <HeroText />
        <p className="mb-3 mt-2 text-start font-normal text-gray-200">
          An algorithm which helps you to find the shortest between 2 points on the
          ocean considering the current oceanic conditions
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-2">
          {/* Optional Button */}
          <button 
            onClick={() => navigate('/input-form')} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer text-lg"
          >
            Get Started →
          </button>
        </div>
      </div>

      {/* Right Section (EarthView) */}
      <div className="w-full h-screen flex justify-center items-center">
        <EarthView />
      </div>
    </div>
  );
}

export default Hero;