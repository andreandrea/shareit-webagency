'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#come-funziona', label: 'Come Funziona' },
  { href: '#chi-siamo', label: 'Chi Siamo' },
  { href: '#portfolio', label: 'Store Attivi' },
  { href: '#prezzi', label: 'Prezzi' },
  { href: '#faq', label: 'FAQ' },
  { href: '#quiz', label: 'Quiz' },
  { href: '#contatti', label: 'Candidati' },
]

function FacebookIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}

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
  const toggle = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="header">
      {/* Icone social (sinistra) */}
      <div className="header-icons social-icons">
        <a href="https://instagram.com/shareitwebagency" className="header-icon-circle" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://linkedin.com/company/shareitwebagency" className="header-icon-circle" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://facebook.com/shareitwebagency" className="header-icon-circle" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
      </div>

      {/* Logo centrato (apre il menu) */}
      <div className="header-logo-container">
        <a href="#hero" className="header-logo" onClick={toggle} aria-label="Apri menu" id="header-logo-btn">
          <span className="logo-share">SHARE</span>
          <span className="logo-it">IT</span>
        </a>
      </div>

      {/* Icone contatti (destra) */}
      <div className="header-icons contact-icons">
        <a href="mailto:artstore@shareitwebagency.com" className="header-icon-circle" aria-label="Email" id="header-email-btn">
          <EmailIcon />
        </a>
        <a href="tel:+390291234567" className="header-icon-circle" aria-label="Telefono" id="header-phone-btn">
          <PhoneIcon />
        </a>
        <a href="#contatti" className="header-icon-circle" aria-label="Candidati" onClick={close} id="header-apply-btn">
          <ChatIcon />
        </a>
      </div>

      {/* Menu full-page overlay */}
      <nav className={`header-menu${isOpen ? ' active' : ''}`} aria-hidden={!isOpen}>
        <div className="menu-content">
          <ul className="menu-nav">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="menu-link" onClick={close}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* Icone mostrate nel menu solo su mobile */}
          <div className="menu-mobile-icons">
            <a href="https://instagram.com/shareitwebagency" className="header-icon-circle" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com/company/shareitwebagency" className="header-icon-circle" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:info@shareitwebagency.com" className="header-icon-circle" aria-label="Email">
              <EmailIcon />
            </a>
            <a href="tel:+390291234567" className="header-icon-circle" aria-label="Telefono">
              <PhoneIcon />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
