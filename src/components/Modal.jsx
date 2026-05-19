export default function Modal({ isOpen, onClose, title, children }) {
  // Jika isOpen bernilai false, Modal tidak akan ditampilkan (me-return null)
  if (!isOpen) return null;

  return (
    // Background hitam transparan (backdrop)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      
      {/* Kotak putih Modal */}
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6">
        {/* Header Modal (Judul & Tombol Close) */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none">
            &times;
          </button>
        </div>
        
        {/* Isi konten Modal */}
        <div>{children}</div>
      </div>

    </div>
  );
}