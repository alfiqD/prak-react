import { MdDashboard, MdListAlt, MdPeople, MdBarChart, MdAdd } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  // Anda bisa mengatur ID-nya secara manual di sini
  const menus = [
    { id: 'menu-1', name: 'Dashboard', path: '/', icon: <MdDashboard className="mr-4 text-xl" /> },
    { id: 'menu-2', name: 'Orders', path: '/orders', icon: <MdListAlt className="mr-4 text-xl" /> },
    { id: 'menu-3', name: 'Customers', path: '/customers', icon: <MdPeople className="mr-4 text-xl" /> },
    { id: 'menu-4', name: 'Analytics', path: '/analytics', icon: <MdBarChart className="mr-4 text-xl" /> },
  ];

  const location = useLocation();

  return (
    <div id="sidebar" className="flex min-h-screen w-[360px] flex-col bg-white p-10 shadow-lg">
      
      {/* Logo Section */}
      <div id="sidebar-logo" className="flex flex-col mb-10">
        <span id="logo-title" className="font-poppins text-[48px] text-gray-900 font-bold leading-tight">
          Sedap<b id="logo-dot" className="text-green-500">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400 font-poppins">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Sidebar Menu */}
      <div id="sidebar-menu">
        <ul id="menu-list" className="space-y-3">
          {menus.map((menu) => {
            const isActive = location.pathname === menu.path;

            return (
              <li key={menu.id}>
                <NavLink 
                  id={menu.id} // ID diambil langsung dari objek menu
                  to={menu.path}
                  className={`flex cursor-pointer items-center rounded-xl p-4 font-medium transition-all group ${
                    isActive 
                      ? "bg-green-500 text-white shadow-md font-extrabold" 
                      : "text-gray-600 hover:bg-green-100 hover:text-green-500 hover:font-extrabold"
                  }`}
                >
                  <span className={isActive ? "text-white" : "group-hover:text-green-500"}>
                    {menu.icon}
                  </span>
                  <span>{menu.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Sidebar Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div id="footer-card" className="bg-green-500 p-6 rounded-3xl shadow-lg mb-10 flex items-center relative overflow-hidden">
          <div id="footer-text" className="text-white text-sm z-10 flex-1">
            <p className="mb-4">Please organize your menus through button below!</p>
            <div id="add-menu-button" className="flex justify-center items-center p-3 bg-white rounded-xl space-x-2 cursor-pointer shadow-sm active:scale-95 transition-transform">
              <MdAdd className="text-gray-600 text-xl" />
              <span className="text-gray-600 font-bold">Add Menu</span>
            </div>
          </div>
          <img 
            id="footer-avatar" 
            className="w-16 h-16 rounded-full ml-4 border-2 border-white/50 object-cover" 
            src="/img/logoprofil.png"
            alt="User Avatar"
          />
        </div>
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