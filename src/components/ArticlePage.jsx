import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { articles } from '../data/articles'
import { IconInitio, IconHorace, IconGuerlain, IconYSL } from './PerfumeIcon'
import Seo from './Seo'

const perfumeIcons = {
  initio: IconInitio,
  horace: IconHorace,
  guerlain: IconGuerlain,
  ysl: IconYSL,
}

function BodyBlock({ block, index }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          className={`article-body__paragraph${index === 0 ? ' article-body__paragraph--dropcap' : ''}`}
        >
          {block.content}
        </p>
      )
    case 'heading':
      return <h2 className="article-body__heading">{block.content}</h2>
    case 'perfume-heading': {
      const Icon = perfumeIcons[block.icon]
      return (
        <div className="perfume-heading">
          {Icon && <Icon className="perfume-heading__icon" />}
          <div className="perfume-heading__text">
            <span className="perfume-heading__name">{block.name}</span>
            <span className="perfume-heading__brand">{block.brand}</span>
          </div>
        </div>
      )
    }
    case 'quote':
      return (
        <blockquote className="article-body__quote">
          <p className="article-body__quote-text">« {block.content} »</p>
        </blockquote>
      )
    default:
      return null
  }
}

export default function ArticlePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = articles.find((a) => a.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!article) {
    return (
      <div className="article-page" style={{ textAlign: 'center', paddingTop: '8rem' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--muted)' }}>
          Article introuvable.
        </p>
      </div>
    )
  }

  return (
    <div className="article-page">
      <Seo
        title={article.title}
        description={article.excerpt}
        path={`/article/${article.slug}`}
        type="article"
      />
      <div className="article-page__back-wrapper">
        <button className="article-page__back" onClick={() => navigate('/chroniques')}>
          <span className="article-page__back-arrow">←</span>
          Toutes les chroniques
        </button>
      </div>

      <header className="article-header">
        <div className="article-header__meta">
          <span className="article-header__category">{article.category}</span>
          <span className="article-header__sep" />
          <span className="article-header__date">{article.date}</span>
          <span className="article-header__sep" />
          <span className="article-header__read-time">{article.readTime} min</span>
        </div>
        {article.author && (
          <p className="article-header__author">par {article.author}</p>
        )}

        <h1 className="article-header__title">{article.title}</h1>
        <p className="article-header__subtitle">{article.subtitle}</p>

        <div className="article-header__divider">
          <span className="article-header__diamond">◆ ◆ ◆</span>
        </div>
      </header>

      <div className="article-body">
        {article.body.map((block, i) => (
          <BodyBlock key={i} block={block} index={i} />
        ))}
      </div>
    </div>
  )
}
