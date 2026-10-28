function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="bg-ink py-10 text-center text-sm font-light text-paper dark:bg-black">
      <p>&copy; {tahun} Muhammad Farhan Nurrahmat Latif</p>
    </footer>
  );
}

export default Footer;