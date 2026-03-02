import { articles } from '../data/articles'
import ArticleCard from './ArticleCard'
import Seo from './Seo'

export default function ArticleList() {
  return (
    <>
      <Seo path="/" />
      <section className="hero">
        <div className="hero__inner">
          <p className="hero__eyebrow">Chroniques Olfactives</p>
          <h1 className="hero__title">
            L'art du parfum,<br />
            <em>mis en mots</em>
          </h1>
          <p className="hero__subtitle">
            Explorations sensorielles, matières premières et mémoire olfactive.
          </p>
          <div className="hero__divider">
            <span className="hero__divider-ornament">◆ ◆ ◆</span>
          </div>
        </div>
      </section>

      <section className="article-list">
        <p className="article-list__count">
          {articles.length} {articles.length > 1 ? 'chroniques' : 'chronique'}
        </p>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>
    </>
  )
}
