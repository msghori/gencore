"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Plane, Building2, Stethoscope, ShoppingCart } from "lucide-react"

export default function CrmSolutions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const crmSolutions = [
    {
      icon: <Plane className="h-10 w-10" />,
      title: "Travel Agency CRM",
      description:
        "Streamline booking management, customer profiles, itinerary planning, and payment processing for travel agencies.",
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Property Management CRM",
      description:
        "Efficiently manage properties, tenants, maintenance requests, and financial transactions for real estate businesses.",
    },
    {
      icon: <Stethoscope className="h-10 w-10" />,
      title: "Hospital & Healthcare CRM",
      description:
        "Enhance patient management, appointment scheduling, medical records, and billing for healthcare providers.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "E-commerce CRM",
      description:
        "Optimize customer relationships, inventory management, order processing, and marketing campaigns for online stores.",
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
    <section id="crm-solutions" className="py-24 bg-gradient-to-b from-[#0a1128] to-[#050816]">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="bg-orange-500/20 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
              CRM Solutions
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block"
          >
            Industry-Specific CRM
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-3xl mx-auto text-lg">
            Specialized CRM systems tailored for different industries
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {crmSolutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 backdrop-blur-sm rounded-2xl p-8 text-center relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Left border that expands */}
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white mx-auto mb-6 transform transition-transform duration-500 group-hover:rotate-12">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

