import { Reveal, Title } from './Reveal'
import Icon from './Icon'
import { personal, education } from '../data/portfolioData'
export default function About() {
  const info = [['edu', 'Studying', education[0].degree], ['pin', 'Location', personal.location], ['code', 'Interests', 'Web Development, AI, ML & Data Science']]
  return (<section className="mx-auto max-w-4xl px-6 py-16"><Title>About Me</Title>
    <div className="space-y-4 text-slate-600 dark:text-slate-400">{personal.about.map((p, i) => <Reveal key={i} delay={i * 120}><p>{p}</p></Reveal>)}</div>
    <div className="mt-10 grid gap-4 sm:grid-cols-3">{info.map(([ic, k, v], i) => (
      <Reveal key={k} delay={i * 150}><div className="card h-full transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30">
        <span className="text-indigo-500"><Icon n={ic} className="h-6 w-6" /></span><h3 className="mt-2 font-semibold">{k}</h3><p className="text-sm text-slate-500">{v}</p></div></Reveal>))}
    </div></section>)
}
