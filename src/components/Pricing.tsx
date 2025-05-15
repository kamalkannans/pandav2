import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      annualPrice: 24,
      description: "Perfect for podcasters just getting started",
      features: [
        "Up to 3 hosts + 2 guests",
        "720p streaming & recording",
        "5 hours of cloud storage",
        "Basic graphics & layouts",
        "Stream to 2 platforms",
        "Basic clip generation"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Professional",
      monthlyPrice: 79,
      annualPrice: 64,
      description: "For established podcasts looking to grow",
      features: [
        "Up to 5 hosts + 5 guests",
        "1080p streaming & recording",
        "25 hours of cloud storage",
        "Advanced graphics & layouts",
        "Stream to 5 platforms",
        "Advanced clip generation & editing",
        "Custom branding",
        "Priority support"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Studio",
      monthlyPrice: 149,
      annualPrice: 124,
      description: "For professional podcast networks",
      features: [
        "Unlimited hosts & guests",
        "4K streaming & recording",
        "100 hours of cloud storage",
        "Premium graphics & layouts",
        "Stream to unlimited platforms",
        "Advanced editing suite",
        "Custom branding & white labeling",
        "Dedicated account manager",
        "API access"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];
  
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, <span className="text-indigo-600">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Choose the plan that's right for your podcast, with no hidden fees or complicated tiers.
          </p>
          
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg mb-8">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-700'
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual (Save 20%)
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                !annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-700'
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-2 border-indigo-600 shadow-xl transform hover:-translate-y-2' 
                  : 'border border-gray-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-indigo-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                  
                  {annual && (
                    <div className="text-sm text-indigo-600 font-medium mt-1">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="flex items-center justify-center text-gray-600">
            <HelpCircle className="h-5 w-5 mr-2 text-indigo-600" />
            Need a custom plan for your enterprise? <a href="#contact" className="text-indigo-600 font-medium ml-1 hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;