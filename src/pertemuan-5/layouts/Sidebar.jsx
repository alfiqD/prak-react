import { MdDashboard, MdListAlt, MdPeople, MdBarChart, MdAdd } from "react-icons/md";

export default function Sidebar() {
  const menus = [
    { name: 'Dashboard', icon: <MdDashboard className="mr-4 text-xl" /> },
    { name: 'Orders', icon: <MdListAlt className="mr-4 text-xl" /> },
    { name: 'Customers', icon: <MdPeople className="mr-4 text-xl" /> },
    { name: 'Analytics', icon: <MdBarChart className="mr-4 text-xl" /> },
  ];

  return (
    <div id="sidebar" className="flex min-h-screen w-[360px] flex-col bg-white p-10 shadow-lg">
      
      {/* 1. Logo Section */}
      <div id="sidebar-logo" className="flex flex-col mb-10">
        <span id="logo-title" className="font-poppins text-[48px] text-gray-900 font-bold leading-tight">
          Sedap<b id="logo-dot" className="text-green-500">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400 font-poppins">
          Modern Admin Dashboard
        </span>
      </div>

      {/* 2. Sidebar Menu (--- BAGIAN IMPROVISASI ---) */}
      <div id="sidebar-menu">
        <ul id="menu-list" className="space-y-3">
          {menus.map((menu, index) => (
            <li key={index}>
              <div 
                id={`menu-${index + 1}`} 
                /* Logic Improvisasi: Jika index 0 (Dashboard), beri background hijau solid. Sisanya default abu-abu. */
                className={`flex cursor-pointer items-center rounded-xl p-4 font-medium transition-all group ${
                  index === 0 
                    ? "bg-green-500 text-white shadow-md font-extrabold" // Style Aktif
                    : "text-gray-600 hover:bg-green-100 hover:text-green-500 hover:font-extrabold" // Style Default
                }`}
              >
                <span className={index === 0 ? "text-white" : "group-hover:text-green-500"}>
                  {menu.icon}
                </span>
                <span>{menu.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Sidebar Footer */}
      <div id="sidebar-footer" className="mt-auto">
        {/* Footer Card */}
        <div id="footer-card" className="bg-green-500 p-6 rounded-3xl shadow-lg mb-10 flex items-center relative overflow-hidden">
          <div id="footer-text" className="text-white text-sm z-10 flex-1">
            <p className="mb-4">Please organize your menus through button below!</p>
            
            {/* Add Menu Button */}
            <div id="add-menu-button" className="flex justify-center items-center p-3 bg-white rounded-xl space-x-2 cursor-pointer shadow-sm active:scale-95 transition-transform">
              <MdAdd className="text-gray-600 text-xl" />
              <span className="text-gray-600 font-bold">Add Menus</span>
            </div>
          </div>
          
          <img 
            id="footer-avatar" 
            className="w-16 h-16 rounded-full ml-4 border-2 border-white/50 object-cover" 
            src="/img/logoprofil.png"
            alt="User Avatar"
          />
        </div>

        {/* Brand & Copyright */}
        <span id="footer-brand" className="font-bold text-gray-400 block text-sm">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400 text-xs mt-1">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}