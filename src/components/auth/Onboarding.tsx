import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, User, Video } from 'lucide-react';

type AccountType = 'individual' | 'agency';

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<AccountType>('individual');
  const [name, setName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [episodesPerMonth, setEpisodesPerMonth] = useState<string>('1-2');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Save onboarding data to Supabase
      console.log('Onboarding data:', {
        accountType,
        name,
        organizationName,
        episodesPerMonth
      });
      navigate('/dashboard');
    } catch (err) {
      console.error('Failed to save onboarding data:', err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Video className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Welcome to PodcastPro
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Let's set up your account in just a few steps
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What type of account are you creating?
                </label>
                <div className="grid grid-cols-1 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setAccountType('individual');
                      setStep(2);
                    }}
                    className={`flex items-center p-4 border-2 rounded-lg ${
                      accountType === 'individual'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-300 hover:border-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    <User className="h-6 w-6 text-indigo-600 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Individual</div>
                      <div className="text-sm text-gray-500">
                        For personal or solo podcast creators
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setAccountType('agency');
                      setStep(2);
                    }}
                    className={`flex items-center p-4 border-2 rounded-lg ${
                      accountType === 'agency'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-300 hover:border-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    <Building2 className="h-6 w-6 text-indigo-600 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Agency</div>
                      <div className="text-sm text-gray-500">
                        For podcast production companies
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                {accountType === 'agency' ? (
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                      Organization name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="organization"
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                )}
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  How many episodes do you plan to produce per month?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['1-2', '3-5', '6-10', '10+'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setEpisodesPerMonth(option)}
                      className={`p-4 border-2 rounded-lg text-center ${
                        episodesPerMonth === option
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-300 hover:border-indigo-600 hover:bg-indigo-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Setting up your account...' : 'Complete Setup'}
                  </button>
                </div>
              </div>
            )}

            {step > 1 && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="w-full text-center text-sm text-gray-600 hover:text-indigo-600"
                >
                  Back to previous step
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;