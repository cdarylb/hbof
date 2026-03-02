import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand">
          <span className="header__logo">Hbof.</span>
        </Link>
        <nav>
          <ul className="header__nav">
            <li>
              <Link to="/chroniques" className="header__nav-link">
                Chroniques
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="header__nav-link">
                À Propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
