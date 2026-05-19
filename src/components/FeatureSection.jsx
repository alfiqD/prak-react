export default function FeatureSection() {
  const features = [
    { id: 1, title: "Pengiriman Cepat", desc: "Barang sampai tujuan dalam 24 jam.", icon: "🚀" },
    { id: 2, title: "Kualitas Terjamin", desc: "Produk 100% original & bergaransi.", icon: "⭐" },
    { id: 3, title: "Layanan 24/7", desc: "Customer service siap membantu kapan pun.", icon: "🎧" },
  ];

  return (
    <section className="py-8 mb-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Kenapa Memilih Kami?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feat) => (
          <div key={feat.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="text-5xl mb-4">{feat.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{feat.title}</h3>
            <p className="text-gray-500 text-sm">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}