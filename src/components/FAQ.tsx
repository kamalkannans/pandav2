import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-indigo-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-indigo-600" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-3 text-gray-700 text-base">{answer}</div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What equipment do I need to use PodcastPro?",
      answer: "You need a computer with a modern web browser (Chrome, Firefox, Safari, or Edge), a webcam, and a microphone. For best results, we recommend a good quality USB microphone and webcam, but your built-in devices will work to get started."
    },
    {
      question: "Can I still use my existing audio equipment?",
      answer: "Absolutely! PodcastPro works with most audio interfaces and USB microphones. You can continue to use your existing equipment while taking advantage of our streamlined software platform."
    },
    {
      question: "How do I invite guests to my podcast?",
      answer: "Inviting guests is simple. Just create a new show, add the guests' email addresses, and they'll receive a link to join. They don't need to create an account or install any software - everything works in the browser."
    },
    {
      question: "Which platforms can I stream to?",
      answer: "PodcastPro supports streaming to YouTube, Twitch, Facebook Live, LinkedIn Live, Instagram Live, and custom RTMP destinations. The number of simultaneous platforms depends on your plan."
    },
    {
      question: "How does the AI clip generation work?",
      answer: "Our AI analyzes your content in real-time for engaging moments based on speech patterns, topic changes, and emotional cues. After recording, you'll get suggestions for shareable clips that you can edit and export directly to social media platforms."
    },
    {
      question: "Is my content secure in the cloud?",
      answer: "Yes, all your content is encrypted both in transit and at rest. We use enterprise-grade security measures to ensure your recordings are safe. You can also download your content at any time for local storage."
    }
  ];
  
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Got questions? We've got answers. If you don't find what you're looking for, reach out to our support team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-300"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;