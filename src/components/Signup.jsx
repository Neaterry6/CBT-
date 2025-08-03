import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth';

function Signup({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = await registerUser(email, password, nickname);
    if (user) {
      setUser(user);
      navigate('/');
    } else {
      alert('Signup failed.');
    }
  };

  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 bg-gray-800 rounded text-white" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 bg-gray-800 rounded text-white" />
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Nickname" className="w-full p-3 bg-gray-800 rounded text-white" />
        <button type="submit" className="w-full bg-purple-600 p-3 rounded hover:bg-purple-700 text-white">Signup</button>
      </form>
    </main>
  );
}

export default Signup;
