import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword';
import Onboarding from './components/auth/Onboarding';
import Dashboard from './components/dashboard/Dashboard';
import ProtectedLandingPage from './components/ProtectedLandingPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/onboarding" element={
              <ProtectedRoute>
                <Onboarding />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/*" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/" element={<ProtectedLandingPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;