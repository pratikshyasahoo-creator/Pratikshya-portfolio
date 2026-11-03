import { Reveal, Title } from './Reveal'
import Icon from './Icon'
import { certificates, extraActivities } from '../data/portfolioData'
export default function Certificates() {
  return (<section className="mx-auto max-w-3xl px-6 py-16"><Title>Certificates & Activities</Title>
    <div className="space-y-4">{certificates.map((c, i) => (
      <Reveal key={c.title} delay={i * 150}><div className="card flex flex-wrap items-center justify-between gap-4 transition hover:-translate-y-1">
        <div className="flex items-center gap-3"><span className="text-indigo-500"><Icon n="award" className="h-8 w-8" /></span><h3 className="font-medium">{c.title}</h3></div>
        <a className="btn" href={c.link} target="_blank" rel="noopener noreferrer">View Certificate</a></div></Reveal>))}</div>
    <Reveal delay={200}><h3 className="mb-3 mt-10 font-semibold text-indigo-500">Extra Activities</h3>
      <div className="flex flex-wrap gap-3">{extraActivities.map((a) => <span key={a} className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-500 transition hover:scale-105">{a}</span>)}</div></Reveal>
  </section>)
}
