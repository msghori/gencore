"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronRight, Send } from "lucide-react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Services", href: "#services" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#" },
        { name: "Cloud Solutions", href: "#" },
        { name: "PBX & VoIP", href: "#" },
        { name: "SEO & Digital Marketing", href: "#" },
        { name: "Custom CRM Development", href: "#" },
      ],
    },
    {
      title: "CRM Solutions",
      links: [
        { name: "Travel Agency CRM", href: "#" },
        { name: "Property Management CRM", href: "#" },
        { name: "Hospital & Healthcare CRM", href: "#" },
        { name: "E-commerce CRM", href: "#" },
        { name: "Custom ERP Solutions", href: "#" },
      ],
    },
  ]

  return (
    <footer className="text-white pt-20 pb-6" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-zyI3FF0yP9wsCtVOfdxYJy0nEquo5W.jpeg"
                alt="GENCORE IT Logo"
                width={60}
                height={60}
                className="mr-3 rounded-full"
              />
              <div>
                <h3 className="font-bold text-xl">GENCORE IT</h3>
                <p className="text-orange-400 text-sm">Next Generation IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Leading IT solutions provider in Pakistan, offering comprehensive technology services to businesses of all
              sizes.
            </p>
            <div className="bg-gradient-to-r from-blue-900/30 to-blue-900/10 backdrop-blur-sm rounded-lg p-4 border border-blue-800/50">
              <p className="text-sm text-gray-300 mb-2">
                <span className="text-orange-400 font-medium">Office Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM
              </p>
              <p className="text-sm text-gray-300">
                <span className="text-orange-400 font-medium">Support:</span> 24/7 for premium clients
              </p>
            </div>
          </motion.div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div key={column.title} variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-blue-500">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    variants={itemVariants}
                    custom={linkIndex}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-1 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-blue-500">
              Newsletter
            </h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to receive updates on the latest technology trends and news.
            </p>
            <div className="space-y-4">


            </div>
          </motion.div>

          <motion.div variants={itemVariants}></motion.div>
          <motion.div variants={itemVariants}></motion.div>
          <motion.div variants={itemVariants}>

            <div className="space-y-4 pt-10">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 pl-4 pr-12 bg-blue-900/30 border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder:text-gray-400"
                  required
                />
                <Button
                  className="absolute right-0 top-0 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-md p-2"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-t border-blue-800/50 pt-6 text-center text-gray-400 text-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} GENCORE IT. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 mx-2">
                Privacy Policy
              </a>
              <span className="text-blue-800">|</span>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 mx-2">
                Terms of Service
              </a>
              <span className="text-blue-800">|</span>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 mx-2">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

