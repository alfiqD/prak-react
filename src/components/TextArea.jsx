export default function TextArea({ label, placeholder, name, rows = 4 }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 text-sm font-semibold text-gray-700">{label}</label>}
      
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      ></textarea>
    </div>
  );
}
