const keahlian = ["HTML & CSS", "JavaScript", "Tailwind CSS", "Laravel", "Python", "Java", "PostgreSQL", "MySQL"];

function Skills() {
  return (
    <section id="keahlian" className="scroll-mt-20 border-t border-line bg-white/40 dark:border-white/10 dark:bg-black/20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h2 className="font-serif text-3xl">Keahlian</h2>
            <p className="mt-4 text-sm font-light text-ink/60 dark:text-paper/60">Perangkat & teknologi yang dipelajari.</p>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 md:col-span-3 lg:grid-cols-3">
            {keahlian.map((skill, index) => (
              <li
                key={index}
                className="flex items-center gap-3 border-b border-line py-4 text-sm font-light text-ink/80 dark:border-white/10 dark:text-paper/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-green-400"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;