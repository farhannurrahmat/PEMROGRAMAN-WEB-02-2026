function Hero() {
  const handleClick = () => {
    console.log("Tombol di klik");
    document.getElementById("galeri")?.scrollIntoView();
  };

  return (
    <section
      id="beranda"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28"
    >
      <div className="order-2 md:order-1">
        <span className="mb-6 inline-block rounded-full border border-accent/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent dark:border-green-400/30 dark:text-green-400 md:text-xs">
          Mahasiswa Sistem Informasi, Universitas Hasanuddin
        </span>
        <h1 className="mb-8 font-serif text-5xl leading-[1.05] tracking-tight text-ink dark:text-paper md:text-7xl lg:text-[5rem]">
          Halo, Saya <br />
          <span>Farhan</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg font-light leading-relaxed text-ink/70 dark:text-paper/70">
          Mahasiswa Sistem Informasi Universitas Hasanuddin yang membangun
          solusi teknologi dengan nilai bisnis nyata.
        </p>
        <button
          onClick={handleClick}
          className="rounded bg-ink px-8 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-80 dark:bg-paper dark:text-ink"
        >
          Lihat Galeri
        </button>
      </div>
      <div className="order-1 md:order-2">
        <img
          src="/hero.jpeg"
          alt="Foto Farhan"
          className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl object-cover object-top md:mx-0 md:ml-auto"        />
      </div>
    </section>
  );
}

export default Hero;
