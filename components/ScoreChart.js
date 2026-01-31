import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function ScoreChart({ data = [] }) {
  const labels = data.map(d => d.title.slice(0, 20))
  const scores = data.map(d => (d.credibility_score || 0) * 100)
  const chartData = {
    labels,
    datasets: [{ label: 'Credibility (%)', data: scores, backgroundColor: '#3498db' }]
  }
  return <div style={{ maxWidth: 800 }}><Bar data={chartData} /></div>
}
