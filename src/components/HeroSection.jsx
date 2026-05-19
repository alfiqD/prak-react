export default function HeroSection() {
  return (
    <section className="bg-blue-600 text-white py-20 px-8 text-center rounded-xl mb-12 shadow-lg">
      <h1 className="text-4xl font-extrabold mb-4">Selamat Datang di Toko Kami</h1>
      <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
        Temukan berbagai produk kebutuhanmu dengan kualitas terbaik dan harga yang sangat terjangkau. 
        Belanja sekarang dan nikmati promo gratis ongkir!
      </p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-md">
        Mulai Belanja
      </button>
    </section>
  );
}