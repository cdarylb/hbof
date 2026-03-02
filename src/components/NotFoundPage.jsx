import { Link } from 'react-router-dom'
import Seo from './Seo'

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <Seo title="Page introuvable" path="/404" />
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Page introuvable</h1>
      <p className="not-found__text">
        Cette page n'existe pas ou a été déplacée.
      </p>
      <Link to="/chroniques" className="not-found__link">
        ← Retour aux chroniques
      </Link>
    </div>
  )
}
