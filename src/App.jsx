import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ExamSection from './components/ExamSection';
import ReadingSection from './components/ReadingSection';
import TestSection from './components/TestSection';
import StudyPlanSection from './components/StudyPlanSection';
import Leaderboard from './components/Leaderboard';
import Activate from './components/Activate';
import AIPage from './components/AIPage';
import Settings from './components/Settings';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
  const [isLoading, setIsLoading] = useState(true);
  const [isActivated, setIsActivated] = useState(!!localStorage.getItem('isActivated'));

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
        <img src="/logo.png" alt="App Logo" className="w-32 h-32 mb-4 glitch" />
        <h1 className="text-4xl font-bold glitch">POST UTME CBT - University of Ibadan</h1>
        <p className="text-lg mt-2">Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col font-sans">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={user.nickname ? (isActivated ? <Dashboard user={user} isActivated={isActivated} /> : <Activate setIsActivated={setIsActivated} />) : <Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/exam/:subject/:year" element={<ExamSection isActivated={isActivated} />} />
          <Route path="/reading" element={<ReadingSection isActivated={isActivated} />} />
          <Route path="/test/:subject/:topic" element={<TestSection isActivated={isActivated} />} />
          <Route path="/study/:subject" element={<StudyPlanSection isActivated={isActivated} />} />
          <Route path="/leaderboard" element={<Leaderboard isActivated={isActivated} />} />
          <Route path="/ai" element={<AIPage isActivated={isActivated} />} />
          <Route path="/settings" element={<Settings isActivated={isActivated} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
