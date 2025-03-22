"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a1128] to-[#050816] text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
          Loading 3D Experience...
        </h2>
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-orange-500 border-r-blue-500 border-b-orange-500 border-l-blue-500 rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-t-blue-500 border-r-orange-500 border-b-blue-500 border-l-orange-500 rounded-full animate-spin-slow"></div>
        </div>
        <p className="mt-4 text-gray-400">Preparing an immersive experience for you...</p>
      </motion.div>
    </div>
  )
}

