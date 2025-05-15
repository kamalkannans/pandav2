import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional Podcasts, <span className="text-indigo-600">Without the Complexity</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Create stunning video podcasts with just a few clicks. Stream, record, edit, and publish—all from a single intuitive platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto min-w-[200px] bg-indigo-600 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="w-full sm:w-auto min-w-[200px] bg-white text-indigo-600 border border-indigo-600 px-8 py-3 rounded-md font-medium flex items-center justify-center hover:bg-indigo-50 transition-all duration-300">
                Watch Demo
                <PlayCircle className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="mt-8 text-gray-600 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                No credit card required
              </span>
              <span className="hidden sm:inline">•</span>
              <span>14-day free trial</span>
              <span className="hidden sm:inline">•</span>
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
              <div className="bg-indigo-900/80 absolute inset-0 z-10 flex items-center justify-center">
                <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
                  <PlayCircle className="h-10 w-10 text-indigo-600" />
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg" 
                alt="Video podcast studio" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;