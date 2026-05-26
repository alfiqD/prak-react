import PageHeader from "../components/PageHeader";

export default function FiturXYZ() {
    return (
        <div id="dashboard-container" className="p-6">
            
            {/* --- BAGIAN HEADER --- */}
            <PageHeader 
                title="Dashboard" 
                breadcrumb={["Fitur XYZ"]} 
            >
                {/* Tombol Add Report (Opsional) */}
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-md">
                    + Add Report
                </button>
            </PageHeader>
            {/* --------------------------------- */}

            {/* Sisa card di bawah ini sudah dihapus total agar hanya menampilkan header */}

        </div>
    );
}