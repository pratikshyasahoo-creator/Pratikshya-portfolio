import Icon from './Icon'
export default function ThemeToggle({ dark, toggle }) {
  return <button onClick={toggle} aria-label="Toggle dark and light theme"
    className="rounded-full p-2 text-indigo-500 transition hover:rotate-45 hover:bg-indigo-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
    <Icon n={dark ? 'sun' : 'moon'} /></button>
}
