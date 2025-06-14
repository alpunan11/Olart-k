export default function WeeklyPlan({ day, setDay }) {
  return (
    <div className="flex space-x-2 my-4 overflow-auto">
      {[1, 2, 3, 4, 5, 6, 7].map((d) => (
        <button
          key={d}
          onClick={() => setDay(d)}
          className={`px-4 py-2 rounded-xl ${day === d ? 'bg-black text-white' : 'bg-gray-200'}`}
        >
          Gün {d}
        </button>
      ))}
    </div>
  );
}
