export default function Loading2() {
  return (
    <div className="flex items-center space-x-3 my-4">
      {/* Ini elemen lingkaran yang berputar (animate-spin) */}
      <div className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-gray-600 font-medium">Memuat data...</span>
    </div>
  );
}