import React from 'react'

export default function CredibilityMeter({ score }) {
  const pct = (typeof score === 'number') ? Math.round(score * 100) : null
  const color = pct === null ? '#999' : (pct > 66 ? '#2ecc71' : (pct > 40 ? '#f1c40f' : '#e74c3c'))
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: 120, height: 16, background: '#eee', marginRight: 8 }}>
        <div style={{ width: pct ? `${pct}%` : '0%', height: '100%', background: color }} />
      </div>
      <div>{pct === null ? 'N/A' : `${pct}%`}</div>
    </div>
  )
}
