import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { HWM2 } from "../HWM2"
import { Canvas } from "@react-three/fiber"

const HWM2Canvas = () => {
  return (
    <Canvas
      className="bg-slate-200 p-2"
      camera={{
        position: [2, 0, 6], fov: 15
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />

      <Suspense fallback={null}>
        <HWM2 />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default HWM2Canvas