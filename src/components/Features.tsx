import React from 'react';
import { Tv, Mic, UserPlus, Layout, Clock, CloudCog, Video, Scissors } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Tv className="h-10 w-10 text-indigo-600" />,
      title: "Multi-Platform Livestreaming",
      description: "Stream simultaneously to YouTube, Twitch, Facebook, and more with just a single click."
    },
    {
      icon: <UserPlus className="h-10 w-10 text-indigo-600" />,
      title: "Dynamic Stage Management",
      description: "Bring guests on and off stage seamlessly during your live shows."
    },
    {
      icon: <Layout className="h-10 w-10 text-indigo-600" />,
      title: "Customizable Layouts",
      description: "Switch between different layouts on the fly to keep your content visually engaging."
    },
    {
      icon: <Mic className="h-10 w-10 text-indigo-600" />,
      title: "Professional Graphics",
      description: "Add dynamic lower thirds, logos, and overlays to enhance your production quality."
    },
    {
      icon: <CloudCog className="h-10 w-10 text-indigo-600" />,
      title: "Cloud Recording & Editing",
      description: "Record in the cloud and edit your content without switching between multiple apps."
    },
    {
      icon: <Scissors className="h-10 w-10 text-indigo-600" />,
      title: "AI-Powered Clip Generation",
      description: "Automatically identify highlights and create shareable clips for social media."
    },
    {
      icon: <Clock className="h-10 w-10 text-indigo-600" />,
      title: "Scheduling & Planning",
      description: "Plan and schedule your shows in advance to stay organized and consistent."
    },
    {
      icon: <Video className="h-10 w-10 text-indigo-600" />,
      title: "All-in-One Solution",
      description: "No more juggling between Zoom, OBS, and other tools. Everything you need in one place."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Create <span className="text-indigo-600">Professional Podcasts</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our platform combines all the tools you need into one seamless experience, eliminating the need for complex technical setups.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;