export default function Footer() {
  return (
    <footer className="footer">
      <a href="#hero" className="footer-logo">
        <span className="logo-share">ART</span>
        <span className="logo-it">STORE</span>
      </a>

      <div className="footer-center">
        <p className="text" style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8, textAlign: 'center' }}>
          Il negozio online per fotografi e illustratori.
          <br />
          Powered by{' '}
          <strong style={{ color: 'var(--accent-color)' }}>ShareIT Web Agency</strong>
        </p>
        <div className="footer-links">
          <a href="#come-funziona">Come Funziona</a>
          <span className="footer-policy-sep">·</span>
          <a href="#prezzi">Prezzi</a>
          <span className="footer-policy-sep">·</span>
          <a href="#contatti">Candidati</a>
          <span className="footer-policy-sep">·</span>
          <a href="mailto:artstore@shareitwebagency.com">Contatti</a>
        </div>
      </div>

      <div className="footer-info">
        <p className="footer-copyright">
          © {new Date().getFullYear()} ShareIT Web Agency S.r.l. — P.IVA 12345678901
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
