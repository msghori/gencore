"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Cloud, Phone, BarChart4, Wrench, Settings } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Development & Hosting",
      description:
        "Custom website development, e-commerce solutions, and reliable web hosting services to establish your online presence.",
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Solutions",
      description:
        "Public and private cloud infrastructure, migration services, and cloud management to optimize your business operations.",
    },
    {
      icon: <Phone className="h-10 w-10" />,
      title: "PBX & VoIP Solutions",
      description:
        "Advanced telephony systems, IP-PBX installations, and VoIP services to enhance your communication infrastructure.",
    },
    {
      icon: <BarChart4 className="h-10 w-10" />,
      title: "SEO & Digital Marketing",
      description:
        "Comprehensive digital marketing strategies, SEO optimization, and social media management to boost your online visibility.",
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "IT Support & Consultancy",
      description:
        "Professional IT support, technical consultancy, and strategic guidance to address your technology challenges.",
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Custom ERP & Business Automation",
      description:
        "Tailored ERP solutions and business process automation to streamline operations and increase productivity.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="services" className="py-24 bg-[#0a1128]">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="bg-blue-500/20 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
              Our Services
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block"
          >
            What We Offer
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-3xl mx-auto text-lg">
            Comprehensive IT solutions for your business needs
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-blue-900/20 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 group hover:bg-blue-800/30 border border-blue-800/50"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="p-8">
                <div className="relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <div className="relative z-10">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              <div className="h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

