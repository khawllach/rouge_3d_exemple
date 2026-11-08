import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Petals({ count = 160 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 14
      a[i * 3 + 1] = (Math.random() - 0.5) * 10
      a[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1
    }
    return a
  }, [count])

  useFrame(({ clock, pointer }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.03 + pointer.x * 0.1
    ref.current.position.y = -window.scrollY * 0.0006
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#f0a3b5" size={0.06} transparent opacity={0.7} />
    </points>
  )
}
