"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"

export default function CameraAnimation() {
  const cameraRef = useRef(null)

  useFrame(({ clock }) => {
    if (cameraRef.current) {
      const t = clock.getElapsedTime()
      // Update the camera position using the ref
      cameraRef.current.position.x = Math.sin(t * 0.2) * 0.5
      cameraRef.current.position.y = Math.cos(t * 0.2) * 0.5
      cameraRef.current.lookAt(0, 0, 0)
    }
  })

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={50} />
}

