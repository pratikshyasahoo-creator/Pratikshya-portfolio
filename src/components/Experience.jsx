import { Reveal, Title } from './Reveal'
import { experience } from '../data/portfolioData'
export default function Experience() {
  return (<section className="mx-auto max-w-3xl px-6 py-16"><Title>Experience</Title>
    <div className="relative border-l-2 border-indigo-500/30 pl-8">{experience.map((e, i) => (
      <Reveal key={e.role} delay={i * 200} className="relative"><span className="absolute -left-[41px] top-6 h-4 w-4 animate-glow rounded-full bg-indigo-500" />
        <div className="card transition hover:-translate-y-1"><p className="text-sm text-indigo-500">{e.duration}</p>
          <h3 className="text-lg font-semibold">{e.role}</h3><p className="text-slate-500">{e.org}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{e.desc}</p></div></Reveal>))}
    </div></section>)
}
