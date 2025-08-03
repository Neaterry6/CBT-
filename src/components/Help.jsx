import React from 'react';

function Help() {
  return (
    <div>
      <p>Contact us at:</p>
      <ul className="list-disc list-inside text-gray-300">
        <li>Email: <a href="mailto:akewusholaabdulbakri101@gmail.com" className="text-blue-400 hover:underline">akewusholaabdulbakri101@gmail.com</a></li>
        <li>Phone: <a href="tel:+2348039896597" className="text-blue-400 hover:underline">+2348039896597</a></li>
        <li>WhatsApp: <a href="https://wa.me/2348107993604" target="_blank" className="text-blue-400 hover:underline">+2348107993604</a></li>
      </ul>
    </div>
  );
}

export default Help;
