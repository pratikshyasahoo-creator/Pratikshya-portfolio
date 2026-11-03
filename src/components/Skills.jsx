import { Reveal, Title, useInView } from './Reveal'
import { skills } from '../data/portfolioData'
function Bar({ name, level, percent }) {
  const [ref, seen] = useInView()
  return (<div ref={ref} className="mb-3">
    <div className="mb-1 flex justify-between text-sm">
      <span>{name}</span>
      <span className="text-indigo-500">{level}</span>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-indigo-500/15">
      <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-1000 ease-out" style={{ width: seen ? `${percent}%` : 0 }} />
    </div>
  </div>)
}
export default function Skills() {
  return (<section className="mx-auto max-w-4xl px-6 py-16"><Title>Skills</Title>
    <div className="grid gap-5 md:grid-cols-2">{skills.map((g, i) => (
      <Reveal key={g.group} delay={i * 100}>
        <div className="card h-full">
          <h3 className="mb-4 font-semibold text-indigo-500">{g.group}</h3>
          {g.items.map((s) => <Bar key={s.name} {...s} />)}
        </div>
      </Reveal>))}
    </div></section>)
}
