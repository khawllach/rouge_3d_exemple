// Mutable object animated by GSAP ScrollTrigger and read every frame by R3F.
// Keeping it outside React state avoids re-renders on scroll.
export const scrollState = { x: 1.6, rot: 0, tilt: 0, scale: 1 }
