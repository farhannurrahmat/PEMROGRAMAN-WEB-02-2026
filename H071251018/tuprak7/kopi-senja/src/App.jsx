import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

const dataMenu = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." },
]

const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]);
  const [ucapan, setUcapan] = useState("");

  const menuTampil = kategoriAktif === "Semua" ? dataMenu : dataMenu.filter((menu) => menu.kategori === kategoriAktif);
  const totalItem = pesanan.reduce((jumlah, item) => jumlah + item.jumlah, 0);
  const totalHarga = pesanan.reduce((total, item) => total + item.harga * item.jumlah, 0);

  function tambahPesanan(menu) {
    if (!menu.tersedia) return;
    setUcapan("");
    setPesanan((lama) => {
      const sudahAda = lama.find((item) => item.id === menu.id);
      if (sudahAda) {
        return lama.map((item) => 
        item.id === menu.id ? {... item, jumlah: item.jumlah + 1} : item );
      }
      return [...lama, {id: menu.id, nama: menu.nama, harga: menu.harga, jumlah: 1}]
    });
  }

  function kirimPesanan (nama, meja) {
    setPesanan ([]);
    setUcapan(`Terima kasih, ${nama}! Pesanan untuk meja ${meja} sedang disiapkan.`);
  }

  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <Navbar
        daftarKategori={daftarKategori}
        kategoriAktif={kategoriAktif}
        onPilihKategori={setKategoriAktif}
        totalItem={totalItem}
        totalHarga={totalHarga}
      />
      <main className="mx-auto w-full max-w-7xl flex-1 p-4">
        {ucapan !== "" && (
          <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-800">{ucapan}</div>
        )}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MenuList daftarMenu={menuTampil} onTambah={tambahPesanan} />
          </div>
          <div className="space-y-6">
            <RingkasanPesanan pesanan={pesanan} totalItem={totalItem} totalHarga={totalHarga} />
            <FormPesan totalItem={totalItem} onKirim={kirimPesanan} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;