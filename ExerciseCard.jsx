export default function ExerciseCard({ exercise }) {
  return (
    <div className="border p-4 rounded-2xl shadow-md">
      <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
      <img src={exercise.animation} alt={exercise.name} className="w-full mb-2" />
      <p>{exercise.description}</p>
      <ul className="text-sm mt-2">
        <li><strong>Tekrar:</strong> {exercise.repetitions}</li>
        <li><strong>Süre:</strong> {exercise.duration}</li>
        <li><strong>Kalori:</strong> {exercise.calories} kcal</li>
        <li><strong>Alternatif:</strong> {exercise.alternatives.join(", ")}</li>
      </ul>
    </div>
  );
}