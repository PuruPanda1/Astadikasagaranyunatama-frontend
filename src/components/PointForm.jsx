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
        <div className="container mx-auto p-5 grid place-items-center">
            <form className="min mx-auto w-1/2" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="lat1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Latitude</label>
                    <input type="text" id="lat1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Start Point  latitude" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="long1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Longitude</label>
                    <input type="text" id="long1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Start Point longitude" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="lat2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Latitude</label>
                    <input type="text" id="lat2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter End Point latitude" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="long2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Longitude</label>
                    <input type="text" id="long2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter End Point longitude" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {isLoading ? 'Finding Shortest Path...' : 'Find Shortest Path'}
                </button>
                {!isLoading && <div className="loader"></div>}
            </form>
        </div>
    );
};


export default PointForm;