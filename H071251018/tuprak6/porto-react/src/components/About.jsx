const dataDiri = [
  { id: 1, label: "Nama Lengkap", nilai: "Muhammad Farhan Nurrahmat Latif" },
  { id: 2, label: "Kampus", nilai: "Universitas Hasanuddin, Fakultas MIPA" },
  { id: 3, label: "Program Studi", nilai: "S1 Sistem Informasi" },
  { id: 4, label: "Angkatan", nilai: "2025, semester 3" },
  { id: 5, label: "Asal Sekolah", nilai: "SMK TI Bazma (SIJA)" },
  { id: 6, label: "Minat", nilai: "Teknologi, AI & Data, Bisnis & Keuangan" },
];

function About() {
  return (
    <section id="tentang" className="scroll-mt-20 border-t border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:top-32">Tentang Saya</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="mb-16 text-lg font-light leading-relaxed text-ink/80 dark:text-paper/80 md:text-xl">
              Saya mahasiswa semester 3 S1 Sistem Informasi di Fakultas MIPA Universitas Hasanuddin. Sebagai lulusan SMK TI
              Bazma, saya selalu tertarik pada bagaimana teknologi dapat memecahkan masalah. Saya tidak memposisikan diri
              sebagai ahli, melainkan pembelajar yang percaya bahwa sistem terbaik adalah yang menyelesaikan masalah
              pengguna dengan nilai bisnis yang nyata.
            </p>
            <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
              {dataDiri.map((item) => (
                <div key={item.id} className="bg-paper p-8 transition-colors hover:bg-white/60 dark:bg-ink dark:hover:bg-white/5">
                  <h3 className="mb-3 font-serif text-xl">{item.label}</h3>
                  <p className="text-sm font-light leading-relaxed text-ink/70 dark:text-paper/70">{item.nilai}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;