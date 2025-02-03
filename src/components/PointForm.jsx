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
        
        const points = [point1, point2];

        console.log(JSON.stringify({ points: points }));
        
        navigate('/map-view', {state: points });
        
        setLoading(false)
    };


    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-5">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-700">Astadikasagaranyunatama</h1>
            <p className="text-gray-200 mt-2">Your trusted partner in finding the shortest paths</p>
          </div>
      
          {/* Form Container */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Enter Start and End Coordinates
            </h2>
            <form onSubmit={handleSubmit}>
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
      
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 flex items-center justify-center"
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
                  'Find Shortest Path'
                )}
              </button>
            </form>
          </div>
        </div>
      );
};


export default PointForm;