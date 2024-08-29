import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { AirPurifier } from "../AirPurifier"

const AirPurifierCanvas = () => {
  return (
    <Canvas
      className="bg-slate-200 p-2"
      camera={{
        position: [2, 0, 1], fov: 15
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />

      <Suspense fallback={null}>
        <AirPurifier />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default AirPurifierCanvas