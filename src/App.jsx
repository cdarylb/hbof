import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ArticleList from './components/ArticleList'
import ArticlePage from './components/ArticlePage'

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
