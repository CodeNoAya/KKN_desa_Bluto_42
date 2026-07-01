import { motion } from "framer-motion";
import {
  FaStar,
  FaShoppingBag
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Kerupuk Ikan",
    price: "Rp25.000",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900",
  },
  {
    id: 2,
    name: "Batik Lokal",
    price: "Rp120.000",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900",
  },
  {
    id: 3,
    name: "Anyaman Bambu",
    price: "Rp80.000",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=900",
  },
  {
    id: 4,
    name: "Kopi Desa",
    price: "Rp45.000",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900",
  },
];

export default function Marketplace() {
  return (
    <section
      id="lapak"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-center text-gray-800">
            Lapak UMKM Desa
          </h2>

          <div className="w-28 h-1 bg-emerald-500 mx-auto mt-5 rounded-full"></div>

          <p className="mt-8 text-center text-gray-600 max-w-3xl mx-auto">
            Dukung produk lokal masyarakat Desa Bluto dengan membeli
            hasil karya terbaik UMKM desa.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {products.map((product, index) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h3>

                <div className="flex justify-between items-center mt-4">

                  <span className="font-bold text-emerald-600">
                    {product.price}
                  </span>

                  <span className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    {product.rating}
                  </span>

                </div>

                <button
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 flex items-center justify-center gap-2 transition"
                >
                  <FaShoppingBag />
                  Lihat Produk
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}