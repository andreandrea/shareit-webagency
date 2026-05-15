'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#chi-siamo', label: 'Chi siamo' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#news', label: 'News' },
  { href: '#quiz', label: 'Quiz' },
  { href: '#contatti', label: 'Contatti' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <>
      <header className="header">
        <button
          className="logo-button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Apri menu"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 243.4 109.2"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              transform="matrix(1 0 0 1 61.6693 64.1804)"
              fill="#55C3EA"
              fontFamily="Orbitron"
              fontWeight="700"
              fontSize="28.4768px"
            >
              <tspan>Share</tspan>
              <tspan x="97" fontWeight="400">IT</tspan>
            </text>
          </svg>
        </button>
      </header>

      <div
        className={`menu-overlay${isOpen ? ' active' : ''}`}
        onClick={close}
      />
      <div className={`menu-background${isOpen ? ' active' : ''}`} />
      <nav
        className={`menu-container${isOpen ? ' active' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="menu-inner">
          <ul className="menu-list">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="menu-link" onClick={close}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
