import React from 'react';
import Help from './Help';

function Settings() {
  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-4">Settings</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Account</h3>
        {/* Placeholder for account management */}
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Help</h3>
        <Help />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Created by Titans Devs</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li><a href="https://www.facebook.com/profile.php?id=61575627958849" target="_blank" className="text-blue-400 hover:underline">Facebook</a></li>
          <li><a href="https://www.instagram.com/heisbroken6?igsh=YzljYTk1ODg3Zg==" target="_blank" className="text-blue-400 hover:underline">Instagram</a></li>
          <li>Twitter (to be added)</li>
          <li>LinkedIn (to be added)</li>
        </ul>
      </div>
    </main>
  );
}

export default Settings;
