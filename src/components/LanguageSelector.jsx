export default function LanguageSelector({ language, setLanguage }) {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="border rounded px-2 py-1"
    >
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
    </select>
  );
}
