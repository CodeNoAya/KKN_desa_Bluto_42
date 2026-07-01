export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-emerald-600">
          Desa Bluto
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700">

          <li><a href="#profil" className="hover:text-emerald-600">Profil</a></li>

          <li><a href="#lapak" className="hover:text-emerald-600">Lapak</a></li>

          <li><a href="#berita" className="hover:text-emerald-600">Berita</a></li>

          <li><a href="#galeri" className="hover:text-emerald-600">Galeri</a></li>

          <li><a href="#kontak" className="hover:text-emerald-600">Kontak</a></li>

        </ul>

      </div>

    </nav>
  )
}