import { useEffect, useRef, useState } from 'react'
// Small hook: true once the element scrolls into view.
export function useInView() {
  const ref = useRef(null); const [seen, setSeen] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), o.disconnect()), { threshold: 0.15 })
    ref.current && o.observe(ref.current); return () => o.disconnect()
  }, [])
  return [ref, seen]
}
// Fades and slides children in, with optional stagger delay (ms).
export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, seen] = useInView()
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
    className={`transition-all duration-700 ${seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>{children}</div>
}
export const Title = ({ children }) => (
  <h2 className="mb-10 animate-fadeUp bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">{children}</h2>
)
