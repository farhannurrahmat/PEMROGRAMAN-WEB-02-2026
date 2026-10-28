const menus = [
  { id: 1, nama: "Beranda", href: "#beranda" },
  { id: 2, nama: "Tentang", href: "#tentang" },
  { id: 3, nama: "Keahlian", href: "#keahlian" },
  { id: 4, nama: "Galeri", href: "#galeri" },
];

function Navbar() {
  const gantiTema = () => {
    const gelap = document.documentElement.classList.toggle("dark");
    localStorage.setItem("tema", gelap ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 text-ink backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-ink/90 dark:text-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5">
        <a href="#" className="font-serif text-2xl tracking-tight transition-opacity hover:opacity-70">
          Farhan
        </a>
        <nav className="flex items-center gap-5 sm:gap-10">
          <ul className="flex gap-5 text-sm font-medium tracking-wide sm:gap-10">
            {menus.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.href}
                  onClick={() => console.log(menu.nama)}
                  className="transition-colors hover:text-accent dark:hover:text-green-400"
                >
                  {menu.nama}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={gantiTema} aria-label="Ganti tema" className="transition-opacity hover:opacity-70">
            <svg className="hidden h-5 w-5 dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg className="block h-5 w-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;