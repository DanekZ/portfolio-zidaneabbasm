// src/components/Projects.js
export default function Projects() {
  return (
    <section id="projects" className="bg-white text-gray-800 p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Proyek Saya</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Analisis Data Penjualan</h3>
            <p>Menganalisis tren penjualan menggunakan Python dan visualisasi dengan Matplotlib & Seaborn.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Web Portofolio</h3>
            <p>Website portofolio pribadi ini dibuat menggunakan Next.js dan Tailwind CSS, mendukung dark mode dan responsive design.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
