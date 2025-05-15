import React, { useState, useEffect } from 'react';
import { Plus, Play, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

interface Show {
  id: string;
  title: string;
  scheduled_for: string;
  status: 'scheduled' | 'live' | 'completed';
  guests: string[];
}

const ShowsList: React.FC = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const { data, error } = await supabase
        .from('shows')
        .select('*')
        .order('scheduled_for', { ascending: true });

      if (error) throw error;

      setShows(data || []);
    } catch (err) {
      console.error('Error fetching shows:', err);
      setError('Failed to load shows. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const startShow = async (showId: string) => {
    try {
      const { error } = await supabase
        .from('shows')
        .update({ status: 'live' })
        .eq('id', showId);

      if (error) throw error;

      // Refresh shows list
      fetchShows();
    } catch (err) {
      console.error('Error starting show:', err);
      setError('Failed to start show. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Your Shows</h1>
        <Link
          to="/dashboard/schedule"
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          <Plus className="h-5 w-5 mr-2" />
          Schedule Show
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}

      <div className="grid gap-6">
        {shows.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No shows scheduled</h3>
            <p className="text-gray-600 mb-4">Get started by scheduling your first show!</p>
            <Link
              to="/dashboard/schedule"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <Plus className="h-5 w-5 mr-1" />
              Schedule a Show
            </Link>
          </div>
        ) : (
          shows.map((show) => (
            <div
              key={show.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{show.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  show.status === 'live' 
                    ? 'bg-green-100 text-green-800'
                    : show.status === 'completed'
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {show.status.charAt(0).toUpperCase() + show.status.slice(1)}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">
                    {new Date(show.scheduled_for).toLocaleString()}
                  </p>
                  {show.guests.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      {show.guests.length} guest{show.guests.length !== 1 ? 's' : ''} invited
                    </p>
                  )}
                </div>
                
                {show.status === 'scheduled' && (
                  <button
                    onClick={() => startShow(show.id)}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Start Show
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowsList;