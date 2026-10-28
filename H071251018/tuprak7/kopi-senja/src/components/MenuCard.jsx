import { useState } from "react";

function MenuCard({ menu, onTambah }) {
    const [detailTerbuka, setDetailTerbuka] = useState(false);
    const { nama, kategori, harga, tersedia, deskripsi } = menu;

   return (
    <div className="rounded-xl bg-white p-4 shadow">
      <span className="text-xs font-medium text-amber-700">{kategori}</span>
      <h3 className="text-lg font-semibold">{nama}</h3>
      <p className="mb-2 text-gray-700">Rp {harga.toLocaleString("id-ID")}</p>

      <button
        onClick={() => setDetailTerbuka((buka) => !buka)}
        className="mb-2 text-sm text-amber-700 underline"
      >
        {detailTerbuka ? "Tutup detail" : "Lihat detail"}
      </button>

      {detailTerbuka && <p className="mb-3 text-sm text-gray-600">{deskripsi}</p>}

      <button
        onClick={() => onTambah(menu)}
        disabled={!tersedia}
        className="w-full rounded-lg bg-amber-700 py-2 text-white hover:bg-amber-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {tersedia ? "Tambah" : "Habis"}
      </button>
    </div>
  );
}

export default MenuCard;