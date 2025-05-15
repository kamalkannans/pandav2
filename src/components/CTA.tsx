import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-600 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-white top-20 -left-20"></div>
        <div className="absolute w-64 h-64 rounded-full bg-white bottom-10 right-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Podcast Production?
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-8">
            Join thousands of podcasters who have simplified their workflow and improved their production quality.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-indigo-200 mr-2" />
              <span className="text-white">14-day free trial</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-indigo-200 mr-2" />
              <span className="text-white">No credit card required</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-indigo-200 mr-2" />
              <span className="text-white">Cancel anytime</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium flex items-center justify-center hover:bg-white/10 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;