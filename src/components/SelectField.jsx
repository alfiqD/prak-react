export default function SelectField({ label, name, options = [] }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 text-sm font-semibold text-gray-700">{label}</label>}
      
      <select
        name={name}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
      >
        <option value="">-- Pilih --</option>
        {/* Melakukan looping untuk pilihan dropdown */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}