import React from 'react'

export default function ClaimList({ claims = [] }) {
  return (
    <div>
      <h4>Claims</h4>
      <ul>
        {claims.map(c => (
          <li key={c.id} style={{ marginBottom: 8 }}>
            <div><strong>{c.claim_text}</strong></div>
            <div>Verdict: {c.verification_status} — Confidence: {c.confidence}</div>
            <div>{c.explanation}</div>
            <ul>
              {c.evidences.map(e => (
                <li key={e.id}><a href={e.evidence_url} target="_blank" rel="noreferrer">{e.source}</a>: {e.evidence_text}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
