export default function Alert({ children, type = "info" }) {
  // Kamus warna untuk Alert (biasanya warnanya lebih soft/terang dari Button)
  const types = {
    success: "bg-green-100 text-green-800 border-green-300",
    danger: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };

  return (
    <div className={`border px-4 py-3 rounded-md mb-4 ${types[type]}`}>
      {children}
    </div>
  );
}