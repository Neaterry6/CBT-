import React from 'react';

function AISelector({ model, setModel }) {
  return (
    <select value={model} onChange={(e) => setModel(e.target.value)} className="p-2 bg-gray-800 rounded text-white">
      <option value="gemini">Gemini</option>
      <option value="gpt4">GPT-4</option>
      <option value="grok">Grok</option>
    </select>
  );
}

export default AISelector;
