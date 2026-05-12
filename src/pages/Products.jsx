import productsData from "../data/products.json";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="p-4">
      <PageHeader title="Daftar Produk" breadcrumb={["Home", "Products"]} />

      <div className="mt-4 overflow-x-auto rounded-3xl shadow-sm border border-slate-200 bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Produk</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Harga</th>
              <th className="px-4 py-3">Stok</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((p) => {
              // Menggunakan p.nama sesuai JSON
              const title = p.nama;
              const imageUrl = `https://via.placeholder.com/120x90.png?text=${encodeURIComponent(title)}`;

              return (
                <tr key={p.id} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-600">{p.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={imageUrl}
                        alt={title}
                        className="h-14 w-20 rounded-xl object-cover border border-slate-200"
                      />
                      <Link
                        to={`/products/${p.id}`}
                        className="font-semibold text-emerald-600 hover:text-emerald-500"
                      >
                        {title}
                      </Link>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{p.kategori}</td>
                  <td className="px-4 py-3 text-slate-800 font-semibold">
                    Rp {p.harga.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{p.stok}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}