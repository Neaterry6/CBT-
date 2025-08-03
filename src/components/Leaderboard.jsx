import React from 'react';

function Leaderboard({ isActivated }) {
  if (!isActivated) return <p>Activation required for leaderboard.</p>;
  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-4">Leaderboard</h2>
      <p>Top scores will appear here...</p>
    </main>
  );
}

export default Leaderboard;
