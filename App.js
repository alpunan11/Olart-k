
import React, { useState } from 'react';

const LANGUAGES = {
  tr: {
    title: "🦵 Sıçrama Takip Uygulaması",
    completed: "Tamamlandı",
    selectDay: "Gün Seç",
    language: "Dil",
    start: "Başla",
    dayNames: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
  },
  en: {
    title: "🦵 Vertical Jump Tracker",
    completed: "Completed",
    selectDay: "Select Day",
    language: "Language",
    start: "Start",
    dayNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  }
};

const weeklyPlan = {
  Monday: ["Jump Squats", "Wall Sit"],
  Tuesday: ["Box Jumps", "Jump Lunges"],
  Wednesday: ["Rest Day"],
  Thursday: ["Wall Sit", "Step Ups"],
  Friday: ["Jump Squats", "Depth Jumps"],
  Saturday: ["Box Jumps", "Wall Sit"],
  Sunday: ["Rest Day"]
};

function App() {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "tr");
  const [selectedDay, setSelectedDay] = useState(null);

  const t = LANGUAGES[language];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>{t.title}</h1>

      <div style={{ marginBottom: "12px" }}>
        <strong>{t.language}:</strong>
        <button onClick={() => handleLanguageChange("tr")}>🇹🇷 Türkçe</button>
        <button onClick={() => handleLanguageChange("en")}>🇬🇧 English</button>
      </div>

      <div>
        <strong>{t.selectDay}:</strong><br />
        {t.dayNames.map((day, i) => (
          <button
            key={day}
            onClick={() => setSelectedDay(Object.keys(weeklyPlan)[i])}
            style={{
              margin: "4px",
              padding: "6px 10px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          >
            {day}
          </button>
        ))}
      </div>

      {selectedDay && (
        <div style={{ marginTop: "20px" }}>
          <h3>{t.dayNames[Object.keys(weeklyPlan).indexOf(selectedDay)]}</h3>
          {weeklyPlan[selectedDay].map((exercise, i) => (
            <div key={i} style={{
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#f9f9f9"
            }}>
              {exercise}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
