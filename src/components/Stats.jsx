import {
  FaUsers,
  FaStore,
  FaImages,
  FaNewspaper,
} from "react-icons/fa";

export default function Stats() {
  const data = [
    {
      title: "Penduduk",
      value: "2.547",
      icon: <FaUsers />,
    },
    {
      title: "UMKM",
      value: "85",
      icon: <FaStore />,
    },
    {
      title: "Galeri",
      value: "230",
      icon: <FaImages />,
    },
    {
      title: "Berita",
      value: "25",
      icon: <FaNewspaper />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-emerald-600 text-4xl flex justify-center mb-4">
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold text-gray-800">
                {item.value}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}