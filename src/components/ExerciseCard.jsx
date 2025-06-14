export default function ExerciseCard({ exercise, isCompleted, onComplete }) {
  return (
    <div
      className={`border p-4 rounded-2xl shadow-md ${
        isCompleted ? "bg-green-100" : "bg-white"
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
      <p>{exercise.description}</p>
      <ul className="text-sm mt-2">
        <li><strong>Tekrar:</strong> {exercise.repetitions}</li>
        <li><strong>Süre:</strong> {exercise.duration}</li>
        <li><strong>Kalori:</strong> {exercise.calories} kcal</li>
        <li><strong>Alternatif:</strong> {exercise.alternatives.join(", ")}</li>
      </ul>
      {!isCompleted && (
        <button
          onClick={onComplete}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Tamamla
        </button>
      )}
      {isCompleted && (
        <p className="mt-2 text-green-700 font-semibold">Tamamlandı ✅</p>
      )}
    </div>
  );
}
