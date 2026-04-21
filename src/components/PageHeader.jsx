export default function PageHeader() {
    return (
        /* Container utama dengan justify-between agar judul di kiri dan tombol di kanan */
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            
            {/* Sisi Kiri (Title & Breadcrumb) */}
            <div id="pageheader-left" className="flex flex-col">
                <span id="pageheader-title" className="text-3xl font-semibold text-gray-800">
                    Dashboard
                </span>
                
                {/* Breadcrumb Links Sesuai Gambar */}
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2 text-sm">
                    <span className="text-gray-400 cursor-pointer hover:text-green-500">
                        Home
                    </span>
                    <span className="text-gray-400">
                        /
                    </span>
                    <span className="text-gray-400 cursor-pointer hover:text-green-500">
                        Home Detail
                    </span>
                    <span className="text-gray-400">
                        /
                    </span>
                    <span className="text-gray-400 font-normal">
                        Home Very Detail
                    </span>
                </div>
            </div>

            {/* Action Button (Sisi Kanan) */}
            <div id="action-button">
                <button 
                    id="add-button" 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                    + Add Button
                </button>
            </div>
        </div>
    );
}