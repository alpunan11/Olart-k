import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { exercises } from "./lib/data";
import ExerciseCard from "./components/ExerciseCard";
import WeeklyPlan from "./components/WeeklyPlan";
import StatsScreen from "./components/StatsScreen";
import LanguageSelector from "./components/LanguageSelector";
import LevelSystem from "./components/LevelSystem";

export default function App() {
  const [day, setDay] = useState(1);
  const [language, setLanguage] = useState("tr");
  const [showStats, setShowStats] = useState(false);
  const [level, setLevel] = useState(1);
  const [completed, setCompleted] = useState([]); // yeni

  const todayExercises = exercises[day] || [];

  const handleComplete = (exerciseName) => {
    if (!completed.includes(exerciseName)) {
      setCompleted([...completed, exerciseName]);
      setLevel((prev) => Math.min(prev + 1, 10)); // max seviye 10
    }
  };

  return (
    <div className="min-h-screen p-4 bg-white text-black">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Jump Uygulaması v7</h1>
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>

      <LevelSystem level={level} setLevel={setLevel} />

      <WeeklyPlan day={day} setDay={setDay} />

      <div className="my-4">
        <h2 className="text-2xl font-semibold mb-2">Gün {day} Egzersizleri</h2>
        <div className="grid gap-4">
          {todayExercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              exercise={exercise}
              isCompleted={completed.includes(exercise.name)}
              onComplete={() => handleComplete(exercise.name)}
            />
          ))}
        </div>
      </div>

      <Button onClick={() => setShowStats(!showStats)}>
        {showStats ? "Egzersizlere Dön" : "İstatistikleri Göster"}
      </Button>

      {showStats && (
        <StatsScreen
          completed={completed}
          level={level}
          allExercises={exercises}
        />
      )}
    </div>
  );
}
