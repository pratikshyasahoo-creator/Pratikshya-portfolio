import { useState } from 'react'
import { Reveal, Title } from './Reveal'
import { projects, driveImg } from '../data/portfolioData'
function Shot({ src, alt }) {
  const [bad, setBad] = useState(false)
  return bad ? <div className="flex h-44 items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 text-white">{alt}</div>
    : <img src={driveImg(src)} alt={alt} onError={() => setBad(true)} className="h-44 w-full object-cover transition duration-500 group-hover:scale-110" />
}
export default function Projects() {
  return (<section className="mx-auto max-w-5xl px-6 py-16"><Title>Projects</Title>
    <div className="grid gap-6 md:grid-cols-2">{projects.map((p, i) => (
      <Reveal key={p.title} delay={i * 150}><article className="group overflow-hidden rounded-2xl border border-indigo-500/20 bg-white/70 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/30 dark:bg-slate-900/60">
        <div className="overflow-hidden"><Shot src={p.screenshot} alt={p.title} /></div>
        <div className="p-5"><h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="my-2 text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
          <div className="mb-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-500">{t}</span>)}</div>
          <div className="flex gap-3">
            <a className="btn" href={p.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            {p.github && <a className="rounded-full border border-indigo-500 px-6 py-2.5 text-sm text-indigo-500 transition hover:bg-indigo-500 hover:text-white" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </div></div></article></Reveal>))}
    </div></section>)
}
