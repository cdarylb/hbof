import { articles } from '../data/articles'
import ArticleCard from './ArticleCard'
import Seo from './Seo'

export default function ChroniquesPage() {
  return (
    <>
      <Seo
        title="Toutes les chroniques"
        description="Retrouvez l'ensemble des chroniques olfactives publiées sur Hbof - explorations de parfums, de matières premières et de maisons."
        path="/chroniques"
      />
      <section className="chroniques-header">
        <div className="chroniques-header__inner">
          <p className="chroniques-header__eyebrow">Archives</p>
          <h1 className="chroniques-header__title">Chroniques</h1>
          <p className="chroniques-header__intro">
            Retrouvez ici l'ensemble des chroniques olfactives publiées sur ce carnet - explorations
            de parfums, de matières premières et de maisons.
          </p>
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
