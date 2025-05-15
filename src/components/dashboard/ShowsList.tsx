import React, { useState, useEffect } from 'react';
import { Plus, Play } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Show {
  id: string;
  title: string;
  scheduled_for: string;
  status: 'scheduled' | 'live' | 'completed';
}

const ShowsList: React.FC = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    // TODO: Fetch shows from Supabase
    const demoShows: Show[] = [
      {
        id: '1',
        title: 'Tech Talk Episode 45',
        scheduled_for: '2025-05-20T15:00:00Z',
        status: 'scheduled'
      },
      {
        id: '2',
        title: 'Industry Insights #12',
        scheduled_for: '2025-05-22T18:30:00Z',
        status: 'scheduled'
      }
    ];
    setShows(demoShows);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Your Shows</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
          <Plus className="h-5 w-5 mr-2" />
          Schedule Show
        </button>
      </div>

      <div className="grid gap-6">
        {shows.map((show) => (
          <div
            key={show.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{show.title}</h3>
              <p className="text-gray-600">
                {new Date(show.scheduled_for).toLocaleString()}
              </p>
            </div>
            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
              <Play className="h-5 w-5 mr-2" />
              Start Show
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowsList;