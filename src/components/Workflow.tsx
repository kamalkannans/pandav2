import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Workflow: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Show",
      description: "Easily set up your podcast with customizable templates and branding options.",
      image: "https://images.pexels.com/photos/8867204/pexels-photo-8867204.jpeg",
      points: [
        "Choose from show templates",
        "Add your branding elements",
        "Configure layouts and transitions",
        "Set up guest invitations"
      ]
    },
    {
      number: 2,
      title: "Go Live & Manage Your Stage",
      description: "Stream to multiple platforms while managing guests and dynamic content.",
      image: "https://images.pexels.com/photos/7383469/pexels-photo-7383469.jpeg",
      points: [
        "One-click multi-platform streaming",
        "Bring guests on/off stage seamlessly",
        "Show dynamic graphics and lower thirds",
        "Change layouts on the fly"
      ]
    },
    {
      number: 3,
      title: "Record & Edit in the Cloud",
      description: "Capture high-quality recordings and edit them without downloading huge files.",
      image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg",
      points: [
        "Automatic cloud recording",
        "Edit directly in your browser",
        "Collaborative editing features",
        "Version history and backups"
      ]
    },
    {
      number: 4,
      title: "Publish & Promote",
      description: "Automatically identify highlights and distribute content across platforms.",
      image: "https://images.pexels.com/photos/7688334/pexels-photo-7688334.jpeg",
      points: [
        "AI-powered clip suggestions",
        "One-click publishing to podcast platforms",
        "Social media clip generation",
        "Audience engagement analytics"
      ]
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-indigo-600">Works</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our streamlined workflow replaces complex setups with an intuitive, all-in-one platform.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="rounded-lg shadow-xl object-cover w-full h-[300px] md:h-[400px]"
                />
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute bottom-0 left-1/2 transform translate-y-full">
                    <ArrowRight 
                      className={`h-12 w-12 text-indigo-500 ${index % 2 === 0 ? 'rotate-90' : '-rotate-90'}`} 
                    />
                  </div>
                )}
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;