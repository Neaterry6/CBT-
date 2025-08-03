import React from 'react';
import { Link } from 'react-router-dom';

function ReadingSection({ isActivated }) {
  if (!isActivated) return <p>Activation required for reading materials.</p>;
  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-4">Reading for Exams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/study/English" className="bg-purple-600 p-4 rounded hover:bg-purple-700 text-white">Study Plans</Link>
        <div className="bg-gray-800 p-4 rounded">Wikipedia Search Placeholder</div>
      </div>
    </main>
  );
}

export default ReadingSection;
