import Button from "./Button"; // Kita pakai komponen Button buatanmu!

export default function ProductSection() {
  const products = [
    { id: 1, name: "Laptop Asus", price: "Rp 8.000.000", img: "💻" },
    { id: 2, name: "Sepatu Sport", price: "Rp 450.000", img: "👟" },
    { id: 3, name: "Jam Tangan", price: "Rp 799.000", img: "⌚" },
  ];

  return (
    <section className="py-10 mb-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Produk Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((prod) => (
          <div key={prod.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
            {/* Tempat untuk gambar produk, di sini pakai emoji besar */}
            <div className="text-7xl py-10 bg-gray-50 rounded-md mb-4">{prod.img}</div>
            <h3 className="text-lg font-bold text-gray-700">{prod.name}</h3>
            <p className="text-blue-600 font-extrabold mb-5 mt-1">{prod.price}</p>
            <Button type="primary">Masukkan Keranjang</Button>
          </div>
        ))}
      </div>
    </section>
  );
}