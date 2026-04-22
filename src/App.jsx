import { useState } from 'react'
import './assets/tailwind.css'
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from 'react-router-dom';
import Orders from './pages/Orders';
import Customers from './pages/Customers';

// --- IMPORT HALAMAN ERROR ---
import ErrorPage from './pages/ErrorPage'; // Satu-satunya yang kita butuhin buat urusan error

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        
        {/* Sidebar di sisi kiri */}
        <Sidebar />

        <div id="main-content" className="flex-1 p-4">
          {/* Header di bagian atas konten */}
          <Header />

          {/* Pengaturan Navigasi Halaman */}
          <Routes>
            {/* Halaman Utama */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            
            {/* Rute Error 400, 401, 403 pakai ErrorPage */}
            <Route path="/400" element={
              <ErrorPage errorCode="400" title={<>Oops! <br /> Bad Request!</>} />
            } />
            
            <Route path="/401" element={
              <ErrorPage errorCode="401" title={<>Hold Up! <br /> Unauthorized!</>} />
            } />
            
            <Route path="/403" element={
              <ErrorPage errorCode="403" title={<>Stop! <br /> Access Denied!</>} />
            } />

            {/* --- INI 404 YANG BARU --- */}
            {/* Pakai ErrorPage langsung, persis kayak 403 */}
            <Route path="/404" element={
              <ErrorPage errorCode="404" title={<>Go Home , <br /> You're Drunk!</>} />
            } />
            
            {/* Kalau user ngetik URL ngasal, tetep arahin ke ErrorPage 404 */}
            <Route path="*" element={
              <ErrorPage errorCode="404" title={<>Go Home , <br /> You're Drunk!</>} />
            } />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;