import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment } from '@react-three/drei'
import Lipstick from './Lipstick'
import Petals from './Petals'

export default function Scene({ color }: { color: string }) {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 9], fov: 35 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 6]} intensity={1.1} />
        <pointLight position={[-5, 2, 3]} intensity={30} color={color} />
        <Environment preset="studio" />
        <Lipstick color={color} />
        <Petals />
        <ContactShadows position={[0, -2.6, 0]} opacity={0.35} scale={10} blur={2.8} color={color} />
      </Canvas>
    </div>
  )
}
