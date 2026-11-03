import { useEffect, useState } from 'react'
import Icon from './Icon'
import { personal, socials } from '../data/portfolioData'
export default function Home({ setPage }) {
  const [i, setI] = useState(0); const [txt, setTxt] = useState(''); const [del, setDel] = useState(false)
  useEffect(() => {
    const word = personal.rotatingRoles[i]
    const t = setTimeout(() => {
      if (!del) { setTxt(word.slice(0, txt.length + 1)); if (txt.length + 1 === word.length) setTimeout(() => setDel(true), 900) }
      else { setTxt(word.slice(0, txt.length - 1)); if (txt.length <= 1) { setDel(false); setI((i + 1) % personal.rotatingRoles.length) } }
    }, del ? 40 : 90)
    return () => clearTimeout(t)
  }, [txt, del, i])
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 animate-blob rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 animate-blob rounded-full bg-violet-500/30 blur-3xl [animation-delay:-4s]" />
      <div className="relative mx-auto max-w-3xl animate-fadeUp">
        <p className="text-indigo-500">Hi, I'm</p>
        <h1 className="my-2 text-5xl font-bold sm:text-6xl">{personal.name}</h1>
        <p className="h-9 text-2xl font-medium text-indigo-500">{txt}<span className="animate-blink">|</span></p>
        <p className="mt-5 max-w-xl text-slate-600 dark:text-slate-400">{personal.shortBio}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="btn" onClick={() => setPage('Projects')}>View Projects</button>
          <a className="btn" href={personal.resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
          <div className="flex gap-1 text-indigo-500">
            {['github', 'linkedin'].map((s) => <a key={s} href={socials[s]} target="_blank" rel="noopener noreferrer" aria-label={s}
              className="rounded-full p-2 transition hover:-translate-y-1 hover:bg-indigo-500/10"><Icon n={s} className="h-6 w-6" /></a>)}
          </div>
        </div>
      </div>
    </section>)
}
