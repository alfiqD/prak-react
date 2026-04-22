import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Orders() {
    return (
        <div id="orders-container" className="p-6">
            
            {/* Bagian PageHeader saja yang kita isi dengan props */}
            <PageHeader 
                title="Orders" 
                breadcrumb={["Dashboard", "Orders"]}
            >
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-md">
                    + Add Orders
                </button>
            </PageHeader>

            {/* Konten asli kamu tetap utuh di bawah sini */}
            <p>Ini Halaman Orders</p>
            
        </div>
    );
}