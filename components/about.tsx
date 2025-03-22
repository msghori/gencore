"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const features = [
    { icon: <CheckCircle className="h-6 w-6" />, text: "Experienced Team" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Customized Solutions" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "24/7 Support" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Affordable Pricing" },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#050816] to-[#0a1128]">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="bg-blue-500/20 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
              About Us
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block"
          >
            Your Trusted IT Partner
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-3xl mx-auto text-lg">
            Learn more about our company and mission
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            >
              Your Trusted IT Partner in Pakistan
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              GENCORE IT is a leading IT solutions provider based in Pakistan, offering comprehensive technology
              services to businesses of all sizes. With our experienced team of IT professionals, we deliver innovative
              solutions that help our clients achieve their business objectives.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-300 mb-8">
              We pride ourselves on our customer-centric approach, technical expertise, and commitment to excellence.
              Our mission is to empower businesses with cutting-edge technology solutions that drive growth, improve
              efficiency, and provide a competitive edge in today's digital landscape.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-orange-500">{feature.icon}</div>
                  <span className="text-gray-200">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-6 rounded-full shadow-lg shadow-blue-700/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-1 text-lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl opacity-30 blur-xl animate-pulse" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Our team working together"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl object-cover transform transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full">Since 2018</span>
                <h4 className="text-white text-xl font-bold mt-2">Delivering Excellence in IT</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

