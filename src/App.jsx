import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ArticleList from './components/ArticleList'
import ChroniquesPage from './components/ChroniquesPage'
import AProposPage from './components/AProposPage'
import ArticlePage from './components/ArticlePage'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/chroniques" element={<ChroniquesPage />} />
            <Route path="/a-propos" element={<AProposPage />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
