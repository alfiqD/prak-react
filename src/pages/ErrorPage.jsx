import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function ErrorPage({ errorCode, title, breadcrumb }) {
  return (
    <div id="dashboard-container" className="p-6">
      {/* Kita masukin PageHeader ke dalam sini biar otomatis muncul */}
      <PageHeader 
         title={errorCode === "404" ? "Page Not Found" : `Error ${errorCode}`} 
         breadcrumb={breadcrumb || ["Dashboard", `Error ${errorCode}`]}
      />

      <div className="mt-8 bg-[#242A32] rounded-3xl shadow-2xl p-10 md:p-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] relative overflow-hidden text-left">
        
        {/* Sisi Kiri: Teks */}
        <div className="flex flex-col items-start z-10 md:w-1/2 space-y-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-poppins">
            {title}
          </h1>
          <Link
            to="/"
            className="bg-[#A3E6B5] hover:bg-[#86d49b] text-[#242A32] font-bold py-4 px-10 rounded-full transition-all shadow-lg active:scale-95 uppercase tracking-wider text-center"
          >
            Back To Home
          </Link>
        </div>

        {/* Sisi Kanan: Angka CSS */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative z-10 select-none">
          <div className="text-[180px] md:text-[250px] font-extrabold text-[#A3E6B5] drop-shadow-[0_15px_30px_rgba(163,230,181,0.25)] leading-none tracking-tighter hover:scale-105 transition-transform duration-500">
            {errorCode}
          </div>
        </div>
        
        {/* Dekorasi Titik */}
        <div className="absolute top-10 left-10 grid grid-cols-3 gap-3 opacity-20">
          {[...Array(9)].map((_, i) => <div key={i} className="w-3 h-3 bg-[#A3E6B5] rounded-full"></div>)}
        </div>
      </div>
    </div>
  );
}