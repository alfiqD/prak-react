import { useState } from "react";
import { FaBell, FaSearch, FaHistory } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    // State untuk mengontrol buka/tutup modal search
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div id="header-container" className="flex justify-between items-center p-4">
            
            {/* --- BAGIAN IMPROVISASI --- */}
            <div id="search-bar" className="relative w-full max-w-lg z-50">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search Here..."
                    className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    onFocus={() => setIsSearchOpen(true)} // Buka modal saat diklik
                    onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)} // Tutup modal saat klik di luar
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
                
                {/* Kotak Modal Popup (Muncul kalau isSearchOpen bernilai true) */}
                {isSearchOpen && (
                    <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-xl p-4 transition-all">
                        <span className="text-xs text-gray-400 font-bold uppercase mb-2 block">Pencarian Terakhir</span>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded cursor-pointer">
                                <FaHistory className="text-gray-400" /> <span>Nasi Goreng Spesial</span>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded cursor-pointer">
                                <FaHistory className="text-gray-400" /> <span>Data Pelanggan Baru</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            {/* --- BATAS IMPROVISASI --- */}

            <div id="icons-container" className="flex items-center space-x-4">
                <div className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                    <FaBell />
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">50</span>
                </div>
                <div className="p-3 bg-blue-100 rounded-2xl cursor-pointer"><FcAreaChart /></div>
                <div className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer"><SlSettings /></div>
                <div className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                    <span className="text-gray-700">Hello, <b>Alfiq Debriliant</b></span>
                    <img src="/img/logoprofil.png" className="w-10 h-10 rounded-full" alt="Profile" />
                </div>
            </div>
        </div>
    );
}