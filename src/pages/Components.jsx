import { useState } from "react";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import Button from "../components/Button";

import Card from "../components/Card";
import Container from "../components/Container";
import Footer from "../components/Footer";

import InputField from "../components/InputField";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";

import SelectField from "../components/SelectField";
import Table from "../components/Table";
import TextArea from "../components/TextArea";

import Alert from "../components/Alert";
import Loading from "../components/Loading";
import Modal from "../components/Modal";

import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ProductSection from "../components/ProductSection";

export default function Components() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000",
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
    },
  ];

  const categoryOptions = [
    { label: "Elektronik", value: "elektronik" },
    { label: "Fashion", value: "fashion" },
    { label: "Aksesoris", value: "aksesoris" },
  ];

  return (
    <div className="p-4">
      <PageHeader title="Components" breadcrumb={["Home", "Components"]} />

      <div className="mt-8 flex gap-4">
        {/* 1.Button  */}
        <Button type="primary">Edit</Button>
        <Button type="success">Simpan</Button>
        <Button type="danger">Hapus</Button>
      </div>

      <div className="mt-8 flex gap-4">
        {/* 2.Badge  */}
        <Badge type="success">Aktif</Badge>
        <Badge type="warning">Pending</Badge>
        <Badge type="danger">Gagal</Badge>
      </div>

      <div className="mt-8 flex gap-4">
        {/* 3. Avatar */}
        <Avatar name="Budi" />
        <Avatar name="Siti" />
      </div>

      {/* 4. Container */}
      <Container className="bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Daftar Produk</h1>

        <p className="text-gray-600">Berikut adalah daftar produk terbaru.</p>
      </Container>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Card */}
      <Card>
        <h2 className="text-xl font-bold">Judul Card</h2>
        <p className="text-gray-600">Ini adalah isi dari card.</p>
      </Card>

      {/* 7. ProductCard */}
      <ProductCard
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        title="Sepatu Sport"
        category="Fashion"
        price="Rp 450.000"
        description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
      />

      <ProductCard
        image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        title="Smartphone"
        category="Elektronik"
        price="Rp 4.500.000"
        description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
      />

      {/* 8. Table */}
      <Table headers={headers}>
        {products.map((product, index) => (
          <tr key={product.id} className="hover:bg-gray-50">
            <td className="border px-4 py-3">{index + 1}</td>
            <td className="border px-4 py-3">{product.name}</td>
            <td className="border px-4 py-3">{product.category}</td>
            <td className="border px-4 py-3">{product.price}</td>
            <td className="border px-4 py-3">
              <button className="bg-blue-600 text-white px-3 py-1 rounded">
                Detail
              </button>
            </td>
          </tr>
        ))}
      </Table>

      {/* 4.Form Components  */}
      <div className="mt-12 bg-white p-6 border border-gray-200 rounded-md max-w-lg">
        <h3 className="text-lg font-bold mb-4">Contoh Form Input</h3>

        {/* Memanggil InputField */}
        <InputField
          label="Nama Produk"
          placeholder="Masukkan nama produk..."
          name="productName"
        />

        {/* Memanggil SelectField */}
        <SelectField
          label="Kategori"
          name="category"
          options={categoryOptions}
        />

        {/* Memanggil TextArea */}
        <TextArea
          label="Deskripsi Produk"
          placeholder="Tulis deskripsi detail di sini..."
          name="description"
        />
      </div>

      {/* 5. Komponen Feedback  */}
      <div className="mt-12 bg-white p-6 border border-gray-200 rounded-md">
        <h3 className="text-lg font-bold mb-4">Contoh Feedback Component</h3>

        {/* Contoh Alert */}
        <Alert type="success">
          Data produk berhasil disimpan ke dalam sistem!
        </Alert>
        <Alert type="warning">
          Mohon lengkapi semua kolom form yang tersedia.
        </Alert>

        {/* Contoh Loading */}
        <Loading />

        {/* Contoh Tombol untuk membuka Modal */}
        <div className="mt-6">
          <button
            onClick={() => setIsModalOpen(true)} // Saat diklik, state menjadi true
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium"
          >
            Buka Modal Konfirmasi
          </button>
        </div>
      </div>

      {/* 5. Komponen Modal dipanggil di sini */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Saat tombol 'x' diklik, state menjadi false
        title="Konfirmasi Hapus Data"
      >
        <p className="mb-4 text-gray-600">
          Apakah Anda yakin ingin menghapus data produk ini? Tindakan ini tidak
          dapat dibatalkan.
        </p>
        <div className="flex justify-end gap-2">
          {/* Kita bisa menggunakan komponen Button yang sudah kita buat sebelumnya di dalam Modal! */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Batal
          </button>
          <Button type="danger">Ya, Hapus</Button>
        </div>
      </Modal>


{/* TAMPILKAN SECTION COMPONENT DI SINI */}
      <div className="mt-16 pt-8 border-t-2 border-dashed border-gray-300">
        <h2 className="text-2xl font-black mb-8 text-center text-gray-400">--- SECTION COMPONENTS ---</h2>
        
        <HeroSection />
        <FeatureSection />
        <ProductSection />
      </div>


    </div>
  );
}
