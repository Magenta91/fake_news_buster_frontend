import React, { useEffect, useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import api from '../services/api'
import ScoreChart from '../components/ScoreChart'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const limit = 10

  const load = (p = 0) => {
    setLoading(true)
    api.get('/articles', { params: { limit, offset: p * limit } })
      .then(res => setArticles(res.data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load(page) }, [page])

  return (
    <main style={{ padding: 20 }}>
      <h1>Fake News Buster</h1>
      <ScoreChart data={articles.slice(0, 10)} />
      {loading && <p>Loading...</p>}
      {articles.map(a => (
        <ArticleCard key={a.id} article={a} />
      ))}
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0}>Prev</button>
        <div>Page {page + 1}</div>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </main>
  )
}
