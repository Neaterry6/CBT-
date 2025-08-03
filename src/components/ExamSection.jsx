import React, { useState, useEffect } from 'react';
import { sendUsageData } from '../services/auth';

function ExamSection({ isActivated }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [dataUsed, setDataUsed] = useState(0);

  useEffect(() => {
    let timer;
    if (isActivated) {
      timer = setInterval(() => setTimeSpent(prev => { sendUsageData({ timeSpent: 1, dataUsed: 0.1 }); return prev + 1; }), 60000);
      fetch('https://questions.aloc.com.ng/api/v2/q?subject=English&year=2022/2023', {
        headers: { 'AccessToken': 'QB-139d5195a490b3c12794' },
      }).then(res => res.json()).then(data => setQuestions(data.data));
    }
    return () => clearInterval(timer);
  }, [isActivated]);

  if (!isActivated) return <p>Activation required for exams.</p>;
  return <div>Exam {currentIndex + 1}/{questions.length}...</div>;
}

export default ExamSection;
