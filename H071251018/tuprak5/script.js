const daftarAnggota = document.getElementById("daftarAnggota");
const statusAnggota = document.getElementById("statusAnggota");
const errorAnggota = document.getElementById("errorAnggota");
const judulTugas = document.getElementById("judulTugas");
const ringkasan = document.getElementById("ringkasan");
const barProgres = document.getElementById("barProgres");
const inputCari = document.getElementById("inputCari");
const formTugas = document.getElementById("formTugas");
const inputJudul = document.getElementById("inputJudul");
const tombolSimpan = document.getElementById("tombolSimpan");
const pesanForm = document.getElementById("pesanForm");
const notifikasi = document.getElementById("notifikasi");
const statusTugas = document.getElementById("statusTugas");
const errorTugas = document.getElementById("errorTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanKosong = document.getElementById("pesanKosong");

async function muatAnggota() {
  statusAnggota.textContent = "Memuat anggota...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Server membalas dengan status " + response.status);
    }
    const daftar = await response.json();

    statusAnggota.textContent = "";
    for (const anggota of daftar) {
      const tombol = document.createElement("button");
      tombol.className = "rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100";
      tombol.textContent = anggota.name;
      tombol.addEventListener("click", function () {
        pilihAnggota(anggota, tombol);
      });
      daftarAnggota.appendChild(tombol);
    }
  } catch (error) {
    statusAnggota.textContent = "";
    errorAnggota.textContent = "Gagal memuat anggota: " + error.message;
  }
}

function pilihAnggota(anggota, tombol) {
  for (const t of daftarAnggota.children) {
    t.classList.remove("bg-blue-50", "text-blue-700", "font-semibold");
  }
  tombol.classList.add("bg-blue-50", "text-blue-700", "font-semibold");

  judulTugas.textContent = "Tugas " + anggota.name;
  inputCari.value = "";
  muatTugas(anggota.id);
}

async function muatTugas(id) {
  daftarTugas.innerHTML = "";
  ringkasan.textContent = "";
  barProgres.style.width = "0%";
  errorTugas.textContent = "";
  pesanKosong.textContent = "";
  statusTugas.textContent = "Memuat tugas...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=" + id);
    if (!response.ok) {
      throw new Error("Server membalas dengan status " + response.status);
    }
    const daftar = await response.json();

    statusTugas.textContent = "";
    for (const tugas of daftar) {
      daftarTugas.appendChild(buatItemTugas(tugas));
    }
    perbaruiRingkasan();
  } catch (error) {
    statusTugas.textContent = "";
    errorTugas.textContent = "Gagal memuat tugas: " + error.message;
  }
}

inputCari.addEventListener("input", cariTugas);

function buatItemTugas(tugas) {
  const li = document.createElement("li");
  li.className = "flex items-center gap-3 border-b border-gray-100 py-3";

  const judul = document.createElement("span");
  judul.className = "flex-1 text-sm";
  judul.textContent = tugas.title;
  li.appendChild(judul);

  if (tugas.completed) {
    judul.classList.add("line-through", "text-gray-400");
  } else {
    const tombolSelesai = document.createElement("button");
    tombolSelesai.className = "text-xs text-gray-400 hover:text-gray-700";
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.addEventListener("click", function () {
      judul.classList.add("line-through", "text-gray-400");
      tombolSelesai.remove();
      perbaruiRingkasan();
    });
    li.appendChild(tombolSelesai);
  }

  const tombolHapus = document.createElement("button");
  tombolHapus.className = "text-xs text-gray-400 hover:text-gray-700";
  tombolHapus.textContent = "Hapus";
  tombolHapus.addEventListener("click", function () {
    li.remove();
    perbaruiTampilan();
  });
  li.appendChild(tombolHapus);

  return li;
}

function perbaruiRingkasan() {
  const total = daftarTugas.children.length;
  const selesai = daftarTugas.querySelectorAll(".line-through").length;
  ringkasan.textContent = selesai + " dari " + total + " tugas selesai";
  barProgres.style.width = total === 0 ? "0%" : (selesai / total) * 100 + "%";
}

function cariTugas() {
  const kataKunci = inputCari.value.toLowerCase();
  let adaYangCocok = false;

  for (const li of daftarTugas.children) {
    const judul = li.children[0].textContent.toLowerCase();
    if (judul.includes(kataKunci)) {
      li.classList.remove("hidden");
      adaYangCocok = true;
    } else {
      li.classList.add("hidden");
    }
  }

  if (daftarTugas.children.length > 0 && !adaYangCocok) {
    pesanKosong.textContent = "Tidak ada tugas yang cocok";
  } else {
    pesanKosong.textContent = "";
  }
}

function perbaruiTampilan() {
  perbaruiRingkasan();
  cariTugas();
}

function simpanTugas(judul) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let sudahAda = false;
      for (const li of daftarTugas.children) {
        if (li.children[0].textContent.toLowerCase() === judul.toLowerCase()) {
          sudahAda = true;
        }
      }

      if (sudahAda) {
        reject(new Error("Tugas \"" + judul + "\" sudah ada di daftar."));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

formTugas.addEventListener("submit", async function (event) {
  event.preventDefault();
  pesanForm.textContent = "";

  const judul = inputJudul.value.trim();
  if (judul.length < 5) {
    pesanForm.textContent = "Judul tugas minimal 5 karakter.";
    return;
  }

  tombolSimpan.textContent = "Menyimpan...";

  try {
    const tugasBaru = await simpanTugas(judul);
    daftarTugas.appendChild(buatItemTugas(tugasBaru));
    perbaruiTampilan();
    inputJudul.value = "";

    notifikasi.textContent = "Tugas berhasil ditambahkan.";
    setTimeout(function () {
      notifikasi.textContent = "";
    }, 3000);
  } catch (error) {
    pesanForm.textContent = error.message;
  } finally {
    tombolSimpan.textContent = "Simpan";
  }
});

muatAnggota();