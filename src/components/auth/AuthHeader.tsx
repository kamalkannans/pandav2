import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';

const AuthHeader: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Video className="h-8 w-8 text-indigo-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">PodcastPro</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;