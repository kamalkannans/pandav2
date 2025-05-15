import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { Loader2 } from 'lucide-react';
import LandingPage from './LandingPage';

const ProtectedLandingPage: React.FC = () => {
  const { user, loading: authLoading } = useAuth();
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkProfile = async () => {
      if (user) {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('id')
            .eq('id', user.id)
            .single();

          if (error && error.code !== 'PGRST116') {
            console.error('Error checking profile:', error);
          }

          setHasProfile(!!data);
        } catch (err) {
          console.error('Error checking profile:', err);
        }
      }
      setLoading(false);
    };

    if (!authLoading) {
      checkProfile();
    }
  }, [user, authLoading]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
      </div>
    );
  }

  if (user) {
    if (hasProfile) {
      return <Navigate to="/dashboard" replace />;
    }
    return <Navigate to="/onboarding" replace />;
  }

  return <LandingPage />;
};

export default ProtectedLandingPage;