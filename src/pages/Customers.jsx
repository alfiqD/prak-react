import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Customers() {
    return (
        <div id="dashboard-container" className="p-6">
            
            {/* Bagian PageHeader saja yang kita isi dengan props */}
            <PageHeader 
                title="Customers" 
                breadcrumb={["Dashboard", "Customers"]}
            >
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-md">
                    + Add Customers
                </button>
            </PageHeader>

            {/* Konten asli kamu tetap utuh di bawah sini */}
            <p>Ini Halaman Customers</p>
            
        </div>
    );
}