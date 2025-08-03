import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user }) {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/reading">Reading</Link></li>
        <li><Link to="/exam/English/2022/2023">Exam</Link></li>
        <li><Link to="/test/English/Comprehension">Test</Link></li>
        <li><Link to="/ai">AI</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li>{user.nickname || 'Guest'}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
