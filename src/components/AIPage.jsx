import React, { useState } from 'react';
import { getAIExplanation } from '../services/api';

function AIPage({ isActivated }) {
  const [model, setModel] = useState('gpt4');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    if (!isActivated) {
      alert('AI requires activation.');
      return;
    }
    const result = await getAIExplanation(model, query);
    setResponse(result.response);
  };

  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-4">AI Assistant</h2>
      <AISelector model={model} setModel={setModel} />
      <textarea value={query} onChange={(e) => setQuery(e.target.value)} className="w-full p-3 mb-4 bg-gray-800 rounded text-white" />
      <button onClick={handleSubmit} className="bg-purple-600 p-2 rounded hover:bg-purple-700 text-white">Ask AI</button>
      <p className="mt-4 text-gray-300">{response}</p>
    </main>
  );
}

export default AIPage;
