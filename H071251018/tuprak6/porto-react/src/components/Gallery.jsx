import taskflow from "../assets/gallery/taskflow.png";
import punagaan from "../assets/gallery/punagaan.png";
import temanKenangan from "../assets/gallery/temankenangan.png";
import porto from "../assets/gallery/porto.png";

const daftarFoto = [
  { id: 1, src: taskflow, judul: "TaskFlow", kategori: "Web/Sistem" },
  { id: 2, src: punagaan, judul: "Punagaan", kategori: "Web/Sistem" },
  { id: 3, src: temanKenangan, judul: "Teman Kenangan", kategori: "Bisnis" },
  { id: 4, src: porto, judul: "Web Porto", kategori: "Web/Sistem" },
];

function Gallery() {
  return (
    <section id="galeri" className="scroll-mt-20 border-t border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="mb-16 font-serif text-3xl md:text-4xl">Galeri</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {daftarFoto.map((foto) => (
            <figure key={foto.id} className="group">
              <div className="overflow-hidden rounded bg-line/20 dark:bg-white/5">
                <img
                  src={foto.src}
                  alt={foto.judul}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <figcaption className="pt-4">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-accent dark:text-green-400">
                  {foto.kategori}
                </span>
                <span className="mt-1 block font-serif text-xl">{foto.judul}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery; 