import Icon from './Icon'
import Photo from './Photo'
import ThemeToggle from './ThemeToggle'
import { personal, socials } from '../data/portfolioData'
export const pages = [
  ['Home', 'home'], ['About', 'user'], ['Education', 'edu'], ['Skills', 'code'],
  ['Projects', 'grid'], ['Experience', 'brief'], ['Certificates', 'award'], ['Contact', 'mail'],
]
export default function Sidebar({ page, setPage, open, setOpen, dark, toggle }) {
  const idx = pages.findIndex(([p]) => p === page)
  return (<>
    <button onClick={() => setOpen(true)} aria-label="Open menu"
      className="fixed left-4 top-4 z-30 rounded-full bg-indigo-500 p-2.5 text-white shadow-lg lg:hidden"><Icon n="menu" /></button>
    {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-black/50 lg:hidden" />}
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-indigo-500/20 bg-white/90 p-5 backdrop-blur transition-transform duration-300 dark:bg-slate-900/90 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="mb-6 text-center">
        <div className="mx-auto h-24 w-24 animate-float rounded-full p-1 animate-glow"><Photo className="h-full w-full rounded-full" /></div>
        <h1 className="mt-3 font-semibold">{personal.name}</h1>
        <p className="text-xs text-indigo-500">{personal.role}</p>
      </div>
      <nav className="relative flex-1" aria-label="Main">
        <span className="absolute left-0 h-10 w-full rounded-xl bg-indigo-500/15 transition-transform duration-300" style={{ transform: `translateY(${idx * 44}px)` }} />
        {pages.map(([p, ic]) => (
          <button key={p} onClick={() => { setPage(p); setOpen(false) }} aria-current={page === p ? 'page' : undefined}
            className={`group relative mb-1 flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm transition hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${page === p ? 'font-semibold text-indigo-500' : 'text-slate-500 dark:text-slate-400'}`}>
            <span className="transition group-hover:-translate-y-0.5 group-hover:scale-110"><Icon n={ic} /></span>{p}
          </button>))}
      </nav>
      <div className="flex items-center justify-between border-t border-indigo-500/20 pt-4">
        <div className="flex gap-1 text-indigo-500">
          {['github', 'linkedin'].map((s) => <a key={s} href={socials[s]} target="_blank" rel="noopener noreferrer" aria-label={s}
            className="rounded-full p-2 transition hover:-translate-y-1 hover:bg-indigo-500/10"><Icon n={s} /></a>)}
        </div>
        <ThemeToggle dark={dark} toggle={toggle} />
      </div>
    </aside></>)
}
