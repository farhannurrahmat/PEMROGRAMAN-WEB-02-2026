import { useState } from "react";

function FormPesan ({totalItem, onKirim}) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [error, setError] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const errorBaru = [];
    const nomorMeja = Number(meja);

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }
    if (meja === "" || !Number.isInteger(nomorMeja) || nomorMeja < 1) {
      errorBaru.meja = "Nomor meja harus angka bulat minimal 1.";
    }
    if (totalItem === 0) {
      errorBaru.pesanan = "Pesanan masih kosong, pilih menu dulu.";
    }

    setError(errorBaru);
    if (Object.keys(errorBaru).length > 0) return;

    onKirim(nama.trim(), nomorMeja);
    setNama("");
    setMeja("");
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-xl bg-white p-4 shadow">
      <h2 className="text-lg font-bold">Data Pemesan</h2>

      <div>
        <label htmlFor="nama" className="block text-sm font-medium">Nama</label>
        <input
          id="nama"
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full rounded border p-2"
        />
        {error.nama && <p className="text-sm text-red-600">{error.nama}</p>}
      </div>

      <div>
        <label htmlFor="meja" className="block text-sm font-medium">Nomor Meja</label>
        <input
          id="meja"
          type="number"
          min="1"
          value={meja}
          onChange={(e) => setMeja(e.target.value)}
          className="w-full rounded border p-2"
        />
        {error.meja && <p className="text-sm text-red-600">{error.meja}</p>}
      </div>

      {error.pesanan && <p className="text-sm text-red-600">{error.pesanan}</p>}

      <button
        type="submit"
        className="w-full rounded-lg bg-amber-700 py-2 text-white hover:bg-amber-800"
      >
        Kirim Pesanan
      </button>
    </form>
  );
}

export default FormPesan