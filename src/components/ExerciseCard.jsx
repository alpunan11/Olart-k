import { useState } from "react";

export default function ExerciseCard({ exercise }) {
  const [completed, setCompleted] = useState(false);

  const toggleCompletion = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`border p-4 rounded-2xl shadow-md ${completed ? 'bg-green-100' : ''}`}>
      <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
      <p>{exercise.description}</p>
      <ul className="text-sm mt-2 mb-2">
        <li><strong>Tekrar:</strong> {exercise.repetitions}</li>
        <li><strong>Süre:</strong> {exercise.duration}</li>
        <li><strong>Kalori:</strong> {exercise.calories} kcal</li>
        <li><strong>Alternatif:</strong> {exercise.alternatives.join(", ")}</li>
      </ul>
      <button
        onClick={toggleCompletion}
        className={`px-4 py-2 rounded transition ${
          completed
            ? 'bg-gray-400 text-white hover:bg-gray-500'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {completed ? "Tamamlamayı Geri Al" : "Tamamladım"}
      </button>
    </div>
  );
}
