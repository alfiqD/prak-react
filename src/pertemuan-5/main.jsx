import { createRoot } from "react-dom/client";
import './assets/tailwind.css';
import Sidebar from "./layouts/Sidebar"; 
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root")).render(
  /* 1. Struktur Dasar (app-container) */
  <div id="app-container" className="bg-gray-100 min-h-screen flex">
    
    {/* 2. Wrapper untuk Sidebar dan Main Content (layout-wrapper) */}
    <div id="layout-wrapper" className="flex flex-row flex-1">
      
      {/* Komponen Sidebar di sisi kiri */}
      <Sidebar />

      {/* 3. Bagian konten utama (main-content) */}
      <div id="main-content" className="flex-1 p-4">
        
        {/* Header di bagian atas konten */}
        <Header />

        {/* Isi Dashboard di bawah header */}
        <Dashboard />
        
      </div>
    </div>
  </div>
);