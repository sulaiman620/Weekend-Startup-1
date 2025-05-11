import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Calendar, Users, Lightbulb } from 'lucide-react';
import Button from './Button';
import { getCountdown } from '../utils/formatDate';

interface HeroSectionProps {
  eventDate: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ eventDate }) => {
  const [countdown, setCountdown] = useState(getCountdown(eventDate));
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(eventDate));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [eventDate]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
              <Rocket size={40} className="text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Turn Your Ideas Into Reality in Just One Weekend
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-10 text-indigo-100 max-w-3xl mx-auto"
          >
            Join the most exciting startup challenge in Sur, Oman and build your MVP with a team of talented individuals.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link to="/register">
              <Button size="lg" className="px-8 py-4 text-lg shadow-lg">
                Join the Challenge
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white/10">
                View Schedule
              </Button>
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
              <h2 className="text-xl font-semibold mb-2">Event Starts In</h2>
              <p className="text-indigo-200 mb-4">Sur, Oman</p>
              <div className="grid grid-cols-4 gap-2 md:gap-4">
                {[
                  { label: 'Days', value: countdown.days },
                  { label: 'Hours', value: countdown.hours },
                  { label: 'Minutes', value: countdown.minutes },
                  { label: 'Seconds', value: countdown.seconds },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="bg-white/10 rounded-lg p-3 md:p-4">
                      <div className="text-2xl md:text-4xl font-bold">{item.value}</div>
                      <div className="text-xs md:text-sm mt-1 text-indigo-200">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { 
              icon: <Lightbulb size={24} />, 
              title: 'Pitch Your Idea', 
              description: 'Share your innovative concept and get feedback from mentors and peers.' 
            },
            { 
              icon: <Users size={24} />, 
              title: 'Build Your Team', 
              description: 'Connect with developers, designers, and business experts to form the perfect team.' 
            },
            { 
              icon: <Calendar size={24} />, 
              title: 'Launch in 48 Hours', 
              description: 'Go from concept to MVP in just one weekend with expert guidance.' 
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors"
            >
              <div className="bg-indigo-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-indigo-100">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;