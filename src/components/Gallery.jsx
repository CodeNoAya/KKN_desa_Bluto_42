import { motion } from "framer-motion";

const gallery = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    title: "Pemandangan Desa",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200",
    title: "Sawah",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200",
    title: "Rumah Warga",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    title: "Kegiatan Desa",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200",
    title: "Perkebunan",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200",
    title: "Panen",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-gray-800">
            Galeri Desa
          </h2>

          <div className="w-28 h-1 bg-emerald-500 rounded-full mx-auto mt-5"></div>

          <p className="text-center mt-8 text-gray-600 max-w-3xl mx-auto">
            Dokumentasi kegiatan, potensi alam, dan kehidupan masyarakat Desa Bluto.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">

          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="relative">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-end">

                  <h3 className="text-white text-xl font-semibold p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                    {item.title}
                  </h3>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}