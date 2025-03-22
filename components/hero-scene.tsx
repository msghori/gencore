"use client"

import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Text3D, Float, Html, Sparkles, Stars } from "@react-three/drei"
import { MathUtils } from "three"
import { Button } from "@/components/ui/button"
import GencoreLogo from "./gencore-logo"

export default function HeroScene() {
  const { viewport } = useThree()
  const groupRef = useRef(null)
  const textRef = useRef(null)
  const particlesRef = useRef(null)

  // Responsive positioning based on viewport
  const isMobile = viewport.width < 5
  const textPosition = isMobile ? -1.5 : -1
  const textScale = isMobile ? 0.5 : 0.7
  const buttonPosition = isMobile ? -3 : -2.5

  useFrame(({ clock, mouse }) => {
    const elapsedTime = clock.getElapsedTime()

    if (groupRef.current) {
      // Sophisticated floating animation
      groupRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.1

      // Subtle rotation based on mouse position with smooth interpolation
      groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y || 0, mouse.x * 0.2, 0.05)
      groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x || 0, mouse.y * 0.1, 0.05)
    }

    if (textRef.current) {
      // Subtle text animation with different frequency
      textRef.current.position.y = Math.sin(elapsedTime * 0.8) * 0.05 + textPosition
    }

    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = elapsedTime * 0.05
      particlesRef.current.rotation.x = elapsedTime * 0.03
    }

    // REMOVED: Direct camera manipulation that was causing the error
  })

  return (
    <>
      {/* Environment and lighting */}
      <color attach="background" args={["#050816"]} />
      <fog attach="fog" args={["#050816", 15, 30]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#ff8c00" />

      {/* Particles and atmosphere */}
      <group ref={particlesRef}>
        <Sparkles count={100} scale={15} size={2} speed={0.3} color="#ff8c00" />
        <Sparkles count={100} scale={12} size={1} speed={0.2} color="#1e3799" />
        <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      </group>

      {/* Main content group */}
      <group ref={groupRef}>
        {/* 3D Logo with enhanced materials */}
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8} position={[0, 0.5, 0]}>
          <GencoreLogo position={[0, 0, 0]} scale={isMobile ? 0.8 : 1} />

          {/* Decorative elements */}
          <mesh position={[0, 0, -1]} scale={3}>
            <torusGeometry args={[1, 0.05, 16, 100]} />
            <meshStandardMaterial color="#1e3799" metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>

        {/* 3D Text with enhanced materials */}
        <group ref={textRef} position={[0, textPosition, 0]}>
          <Float speed={3} rotationIntensity={0.2} floatIntensity={0.3}>
            <Text3D
              font="/fonts/Geist_Bold.json"
              size={textScale}
              height={0.2}
              curveSegments={32}
              bevelEnabled
              bevelThickness={0.03}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={10}
              position={[-3.5, 0, 0]}
            >
              GENCORE IT
              <meshStandardMaterial
                color="#1e3799"
                metalness={0.8}
                roughness={0.2}
                emissive="#1e3799"
                emissiveIntensity={0.2}
              />
            </Text3D>
          </Float>

          <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
            <Text3D
              font="/fonts/Geist_Regular.json"
              size={textScale * 0.4}
              height={0.05}
              curveSegments={24}
              position={[-3, -0.8, 0]}
            >
              Next Generation IT Solutions
              <meshStandardMaterial
                color="#ff8c00"
                metalness={0.9}
                roughness={0.2}
                emissive="#ff8c00"
                emissiveIntensity={0.5}
              />
            </Text3D>
          </Float>
        </group>

        {/* Interactive Buttons with enhanced styling */}
        {/* <Html position={[0, buttonPosition, 0]} transform center> */}
        {/* <div className="flex gap-4 flex-col sm:flex-row">
            <Button
              className="bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] hover:from-[#ff6b00] hover:to-[#ff5500] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Our Services
            </Button>
            <Button
              className="bg-transparent backdrop-blur-md border-2 border-[#1e3799] text-white hover:bg-[#1e3799]/20 px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact Us
            </Button>
          </div> */}
        {/* </Html> */}
      </group>
    </>
  )
}

