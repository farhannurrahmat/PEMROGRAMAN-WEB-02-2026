function RingkasanPesanan ({pesanan, totalItem, totalHarga}) {
    return (
        <section className="rounded-xl bg-white p-4 shadow">
            <h2 className="mb-3 text-lg font-bold">Ringkasan Pesanan</h2>

            {pesanan.length === 0 ? (
                <p className="text-sm text-gray-500">Belum ada pesanan.</p>
            ) : (
                <ul className="space-y-2">
                {pesanan.map((item) => (
                    <li key={item.id} className="flex justify-between text-sm">
                    <span>
                        {item.nama} × {item.jumlah}
                    </span>
                    <span>Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}</span>
                    </li>
                ))}
                </ul>
            )}

            <div className="mt-3 border-t pt-3 text-sm font-semibold">
                <p>Jumlah item: {totalItem}</p>
                <p>Total: Rp {totalHarga.toLocaleString("id-ID")}</p>
            </div>
        </section>
    )
}

export default RingkasanPesanan;