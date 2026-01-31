import React from 'react'
import CredibilityMeter from './CredibilityMeter'
import ClaimList from './ClaimList'

export default function ArticleCard({ article }) {
  const score = article.credibility_score

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12 }}>
      <h2><a href={article.url} target="_blank" rel="noreferrer">{article.title}</a></h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div><strong>Source:</strong> {article.source}</div>
        <div><CredibilityMeter score={score} /></div>
      </div>
      <p>{article.content ? article.content.slice(0, 300) + '...' : ''}</p>
      <ClaimList claims={article.claims || []} />
    </div>
  )
}
