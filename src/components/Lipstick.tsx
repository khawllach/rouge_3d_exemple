import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { scrollState as S } from '../lib/scrollState'

interface Props { color: string }

export default function Lipstick({ color }: Props) {
  const group = useRef<THREE.Group>(null!)
  const bulletMat = useRef<THREE.MeshPhysicalMaterial>(null!)
  const target = useMemo(() => new THREE.Color(), [])

  const profile = useMemo(
    () => ([[0, 0], [0.4, 0], [0.4, 0.85], [0.37, 1.12], [0.26, 1.3], [0, 1.38]] as const)
      .map(([x, y]) => new THREE.Vector2(x, y)),
    []
  )

  useFrame(({ pointer }, dt) => {
    const g = group.current
    const d = THREE.MathUtils.damp
    g.position.x = d(g.position.x, S.x, 4, dt)
    g.scale.setScalar(d(g.scale.x, S.scale, 4, dt))
    g.rotation.y = d(g.rotation.y, S.rot + pointer.x * 0.5, 4, dt)
    g.rotation.x = d(g.rotation.x, S.tilt - pointer.y * 0.25, 4, dt)
    g.rotation.z = d(g.rotation.z, -pointer.x * 0.05, 4, dt)
    bulletMat.current.color.lerp(target.set(color), 1 - Math.exp(-6 * dt))
  })

  const gold = { color: '#d9b27c', metalness: 1, roughness: 0.22 }
  const pearl = { color: '#fff7f5', metalness: 0.2, roughness: 0.15, clearcoat: 1 }

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0} floatIntensity={0.6}>
        <mesh position={[0, -1.45, 0]}>
          <cylinderGeometry args={[0.62, 0.62, 0.9, 64]} />
          <meshPhysicalMaterial {...gold} />
        </mesh>
        <mesh position={[0, -0.94, 0]}>
          <cylinderGeometry args={[0.64, 0.64, 0.12, 64]} />
          <meshPhysicalMaterial {...pearl} />
        </mesh>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.56, 0.56, 1.2, 64]} />
          <meshPhysicalMaterial {...gold} />
        </mesh>
        <mesh position={[0, 0.37, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.14, 64]} />
          <meshPhysicalMaterial {...pearl} />
        </mesh>
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.46, 0.46, 0.5, 64]} />
          <meshPhysicalMaterial {...gold} />
        </mesh>
        <mesh position={[0, 0.95, 0]}>
          <latheGeometry args={[profile, 64]} />
          <meshPhysicalMaterial ref={bulletMat} color={color} roughness={0.3} clearcoat={0.8} />
        </mesh>
      </Float>
    </group>
  )
}
