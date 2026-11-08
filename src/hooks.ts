import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollState as S } from './lib/scrollState'

gsap.registerPlugin(ScrollTrigger)

/** Scroll-scrubbed timeline that drives the 3D model + text reveals. */
export function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => build(1, 1))
      mm.add('(max-width: 767px)', () => build(0, 0.62))

      function build(k: number, sc: number) {
        Object.assign(S, { x: 1.6 * k, rot: 0, tilt: 0, scale: sc })
        gsap.timeline({ scrollTrigger: { trigger: '#main', start: 'top top', end: 'bottom bottom', scrub: 1.2 } })
          .to(S, { x: -1.6 * k, rot: Math.PI * 2, tilt: 0.25, scale: sc * 1.05, duration: 1, ease: 'none' })
          .to(S, { x: 0, rot: Math.PI * 3.5, tilt: 0, scale: sc * 0.8, duration: 1, ease: 'none' })
          .to(S, { x: 1.6 * k, rot: Math.PI * 6, tilt: -0.15, scale: sc, duration: 1, ease: 'none' })
      }

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 40, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
      gsap.from('header', { opacity: 0, y: -20, duration: 1, delay: 0.2 })
    })
    return () => ctx.revert()
  }, [])
}
