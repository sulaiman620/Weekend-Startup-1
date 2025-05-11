import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Users } from 'lucide-react';
import TeamCard from '../components/TeamCard';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
  projectUrl?: string;
  category: string;
  isWinner?: boolean;
}

const Teams: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Mock data for teams
  const mockTeams: Team[] = [
    {
      id: '1',
      name: 'EcoTrack',
      description: 'A mobile app that helps users track and reduce their carbon footprint through daily activities.',
      members: [
        { id: '1', name: 'Sarah Johnson', role: 'Product Manager', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '2', name: 'David Chen', role: 'Developer', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '3', name: 'Emily Rodriguez', role: 'Designer', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '4', name: 'James Wilson', role: 'Developer', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
      ],
      projectUrl: 'https://ecotrack.example.com',
      category: 'Environment',
      isWinner: true
    },
    {
      id: '2',
      name: 'MealPrep AI',
      description: 'AI-powered meal planning and grocery shopping assistant that reduces food waste.',
      members: [
        { id: '5', name: 'Aisha Patel', role: 'Product Manager', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '6', name: 'Michael Brown', role: 'Developer', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '7', name: 'Sophia Kim', role: 'Designer', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
      ],
      projectUrl: 'https://mealprep.example.com',
      category: 'Food Tech'
    },
    {
      id: '3',
      name: 'StudyBuddy',
      description: 'Peer-to-peer learning platform connecting students for collaborative study sessions.',
      members: [
        { id: '8', name: 'Michael Chen', role: 'Developer', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '9', name: 'Jessica Taylor', role: 'Product Manager', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '10', name: 'Daniel Martinez', role: 'Developer', avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '11', name: 'Emma Wilson', role: 'Designer', avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
      ],
      projectUrl: 'https://studybuddy.example.com',
      category: 'EdTech',
      isWinner: true
    },
    {
      id: '4',
      name: 'HealthTracker',
      description: 'Personal health monitoring app that connects with wearable devices and provides insights.',
      members: [
        { id: '12', name: 'Robert Johnson', role: 'Developer', avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '13', name: 'Lisa Wang', role: 'Product Manager', avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '14', name: 'Alex Smith', role: 'Designer', avatar: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
      ],
      projectUrl: 'https://healthtracker.example.com',
      category: 'HealthTech'
    },
    {
      id: '5',
      name: 'LocalMarket',
      description: 'Platform connecting local farmers and producers directly with consumers.',
      members: [
        { id: '15', name: 'Thomas Lee', role: 'Developer', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '16', name: 'Olivia Garcia', role: 'Product Manager', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '17', name: 'Noah Williams', role: 'Developer', avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '18', name: 'Ava Martinez', role: 'Designer', avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
      ],
      category: 'E-commerce'
    },
    {
      id: '6',
      name: 'CodeMentor',
      description: 'AI-powered coding assistant that helps beginners learn programming through interactive challenges.',
      members: [
        { id: '19', name: 'Ethan Brown', role: 'Developer', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '20', name: 'Sophia Davis', role: 'Product Manager', avatar: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: '21', name: 'Liam Johnson', role: 'Developer', avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
      ],
      projectUrl: 'https://codementor.example.com',
      category: 'EdTech'
    }
  ];
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTeams(mockTeams);
      setFilteredTeams(mockTeams);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  useEffect(() => {
    let result = teams;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(team => 
        team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(team => team.category === selectedCategory);
    }
    
    setFilteredTeams(result);
  }, [searchTerm, selectedCategory, teams]);
  
  const categories = Array.from(new Set(teams.map(team => team.category)));
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
            Teams & Projects
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover innovative projects from our talented teams
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search teams or projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={18} className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : filteredTeams.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Users size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">No teams found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredTeams.map((team) => (
              <motion.div key={team.id} variants={fadeIn}>
                <TeamCard {...team} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Teams;