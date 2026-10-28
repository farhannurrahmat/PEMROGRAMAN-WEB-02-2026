 function Navbar ({daftarKategori, kategoriAktif, onPilihKategori, totalItem, totalHarga}) {
    return (
        <header className="sticky top-0 z-10 bg-amber-800 text-white shadow">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 p-4">
                <h1 className="text-xl font-bold">Kedai Kopi Senja</h1>
                <p className="text-sm">
                {totalItem} item · Rp {totalHarga.toLocaleString("id-ID")}
                </p>
            </div>
            <nav className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 pb-3">
                {daftarKategori.map((kategori) => (
                <button
                    key={kategori}
                    onClick={() => onPilihKategori(kategori)}
                    className={`rounded-full px-4 py-1 text-sm ${
                    kategori === kategoriAktif
                        ? "bg-white text-amber-800"
                        : "bg-amber-700 hover:bg-amber-600"
                    }`}
                >
                    {kategori}
                </button>
                ))}
            </nav>
        </header>
    )
 }

 export default Navbar