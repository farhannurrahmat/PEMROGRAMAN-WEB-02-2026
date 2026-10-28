// Data awal praktikan
const dataPraktikan = [
  { nama: "Budi", nilaiTugas: [80, 85, 90] },
  { nama: "Siti", nilaiTugas: [60, 60, 60] },
  { nama: "Andi", nilaiTugas: [90, 90, 90] },
  { nama: "Dewi", nilaiTugas: [75, 75, 75] },
  { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

const BATAS_LULUS = 75;

// Verifikasi aslab
let namaAsisten = prompt("Masukkan nama Anda (Asisten Lab):");
const asistenValid = namaAsisten !== null && namaAsisten.trim() !== "";
if (asistenValid) {
  namaAsisten = namaAsisten.trim();
}

function hitungRataRata(nilai) {
  if (nilai.length === 0) return 0;
  const total = nilai.reduce((jumlah, n) => jumlah + n, 0);
  return Number((total / nilai.length).toFixed(2));
}

function tentukanStatus(rataRata) {
  if (rataRata >= BATAS_LULUS) {
    return "Lulus";
  } else {
    return "Tidak Lulus";
  }
}

// Proses seluruh data praktikan menjadi array of objects baru
function prosesData(data) {
  return data.map(function (praktikan) {
    const rataRata = hitungRataRata(praktikan.nilaiTugas);
    return {
      nama: praktikan.nama,
      nilaiTugas: praktikan.nilaiTugas,
      rataRata: rataRata,
      status: tentukanStatus(rataRata)
    };
  });
}

const hasilAkhir = prosesData(dataPraktikan);

// Card Praktikan
function buatKartu(praktikan) {
  const lulus = praktikan.status === "Lulus";
  const kelasBadge = lulus
    ? "bg-emerald-100 text-emerald-700"
    : "bg-red-100 text-red-700";

  return (
    '<div class="flex items-center justify-between bg-white border border-slate-100 rounded-lg px-5 py-4 mb-3 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition">' +
      '<div>' +
        '<div class="text-lg font-bold">' + praktikan.nama + '</div>' +
        '<div class="text-sm font-semibold text-slate-600">Rata-rata: ' + praktikan.rataRata + '</div>' +
      '</div>' +
      '<span class="text-xs font-bold px-3.5 py-1.5 rounded-full ' + kelasBadge + '">' + praktikan.status + '</span>' +
    '</div>'
  );
}

const jumlahLulus = hasilAkhir.filter(function (p) {
  return p.status === "Lulus";
}).length;
const jumlahTidakLulus = hasilAkhir.length - jumlahLulus;

document.write('<div class="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-xl shadow-slate-300/40">');

document.write(
  '<header class="pb-4 mb-5 border-b border-slate-200">' +
    '<h1 class="text-3xl font-bold text-slate-800">Sistem Laporan Praktikum</h1>' +
    '<p class="text-sm text-slate-500 mt-0.5">Evaluasi kelulusan berbasis JavaScript murni</p>' +
  '</header>'
);

if (asistenValid) {
  document.write(
    '<div class="bg-blue-50 border-l-4 border-blue-500 rounded-lg px-5 py-4 mb-5">' +
      '<h2 class="text-lg font-bold text-blue-700">Selamat datang Asisten <span class="text-blue-600">' + namaAsisten + '</span>!</h2>' +
      '<p class="text-sm text-blue-500 mt-1">Berikut adalah laporan hasil evaluasi praktikum.</p>' +
    '</div>'
  );

  document.write(
    '<div class="flex gap-3 mb-4">' +
      '<div class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-500"><b class="block text-xl text-slate-800">' + hasilAkhir.length + '</b>Total Praktikan</div>' +
      '<div class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-500"><b class="block text-xl text-slate-800">' + jumlahLulus + '</b>Lulus</div>' +
      '<div class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-500"><b class="block text-xl text-slate-800">' + jumlahTidakLulus + '</b>Tidak Lulus</div>' +
    '</div>'
  );

  // Render semua card dengan perulangan
  for (let i = 0; i < hasilAkhir.length; i++) {
    document.write(buatKartu(hasilAkhir[i]));
  }

  document.write('<footer class="text-center text-xs text-slate-400 mt-2">Batas kelulusan: rata-rata ' + BATAS_LULUS + '</footer>');
} else {
  // Akses ditolak: laporan tidak ditampilkan
  document.write(
    '<div class="bg-red-50 border-l-4 border-red-500 rounded-lg px-5 py-4">' +
      '<h2 class="text-lg font-semibold text-red-800">Akses Ditolak</h2>' +
      '<p class="text-sm text-red-500 mt-1">Anda tidak memasukkan identitas asisten.</p>' +
    '</div>'
  );
}

document.write('</div>');

// Tampilan hasil akhir
if (asistenValid) {
  console.log("Hasil akhir evaluasi praktikum:", hasilAkhir);
} else {
  console.log("Akses ditolak: identitas asisten tidak dimasukkan.");
}