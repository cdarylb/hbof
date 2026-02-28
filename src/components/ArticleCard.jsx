import { useNavigate } from 'react-router-dom'

export default function ArticleCard({ article }) {
  const navigate = useNavigate()

  return (
    <article
      className="article-card"
      onClick={() => navigate(`/article/${article.slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/article/${article.slug}`)}
    >
      <div className="article-card__side">
        <span className="article-card__category">{article.category}</span>
        <span className="article-card__date">{article.date}</span>
        <span className="article-card__read-time">{article.readTime} min de lecture</span>
      </div>

      <div className="article-card__body">
        <h2 className="article-card__title">{article.title}</h2>
        <p className="article-card__subtitle">{article.subtitle}</p>
        <p className="article-card__excerpt">{article.excerpt}</p>
      </div>

      <div className="article-card__cta">
        <span className="article-card__cta-label">Lire</span>
        <span className="article-card__arrow">→</span>
      </div>
    </article>
  )
}
