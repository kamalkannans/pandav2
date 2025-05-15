import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import PodcastSchedule from './PodcastSchedule';
import ShowsList from './ShowsList';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Routes>
            <Route path="/" element={<ShowsList />} />
            <Route path="/schedule" element={<PodcastSchedule />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;