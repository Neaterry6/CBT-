import React from 'react';

function StudyPlanSection({ isActivated }) {
  if (!isActivated) return <p>Activation required for study plans.</p>;
  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-4">Study Plans</h2>
      <p>Study topics for {window.location.pathname.split('/')[2] || 'English'}...</p>
    </main>
  );
}

export default StudyPlanSection;
