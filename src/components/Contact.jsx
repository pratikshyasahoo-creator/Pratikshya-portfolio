import { useState } from 'react'
import { Reveal, Title } from './Reveal'
import Icon from './Icon'
import { personal, socials } from '../data/portfolioData'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  // No backend: opens the visitor's mail app with the details filled in.
  const send = (e) => { e.preventDefault()
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(f.message + '\n\nFrom: ' + f.name + ' (' + f.email + ')')}` }
  const cls = 'w-full rounded-xl border border-indigo-500/30 bg-transparent px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40'
  const info = [['mail', personal.email], ['phone', personal.phone], ['pin', personal.location]]
  return (<section className="mx-auto max-w-4xl px-6 py-16"><Title>Contact</Title>
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">{info.map(([ic, v], i) => <Reveal key={v} delay={i * 120}><div className="card flex items-center gap-3 py-4 transition hover:translate-x-2"><span className="text-indigo-500"><Icon n={ic} /></span><span className="break-all text-sm">{v}</span></div></Reveal>)}
        <div className="flex gap-2 text-indigo-500">{['github', 'linkedin'].map((s) => <a key={s} href={socials[s]} target="_blank" rel="noopener noreferrer" aria-label={s} className="rounded-full p-2 transition hover:-translate-y-1 hover:bg-indigo-500/10"><Icon n={s} className="h-7 w-7" /></a>)}</div></div>
      <Reveal delay={150}><form onSubmit={send} className="card space-y-4">
        <input required placeholder="Your name" aria-label="Your name" className={cls} value={f.name} onChange={set('name')} />
        <input required type="email" placeholder="Your email" aria-label="Your email" className={cls} value={f.email} onChange={set('email')} />
        <textarea required rows="4" placeholder="Your message" aria-label="Your message" className={cls} value={f.message} onChange={set('message')} />
        <button className="btn w-full">Send Message</button></form></Reveal>
    </div></section>)
}
