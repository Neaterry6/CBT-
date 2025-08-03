export const getAIExplanation = async (model, prompt) => {
  const apiKeys = {
    gemini: 'AIzaSyAkq3h7r2VN_LKJxc01jK9jslW8zzhlkuM',
    grok: 'xai-Oep1rsF9sXto6bGJT81yjMUkSvEbQ3hz8R6kOchRc4f36lKY5Wm9mCJ91bRGHCxbFTr9NOxWzSbCk139',
    gpt4: 'existing_gpt4_key',
  };

  if (model === 'gemini') {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKeys.gemini, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
    const data = await response.json();
    return { response: data.candidates[0].content.parts[0].text };
  } else if (model === 'grok') {
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKeys.grok}` },
      body: JSON.stringify({ messages: [{ role: 'user', content: prompt }], model: 'grok-4-latest', stream: false, temperature: 0 }),
    });
    const data = await response.json();
    return { response: data.choices[0].message.content };
  }
  return { response: 'GPT-4 placeholder' };
};
