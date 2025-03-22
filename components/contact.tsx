"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, CheckCircle, Loader2 } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

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

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      text: "Office # 911 MM Tower, Lahore, Pakistan",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      text: "+92 333 0000911",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      text: "info@gencoreit.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      text: "Monday - Friday: 9:00 AM - 6:00 PM",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#050816] to-[#0a1128]">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="bg-orange-500/20 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
              Contact Us
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block"
          >
            Get In Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-3xl mx-auto text-lg">
            We'd love to hear from you. Reach out to us anytime.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-6">
              Let's Connect
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-300 mb-8">
              Have questions about our services or want to discuss your IT needs? Reach out to us using the contact
              information below or fill out the form, and we'll get back to you as soon as possible.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white mr-4`}
                  >
                    {item.icon}
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-200">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-white transition-all duration-300 hover:bg-gradient-to-r from-blue-600 to-orange-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div
              variants={itemVariants}
              className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-800/50 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-orange-600/5 pointer-events-none" />

              {submitSuccess ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white mx-auto mb-6">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">Your message has been sent successfully. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="grid gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block mb-2 font-medium text-white">
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-blue-900/30 border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder:text-gray-400"
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block mb-2 font-medium text-white">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-blue-900/30 border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder:text-gray-400"
                        placeholder="Your email address"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="phone" className="block mb-2 font-medium text-white">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 bg-blue-900/30 border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder:text-gray-400"
                        placeholder="Your phone number"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="subject" className="block mb-2 font-medium text-white">
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-blue-900/30 border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder:text-gray-400"
                        placeholder="Message subject"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="message" className="block mb-2 font-medium text-white">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-blue-900/30 border border-blue-700/50 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder:text-gray-400"
                        placeholder="Your message"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

