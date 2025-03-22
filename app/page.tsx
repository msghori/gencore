"use client"

import { Suspense, useState, useEffect } from "react"
// import { Canvas } from "@react-three/fiber"
// import { Environment, OrbitControls } from "@react-three/drei"
import dynamic from "next/dynamic"
import Navbar from "../components/navbar"
import Services from "../components/services"
import CrmSolutions from "../components/crm-solutions"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"
import Footer from "../components/footer"
import About from "../components/about"
// import Loading from "../components/loading"
import FloatingActionButton from "../components/floating-action-button"
import Banner from "@/components/banner"
// import { ErrorBoundary } from "../components/error-boundary"
import './page.css'
// Dynamically import 3D components to avoid SSR issues
const HeroScene = dynamic(() => import("../components/hero-scene"), { ssr: false })
const CameraAnimation = dynamic(() => import("../components/camera-animation"), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [error3D, setError3D] = useState(false)

  // Only render 3D components after mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Error handler for 3D scene
  // const handleError = (err: any) => {
  //   console.error("Error in 3D scene:", err)
  //   setError3D(true)
  // }

  // Fallback for 3D error
  const ThreeDErrorFallback = () => (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#0a1128] to-[#050816] text-white">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">3D Experience Unavailable</h2>
        <p className="text-gray-300 max-w-md mx-auto">
          We're unable to load the 3D experience. Please try using a different browser or device.
        </p>
      </div>
    </div>
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />

      {/* 3D Hero Section */}
      {/* <section id="home" className="w-full h-screen relative">
        {mounted ? (
          error3D ? (
            <ThreeDErrorFallback />
          ) : (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary fallback={<ThreeDErrorFallback />}>
                <Canvas
                  onCreated={({ gl }) => {
                    gl.setClearColor("#050816")
                  }}
                >
              
                  <CameraAnimation />

                  <HeroScene />

                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 1.8}
                    rotateSpeed={0.5}
                  />

                  <Environment preset="city" />
                </Canvas>
              </ErrorBoundary>
            </Suspense>
          )
        ) : (
          <Loading />
        )}
      </section> */}
      <Banner />
      <About />
      <Services />
      <CrmSolutions />
      <Testimonials />
      <Contact />
      <Footer />

      <FloatingActionButton />
    </main>
  )
}

