export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__tagline">L'art de la fragrance comme langage</span>
        <span className="footer__copy">© {new Date().getFullYear()} - Tous droits réservés</span>
      </div>
    </footer>
  )
}
