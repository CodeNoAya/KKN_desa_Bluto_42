import { motion } from "framer-motion";
import {
  FaSeedling,
  FaFish,
  FaStore,
  FaMountain,
} from "react-icons/fa";

const potentials = [
  {
    title: "Pertanian",
    icon: <FaSeedling />,
    desc: "Hasil pertanian menjadi salah satu sektor utama yang menunjang perekonomian masyarakat desa.",
  },
  {
    title: "Perikanan",
    icon: <FaFish />,
    desc: "Potensi perikanan terus berkembang melalui budidaya dan hasil tangkapan masyarakat.",
  },
  {
    title: "UMKM",
    icon: <FaStore />,
    desc: "Berbagai produk lokal dihasilkan oleh pelaku UMKM untuk meningkatkan ekonomi desa.",
  },
  {
    title: "Pariwisata",
    icon: <FaMountain />,
    desc: "Desa memiliki potensi wisata alam dan budaya yang dapat menarik wisatawan.",
  },
];

export default function Potentials() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-center text-gray-800">
            Potensi Desa
          </h2>

          <div className="w-28 h-1 bg-emerald-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-center mt-8 text-gray-600 max-w-3xl mx-auto">
            Berbagai potensi unggulan Desa Bluto yang menjadi sumber
            pengembangan ekonomi dan kesejahteraan masyarakat.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {potentials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 p-8"
            >

              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-4xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}