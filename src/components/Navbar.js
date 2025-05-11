// src/components/Navbar.js
export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Zidane Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-blue-400">
              Tentang
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">
              Proyek
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
