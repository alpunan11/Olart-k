
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const LEVEL_THRESHOLDS = [0, 50, 100, 200, 350];

const exercises = [
  { name: "Jump Squats", calories: 50 },
  { name: "Wall Sit", calories: 30 },
  { name: "Box Jumps", calories: 60 },
  { name: "Depth Jumps", calories: 40 },
];

const getLevel = (xp) => {
  let level = 1;
  for (let i = 1; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
  }
  return level;
};

export default function App() {
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem("xp")) || 0);
  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem("history");
    return stored ? JSON.parse(stored) : Array(7).fill(0);
  });

  const addWorkout = (cal) => {
    const today = new Date().getDay(); // 0 = Pazar, 1 = Pazartesi ...
    const updated = [...history];
    updated[today] += cal;
    setHistory(updated);
    setXp(prev => prev + cal);
  };

  useEffect(() => {
    localStorage.setItem("xp", xp);
    localStorage.setItem("history", JSON.stringify(history));
  }, [xp, history]);

  const level = getLevel(xp);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🏋️ Seviye Sistemi & İstatistik</h1>
      <p>🎯 XP: {xp}</p>
      <p>🏅 Seviye: {level}</p>
      <p>📈 Bu haftaki ilerleme:</p>

      <Bar
        data={{
          labels: ["Pzr", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
          datasets: [{
            label: "Yakılan Kalori",
            data: history,
            backgroundColor: "#36a2eb"
          }]
        }}
        options={{ responsive: true, plugins: { legend: { display: false } } }}
      />

      <hr />
      <h2>🔘 Egzersiz Ekle</h2>
      {exercises.map((ex, i) => (
        <button key={i} onClick={() => addWorkout(ex.calories)} style={{
          margin: 8,
          padding: "10px 16px",
          borderRadius: 10,
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc"
        }}>
          {ex.name} +{ex.calories} kcal
        </button>
      ))}
    </div>
  );
}
