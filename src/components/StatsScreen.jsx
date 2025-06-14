export default function StatsScreen({ completed, level, allExercises }) {
  const all = Object.values(allExercises).flat();
  const completedExercises = all.filter((ex) => completed.includes(ex.name));
  const totalCalories = completedExercises.reduce((sum, ex) => sum + (ex.calories || 0), 0);
  const totalDuration = completedExercises.reduce((sum, ex) => {
    const num = parseInt(ex.duration || "0");
    return sum + num;
  }, 0);

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-xl shadow-inner">
      <h2 className="text-xl font-bold mb-2">İstatistikler</h2>
      <p>Toplam egzersiz: {completed.length}</p>
      <p>Toplam süre: {totalDuration} saniye</p>
      <p>Yakılan kalori: {totalCalories} kcal</p>
      <p>Seviye: {level}</p>
    </div>
  );
}
