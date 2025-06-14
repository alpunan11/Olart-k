export default function LevelSystem({ level, setLevel }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Seviye: {level}</h2>
      <progress className="w-full" value={level} max="10"></progress>
    </div>
  );
}