import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://hbof.me'
const SITE_NAME = 'Hbof'
const DEFAULT_DESCRIPTION =
  'Chroniques olfactives par Hector - explorations de parfums, de matières premières et de maisons.'
const DEFAULT_IMAGE = `${SITE_URL}/og-default.png`

export default function Seo({ title, description, path, type = 'website' }) {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} · Chroniques Olfactives`
  const metaDesc = description || DEFAULT_DESCRIPTION
  const canonicalUrl = path ? `${SITE_URL}${path}` : SITE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  )
}
