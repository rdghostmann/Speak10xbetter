"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, Award, Clock } from "lucide-react"

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Users, imgx: "", number: "500+", label: "Professionals Trained", color: "from-blue-400 to-cyan-400" },
    { icon: Award, imgx: "", number: "100%", label: "Success Rate", color: "from-cyan-400 to-blue-400" },
    { icon: TrendingUp, imgx: "", number: "95%", label: "Confidence Increase", color: "from-blue-500 to-cyan-500" },
    { icon: Clock, imgx: "", number: "8", label: "Week Program", color: "from-cyan-500 to-blue-500" },
  ]

  return (
    <section className="pb-5 px-4" ref={ref}>
      <hr className="border-white/10 my-10" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">Numbers that speak louder than words</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-blue-400/30 transition-all duration-300 text-center">
                <div className={`inline-flex p-4 rounded-full bg-linear-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
