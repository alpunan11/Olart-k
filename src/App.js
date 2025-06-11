
import React, { useState, useEffect } from 'react';

const exercises = [
  {
    id: 1,
    name: "Jump Squats",
    reps: "3x12",
    duration: 30,
    calories: 50,
    description: "Start from a squat and explode upward. Land softly and repeat.",
    beginner: true,
    alternatives: ["Bodyweight Squats", "Step Jumps"]
  },
  {
    id: 2,
    name: "Box Jumps",
    reps: "3x10",
    duration: 40,
    calories: 60,
    description: "Jump onto a stable box or platform, then step down and repeat.",
    beginner: false,
    alternatives: ["Tuck Jumps", "Depth Jumps"]
  },
  {
    id: 3,
    name: "Wall Sit",
    reps: "2x45 sec",
    duration: 45,
    calories: 30,
    description: "Back against the wall, slide down to seated position and hold.",
    beginner: true,
    alternatives: ["Chair Hold", "Glute Bridge Hold"]
  }
];

function App() {
  const [completed, setCompleted] = useState([]);
  const [timers, setTimers] = useState({});
  const [activeTimer, setActiveTimer] = useState(null);

  const toggleComplete = (id) => {
    setCompleted(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  const startTimer = (id, duration) => {
    if (activeTimer) return;
    let time = duration;
    setActiveTimer(id);
    setTimers(prev => ({ ...prev, [id]: time }));

    const interval = setInterval(() => {
      time -= 1;
      setTimers(prev => ({ ...prev, [id]: time }));
      if (time <= 0) {
        clearInterval(interval);
        setActiveTimer(null);
        alert("⏱️ Süre doldu!");
      }
    }, 1000);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🦵 Vertical Jump Tracker v3</h1>
      {exercises.map(ex => (
        <div key={ex.id}
             style={{
               margin: "16px 0",
               padding: "12px",
               borderRadius: "12px",
               background: completed.includes(ex.id) ? "#d4edda" : "#fff",
               border: "1px solid #ccc",
               boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
               transition: "0.3s"
             }}>
          <h2>{ex.name}</h2>
          <p>🔁 {ex.reps} | ⏱️ {ex.duration} sec | 🔥 {ex.calories} kcal</p>
          <p>{ex.beginner ? "🟢 Beginner" : "🔵 Intermediate+"}</p>
          <p>📘 {ex.description}</p>
          <p>🔁 Alternatives: {ex.alternatives.join(", ")}</p>
          <button onClick={() => toggleComplete(ex.id)}>
            {completed.includes(ex.id) ? "Undo" : "Mark as Done"}
          </button>
          <button disabled={activeTimer} onClick={() => startTimer(ex.id, ex.duration)}>
            {activeTimer === ex.id ? `⏱️ ${timers[ex.id]}s` : "Start Timer"}
          </button>
        </div>
      ))}
      <hr />
      <h3>🧠 Progress</h3>
      <p>✅ Completed: {completed.length} / {exercises.length}</p>
      <p>🔥 Estimated calories burned: {completed.reduce((sum, exId) => {
        const ex = exercises.find(e => e.id === exId);
        return sum + (ex ? ex.calories : 0);
      }, 0)} kcal</p>
    </div>
  );
}

export default App;
