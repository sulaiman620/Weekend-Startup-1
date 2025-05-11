import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { formatDate, formatTime, getCountdown } from '../utils/formatDate';

const Schedule: React.FC = () => {
  // Set event date to 30 days from now
  const eventStartDate = new Date();
  eventStartDate.setDate(eventStartDate.getDate() + 30);
  
  const eventEndDate = new Date(eventStartDate);
  eventEndDate.setDate(eventEndDate.getDate() + 2);
  
  const [countdown, setCountdown] = useState(getCountdown(eventStartDate));
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(eventStartDate));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [eventStartDate]);
  
  const scheduleItems = [
    // Day 1
    {
      day: 1,
      date: eventStartDate,
      events: [
        {
          time: '09:00 AM',
          title: 'Registration & Breakfast',
          description: 'Check-in, get your badge, and enjoy breakfast while networking with other participants.',
          location: 'Main Hall'
        },
        {
          time: '10:00 AM',
          title: 'Opening Ceremony',
          description: 'Welcome address, introduction to mentors, and overview of the weekend.',
          location: 'Auditorium'
        },
        {
          time: '11:00 AM',
          title: 'Idea Pitches',
          description: 'One-minute pitches from participants with ideas looking to recruit team members.',
          location: 'Auditorium'
        },
        {
          time: '12:00 PM',
          title: 'Lunch & Team Formation',
          description: 'Form teams around the ideas that interest you most.',
          location: 'Dining Area'
        },
        {
          time: '01:30 PM',
          title: 'Workshop: Validating Your Idea',
          description: 'Learn techniques to quickly validate your startup concept.',
          location: 'Workshop Room A'
        },
        {
          time: '03:00 PM',
          title: 'Start Building!',
          description: 'Teams begin working on their projects with mentor support.',
          location: 'Team Workspaces'
        },
        {
          time: '06:00 PM',
          title: 'Dinner',
          description: 'Refuel with dinner while continuing to work on your projects.',
          location: 'Dining Area'
        },
        {
          time: '08:00 PM',
          title: 'Optional: Mentor Office Hours',
          description: 'Get one-on-one advice from industry experts.',
          location: 'Mentoring Rooms'
        },
        {
          time: '11:00 PM',
          title: 'Day 1 Wrap-up',
          description: 'Brief check-in on progress. Teams can continue working or rest for tomorrow.',
          location: 'Main Hall'
        }
      ]
    },
    // Day 2
    {
      day: 2,
      date: new Date(eventStartDate.getTime() + 24 * 60 * 60 * 1000),
      events: [
        {
          time: '08:00 AM',
          title: 'Breakfast',
          description: 'Start your day with breakfast and coffee.',
          location: 'Dining Area'
        },
        {
          time: '09:00 AM',
          title: 'Workshop: Pitch Perfect',
          description: 'Learn how to create a compelling pitch for your startup.',
          location: 'Workshop Room A'
        },
        {
          time: '10:30 AM',
          title: 'Mid-point Check-in',
          description: 'Teams share progress and get feedback from mentors.',
          location: 'Team Workspaces'
        },
        {
          time: '12:00 PM',
          title: 'Lunch',
          description: 'Lunch break with continued team work.',
          location: 'Dining Area'
        },
        {
          time: '01:00 PM',
          title: 'Workshop: Business Model Canvas',
          description: 'Learn how to structure your business model for success.',
          location: 'Workshop Room B'
        },
        {
          time: '02:30 PM',
          title: 'Continue Building',
          description: 'Teams continue developing their projects.',
          location: 'Team Workspaces'
        },
        {
          time: '06:00 PM',
          title: 'Dinner',
          description: 'Dinner break with continued team work.',
          location: 'Dining Area'
        },
        {
          time: '07:00 PM',
          title: 'Pitch Preparation',
          description: 'Start preparing your final presentation for tomorrow.',
          location: 'Team Workspaces'
        },
        {
          time: '10:00 PM',
          title: 'Day 2 Wrap-up',
          description: 'Brief check-in on progress. Final night of development!',
          location: 'Main Hall'
        }
      ]
    },
    // Day 3
    {
      day: 3,
      date: eventEndDate,
      events: [
        {
          time: '08:00 AM',
          title: 'Breakfast',
          description: 'Final day breakfast and coffee.',
          location: 'Dining Area'
        },
        {
          time: '09:00 AM',
          title: 'Final Touches',
          description: 'Last chance to finalize your projects and presentations.',
          location: 'Team Workspaces'
        },
        {
          time: '12:00 PM',
          title: 'Lunch',
          description: 'Final lunch before presentations.',
          location: 'Dining Area'
        },
        {
          time: '01:00 PM',
          title: 'Submission Deadline',
          description: 'All projects must be submitted by this time.',
          location: 'Online Platform'
        },
        {
          time: '02:00 PM',
          title: 'Pitch Presentations',
          description: 'Teams present their solutions to judges and audience.',
          location: 'Auditorium'
        },
        {
          time: '04:30 PM',
          title: 'Judges Deliberation',
          description: 'Judges evaluate presentations while teams network.',
          location: 'Judges Room'
        },
        {
          time: '05:30 PM',
          title: 'Awards Ceremony',
          description: 'Winners announced and prizes awarded.',
          location: 'Auditorium'
        },
        {
          time: '06:30 PM',
          title: 'Closing Reception',
          description: 'Celebrate your achievements with food, drinks, and networking.',
          location: 'Main Hall'
        },
        {
          time: '08:00 PM',
          title: 'Event Conclusion',
          description: 'Official end of the WeekendStartupSVC Challenge in Sur, Oman.',
          location: 'Main Hall'
        }
      ]
    }
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Event Schedule
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your guide to the WeekendStartupSVC Challenge in Sur, Oman
          </p>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">Event Starts In</h2>
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Minutes', value: countdown.minutes },
                { label: 'Seconds', value: countdown.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="bg-indigo-100 rounded-lg p-3 md:p-4">
                    <div className="text-2xl md:text-3xl font-bold text-indigo-700">{item.value}</div>
                    <div className="text-xs md:text-sm mt-1 text-indigo-600">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-700">
                <Calendar className="inline-block mr-2" size={18} />
                {formatDate(eventStartDate)} - {formatDate(eventEndDate)}
              </p>
              <p className="text-gray-700 mt-1">
                <MapPin className="inline-block mr-2" size={18} />
                Sur, Oman
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {scheduleItems.map((day, dayIndex) => (
            <motion.div 
              key={dayIndex}
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.div 
                className="flex items-center mb-6"
                variants={fadeIn}
              >
                <div className="bg-indigo-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  {day.day}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Day {day.day}</h2>
                  <p className="text-gray-600">{formatDate(day.date)}</p>
                </div>
              </motion.div>
              
              <div className="ml-6 pl-6 border-l-2 border-indigo-200">
                {day.events.map((event, eventIndex) => (
                  <motion.div 
                    key={eventIndex}
                    className="mb-8 relative"
                    variants={fadeIn}
                  >
                    <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                        <div className="flex items-center text-indigo-600 font-medium">
                          <Clock size={16} className="mr-1" />
                          {event.time}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;