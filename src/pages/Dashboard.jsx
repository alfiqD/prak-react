import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="p-6">
            
            {/* --- BAGIAN INI YANG KITA UBAH --- */}
            <PageHeader 
                title="Dashboard" 
                breadcrumb={["Dashboard"]} 
            >
                {/* Tombol Add Report (Opsional) */}
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-md">
                    + Add Report
                </button>
            </PageHeader>
            {/* --------------------------------- */}

            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Card Orders */}
                <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="orders-icon" className="bg-green-100 text-green-600 rounded-full p-4">
                        <FaShoppingCart className="text-2xl" />
                    </div>
                    <div id="orders-info" className="flex flex-col">
                        <span id="orders-count" className="text-2xl font-bold text-gray-800">75</span>
                        <span id="orders-text" className="text-gray-400">Total Orders</span>
                    </div>
                </div>

                {/* Card Delivered */}
                <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="delivered-icon" className="bg-blue-100 text-blue-600 rounded-full p-4">
                        <FaTruck className="text-2xl" />
                    </div>
                    <div id="delivered-info" className="flex flex-col">
                        <span id="delivered-count" className="text-2xl font-bold text-gray-800">175</span>
                        <span id="delivered-text" className="text-gray-400">Total Delivered</span>
                    </div>
                </div>

                {/* Card Canceled */}
                <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="canceled-icon" className="bg-red-100 text-red-600 rounded-full p-4">
                        <FaBan className="text-2xl" />
                    </div>
                    <div id="canceled-info" className="flex flex-col">
                        <span id="canceled-count" className="text-2xl font-bold text-gray-800">40</span>
                        <span id="canceled-text" className="text-gray-400">Total Canceled</span>
                    </div>
                </div>

                {/* Card Revenue */}
                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="bg-yellow-100 text-yellow-600 rounded-full p-4">
                        <FaDollarSign className="text-2xl" />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-2xl font-bold text-gray-800">Rp.128</span>
                        <span id="revenue-text" className="text-gray-400">Total Revenue</span>
                    </div>
                </div>
            </div>

            {/* --- BAGIAN IMPROVISASI --- */}
            <div id="recent-orders" className="mx-5 mb-5 bg-white rounded-xl shadow-sm p-6 mt-2">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h2 className="text-lg font-bold text-gray-800">Pesanan Terbaru</h2>
                    <button className="text-sm text-green-500 font-semibold hover:underline">Lihat Semua</button>
                </div>
                
                <div className="space-y-4 mt-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">AD</div>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">Ahmad Dani</p>
                                <p className="text-xs text-gray-400">2x Ayam Bakar Madu</p>
                            </div>
                        </div>
                        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-bold">Diproses</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">SR</div>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">Siti Rahma</p>
                                <p className="text-xs text-gray-400">1x Jus Alpukat</p>
                            </div>
                        </div>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold">Selesai</span>
                    </div>
                </div>
            </div>
            {/* --- BATAS IMPROVISASI --- */}
        </div>
    );
}