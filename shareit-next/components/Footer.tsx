export default function Footer() {
  return (
    <footer className="footer">
      <a href="#hero" className="footer-logo">
        <span className="logo-share">SHARE</span>
        <span className="logo-it">IT</span>
      </a>

      <div className="footer-info">
        <p className="footer-copyright">
          © {new Date().getFullYear()} ShareIT. Tutti i diritti riservati.
        </p>
        <nav className="footer-policy" aria-label="Link legali">
          <a href="/privacy-policy">Privacy Policy</a>
          <span className="footer-policy-sep">·</span>
          <a href="/cookie-policy">Cookie Policy</a>
          <span className="footer-policy-sep">·</span>
          <a href="/termini-di-servizio">Termini di Servizio</a>
        </nav>
      </div>
    </footer>
  )
}
