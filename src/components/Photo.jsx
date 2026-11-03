import { useState } from 'react'
import { driveImg, personal } from '../data/portfolioData'
// Profile photo with gradient "PS" fallback if the image fails to load.
export default function Photo({ className = '' }) {
  const [bad, setBad] = useState(false)
  const initials = personal.name.split(' ').map((w) => w[0]).join('')
  return bad
    ? <div className={`flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white ${className}`}>{initials}</div>
    : <img src={driveImg(personal.photo)} alt={`${personal.name} profile`} onError={() => setBad(true)} className={`object-cover ${className}`} />
}
