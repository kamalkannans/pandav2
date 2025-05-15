import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Video, Calendar, Settings, LogOut, Radio } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const navItems = [
    { icon: Radio, label: 'Shows', path: '/dashboard' },
    { icon: Calendar, label: 'Schedule', path: '/dashboard/schedule' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <Link to="/dashboard" className="flex items-center">
          <Video className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">PodcastPro</span>
        </Link>
      </div>
      
      <nav className="mt-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 ${
              location.pathname === item.path ? 'bg-indigo-50 text-indigo-600' : ''
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 w-64 p-6">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
        >
          <LogOut className="h-5 w-5" />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;