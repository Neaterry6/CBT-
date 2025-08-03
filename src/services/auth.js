export const sendUsageData = async (usage) => {
  const response = await fetch('http://localhost:5000/usage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: localStorage.getItem('userId'), ...usage }),
  });
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch('http://localhost:5000/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (data.success) {
    localStorage.setItem('userId', data.userId);
    return { nickname: data.nickname, isActivated: data.isActivated };
  }
  return null;
};

export const registerUser = async (email, password, nickname) => {
  const response = await fetch('http://localhost:5000/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, nickname }),
  });
  const data = await response.json();
  if (data.success) {
    localStorage.setItem('userId', data.userId);
    return { nickname, isActivated: false };
  }
  return null;
};
