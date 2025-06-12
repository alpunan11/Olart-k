
import React, { useState } from 'react';

const exercises = [
  { name: "Jump Squats", image: "/animations/jump-squat.gif" },
  { name: "Wall Sit", image: "/animations/wall-sit.gif" },
  { name: "Box Jumps", image: "/animations/box-jumps.gif" },
  { name: "Depth Jumps", image: "/animations/depth-jumps.gif" }
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🦵 Hareket Animasyonları</h1>

      {exercises.map((ex, i) => (
        <div key={i} style={{
          border: "1px solid #ccc",
          padding: "12px",
          margin: "12px 0",
          borderRadius: 8
        }}>
          <strong>{ex.name}</strong><br />
          <button onClick={() => setSelected(ex)}>Nasıl Yapılır?</button>
          {selected === ex && (
            <div style={{ marginTop: 10 }}>
              <img src={ex.image} alt={ex.name} style={{ maxWidth: "100%", borderRadius: 10 }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
