"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Shape } from "three"

export default function GencoreLogo({ position = [0, 0, 0], scale = 1 }) {
  const logoRef = useRef(null)
  const arrowsRef = useRef(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (arrowsRef.current) {
      // Animate the arrows with a pulsing effect
      arrowsRef.current.scale.x = 1 + Math.sin(t * 2) * 0.05
      arrowsRef.current.scale.y = 1 + Math.sin(t * 2) * 0.05
      arrowsRef.current.rotation.z = Math.sin(t * 0.5) * 0.05
    }
  })

  // Create the double arrow shape
  const createArrowShape = () => {
    const shape = new Shape()

    // First arrow
    shape.moveTo(0, 0)
    shape.lineTo(1, 1)
    shape.lineTo(0, 2)
    shape.lineTo(0.3, 1)
    shape.lineTo(0, 0)

    // Second arrow
    shape.moveTo(1, 0)
    shape.lineTo(2, 1)
    shape.lineTo(1, 2)
    shape.lineTo(1.3, 1)
    shape.lineTo(1, 0)

    return shape
  }

  const extrudeSettings = {
    steps: 2,
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 5,
  }

  return (
    <group position={position} scale={scale} ref={logoRef}>
      {/* Orange Arrows */}
      <group ref={arrowsRef} position={[0, 1, 0]}>
        <mesh>
          <extrudeGeometry args={[createArrowShape(), extrudeSettings]} />
          <meshStandardMaterial
            color="#ff8c00"
            metalness={0.8}
            roughness={0.1}
            emissive="#ff6b00"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Simple decorative spheres */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh
          key={i}
          position={[Math.cos((i / 6) * Math.PI * 2) * 2, Math.sin((i / 6) * Math.PI * 2) * 2, 0]}
          scale={0.2}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#1e3799" emissive="#1e3799" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

