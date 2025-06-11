
import React, { useState } from 'react';

const exercises = [
  { id: 1, name: "Jump Squats", reps: "3 sets x 12", duration: "30 sec", calories: "50 kcal", beginner: true },
  { id: 2, name: "Box Jumps", reps: "3 sets x 10", duration: "40 sec", calories: "60 kcal", beginner: false },
  { id: 3, name: "Wall Sit", reps: "2 sets x 45 sec", duration: "45 sec", calories: "30 kcal", beginner: true }
];

function App() {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (id) => {
    setCompleted(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ fontSize: "24px" }}>🦵 Vertical Jump Tracker</h1>
      {exercises.map(ex => (
        <div
          key={ex.id}
          onClick={() => toggleComplete(ex.id)}
          style={{
            margin: "16px 0",
            padding: "12px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            background: completed.includes(ex.id) ? "#d4edda" : "#fff",
            border: completed.includes(ex.id) ? "2px solid #28a745" : "1px solid #ccc",
            transition: "all 0.3s ease"
          }}
        >
          <h2 style={{ margin: "0 0 8px", fontSize: "18px" }}>{ex.name}</h2>
          <p>🔁 {ex.reps} | ⏱️ {ex.duration} | 🔥 {ex.calories}</p>
          <p>{ex.beginner ? "🟢 Beginner Friendly" : "🔵 Intermediate+"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
