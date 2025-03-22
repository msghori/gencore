"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      text: "GENCORE IT transformed our business operations with their custom CRM solution. Their team was professional, responsive, and delivered exactly what we needed. We've seen a significant improvement in our efficiency and customer satisfaction.",
      name: "Ahmed Khan",
      position: "CEO, Skyline Travel",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "We've been working with GENCORE IT for our cloud infrastructure needs, and they've consistently provided exceptional service. Their technical expertise and support have been invaluable to our growing business.",
      name: "Fatima Zaidi",
      position: "CTO, MediCare Hospital",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "The e-commerce platform developed by GENCORE IT has revolutionized our online business. Their team took the time to understand our unique requirements and delivered a solution that exceeded our expectations.",
      name: "Usman Ali",
      position: "Owner, PakStyle Fashion",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  }

  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-24 bg-[#050816]">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="bg-blue-500/20 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block"
          >
            What Our Clients Say
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-3xl mx-auto text-lg">
            Success stories from businesses we've helped
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute -top-12 -left-12 text-blue-500/20">
            <Quote size={120} />
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-blue-900/20 backdrop-blur-sm p-8 md:p-12 border border-blue-800/50">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="text-center">
                  <p className="text-gray-200 text-lg md:text-xl italic mb-8 leading-relaxed">
                    "{testimonials[activeIndex].text}"
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-orange-500 mb-4">
                      <Image
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h4 className="text-white font-bold text-xl">{testimonials[activeIndex].name}</h4>
                    <p className="text-orange-400">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-orange-500 w-8" : "bg-blue-500/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-800/50 hover:bg-blue-700 text-white rounded-full p-2 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-800/50 hover:bg-blue-700 text-white rounded-full p-2 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

