import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <Rocket size={24} className="text-indigo-600 mr-2" />
              <span className="font-bold text-xl text-gray-800">WeekendStartupSVC</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Join the most exciting startup challenge in Sur, Oman. Build your MVP, pitch your idea, and connect with like-minded entrepreneurs.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@weekendstartupsvc.com" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-600 hover:text-indigo-600 transition-colors">Schedule</Link>
              </li>
              <li>
                <Link to="/teams" className="text-gray-600 hover:text-indigo-600 transition-colors">Teams</Link>
              </li>
              <li>
                <Link to="/submit-idea" className="text-gray-600 hover:text-indigo-600 transition-colors">Submit Idea</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="block">Email:</span>
                <a href="mailto:info@weekendstartupsvc.com" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                  info@weekendstartupsvc.com
                </a>
              </li>
              <li className="text-gray-600">
                <span className="block">Location:</span>
                <span>Sur, Oman</span>
              </li>
              <li className="text-gray-600">
                <span className="block">Follow us:</span>
                <span>@weekendstartupsvc</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} WeekendStartupSVC Challenge. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;