
import React from 'react';
import { Link } from 'react-router-dom';

const subjects = ['English', 'Mathematics', 'Biology', 'Physics', 'Chemistry', 'Economics', 'Government', 'Literature'];
const quickAccess = [
  { name: 'Practice Questions', icon: '📝', color: 'bg-purple-500', path: '/exam/English/2022/2023' },
  { name: 'Notes', icon: '📖', color: 'bg-orange-500', path: '/reading' },
  { name: 'Literary Texts', icon: '📚', color: 'bg-teal-500', path: '/study/English' },
  { name: 'Syllabus', icon: '📋', color: 'bg-blue-500', path: '/reading' },
];

function Dashboard({ user, isActivated }) {
  const years = Array.from({ length: 12 }, (_, i) => `${2011 + i}/${2012 + i}`);

  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-6">Welcome, {user.nickname || 'Guest'}!</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">My Subjects</h3>
        <div className="grid grid-cols-2 gap-4">
          {subjects.map(subject => (
            <select key={subject} className="bg-gray-800 p-2 rounded text-white">
              {years.map(year => (
                <option key={year} value={year}>
                  <Link to={`/exam/${subject}/${year}`} className="block p-2 hover:bg-gray-700">
                    {subject} - {year}
                  </Link>
                </option>
              ))}
            </select>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Quick Access</h3>
        <div className="grid grid-cols-2 gap-4">
          {quickAccess.map(item => (
            <Link key={item.name} to={item.path} className={`${item.color} p-6 rounded-lg shadow-lg text-white flex items-center justify-center`}>
              <span className="text-2xl mr-2">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-400">Download PrepMate on PC for a better experience.</p>
    </main>
  );
}

export default Dashboard;
