// Trois silhouettes de flacons SVG, chacune inspirée du style de la marque

export function IconInitio({ className }) {
  // Large, bold, architectural — style Initio
  return (
    <svg
      className={className}
      viewBox="0 0 70 86"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bouchon large et plat */}
      <rect x="7" y="4" width="56" height="9" rx="1.5" />
      {/* Col court */}
      <rect x="25" y="13" width="20" height="8" />
      {/* Corps avec épaules angulaires */}
      <path d="M25 21 L8 30 L8 82 L62 82 L62 30 L45 21 Z" />
      {/* Ligne gravée centrale */}
      <line x1="8" y1="53" x2="62" y2="53" />
    </svg>
  )
}

export function IconHorace({ className }) {
  // Slim, moderne, fond arrondi — style Horace
  return (
    <svg
      className={className}
      viewBox="0 0 50 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bouchon ovale */}
      <ellipse cx="25" cy="9" rx="12" ry="8" />
      {/* Col */}
      <rect x="19" y="17" width="12" height="9" />
      {/* Corps fin, fond arrondi */}
      <path d="M13 26 L13 72 Q13 85 25 85 Q37 85 37 72 L37 26 Z" />
      {/* Détail discret */}
      <line x1="13" y1="47" x2="37" y2="47" strokeDasharray="2 3" />
    </svg>
  )
}

export function IconGuerlain({ className }) {
  // Classique, épaules courbes, proportions raffinées — style Guerlain
  return (
    <svg
      className={className}
      viewBox="0 0 56 92"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bouchon pyramidal */}
      <path d="M20 5 L36 5 L38 15 L18 15 Z" />
      {/* Col */}
      <rect x="21" y="15" width="14" height="8" />
      {/* Corps avec épaules courbes */}
      <path d="M21 23 C17 27 14 34 14 44 L14 80 Q14 88 28 88 Q42 88 42 80 L42 44 C42 34 39 27 35 23" />
      {/* Ligne de taille subtile */}
      <line x1="14" y1="65" x2="42" y2="65" />
    </svg>
  )
}
