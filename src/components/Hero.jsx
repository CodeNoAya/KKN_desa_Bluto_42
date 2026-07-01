import { motion } from "framer-motion";

export default function Hero(){

    return(

<section className="h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 to-green-800 text-white">

<motion.div

initial={{opacity:0,y:50}}

animate={{opacity:1,y:0}}

transition={{duration:0.8}}

className="text-center"

>

<h1 className="text-7xl font-bold">

Desa Bluto

</h1>

<p className="text-2xl mt-6">

Website Resmi Desa Bluto

</p>

<button className="mt-10 bg-white text-emerald-700 px-8 py-3 rounded-2xl hover:scale-105 transition">

Jelajahi Desa

</button>

</motion.div>

</section>

    )

}