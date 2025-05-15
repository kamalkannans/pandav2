import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Host, Tech Insights Podcast",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "This platform has completely transformed our production process. What used to take hours of setup and coordination now happens with just a few clicks. The ability to bring guests on seamlessly and capture high-quality recordings has elevated our show's professionalism.",
      stars: 5
    },
    {
      name: "Michael Chen",
      title: "Creator, Future Finance Show",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The AI clip suggestions have been a game-changer for our social media strategy. We're now able to consistently share highlights across platforms with minimal effort, which has dramatically increased our audience growth rate.",
      stars: 5
    },
    {
      name: "Jordan Williams",
      title: "Producer, Culture Cast Network",
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "As someone who was juggling multiple tools for our podcast production, this all-in-one solution has simplified everything. Our team can collaborate more effectively, and the cloud editing means I can make changes from anywhere without massive file transfers.",
      stars: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-indigo-600">Users Say</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join hundreds of podcast creators who have simplified their production workflow.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10">
            <button 
              onClick={handlePrev}
              className="bg-white h-10 w-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-indigo-600" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-8 z-10">
            <button 
              onClick={handleNext}
              className="bg-white h-10 w-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-indigo-600" />
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < testimonials[activeIndex].stars 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-600">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-8 bg-indigo-600' : 'w-2.5 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;