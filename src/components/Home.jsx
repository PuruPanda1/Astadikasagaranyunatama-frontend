import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#222' }} className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          Find the Perfect Route in Seconds
        </h1>
        <p className="text-xl text-gray-600">
          Advanced route optimization powered by cutting-edge algorithms to find the shortest and most efficient paths between any two points.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Intelligent Routing</h2>
          <p className="text-gray-300">
            Advanced algorithms calculate the most efficient routes considering multiple factors.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Real-time Updates</h2>
          <p className="text-gray-300">
            Dynamic route adjustments based on traffic, weather, and road conditions.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Multi-point Optimization</h2>
          <p className="text-gray-300">
            Optimize routes with multiple stops for maximum efficiency and time savings.
          </p>
        </div>

        {/* Feature 4: Ready to Optimize Your Routes? */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">Ready to Optimize Your Routes?</h2>
          <p className="text-gray-300">
            Join thousands of users who are already saving time and resources with Astadikhasagaraniyuthama’s route optimization.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200" onClick={() => { navigate('/input-form') }}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;