import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const news = [
  {
    id: 1,
    title: "Gotong Royong Membersihkan Lingkungan Desa",
    date: "20 Juli 2026",
    category: "Kegiatan",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900",
  },
  {
    id: 2,
    title: "Pelatihan Digital Marketing untuk UMKM",
    date: "18 Juli 2026",
    category: "UMKM",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
  },
  {
    id: 3,
    title: "Festival Budaya Desa Bluto Tahun 2026",
    date: "15 Juli 2026",
    category: "Budaya",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900",
  },
];

export default function News() {
  return (
    <section id="berita" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-center text-gray-800">
            Berita Desa
          </h2>

          <div className="w-28 h-1 bg-emerald-500 rounded-full mx-auto mt-5"></div>

          <p className="text-center mt-8 text-gray-600 max-w-3xl mx-auto">
            Ikuti informasi terbaru mengenai kegiatan, pembangunan,
            dan berbagai program yang dilaksanakan di Desa Bluto.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {news.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover hover:scale-105 transition duration-700"
              />

              <div className="p-6">

                <div className="flex justify-between text-sm">

                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  <span className="text-gray-400">
                    {item.date}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mt-5 text-gray-800">
                  {item.title}
                </h3>

                <button className="mt-8 text-emerald-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">

                  Baca Selengkapnya

                  <FaArrowRight/>

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}