import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaLeaf, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="profil"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-gray-800">
            Profil Desa
          </h2>

          <div className="w-28 h-1 bg-emerald-500 mx-auto mt-5 rounded-full"></div>

          <p className="mt-8 text-gray-600 max-w-3xl mx-auto leading-8 text-lg">
            Desa Bluto merupakan desa yang terus berkembang melalui
            inovasi, digitalisasi pelayanan masyarakat, pengembangan
            UMKM, pertanian, dan potensi wisata lokal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-20">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-[450px] rounded-3xl overflow-hidden shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200"
                alt="Desa"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

            </div>
          </motion.div>

          {/* Isi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold text-gray-800">
              Desa Bluto
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Website ini menjadi pusat informasi desa yang memuat profil,
              pemerintahan, berita terbaru, potensi desa, hingga marketplace
              produk UMKM sebagai bentuk dukungan terhadap ekonomi masyarakat.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">

              <div className="text-center bg-emerald-50 rounded-2xl p-6">
                <FaMapMarkedAlt className="mx-auto text-3xl text-emerald-600"/>
                <p className="mt-3 font-semibold">Wilayah</p>
              </div>

              <div className="text-center bg-emerald-50 rounded-2xl p-6">
                <FaLeaf className="mx-auto text-3xl text-emerald-600"/>
                <p className="mt-3 font-semibold">Potensi</p>
              </div>

              <div className="text-center bg-emerald-50 rounded-2xl p-6">
                <FaUsers className="mx-auto text-3xl text-emerald-600"/>
                <p className="mt-3 font-semibold">Masyarakat</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}