import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const PointForm = () => {
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (event) => {

        setLoading(true);

        event.preventDefault();

        const point1 = { latitude: event.target.lat1.value, longitude: event.target.long1.value };
        const point2 = { latitude: event.target.lat2.value, longitude: event.target.long2.value };
        const weights = { windWeight: event.target.windWeight.value, visibilityWeight: event.target.visibilityWeight.value, seaLevelWeight: event.target.seaLevelWeight.value, tideWeight: event.target.tideWeight.value, distanceWeight: event.target.distanceWeight.value };


        const points = [point1, point2];

        console.log(JSON.stringify({ points: points, weights: weights }));
        
        navigate('/map-view', {state: { points: points, weights: weights } });
        
        setLoading(false)
    };


    return (
        <div className="w-full h-full container bg-black flex flex-col items-center justify-center p-5">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-700">Astadikasagaranyunatama</h1>
            <p className="text-gray-200 mt-2">Your trusted partner in finding the shortest paths</p>
          </div>
      
          {/* Form Container */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Enter Coordinates and weights
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-wrap -mx-2">
              {/* Coordinates Section - Left Side */}
              <div className="w-full md:w-1/2 px-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Coordinates</h3>
                
                {/* Start Point Coordinates */}
                <div className="mb-5">
                  <label htmlFor="lat1" className="block mb-2 text-sm font-medium text-gray-700">
                    Start Latitude
                  </label>
                  <input
                    type="text"
                    id="lat1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-black"
                    placeholder="Enter Start Point latitude"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="long1" className="block mb-2 text-sm font-medium text-gray-700">
                    Start Longitude
                  </label>
                  <input
                    type="text"
                    id="long1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-black"
                    placeholder="Enter Start Point longitude"
                    required
                  />
                </div>
        
                {/* End Point Coordinates */}
                <div className="mb-5">
                  <label htmlFor="lat2" className="block mb-2 text-sm font-medium text-gray-700">
                    End Latitude
                  </label>
                  <input
                    type="text"
                    id="lat2"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-black"
                    placeholder="Enter End Point latitude"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="long2" className="block mb-2 text-sm font-medium text-gray-700">
                    End Longitude
                  </label>
                  <input
                    type="text"
                    id="long2"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-black" 
                    placeholder="Enter End Point longitude"
                    required
                  />
                </div>
              </div>

              {/* Weights Section - Right Side */}
              <div className="w-full md:w-1/2 px-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Weights</h3>
                
                <div className="mb-5">
                  <label htmlFor="windWeight" className="block mb-2 text-sm font-medium text-gray-700">
                    Wind Speed Weight
                  </label>
                  <input
                    type="number"
                    id="windWeight"
                    defaultValue="0.1"
                    step="0.1"
                    min="0"
                    max="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-black"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="visibilityWeight" className="block mb-2 text-sm font-medium text-gray-700">
                    Visibility Weight
                  </label>
                  <input
                    type="number"
                    id="visibilityWeight"
                    defaultValue="0.2"
                    step="0.1"
                    min="0"
                    max="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-black"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="seaLevelWeight" className="block mb-2 text-sm font-medium text-gray-700">
                    Sea Level Weight
                  </label>
                  <input
                    type="number"
                    id="seaLevelWeight"
                    defaultValue="0.0"
                    step="0.1"
                    min="0"
                    max="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-black"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="tideWeight" className="block mb-2 text-sm font-medium text-gray-700">
                    Tide Height Weight
                  </label>
                  <input
                    type="number"
                    id="tideWeight"
                    defaultValue="0.3"
                    step="0.1"
                    min="0"
                    max="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-black"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="distanceWeight" className="block mb-2 text-sm font-medium text-gray-700">
                    Distance Weight
                  </label>
                  <input
                    type="number"
                    id="distanceWeight"
                    defaultValue="0.4"
                    step="0.1"
                    min="0"
                    max="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-black"
                  />
                </div>
                <p className="text-sm text-gray-600 italic pb-4">Note: Total of weights should be 1</p>
              </div>

              {/* Submit Button - Full Width */}
              <div className="w-full px-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Finding Shortest Path...
                    </>
                  ) : (
                    'Find Shortest Path →'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      );
};


export default PointForm;