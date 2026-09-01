export default function Footer() {
  return (
    <footer className="footer">
      <a href="#hero" className="footer-logo">
        <span className="logo-share">SHARE</span>
        <span className="logo-it">IT</span>
      </a>

      <div className="footer-center">
        <p className="text footer-claim">
          Web app e agent AI su misura per il tuo business.
          <br />
          Powered by{' '}
          <strong className="link-accent">ShareIT Web Agency</strong>
        </p>
        <div className="footer-links">
          <a href="#servizi">Servizi</a>
          <span className="footer-policy-sep">·</span>
          <a href="#come-funziona">Metodo</a>
          <span className="footer-policy-sep">·</span>
          <a href="#portfolio">Progetti</a>
          <span className="footer-policy-sep">·</span>
          <a href="mailto:info@shareitwebagency.com">Contatti</a>
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
