export default function InputField({ label, type = "text", placeholder, name }) {
  return (
    <div className="flex flex-col mb-4">
      {/* Jika props label diisi, maka tampilkan labelnya */}
      {label && <label className="mb-1 text-sm font-semibold text-gray-700">{label}</label>}
      
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}