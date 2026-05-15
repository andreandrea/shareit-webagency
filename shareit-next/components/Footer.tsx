export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="#" className="footer-icon-circle" aria-label="Facebook">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a href="#" className="footer-icon-circle" aria-label="Instagram">
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </svg>
        </a>
        <a href="#" className="footer-icon-circle" aria-label="LinkedIn">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>

      <div className="footer-logo-container">
        <span className="logo-share">SHARE</span>
        <span className="logo-it">IT</span>
      </div>

      <div className="footer-content">
        <p>© 2025 ShareIT. Tutti i diritti riservati.</p>
        <a href="mailto:info@shareitwebagency.com">info@shareitwebagency.com</a>
      </div>
    </footer>
  )
}
