import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import { pages } from './components/Sidebar'
const get = () => { try { return localStorage.getItem('theme') } catch { return null } }
export default function App() {
  const [page, setPage] = useState('Home'); const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => (get() ? get() === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches))
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {} }, [dark])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setPage(entry.target.dataset.page)
      })
    }, { rootMargin: '-20% 0px -65% 0px' })
    document.querySelectorAll('main [data-page]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  const navigateToPage = (nextPage) => {
    document.getElementById(nextPage.toLowerCase())?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    })
    setPage(nextPage)
  }
  const views = {
    Home: <Home setPage={navigateToPage} />,
    About: <About />,
    Education: <Education />,
    Skills: <Skills />,
    Projects: <Projects />,
    Experience: <Experience />,
    Certificates: <Certificates />,
    Contact: <Contact />,
  }
  return (<>
    <Sidebar page={page} setPage={navigateToPage} open={open} setOpen={setOpen} dark={dark} toggle={() => setDark(!dark)} />
    <main className="lg:ml-64">
      {pages.map(([name]) => (
        <div key={name.toLowerCase()} id={name.toLowerCase()} data-page={name} className="min-h-screen scroll-snap-start">
          {views[name]}
        </div>
      ))}
    </main>
  </>)
}
