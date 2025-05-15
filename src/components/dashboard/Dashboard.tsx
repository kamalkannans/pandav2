import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import PodcastSchedule from './PodcastSchedule';
import ShowsList from './ShowsList';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] mt-16"> {/* Adjust height to account for header */}
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gray-50 p-8">
        <Routes>
          <Route path="/" element={<ShowsList />} />
          <Route path="/schedule" element={<PodcastSchedule />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;