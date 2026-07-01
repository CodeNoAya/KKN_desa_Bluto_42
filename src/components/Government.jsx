import { motion } from "framer-motion";

const officials = [
  {
    name: "Ahmad Fauzi",
    position: "Kepala Desa",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
  },
  {
    name: "Siti Rahma",
    position: "Sekretaris Desa",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
  },
  {
    name: "Budi Santoso",
    position: "Kaur Pemerintahan",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
  },
  {
    name: "Dewi Lestari",
    position: "Kaur Keuangan",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
  },
];

export default function Government() {
  return (
    <section id="pemerintahan" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-gray-800">
            Pemerintahan Desa
          </h2>

          <div className="w-28 h-1 bg-emerald-500 rounded-full mx-auto mt-5"></div>

          <p className="text-center mt-8 text-gray-600 max-w-3xl mx-auto">
            Aparatur Desa Bluto yang berkomitmen memberikan pelayanan terbaik
            kepada masyarakat.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {officials.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {person.name}
                </h3>

                <p className="mt-2 text-emerald-600 font-medium">
                  {person.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}